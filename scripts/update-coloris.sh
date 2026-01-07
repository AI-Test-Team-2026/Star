#!/bin/bash

# Script to update Coloris library from CDN to local assets
# This script requires internet connection

set -e

echo "========================================="
echo "Coloris Library Update Script"
echo "========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we have internet connection
echo -n "Checking internet connection... "
if ! ping -c 1 8.8.8.8 &> /dev/null; then
    echo -e "${RED}FAILED${NC}"
    echo "Error: No internet connection detected."
    echo "This script requires internet access to download the Coloris library."
    exit 1
fi
echo -e "${GREEN}OK${NC}"

# Get the script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
COLORIS_DIR="$PROJECT_DIR/assets/coloris/dist"

# Create directory if it doesn't exist
mkdir -p "$COLORIS_DIR"

# Backup existing files if they exist
if [ -f "$COLORIS_DIR/coloris.min.css" ]; then
    echo "Backing up existing coloris.min.css..."
    cp "$COLORIS_DIR/coloris.min.css" "$COLORIS_DIR/coloris.min.css.backup"
fi

if [ -f "$COLORIS_DIR/coloris.min.js" ]; then
    echo "Backing up existing coloris.min.js..."
    cp "$COLORIS_DIR/coloris.min.js" "$COLORIS_DIR/coloris.min.js.backup"
fi

# Download Coloris CSS
echo ""
echo "Downloading Coloris CSS..."
if curl -f -L "https://cdn.jsdelivr.net/gh/mdbassit/Coloris@latest/dist/coloris.min.css" \
    -o "$COLORIS_DIR/coloris.min.css"; then
    echo -e "${GREEN}✓${NC} Successfully downloaded coloris.min.css"
else
    echo -e "${RED}✗${NC} Failed to download coloris.min.css"
    if [ -f "$COLORIS_DIR/coloris.min.css.backup" ]; then
        echo "Restoring backup..."
        mv "$COLORIS_DIR/coloris.min.css.backup" "$COLORIS_DIR/coloris.min.css"
    fi
    exit 1
fi

# Download Coloris JS
echo ""
echo "Downloading Coloris JavaScript..."
if curl -f -L "https://cdn.jsdelivr.net/gh/mdbassit/Coloris@latest/dist/coloris.min.js" \
    -o "$COLORIS_DIR/coloris.min.js"; then
    echo -e "${GREEN}✓${NC} Successfully downloaded coloris.min.js"
else
    echo -e "${RED}✗${NC} Failed to download coloris.min.js"
    if [ -f "$COLORIS_DIR/coloris.min.js.backup" ]; then
        echo "Restoring backup..."
        mv "$COLORIS_DIR/coloris.min.js.backup" "$COLORIS_DIR/coloris.min.js"
    fi
    exit 1
fi

# Clean up backup files
if [ -f "$COLORIS_DIR/coloris.min.css.backup" ]; then
    rm "$COLORIS_DIR/coloris.min.css.backup"
fi
if [ -f "$COLORIS_DIR/coloris.min.js.backup" ]; then
    rm "$COLORIS_DIR/coloris.min.js.backup"
fi

# Verify downloads
echo ""
echo "Verifying downloads..."
CSS_SIZE=$(stat -f%z "$COLORIS_DIR/coloris.min.css" 2>/dev/null || stat -c%s "$COLORIS_DIR/coloris.min.css" 2>/dev/null)
JS_SIZE=$(stat -f%z "$COLORIS_DIR/coloris.min.js" 2>/dev/null || stat -c%s "$COLORIS_DIR/coloris.min.js" 2>/dev/null)

if [ "$CSS_SIZE" -lt 1000 ]; then
    echo -e "${YELLOW}⚠${NC} Warning: coloris.min.css seems small ($CSS_SIZE bytes)"
    echo "   This might be a placeholder file. Verify the content manually."
fi

if [ "$JS_SIZE" -lt 5000 ]; then
    echo -e "${YELLOW}⚠${NC} Warning: coloris.min.js seems small ($JS_SIZE bytes)"
    echo "   This might be a placeholder file. Verify the content manually."
fi

echo ""
echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}Coloris library updated successfully!${NC}"
echo -e "${GREEN}=========================================${NC}"
echo ""
echo "Files location: $COLORIS_DIR"
echo "CSS size: $CSS_SIZE bytes"
echo "JS size: $JS_SIZE bytes"
echo ""
echo "Next steps:"
echo "1. Test the application to ensure the color picker works"
echo "2. Verify offline operation by disconnecting from internet"
echo "3. Check browser console for any errors"
echo ""
