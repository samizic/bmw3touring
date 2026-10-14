#!/usr/bin/env bash
# Remove GPS / location metadata from every image and video in the site's source folders.
# Lossless: pixels are untouched, only the location tags are deleted.
#   scripts/strip-gps.sh          strip location data in place
#   scripts/strip-gps.sh --check  only report; exits 1 if any file still has location data
set -euo pipefail
cd "$(dirname "$0")/.."

DIRS=(src public)
EXT=(-ext jpg -ext jpeg -ext png -ext webp -ext avif -ext heic -ext tif -ext tiff -ext mp4 -ext mov -ext m4v)

command -v exiftool >/dev/null || { echo "exiftool not found (brew install exiftool)"; exit 2; }

found=$(exiftool -q -r "${EXT[@]}" -if '$gps:all or $xmp:LocationCreated or $quicktime:GPSCoordinates or $keys:GPSCoordinates' \
  -p '$Directory/$FileName' "${DIRS[@]}" 2>/dev/null || true)

if [[ "${1:-}" == "--check" ]]; then
  if [[ -n "$found" ]]; then
    echo "Location metadata found in:"; echo "$found"
    echo "Run scripts/strip-gps.sh to remove it."; exit 1
  fi
  echo "No location metadata found."; exit 0
fi

if [[ -z "$found" ]]; then echo "No location metadata found. Nothing to do."; exit 0; fi

echo "Stripping location metadata from:"; echo "$found"
while IFS= read -r f; do
  exiftool -q -overwrite_original -gps:all= -xmp:LocationCreated= -xmp-exif:GPS*= \
    -quicktime:GPSCoordinates= -keys:GPSCoordinates= -userdata:GPSCoordinates= "$f"
done <<< "$found"
echo "Done."
