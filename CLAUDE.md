# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Static Astro 5 fan site for the owner's 2024 BMW G21 330d Touring LCI, deployed to GitHub Pages at
https://samizic.github.io/bmw3touring. README.md is the user-facing guide for adding jobs, gallery
photos, the blueprint and the hero video; read it before doing any of those.

## Commands

```bash
npm run dev          # http://localhost:4321/bmw3touring/ (dev server is also in .claude/launch.json)
npm run build        # static output in dist/ — the only automated check; there are no tests or linter
npm run check-gps    # exits 1 if any image/video in src/ or public/ has location metadata
npm run strip-gps    # removes GPS tags in place (needs exiftool)
node scripts/build-blueprint.mjs <dimensions.svg>         # regenerates src/data/blueprint-g21.ts
scripts/encode-hero-video.sh <video> [start-s] [length-s] # writes public/video/hero-*.{mp4,webm}
```

Deploy: `.github/workflows/deploy.yml` runs on push to `main`. It fails the build if `check-gps`
finds location data, then builds with `withastro/action` and publishes via `deploy-pages`.
Day-to-day work happens on the `site-v1` branch and goes to `main` through pull requests.

## Architecture

- **Base path.** The site is served under `/bmw3touring` (`astro.config.mjs`). Internal links must
  go through `url()` from `src/lib/url.ts`; hard-coded `/…` links break on Pages.
- **Images.** All photos live in `src/assets/` or next to content and are rendered with
  `<Picture>`/`<Image>`/`getImage` from `astro:assets` (sharp resizes and emits AVIF/WebP). Never
  put photos in `public/`. When replacing an image, give it a new file name: the dev server
  caches by name and keeps serving the old one.
- **DIY & Service jobs** are the `maintenance` content collection (`src/content.config.ts`, glob
  loader over `src/content/maintenance/*/index.md`). The internal name stays `maintenance`, but
  the public route is `src/pages/diy-service/[slug].astro`. `src/pages/maintenance/*` only
  redirects old URLs (`Redirect.astro`).
  - `src/lib/maintenance.ts` sorts jobs and filters drafts (`draft: true` shows only in dev). It
    also collects each job's `photos/*` through `import.meta.glob`, sorted by file name, so a
    numeric prefix sets the order.
  - A caption comes from the front-matter `captions` map, or else is derived from the file name.
  - The optional `sections: [{title, files}]` front matter splits the gallery into titled groups.
  - Images used inside the prose sit next to `index.md`, not in `photos/`.
  - New jobs start from `templates/maintenance-job/`.
- **Gallery** is data-driven: chapters, captions (also used as alt text) and the header photo are
  in `src/data/gallery.ts`, and the files are in `src/assets/gallery/`.
- **Other data:** `src/data/site.ts` holds the navigation and homepage stats, and
  `src/data/specs.ts` holds the specs and the blueprint dimensions. `src/data/blueprint-g21.ts` is
  generated; don't edit it by hand. The blueprint caption credit for Dimensions.com is a licence
  requirement and must stay.
- **Styling:** theme tokens (M colours, fonts, spacing) are in `src/styles/global.css`, and
  components use scoped `<style>`. The fonts are Barlow / Barlow Condensed via Fontsource, as a
  stand-in for the licensed BMW Type Next.

## Privacy rules for images (mandatory)

The repo is public, so every image is checked before it is committed:

- Strip all metadata, keeping only the colour profile and orientation. This also removes
  motion-photo/XMP trailers, whose embedded video can leak the plate:
  `exiftool -all= -trailer:all= -tagsfromfile @ -icc_profile -orientation …`
- Blur every licence plate, including other cars' plates. Use a precise mask that follows the
  plate outline, not a rectangular box.
- Blur keys, navigation screens and addresses.
- Keep dates out of published file names.
- Don't name specific locations (towns, regions) in captions, alt text, titles or commit messages.
  Use generic descriptions such as "coastal town" or "in the mountains".
- Run `npm run check-gps` before committing.

## Writing style

The site uses British English ("tyres", "bonnet", "colour"). The headlights are "adaptive LED",
not "laser".
