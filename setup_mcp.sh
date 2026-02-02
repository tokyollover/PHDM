#!/bin/bash

# Setup script for NotebookLM MCP Server (Docker Version)
# This script prepares the environment, builds the Docker image, and sets up data directories.
# The MCP server source code is now embedded in servers/roomi-notebooklm-mcp (no git clone needed).

set -e  # Exit on error

echo "=========================================="
echo "NotebookLM MCP Server Setup (Docker)"
echo "=========================================="

# Configuration
TARGET_DIR="servers/roomi-notebooklm-mcp"
IMAGE_NAME="roomi-notebooklm-mcp"
DATA_DIR="ALL/ALLNBLM"

# 1. Check Prerequisites
echo "🔍 Checking prerequisites..."

if ! command -v docker &> /dev/null; then
    echo "❌ Error: Docker is not installed or not in PATH."
    exit 1
fi
echo "✓ Docker is available"

# 2. Prepare Data Directory (Persistence)
echo "📁 Setting up data directory..."
if [ ! -d "$DATA_DIR" ]; then
    mkdir -p "$DATA_DIR"
    echo "✓ Created $DATA_DIR"
fi

# Set permissions for the container user (UID 999 is typical for node/notebooklm user in container)
# We use 777 to avoid permission issues with bind mounts in various environments (DevContainers, Linux, etc.)
chmod 777 "$DATA_DIR"
echo "✓ Permissions set for $DATA_DIR"
echo ""

# 3. Verify source code exists (embedded in repo, no git clone needed)
echo "📂 Verifying MCP server source code..."
if [ ! -d "$TARGET_DIR" ]; then
    echo "❌ Error: MCP server source code not found at $TARGET_DIR"
    echo "   The source code should be embedded in the repository."
    exit 1
fi

if [ ! -f "$TARGET_DIR/package.json" ]; then
    echo "❌ Error: Invalid MCP server directory - package.json not found"
    exit 1
fi

echo "✓ MCP server source code found at $TARGET_DIR"
echo ""

# 4. Build Application
echo "🔨 Building application..."
cd "$TARGET_DIR"

# Install dependencies
echo "  - Installing dependencies..."
npm install 

# Build
echo "  - Compiling TypeScript..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi
cd - > /dev/null
echo "✓ Application built successfully"
echo ""

# 5. Build Docker Image
echo "🐳 Building Docker image '$IMAGE_NAME'..."
echo "⏳ This may take a few minutes..."

cd "$TARGET_DIR"
docker build -t "$IMAGE_NAME" .

if [ $? -eq 0 ]; then
    echo "✓ Docker image built successfully"
else
    echo "❌ Docker build failed"
    exit 1
fi
cd - > /dev/null
echo ""

# 6. Final Instructions
echo "=========================================="
echo "✅ Setup completed successfully!"
echo "=========================================="
echo ""
echo "Available MCP tools include:"
echo "  - ask_question: Query NotebookLM with session support"
echo "  - get_source_text: Extract full text from sources"
echo "  - list_content: List sources and generated content"
echo "  - add_source: Add documents to notebook"
echo "  - generate_content: Create audio, video, presentations..."
echo ""
echo "Next steps:"
echo "1. Ensure .env contains your NOTEBOOKLM_COOKIE (optional if using VNC auth)"
echo "2. Restart VS Code or Reload Window to start the MCP server"
echo "3. Authenticate via VNC: http://localhost:6080/vnc.html"
echo ""
echo "For usage instructions, open NOTEBOOKLM_TOOLS_GUIDE.md"
