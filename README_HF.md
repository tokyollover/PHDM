# 🎯 PHDM Pipeline — HuggingFace Spaces Edition

Configuration et déploiement de l'application PHDM sur HuggingFace Spaces avec support **ZeroGPU (H100 gratuit)**.

## 📋 Table des Matières

- [Installation](#installation)
- [Configuration HF Spaces](#configuration-hf-spaces)
- [Utilisation](#utilisation)
- [Performance](#performance)
- [Dépannage](#dépannage)

## 🔧 Installation

### Prérequis Locaux (Optionnel - pour tester avant de déployer)

```bash
# Clone le repository
git clone https://github.com/tokyollover/PHDM.git
cd PHDM

# Environnement virtuel
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Dépendances
pip install -r requirements.txt

# Lancer localement
streamlit run app.py
```

### Déploiement sur HuggingFace Spaces

#### Étape 1 : Créer un Space

1. Aller sur https://huggingface.co/spaces
2. Cliquer **"Create new Space"**
3. Configuration :
   - **Nom** : `PHDM-Pipeline`
   - **License** : Apache 2.0
   - **Space SDK** : **Streamlit**
   - **Visibility** : Public (ou Private si besoin)

#### Étape 2 : Pousser le Code

```bash
# Dans le répertoire du space (cloné automatiquement)
git clone https://huggingface.co/spaces/[USERNAME]/PHDM-Pipeline
cd PHDM-Pipeline

# Copier les fichiers
cp /path/to/app.py .
cp /path/to/requirements.txt .

# Commit et push
git add app.py requirements.txt
git commit -m "Initial: Streamlit app with Marker pipeline"
git push
```

#### Étape 3 : Configurer ZeroGPU

⚠️ **IMPORTANT** : Sans celà, le space tournera sur CPU uniquement !

1. Dans le **Space Settings** (gear icon)
2. Sous **Hardware** → Sélectionner **"ZeroGPU"**
3. Cliquer **"Save"**

Le space **redémarrera automatiquement** avec H100 GPU disponible.

## ✨ Configuration HF Spaces

### Persistent Storage (Optionnel)

Pour garder le cache des modèles entre les redémarrages :

1. **Space Settings** → **Storage**
2. **Toggle "Persistent storage"** → Sélectionner **"50GB"**
3. Les modèles seront sauvegardés dans `/data/`

**Note** : Économise ~5 min la première fois que l'app est ouverte.

### Secrets (Optionnel)

Si vous aviez besoin d'API Keys :

1. **Space Settings** → **Repository secrets**
2. Ajouter `GOOGLE_API_KEY` ou autres si nécessaire

## 🚀 Utilisation

### Interface Web

```
1. 📤 TAB Upload
   └─ Téléchargez vos PDFs
   └─ Sélectionnez le fichier à traiter
   └─ Cliquez "🚀 Traiter ce PDF"

2. 📝 TAB Markdown
   └─ Visualisez le contenu extrait
   └─ Téléchargez le markdown (.md)
   └─ Téléchargez les métadonnées (.json)

3. 📚 TAB Références
   └─ Consultez les références extraites

4. 🖼️ TAB Figures
   └─ Consultez les figures identifiées
```

### Workflow Typique

```
1. Ouvrir le Space : https://huggingface.co/spaces/[USERNAME]/PHDM-Pipeline
2. Télécharger un PDF (~30 pages max pour démo rapide)
3. Attendre la conversion (~2-5 min)
4. Explorer les résultats dans les tabs
5. Télécharger le markdown
```

## ⚡ Performance

### H100 vs T4 vs CPU

| Métrique | H100 (HF ZeroGPU) | T4 (Colab) | CPU (Local) |
|----------|------|--------|----|
| **Modèles Marker** | ~1 min | ~2-3 min | ~15 min |
| **34 pages** | ~2-3 min | ~4-6 min | ~20 min |
| **Vitesse relative** | 🔥 3x rapide | Baseline | 1/3 vitesse |
| **VRAM** | 80GB | 15GB | - |
| **Coût** | 🆓 Gratuit | 🆓 Gratuit | 💰 Local |

### Limitations ZeroGPU

- **Timeout** : 30s max par appel GPU
  - ✅ OK pour 34-page chunks + Marker
  - ❌ PAS OK pour PDFs > 100 pages sans chunking
  
- **Solution** : Le code fait déjà du chunking (34 pages)

## 🐛 Dépannage

### ❌ Erreur : "No CUDA device found"

**Cause** : Space est sur CPU au lieu de GPU

**Solution** :
```
Settings → Hardware → Sélectionner "ZeroGPU" → Save
(attendre 1-2 min le redémarrage)
```

### ❌ Erreur : "OOM (Out of Memory)"

**Cause** : PDF trop volumineux

**Solution** :
- Réduire la taille du PDF
- Ou augmenter le chunking dans `app.py` (réduire `CHUNK_SIZE_PAGES`)

### ⏳ Première exécution très lente (~5 min)

**Normal** : Les modèles Marker (~3GB) se téléchargent une fois

**Optimisation** : Activer **Persistent Storage** (cf. ci-dessus)

### 🔴 Space Crashed

**Cause** : Modèles trop volumineux pour la mémoire GPU

**Solution** :
1. Redémarrer via **Space Settings** → **"Restart the Space"**
2. Tester avec un PDF plus petit

## 📊 Monitoring

### Vérifier les Logs

Dans le Space Settings :
- **Logs** : Voir les erreurs et sorties en temps réel

### Vérifier l'Utilisation GPU

L'app affiche dans la barre latérale :
```
🖥️ Infos Système
├─ Device : GPU ✅
└─ VRAM : 80.0GB
```

## 🔗 Ressources

- **Repository** : https://github.com/tokyollover/PHDM
- **Branche** : `PHDMWNB`
- **Issues** : Signalez les bugs sur GitHub
- **Discussions** : Questions sur HF Spaces Community

## 📝 Notes

- L'app est **stateless** (chaque session = nouvelle)
- Les PDFs ne sont pas stockés après traitement
- Le cache des modèles persiste (avec Persistent Storage)
- Pas d'authentification requise (public)

## 🤝 Contributions

Améliorations bienvenues ! Proposez une PR sur `PHDMWNB` avec :
- Description du changement
- Tests locaux effectués
- Benchmark performance si applicable

---

**Dernière mise à jour** : 2026-02-06  
**Version** : 1.0  
**Auteur** : @tokyollover
