#!/bin/bash

# Script to update background images for Aman Vyrha's portfolio site
# Usage: ./update-backgrounds.sh [type] [image_path]
# Example: ./update-backgrounds.sh developer path/to/new/developer-image.jpg

BACKGROUND_DIR="public/background-clips"

# Ensure the background clips directory exists
mkdir -p "$BACKGROUND_DIR"

# Function to show usage information
function show_usage() {
  echo "Usage: $0 [type] [image_path]"
  echo "Types:"
  echo "  developer   - Update developer profile background"
  echo "  recruiter   - Update recruiter profile background"
  echo "  stalker     - Update stalker profile background"
  echo "  adventurer  - Update adventurer profile background"
  echo "  default     - Update default background"
  echo ""
  echo "Example: $0 developer path/to/new/image.jpg"
}

# Show usage if no arguments provided
if [ $# -ne 2 ]; then
  show_usage
  exit 1
fi

TYPE=$1
IMAGE_PATH=$2

# Check if the image exists
if [ ! -f "$IMAGE_PATH" ]; then
  echo "Error: Image file not found: $IMAGE_PATH"
  exit 1
fi

# Determine file extension from the original file
EXTENSION=${IMAGE_PATH##*.}

# Process based on type
case "$TYPE" in
  developer)
    DEST="$BACKGROUND_DIR/developer-bg.$EXTENSION"
    ;;
  recruiter)
    DEST="$BACKGROUND_DIR/recruiter-bg.$EXTENSION"
    ;;
  stalker)
    DEST="$BACKGROUND_DIR/stalker-bg.$EXTENSION"
    ;;
  adventurer)
    DEST="$BACKGROUND_DIR/adventurer-bg.$EXTENSION"
    ;;
  default)
    DEST="$BACKGROUND_DIR/default-bg.$EXTENSION"
    ;;
  *)
    echo "Error: Unknown type $TYPE"
    show_usage
    exit 1
    ;;
esac

# Copy the file
cp "$IMAGE_PATH" "$DEST"

# Update any existing files with different extensions
if [ "$EXTENSION" != "png" ]; then
  rm -f "$BACKGROUND_DIR/${TYPE}-bg.png"
fi
if [ "$EXTENSION" != "jpg" ] && [ "$EXTENSION" != "jpeg" ]; then
  rm -f "$BACKGROUND_DIR/${TYPE}-bg.jpg"
  rm -f "$BACKGROUND_DIR/${TYPE}-bg.jpeg"
fi

echo "Background for $TYPE profile updated successfully to $DEST"
echo "Please restart the development server to see the changes." 