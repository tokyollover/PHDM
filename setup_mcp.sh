#!/bin/bash

# Setup script for NotebookLM MCP Server (Docker Version)
# This script prepares the environment, builds the Docker image, and sets up data directories.

set -e  # Exit on error

echo "=========================================="
echo "NotebookLM MCP Server Setup (Docker)"
echo "=========================================="

# Configuration
TARGET_DIR="servers/roomi-notebooklm-mcp"
REPO_URL="https://github.com/roomi-fields/notebooklm-mcp.git"
IMAGE_NAME="roomi-notebooklm-mcp"
DATA_DIR="data"

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

# 3. Clone Repository
echo "📥 Cloning repository..."
mkdir -p servers

if [ -d "$TARGET_DIR" ]; then
    echo "⚠️  Directory $TARGET_DIR already exists."
    # We update it instead of removing to save time if valid
    echo "🔄 Updating existing repository..."
    cd "$TARGET_DIR"
    git pull
    cd - > /dev/null
else
    git clone "$REPO_URL" "$TARGET_DIR"
    echo "✓ Cloned $REPO_URL"
fi
echo ""

# 3.5 Build Application (Required for Dockerfile which copies dist/)
echo "🔨 Building application locally..."
cd "$TARGET_DIR"

# Install dependencies
echo "  - Installing dependencies..."
npm install 

# Build
echo "  - Compiling TypeScript..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Local build failed"
    exit 1
fi
cd - > /dev/null
echo "✓ Application built successfully"
echo ""

# 4. Build Docker Image
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

# 5. Final Instructions
echo "=========================================="
echo "✅ Setup completed successfully!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Ensure .env contains your NOTEBOOKLM_COOKIE (optional if using VNC auth)"
echo "2. Restart VS Code or Reload Window to start the MCP server"
echo "3. Authenticate via VNC: http://localhost:6080/vnc.html"
echo ""
echo "For usage instructions, open NOTEBOOKLM_TOOLS_GUIDE.md"
