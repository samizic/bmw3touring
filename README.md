# bmw3touring

Enthusiast website for my 2024 BMW 330d Touring (G21 LCI) — Alpine White, M Sport, rear-wheel drive.
Built with [Astro](https://astro.build), deployed to GitHub Pages at
**https://samizic.github.io/bmw3touring**.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321/bmw3touring/
npm run build      # static output in dist/
npm run preview    # serve the built site locally
```

Requires Node 20+.

## Project layout

```
src/
  assets/home/       homepage photos (optimized at build time → AVIF/WebP, EXIF/GPS stripped)
  components/        Header, Footer, Hero, PageHero, StatsBand, StoryPanel, Teasers, LightboxGallery
  content/maintenance/  one folder per job (index.md + photos/)
  content.config.ts  maintenance front-matter schema
  data/site.ts       navigation + homepage stat numbers
  layouts/Base.astro page shell (fonts, header, footer, scroll-reveal)
  lib/url.ts         url() helper — always use it for internal links (adds /bmw3touring)
  pages/             one file per route
  styles/global.css  theme tokens: M colours, fonts, spacing
public/
  video/             encoded hero loops (hero-720/1080 .mp4/.webm)
templates/
  maintenance-job/   copy this to start a new job
scripts/
  encode-hero-video.sh
```

## Images

Put photos in `src/assets/...` and render them with Astro's `<Picture>` / `<Image>` components —
never in `public/`. That way every image is resized into responsive widths, converted to AVIF/WebP,
lazy-loaded, and has its EXIF metadata (including GPS location) removed.

Use the largest original you have (2400 px+ wide is ideal); the build does the shrinking.

### Location privacy

Phone photos often carry GPS coordinates, and the source files are public on GitHub. Before you commit
new photos, run:

```bash
npm run strip-gps    # removes GPS/location tags from all images & videos in src/ and public/ (lossless)
npm run check-gps    # only reports; exits with an error if anything still has location data
```

The deploy workflow runs the same check and **refuses to publish** if any file still contains a
location. Requires `exiftool` (`brew install exiftool`).

## Adding a DIY & Service job

Each job is a folder in `src/content/maintenance/`. The folder name becomes the URL, so
`2025-06-oil-service/` is published at `/bmw3touring/diy-service/2025-06-oil-service`.
(The folder and code keep the internal name `maintenance`; old `/maintenance/…` links redirect.)

1. **Copy the template:**
   ```bash
   cp -R templates/maintenance-job src/content/maintenance/2025-06-oil-service
   ```
2. **Add photos** to the new folder's `photos/` directory. Every image there appears in the job's
   gallery automatically, sorted by file name, so prefix them `01-`, `02-` and so on to set the
   order. Descriptive names make good default captions: `03-new-filter-fitted.jpg` becomes
   "New filter fitted".
3. **Edit `index.md`:** fill in the front matter (title, date, category, summary, cover photo)
   and write the description below the `---` line in Markdown.
4. **Preview** with `npm run dev`, then commit and push. The listing page sorts jobs by `date`
   (newest first) and groups them by year.

Tips:
- `draft: true` keeps a job visible locally but off the live site until you're ready.
- To show an image inside the text rather than in the gallery (a diagram or coverage map, for
  example), put it next to `index.md`, not in `photos/`, and use `![alt](./file.jpg)`.
- Override any gallery caption with the `captions:` map in the front matter.
- Large originals are fine. The build resizes and converts them and strips EXIF/GPS data.

## Blueprint (Specs page)

The four-view drawing in `src/components/Blueprint.astro` uses linework adapted from
[Dimensions.com](https://www.dimensions.com/element/bmw-3-series-touring-g21-7th-gen), restyled
and with BMW factory dimensions. Their licence allows non-commercial use **with attribution and a
working link back**. Keep the caption credit, and don't redistribute the original SVG file.
`src/data/blueprint-g21.ts` is generated:

```bash
node scripts/build-blueprint.mjs path/to/Dimensions-BMW-3-Series-Touring.svg
```

Dimension values come from `dimensions` in `src/data/specs.ts`.

## Adding gallery photos

The Gallery page is built from `src/data/gallery.ts` (chapters, captions, header photo) and the
image files in `src/assets/gallery/`.

1. **Check the photo first**: licence plates (yours and other cars'), navigation screens,
   addresses, faces or reflections.
2. **Strip all metadata** (GPS, camera, dates, embedded thumbnails and HDR gain maps) and keep only
   the colour profile and orientation:
   ```bash
   exiftool -all= -trailer:all= -tagsfromfile @ -icc_profile -orientation -o src/assets/gallery/new-photo.jpg "/path/to/original.jpg"
   ```
   Use lower-case file names without `~`.
3. **Add it to a chapter** in `src/data/gallery.ts` with a short caption. The caption is also the
   image's alt text. The first photo of each chapter is shown large.
4. Run `npm run check-gps` and `npm run dev` to check, then commit.

## Hero video

The homepage hero shows `front-detail.jpg` instantly, then fades in a muted video loop once it can
play. The loop is skipped for visitors with *reduced motion* or *data saver* enabled, and phones get
the 720p version.

The hero renders without video until the encoded files exist. To (re)create them:

```bash
brew install ffmpeg
scripts/encode-hero-video.sh "/path/to/THE 3 - Exterior.mp4" 0 20   # source, start s, length s
```

This writes `public/video/hero-{720,1080}.{mp4,webm}`. Aim for ≤ 6 MB total; raise the CRF values
in the script if it is bigger.

## Deploying

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.
One-time setup: **GitHub repo → Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Roadmap

- [x] Homepage
- [x] Technical specs — edit values in `src/data/specs.ts`
- [x] Gallery with lightbox — see "Adding gallery photos"
- [x] DIY & Service log — see "Adding a DIY & Service job"

## Fonts & branding

BMW Type Next is a licensed BMW font and can't be hosted publicly, so the site uses
**Barlow / Barlow Condensed** (self-hosted via Fontsource, SIL OFL) as a close geometric stand-in.
This is a private fan site and is not affiliated with BMW AG.
