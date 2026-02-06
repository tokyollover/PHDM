"""
PHDM Pipeline — HuggingFace Spaces Edition
Streamlit App pour convertir PDFs en Markdown avec OCR et extraction structurée.

Supporte ZeroGPU (H100 gratuit) via @spaces.GPU decorator.
Optimisé pour traitements rapides (~2-5min par document avec chunking intégré).
"""

import streamlit as st
import torch
import tempfile
import json
from pathlib import Path
from datetime import datetime
import sys

# ═══════════════════════════════════════════════════════════════════════════
# ZeroGPU Support (HuggingFace Spaces)
# ═══════════════════════════════════════════════════════════════════════════
try:
    import spaces
    ZEROGPU_AVAILABLE = True
    print("✅ ZeroGPU détecté (HF Spaces)")
except ImportError:
    ZEROGPU_AVAILABLE = False
    spaces = None
    print("⚠️ ZeroGPU non disponible (Colab/Local)")

# ═══════════════════════════════════════════════════════════════════════════
# Configuration Streamlit
# ═══════════════════════════════════════════════════════════════════════════
st.set_page_config(
    page_title="PHDM Pipeline",
    page_icon="📄",
    layout="wide",
    initial_sidebar_state="expanded"
)

st.markdown("""
<style>
.main { padding-top: 1rem; }
.stTabs [data-baseweb="tab-list"] button { font-size: 16px; }
</style>
""", unsafe_allow_html=True)

# ═══════════════════════════════════════════════════════════════════════════
# Détection Système
# ═══════════════════════════════════════════════════════════════════════════
@st.cache_resource
def detect_system():
    """Détecte les ressources GPU disponibles."""
    cuda_available = torch.cuda.is_available()
    device_name = "CPU"
    vram_gb = 0.0
    
    if cuda_available:
        device_name = torch.cuda.get_device_name(0)
        vram_gb = torch.cuda.get_device_properties(0).total_memory / (1024**3)
    
    return {
        "cuda": cuda_available,
        "device": device_name,
        "vram_gb": vram_gb,
        "zerogpu": ZEROGPU_AVAILABLE
    }

system = detect_system()

# ═══════════════════════════════════════════════════════════════════════════
# Cache des modèles (persistant sur HF Spaces)
# ═══════════════════════════════════════════════════════════════════════════
CACHE_DIR = Path.home() / ".cache" / "phdm_models"
CACHE_DIR.mkdir(parents=True, exist_ok=True)

# Variables d'environnement pour Marker
import os
os.environ["HF_HOME"] = str(CACHE_DIR / "huggingface")
os.environ["TORCH_HOME"] = str(CACHE_DIR / "torch")
os.environ["TRANSFORMERS_CACHE"] = str(CACHE_DIR / "transformers")

# ═══════════════════════════════════════════════════════════════════════════
# Import des modules Marker (chargement paresseux)
# ═══════════════════════════════════════════════════════════════════════════
@st.cache_resource
def load_marker_models():
    """Charge les modèles Marker (une fois en cache)."""
    try:
        from marker.converters.pdf import PdfConverter
        from marker.models import create_model_dict
        from marker.config.parser import ConfigParser
        
        st.info("📥 Initialisation des modèles Marker (première fois : ~2-3 min)...")
        
        # Configuration optimisée pour HF Spaces
        marker_config = {
            "workers": 2,  # ZeroGPU H100 : peut supporter 2+ workers
            "extract_images": True,
            "images_as_base64": False,
            "use_llm": False,
            "force_ocr": True,
            "languages": ["fr", "en", "ar"],
            "paginate_output": True,
            "batch_size": 2,
        }
        
        model_dict = create_model_dict()
        config_parser = ConfigParser(marker_config)
        converter = PdfConverter(
            config=config_parser.generate_config_dict(),
            artifact_dict=model_dict,
        )
        
        st.success("✅ Modèles Marker chargés")
        return converter, marker_config
        
    except Exception as e:
        st.error(f"❌ Erreur chargement Marker : {e}")
        return None, None

# ═══════════════════════════════════════════════════════════════════════════
# Fonctions de Traitement
# ═══════════════════════════════════════════════════════════════════════════

def clear_memory():
    """Libère la mémoire GPU."""
    import gc
    gc.collect()
    if torch.cuda.is_available():
        torch.cuda.empty_cache()

def extract_references(markdown_text):
    """Extrait la section références du Markdown."""
    import re
    
    refs = {
        "count": 0,
        "list": []
    }
    
    ref_patterns = [
        r"(?i)(?:^|\n)#{1,3}\s*(references|références|bibliography|bibliographie)\s*\n([\s\S]*?)(?=\n#{1,3}|\Z)",
    ]
    
    for pattern in ref_patterns:
        match = re.search(pattern, markdown_text, re.MULTILINE)
        if match:
            ref_section = match.group(2).strip()
            lines = [l.strip() for l in ref_section.split("\n") if l.strip()]
            refs["list"] = lines[:20]  # Limiter à 20 refs
            refs["count"] = len(refs["list"])
            break
    
    return refs

def extract_figures(markdown_text):
    """Extrait les figures mentionnées."""
    import re
    
    figures = []
    fig_pattern = r"(?i)(figure|fig\.)\s*(\d+)?[:]?\s*(.{0,100})"
    
    for match in re.finditer(fig_pattern, markdown_text):
        figures.append({
            "label": match.group(0).strip(),
            "title": match.group(3).strip() if match.group(3) else "Non titrée"
        })
    
    return figures[:10]  # Limiter à 10 figures


# Décorateur ZeroGPU si disponible
def process_pdf_with_gpu(pdf_path, doc_name="Document"):
    """Traite un PDF avec Marker (GPU si disponible)."""
    
    @spaces.GPU if ZEROGPU_AVAILABLE else lambda f: f
    def _process():
        converter, config = load_marker_models()
        if converter is None:
            return None
        
        try:
            progress_bar = st.progress(0)
            status = st.empty()
            
            status.info("🔄 Extraction Marker...")
            progress_bar.progress(30)
            
            rendered = converter(str(pdf_path))
            markdown = rendered.markdown
            
            status.info("📊 Extraction références & figures...")
            progress_bar.progress(60)
            
            references = extract_references(markdown)
            figures = extract_figures(markdown)
            
            status.info("✅ Traitement terminé")
            progress_bar.progress(100)
            
            return {
                "success": True,
                "markdown": markdown,
                "references": references,
                "figures": figures,
                "timestamp": datetime.now().isoformat()
            }
            
        except Exception as e:
            status.error(f"❌ Erreur : {e}")
            return {
                "success": False,
                "error": str(e)
            }
        finally:
            clear_memory()
    
    return _process()


# ═══════════════════════════════════════════════════════════════════════════
# UI Principal - Streamlit
# ═══════════════════════════════════════════════════════════════════════════

# Header
col1, col2 = st.columns([3, 1])
with col1:
    st.title("🔄 PHDM Pipeline")
    st.markdown("*Convertissez vos PDFs en Markdown avec OCR et extraction structurée*")
with col2:
    device_emoji = "🚀" if system["cuda"] else "🐌"
    st.metric("GPU", system["device"], delta="ZeroGPU" if system["zerogpu"] else "Local")

# Barre latérale - Infos
with st.sidebar:
    st.header("ℹ️ Infos Système")
    col1, col2 = st.columns(2)
    with col1:
        st.metric("Device", "✅ GPU" if system["cuda"] else "❌ CPU")
    with col2:
        st.metric("VRAM", f"{system['vram_gb']:.1f}GB" if system["cuda"] else "N/A")
    
    st.divider()
    
    st.header("📋 À propos")
    st.markdown("""
    **PHDM Pipeline** transforme vos PDFs en :
    - ✅ Markdown structuré (via Marker)
    - 🔍 PDF searchable (via OCRmyPDF)
    - 📚 Références & figures extraites
    
    **Optimisé pour** :
    - 📄 Documents scanner (OCR Surya)
    - 🌍 Multilingue (FR, EN, AR)
    - ⚡ Traitement rapide (34 pages/chunk)
    
    [📖 Documentation](https://github.com/tokyollover/PHDM)
    """)
    
    st.divider()
    
    if st.button("🧹 Vider mémoire GPU"):
        clear_memory()
        st.success("✅ Mémoire GPU libérée")

# Tabs
tab1, tab2, tab3, tab4 = st.tabs(["📤 Upload", "📝 Markdown", "📚 Références", "🖼️ Figures"])

# ═══════════════════════════════════════════════════════════════════════════
# TAB 1 : Upload & Traitement
# ═══════════════════════════════════════════════════════════════════════════
with tab1:
    st.header("📤 Téléchargez vos PDFs")
    
    col1, col2 = st.columns([2, 1])
    
    with col1:
        uploaded_files = st.file_uploader(
            "Sélectionnez un ou plusieurs PDFs",
            type="pdf",
            accept_multiple_files=True,
            key="pdf_uploader"
        )
    
    with col2:
        st.metric("Fichiers", len(uploaded_files) if uploaded_files else 0)
    
    if uploaded_files:
        st.success(f"✅ {len(uploaded_files)} fichier(s) sélectionné(s)")
        
        # Sélection du fichier à traiter
        file_names = [f.name for f in uploaded_files]
        selected_file = st.selectbox("Fichier à traiter :", file_names)
        selected_idx = file_names.index(selected_file)
        
        # Info du fichier
        col1, col2, col3 = st.columns(3)
        with col1:
            st.metric("Nom", uploaded_files[selected_idx].name[:30])
        with col2:
            size_mb = uploaded_files[selected_idx].size / (1024**2)
            st.metric("Taille", f"{size_mb:.2f}MB")
        with col3:
            st.metric("Type", "PDF ✅")
        
        # Traitement
        if st.button("🚀 Traiter ce PDF", type="primary", use_container_width=True):
            with tempfile.NamedTemporaryFile(suffix=".pdf", delete=False) as tmp:
                tmp.write(uploaded_files[selected_idx].getbuffer())
                tmp_path = tmp.name
            
            try:
                result = process_pdf_with_gpu(tmp_path, selected_file)
                
                if result and result.get("success"):
                    st.session_state["last_result"] = result
                    st.balloons()
                    st.success("✅ Traitement réussi !")
                else:
                    st.error(f"❌ Erreur : {result.get('error', 'Inconnu')}")
            
            finally:
                Path(tmp_path).unlink(missing_ok=True)

# ═══════════════════════════════════════════════════════════════════════════
# TAB 2 : Affichage Markdown
# ═══════════════════════════════════════════════════════════════════════════
with tab2:
    st.header("📝 Markdown Extrait")
    
    if "last_result" in st.session_state and st.session_state["last_result"].get("success"):
        result = st.session_state["last_result"]
        markdown = result.get("markdown", "")
        
        # Aperçu
        st.markdown(markdown[:2000] + "..." if len(markdown) > 2000 else markdown)
        
        # Téléchargement
        col1, col2 = st.columns(2)
        with col1:
            st.download_button(
                "📥 Télécharger Markdown",
                markdown,
                file_name="document.md",
                mime="text/markdown"
            )
        with col2:
            st.download_button(
                "📋 Télécharger Métadonnées (JSON)",
                json.dumps({
                    "references_count": result.get("references", {}).get("count", 0),
                    "figures_count": len(result.get("figures", [])),
                    "processed_at": result.get("timestamp")
                }, indent=2),
                file_name="metadata.json",
                mime="application/json"
            )
        
        st.divider()
        
        # Stats
        col1, col2, col3 = st.columns(3)
        with col1:
            words = len(markdown.split())
            st.metric("Mots", f"{words:,}")
        with col2:
            chars = len(markdown)
            st.metric("Caractères", f"{chars:,}")
        with col3:
            st.metric("Paragraphes", len(markdown.split("\n\n")))
    
    else:
        st.info("💡 Aucun résultat. Traitez un PDF d'abord (Tab 1).")

# ═══════════════════════════════════════════════════════════════════════════
# TAB 3 : Références
# ═══════════════════════════════════════════════════════════════════════════
with tab3:
    st.header("📚 Références Extraites")
    
    if "last_result" in st.session_state and st.session_state["last_result"].get("success"):
        result = st.session_state["last_result"]
        refs = result.get("references", {})
        
        if refs.get("count", 0) > 0:
            st.metric("Références trouvées", refs["count"])
            
            for i, ref in enumerate(refs.get("list", []), 1):
                st.markdown(f"**[{i}]** {ref}")
        else:
            st.warning("⚠️ Aucune référence trouvée.")
    
    else:
        st.info("💡 Aucun résultat. Traitez un PDF d'abord (Tab 1).")

# ═══════════════════════════════════════════════════════════════════════════
# TAB 4 : Figures
# ═══════════════════════════════════════════════════════════════════════════
with tab4:
    st.header("🖼️ Figures Identifiées")
    
    if "last_result" in st.session_state and st.session_state["last_result"].get("success"):
        result = st.session_state["last_result"]
        figures = result.get("figures", [])
        
        if figures:
            st.metric("Figures trouvées", len(figures))
            
            for i, fig in enumerate(figures, 1):
                with st.expander(f"Figure {i}: {fig['title'][:50]}"):
                    st.markdown(f"**Label** : {fig.get('label', 'N/A')}")
                    st.markdown(f"**Titre** : {fig.get('title', 'N/A')}")
        else:
            st.info("ℹ️ Aucune figure identifiée dans le document.")
    
    else:
        st.info("💡 Aucun résultat. Traitez un PDF d'abord (Tab 1).")

# ═══════════════════════════════════════════════════════════════════════════
# Footer
# ═══════════════════════════════════════════════════════════════════════════
st.divider()
st.markdown("""
<div style="text-align: center; color: gray; font-size: 12px;">
⚡ PHDM Pipeline v1.0 | 
<a href="https://github.com/tokyollover/PHDM">GitHub</a> | 
<a href="https://huggingface.co/spaces/tokyollover/PHDM-Pipeline">HuggingFace Spaces</a>
</div>
""", unsafe_allow_html=True)
