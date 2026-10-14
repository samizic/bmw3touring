#!/usr/bin/env bash
# Encode a source video into the lightweight, muted hero loops used on the homepage.
# Usage: scripts/encode-hero-video.sh "/path/to/source.mp4" [start-seconds] [duration-seconds]
set -euo pipefail

SRC="${1:?source video path required}"
START="${2:-0}"
DUR="${3:-20}"
OUT="public/video"
mkdir -p "$OUT"

for H in 1080 720; do
  CRF_X264=$([ "$H" = 1080 ] && echo 28 || echo 30)
  CRF_VP9=$([ "$H" = 1080 ] && echo 40 || echo 42)
  ffmpeg -y -ss "$START" -t "$DUR" -i "$SRC" -an \
    -vf "scale=-2:${H},fps=30" -c:v libx264 -profile:v high -preset slow -crf "$CRF_X264" \
    -pix_fmt yuv420p -movflags +faststart "$OUT/hero-${H}.mp4"
  ffmpeg -y -ss "$START" -t "$DUR" -i "$SRC" -an \
    -vf "scale=-2:${H},fps=30" -c:v libvpx-vp9 -b:v 0 -crf "$CRF_VP9" -row-mt 1 \
    -deadline good -cpu-used 2 "$OUT/hero-${H}.webm"
done

ls -lh "$OUT"
