# Coach Fogarty Website Workspace

This repository contains the live Coach Fogarty website plus design/source material and historical archives.

## Start Here

For day-to-day Mac/PC setup, use:

```text
START-HERE.md
```

For the full Mac/PC handoff workflow, use:

```text
WORKFLOW-MAC-PC.md
```

## Active Website Source

The active live website source is the repo root.

Work from this folder:

```text
Coach Fogarty Website/
```

The live website files include:

```text
index.html
about.html
featured-work.html
systems.html
media.html
archer-visuals.html
contact.html
credentials.html
styles.css
app.js
footer.js
systems.js
assets/
docs/
dpat/
```

GitHub Pages publishes from:

```text
branch: main
folder: /root
```

## Do Not Use The Old Nested Folder For Website Edits

Do not edit the nested historical website folder unless a task explicitly asks for it:

```text
01-current-website/coach-fogarty-portfolio/
```

That folder may still contain archived output, cache, audit, or leftover support files, but it is not the current live website source.

## Folder Map

- Repo root: active live website source.
- `assets/`: active website images, documents, videos, and web assets.
- `docs/`: active website documentation, responsive specs, gallery specs, brand docs, and QA records.
- `dpat/`: active DPAT report/workflow area for current site use.
- `02-design-source/Photoshop Website Export/`: image input/output workflow, crop manifests, export scripts, and design source material.
- `03-source-documents/`: source-only document buckets for credentials, resumes, recommendation letters, DPAT source files, report guides, and brand-kit material.
- `04-archive/`: historical copies, older direction, stale experiments, and files that should not guide current work.
- `01-current-website/`: old nested website/output area; do not use for current website edits unless explicitly requested.

## Local Preview

From the repo root:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:8000/
```

No website package install is required for normal preview. The only package manifest currently belongs to the Photoshop export tooling:

```text
02-design-source/Photoshop Website Export/package.json
```

## Current Responsive Design System

Use this file as the source of truth before changing typography, tablet/mobile behavior, cards, section spacing, the homepage hero, page heroes, header, footer, pills, mini boxes, or contact form sizing:

```text
RESPONSIVE-DESIGN-SYSTEM.md
```

Companion active specs live in:

```text
docs/responsive/
docs/gallery/
docs/anaya-case-study/
docs/home/
docs/brand/
```

Key current rules:

- Mobile and tablet stay stacked through `1024px`; desktop structure starts at `1025px+`.
- About is the documented exception: its full two-column letter/gallery layout starts at `1440px`.
- Current desktop max content cap is `1680px`; ultra-wide cap is `2240px`.
- Global heading/card-title fitting is handled by `footer.js`.
- Image crop sizes move from smallest to largest as `600x400 overlay-thumb`, `1200x900 media-card`, `1800x2400 portrait`, and `2400x1800 landscape`.
- Crop decisions must be traceable in filenames with the crop label and `q98` quality marker before being wired into the website.

## Editing Rules

- Pull before editing on either computer.
- Push before switching computers.
- Do not redesign anything unless the task explicitly allows it.
- Do not edit old copies, archive folders, output folders, duplicate folders, Photoshop export output folders, or backup folders.
- Do not use `git add -A` unless explicitly approved.
- Stage only the files intentionally changed for the task.
- Keep macOS metadata files out of the project: `.DS_Store` and `._*`.
- Avoid hardcoded absolute paths like `C:\Users\...` or `/Users/...` in current scripts and READMEs.

## Website Direction To Preserve

- Public website brand stays warm, editorial, parchment-based, coach-to-coach, and staff-ready.
- Do not mix in the black/gold DPAT report look except inside `dpat/` report builds.
- Header and footer use the shared `site-chrome` treatment.
- `app.js` remains the central data/rendering file for homepage system cards, gallery/media albums, media overlays, playing-career carousels, and contact form mailto behavior.
- `systems.js` powers horizontal document carousel arrows on the Systems page.
- `about.html` uses the locked personal letter/gallery layout.
- `systems.html`, `featured-work.html`, `media.html`, `anaya-case-study.html`, `archer-visuals.html`, and `credentials.html` use the locked reusable page-hero system unless their docs say otherwise.

## Image Export Direction

Use the active Photoshop export guide here:

```text
02-design-source/Photoshop Website Export/README.md
```

The current Anaya crop record is:

```text
02-design-source/Photoshop Website Export/ANAYA-BEARD-CROP-MANIFEST-2026-05-08.md
```
