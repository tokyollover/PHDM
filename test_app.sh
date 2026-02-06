#!/bin/bash
# Script de test local pour PHDM Pipeline App
# Utilisation : ./test_app.sh

set -e

echo "🚀 Test PHDM Pipeline App (Local)"
echo "=================================="

# Vérifier Python
echo "✓ Python:"
python --version

# Vérifier pip
echo "✓ Pip:"
pip --version

# Check PyTorch CUDA
echo "✓ PyTorch & CUDA:"
python -c "import torch; print(f'  - PyTorch: {torch.__version__}'); print(f'  - CUDA Available: {torch.cuda.is_available()}'); print(f'  - Device: {torch.cuda.get_device_name(0) if torch.cuda.is_available() else \"CPU\"}')"

# Check Streamlit
echo "✓ Streamlit:"
python -c "import streamlit; print(f'  - Version: {streamlit.__version__}')"

# Check Marker
echo "✓ Marker:"
python -c "from marker.converters.pdf import PdfConverter; print('  - Installation OK')"

echo ""
echo "🎯 Lancer l'app :"
echo "  streamlit run app.py"
echo ""
echo "  Accès : http://localhost:8501"
echo ""
echo "📝 Dépannage :"
echo "  - Si erreur GPU : vérifier PyTorch + CUDA"
echo "  - Si import error : pip install -r requirements.txt"
echo ""
