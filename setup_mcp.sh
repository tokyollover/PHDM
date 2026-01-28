#!/bin/bash

# Setup script for NotebookLM MCP Server
# This script clones the notebooklm-mcp repository, installs dependencies, and builds the server

set -e  # Exit on error

echo "=========================================="
echo "NotebookLM MCP Server Setup"
echo "=========================================="

# Define the target directory
TARGET_DIR="servers/notebooklm-mcp"
REPO_URL="https://github.com/PleasePrompto/notebooklm-mcp.git"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✓ Node.js version: $(node --version)"
echo "✓ npm version: $(npm --version)"
echo ""

# Create servers directory if it doesn't exist
echo "📁 Creating servers directory..."
mkdir -p servers

# Check if target directory already exists
if [ -d "$TARGET_DIR" ]; then
    echo "⚠️  Directory $TARGET_DIR already exists."
    read -p "Do you want to remove it and clone fresh? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "🗑️  Removing existing directory..."
        rm -rf "$TARGET_DIR"
    else
        echo "❌ Setup cancelled."
        exit 1
    fi
fi

# Clone the repository
echo "📥 Cloning notebooklm-mcp repository..."
git clone "$REPO_URL" "$TARGET_DIR"
echo "✓ Repository cloned successfully"
echo ""

# Navigate to the cloned directory
cd "$TARGET_DIR"

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo "✓ Dependencies installed successfully"
echo ""

# Build the project
echo "🔨 Building the project..."
npm run build
echo "✓ Project built successfully"
echo ""

# Return to original directory
cd - > /dev/null

echo "=========================================="
echo "✅ Setup completed successfully!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Configure .vscode/mcp.json (see documentation)"
echo "2. Set NOTEBOOKLM_COOKIE environment variable"
echo "3. Restart your IDE to load the MCP server"
echo ""
echo "For detailed instructions, see MCP_SETUP.md"
