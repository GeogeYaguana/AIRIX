#!/usr/bin/env bash
# Video optimization script for CacaoHealthWeb / Airix
# Requires: ffmpeg (brew install ffmpeg)
#
# Usage:
#   chmod +x scripts/optimize-videos.sh
#   ./scripts/optimize-videos.sh
#
# Outputs (written to public/videos/ and public/images/):
#   fondo.mp4        — H.264, web-optimised, ~1–3 MB target
#   fondo.webm       — VP9, modern browsers, smaller than MP4
#   fondo-poster.jpg — First-frame poster (shown while video loads)

set -e

SOURCE="public/videos/fondo.mp4"
OUT_MP4="public/videos/fondo.mp4"
OUT_WEBM="public/videos/fondo.webm"
OUT_POSTER="public/images/fondo-poster.jpg"
BACKUP="public/videos/fondo-original.mp4"

if ! command -v ffmpeg &>/dev/null; then
  echo "❌  ffmpeg not found. Install it with:  brew install ffmpeg"
  exit 1
fi

echo "🎬  Source: $SOURCE"
echo "📐  Probing source…"
ffprobe -v quiet -show_entries format=duration,size,bit_rate \
        -show_entries stream=width,height,codec_name,r_frame_rate \
        -of default=noprint_wrappers=1 "$SOURCE" 2>&1 || true

# ── Backup original ────────────────────────────────────────────────────────────
if [ ! -f "$BACKUP" ]; then
  echo "💾  Backing up original → $BACKUP"
  cp "$SOURCE" "$BACKUP"
fi

# ── 1. Optimised MP4 (H.264 / AAC, moov atom at front for fast start) ─────────
# Target bitrate breakdown:
#   -crf 26        : quality (18=lossless … 28=acceptable for BG video, 26 is sweet spot)
#   -preset slow   : better compression at same quality vs "medium"
#   -vf scale=…    : downsample to 1280px wide (keeps AR); BG video >720p is overkill
#   -movflags +faststart : moves moov atom to start → playback begins before full download
#   -an            : strip audio (BG video is muted, saves ~15% weight)
echo ""
echo "⚙️   Encoding optimised MP4…"
ffmpeg -y -i "$BACKUP" \
  -c:v libx264 \
  -crf 26 \
  -preset slow \
  -profile:v main \
  -level 4.0 \
  -vf "scale='min(1280,iw)':-2,fps=24" \
  -movflags +faststart \
  -an \
  -pix_fmt yuv420p \
  "$OUT_MP4"

MP4_SIZE=$(du -sh "$OUT_MP4" | cut -f1)
echo "✅  MP4 done → $OUT_MP4 ($MP4_SIZE)"

# ── 2. WebM (VP9 — ~30% smaller than H.264, preferred by Chrome/Firefox) ──────
# Two-pass VP9 for better quality/size ratio:
echo ""
echo "⚙️   Encoding WebM (VP9, two-pass)…"
ffmpeg -y -i "$BACKUP" \
  -c:v libvpx-vp9 \
  -b:v 0 \
  -crf 35 \
  -vf "scale='min(1280,iw)':-2,fps=24" \
  -an \
  -deadline good \
  -cpu-used 2 \
  -pass 1 \
  -f webm /dev/null

ffmpeg -y -i "$BACKUP" \
  -c:v libvpx-vp9 \
  -b:v 0 \
  -crf 35 \
  -vf "scale='min(1280,iw)':-2,fps=24" \
  -an \
  -deadline good \
  -cpu-used 2 \
  -pass 2 \
  "$OUT_WEBM"

WEBM_SIZE=$(du -sh "$OUT_WEBM" | cut -f1)
echo "✅  WebM done → $OUT_WEBM ($WEBM_SIZE)"

# ── 3. Poster image (frame at 0.5 s — enough time to see the scene) ───────────
echo ""
echo "🖼️   Extracting poster frame at t=0.5s…"
ffmpeg -y -ss 0.5 -i "$BACKUP" \
  -frames:v 1 \
  -q:v 3 \
  -vf "scale='min(1920,iw)':-2" \
  "$OUT_POSTER"

POSTER_SIZE=$(du -sh "$OUT_POSTER" | cut -f1)
echo "✅  Poster done → $OUT_POSTER ($POSTER_SIZE)"

# ── Summary ────────────────────────────────────────────────────────────────────
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📦  FINAL SIZES"
echo "   Original  : $(du -sh "$BACKUP" | cut -f1)"
echo "   MP4 (H.264): $MP4_SIZE"
echo "   WebM (VP9) : $WEBM_SIZE"
echo "   Poster     : $POSTER_SIZE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🎯  Review the poster at public/images/fondo-poster.jpg"
echo "    If the frame is dark/unrepresentative, re-run with a different timestamp:"
echo "    ffmpeg -ss 2.0 -i \"$BACKUP\" -frames:v 1 -q:v 3 \"$OUT_POSTER\""

# Clean up VP9 two-pass log files
rm -f ffmpeg2pass-0.log ffmpeg2pass-0.log.mbtree
