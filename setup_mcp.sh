#!/bin/bash

# Setup script for MCP Servers (Docker Version)
# This script prepares the environment, builds Docker images, and sets up data directories.

set -e  # Exit on error

echo "=========================================="
echo "MCP Servers Setup (Docker)"
echo "=========================================="

# --- Configuration: NotebookLM ---
NBLM_TARGET_DIR="servers/roomi-notebooklm-mcp"
NBLM_IMAGE_NAME="roomi-notebooklm-mcp"
NBLM_DATA_DIR="ALL/ALLNBLM"



# 1. Check Prerequisites
echo "🔍 Checking prerequisites..."

if ! command -v docker &> /dev/null; then
    echo "❌ Error: Docker is not installed or not in PATH."
    exit 1
fi
echo "✓ Docker is available"
echo ""

# 2. Prepare Data Directories
echo "📁 Setting up data directories..."

# NotebookLM Data
if [ ! -d "$NBLM_DATA_DIR" ]; then
    mkdir -p "$NBLM_DATA_DIR"
    echo "✓ Created $NBLM_DATA_DIR"
fi
chmod 777 "$NBLM_DATA_DIR"
echo "✓ Permissions set for $NBLM_DATA_DIR"



# 3. Build NotebookLM Server
echo "------------------------------------------"
echo "📦 Building NotebookLM Server..."
echo "------------------------------------------"

if [ ! -d "$NBLM_TARGET_DIR" ]; then
    echo "❌ Error: Source code not found at $NBLM_TARGET_DIR"
    exit 1
fi

echo "  - Building application locally..."
cd "$NBLM_TARGET_DIR"
# Only run install/build if dist doesn't exist or forced (skipping to save time if already built, but let's be safe)
npm install && npm run build
if [ $? -ne 0 ]; then
    echo "❌ NBLM Build failed"
    exit 1
fi

echo "  - Building Docker image '$NBLM_IMAGE_NAME'..."
docker build -t "$NBLM_IMAGE_NAME" .
cd - > /dev/null
echo "✓ NotebookLM Server built successfully"
echo ""



# 5. Final Instructions
echo "=========================================="
echo "✅ Setup completed successfully!"
echo "=========================================="
echo ""
echo "Servers ready:"
echo "  1. NotebookLM MCP ($NBLM_IMAGE_NAME)"
echo ""
echo "Next steps:"
echo "1. Ensure .env contains necessary keys"
echo "2. Restart VS Code or Reload Window to start the MCP servers"
echo ""
