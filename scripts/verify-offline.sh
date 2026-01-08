#!/bin/bash

# Script to verify no external CDN or network dependencies
# Checks for common CDN patterns and HTTP/HTTPS URLs in code

set -e

echo "========================================="
echo "Offline Mode Verification Script"
echo "========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get the script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

echo "Checking for external dependencies..."
echo ""

# Initialize counters
TOTAL_ISSUES=0

# Check for CDN URLs in PHP files
echo "1. Checking PHP files for CDN references..."
CDN_PATTERNS="cdn\.jsdelivr|cdnjs\.cloudflare|unpkg\.com|fonts\.googleapis|ajax\.googleapis|maxcdn|bootstrapcdn|code\.jquery"

if grep -r -E "$CDN_PATTERNS" application/ --include="*.php" 2>/dev/null | grep -v "PLACEHOLDER\|UPDATE\|NOTE:" ; then
    echo -e "${RED}✗ Found CDN references in PHP files${NC}"
    TOTAL_ISSUES=$((TOTAL_ISSUES + 1))
else
    echo -e "${GREEN}✓ No CDN references found in PHP files${NC}"
fi
echo ""

# Check for HTTP/HTTPS URLs (excluding localhost and comments)
echo "2. Checking for external HTTP/HTTPS URLs..."
if grep -r -E "https?://" application/ --include="*.php" 2>/dev/null | \
   grep -v "localhost\|127\.0\.0\.1\|base_url\|//.*http\|PLACEHOLDER\|UPDATE\|NOTE:\|example\.com" ; then
    echo -e "${YELLOW}⚠ Found HTTP/HTTPS URLs (review manually)${NC}"
    echo "   Note: Some URLs might be comments or configuration examples"
    TOTAL_ISSUES=$((TOTAL_ISSUES + 1))
else
    echo -e "${GREEN}✓ No suspicious external URLs found${NC}"
fi
echo ""

# Check for curl, file_get_contents with URLs
echo "3. Checking for HTTP client usage..."
if grep -r -E "curl_exec|file_get_contents.*http|fsockopen" application/ --include="*.php" 2>/dev/null | \
   grep -v "base_url\|localhost\|127\.0\.0\.1\|PLACEHOLDER" ; then
    echo -e "${YELLOW}⚠ Found HTTP client calls (review manually)${NC}"
    echo "   Note: Some calls might be to local resources"
else
    echo -e "${GREEN}✓ No HTTP client calls found${NC}"
fi
echo ""

# Check JavaScript files
echo "4. Checking JavaScript files..."
if grep -r -E "$CDN_PATTERNS" assets/ --include="*.js" --exclude="*.min.js" 2>/dev/null | \
   grep -v "PLACEHOLDER\|UPDATE\|NOTE:" ; then
    echo -e "${RED}✗ Found CDN references in JavaScript files${NC}"
    TOTAL_ISSUES=$((TOTAL_ISSUES + 1))
else
    echo -e "${GREEN}✓ No CDN references in JavaScript files${NC}"
fi
echo ""

# Check CSS files
echo "5. Checking CSS files for external resources..."
if grep -r -E "url\(.*https?://|@import.*https?://" assets/ --include="*.css" --exclude="*.min.css" 2>/dev/null | \
   grep -v "PLACEHOLDER\|UPDATE\|NOTE:\|localhost" ; then
    echo -e "${YELLOW}⚠ Found external resources in CSS (review manually)${NC}"
else
    echo -e "${GREEN}✓ No external resources in CSS files${NC}"
fi
echo ""

# Verify Coloris files exist
echo "6. Checking vendored libraries..."
if [ ! -f "assets/coloris/dist/coloris.min.css" ]; then
    echo -e "${RED}✗ Coloris CSS not found${NC}"
    TOTAL_ISSUES=$((TOTAL_ISSUES + 1))
else
    CSS_SIZE=$(stat -f%z "assets/coloris/dist/coloris.min.css" 2>/dev/null || stat -c%s "assets/coloris/dist/coloris.min.css" 2>/dev/null)
    if [ "$CSS_SIZE" -lt 1000 ]; then
        echo -e "${YELLOW}⚠ Coloris CSS is placeholder ($CSS_SIZE bytes)${NC}"
        echo "   Run: ./scripts/update-coloris.sh to download full library"
    else
        echo -e "${GREEN}✓ Coloris CSS found ($CSS_SIZE bytes)${NC}"
    fi
fi

if [ ! -f "assets/coloris/dist/coloris.min.js" ]; then
    echo -e "${RED}✗ Coloris JS not found${NC}"
    TOTAL_ISSUES=$((TOTAL_ISSUES + 1))
else
    JS_SIZE=$(stat -f%z "assets/coloris/dist/coloris.min.js" 2>/dev/null || stat -c%s "assets/coloris/dist/coloris.min.js" 2>/dev/null)
    if [ "$JS_SIZE" -lt 5000 ]; then
        echo -e "${YELLOW}⚠ Coloris JS is placeholder ($JS_SIZE bytes)${NC}"
        echo "   Run: ./scripts/update-coloris.sh to download full library"
    else
        echo -e "${GREEN}✓ Coloris JS found ($JS_SIZE bytes)${NC}"
    fi
fi
echo ""

# Check other required assets
echo "7. Checking required assets..."
REQUIRED_ASSETS=(
    "assets/js/jquery.min.js"
    "assets/fontawesome/css/all.min.css"
    "assets/css/adminlte.min.css"
    "assets/select2/css/select2.css"
)

MISSING_ASSETS=0
for asset in "${REQUIRED_ASSETS[@]}"; do
    if [ ! -f "$asset" ]; then
        echo -e "${RED}✗ Missing: $asset${NC}"
        MISSING_ASSETS=$((MISSING_ASSETS + 1))
    fi
done

if [ $MISSING_ASSETS -eq 0 ]; then
    echo -e "${GREEN}✓ All required assets present${NC}"
else
    echo -e "${RED}✗ $MISSING_ASSETS required asset(s) missing${NC}"
    TOTAL_ISSUES=$((TOTAL_ISSUES + MISSING_ASSETS))
fi
echo ""

# Summary
echo "========================================="
if [ $TOTAL_ISSUES -eq 0 ]; then
    echo -e "${GREEN}✓ Verification PASSED${NC}"
    echo -e "${GREEN}Application is ready for offline operation${NC}"
    EXIT_CODE=0
elif [ $TOTAL_ISSUES -lt 3 ]; then
    echo -e "${YELLOW}⚠ Verification PASSED with warnings${NC}"
    echo "Found $TOTAL_ISSUES potential issue(s)"
    echo "Review the warnings above"
    echo "Application should work offline"
    EXIT_CODE=0
else
    echo -e "${RED}✗ Verification FAILED${NC}"
    echo "Found $TOTAL_ISSUES issue(s)"
    echo "Fix the issues above before running offline"
    EXIT_CODE=1
fi
echo "========================================="
echo ""

# Recommendations
if [ $TOTAL_ISSUES -gt 0 ]; then
    echo "Recommendations:"
    echo "1. Review all flagged files manually"
    echo "2. Run ./scripts/update-coloris.sh with internet access"
    echo "3. Test application offline after fixes"
    echo "4. Re-run this verification script"
    echo ""
fi

exit $EXIT_CODE
