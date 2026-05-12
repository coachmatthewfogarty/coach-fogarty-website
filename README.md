# Coach Fogarty Website Workspace

This root folder is organized so the active website, design source, source documents, and archived history stay separate.

## Folder Map

- `01-current-website/coach-fogarty-portfolio/`: live website files and current DPAT working files.
- `02-design-source/Photoshop Website Export/`: image input/output workflow, crop manifests, export scripts, and design source material.
- `03-source-documents/`: source-only document buckets for credentials, resumes, recommendation letters, DPAT source files, report guides, and brand-kit material.
- `04-archive/`: historical copies, older direction, stale experiments, and files that should not guide current work.

## Current Website

Open or serve the site from:

```text
01-current-website/coach-fogarty-portfolio/
```

Read the current website implementation and brand memory before making new site changes:

```text
01-current-website/coach-fogarty-portfolio/README.md
```

Read the current responsive design system before changing typography, tablet/mobile behavior, cards, section spacing, the homepage hero, header, or footer:

```text
01-current-website/coach-fogarty-portfolio/RESPONSIVE-DESIGN-SYSTEM.md
```

The website expects live assets under:

```text
01-current-website/coach-fogarty-portfolio/assets/
```

Keep website images, documents, videos, generated web assets, and helper JS inside that `assets/` tree unless you are intentionally changing the site code.

## Current Responsive Design System

- Use `01-current-website/coach-fogarty-portfolio/RESPONSIVE-DESIGN-SYSTEM.md` as the source of truth for font specs, responsive layout behavior, cards, section spacing, the homepage hero, header, footer, pills, mini boxes, and contact form sizing.
- Mobile and tablet stay stacked through `1024px`; desktop structure starts at `1025px+`.
- Tablet should be treated as mobile structure with desktop breathing room: `721-899px` tablet portrait, `900-1024px` large tablet/tablet landscape, and `1025px+` desktop.
- Global heading/card-title fitting is handled by `footer.js`: keep one-line rules when readable, but wrap long titles instead of shrinking below the readable floors.

## 2026-05-10 Website Updates To Remember

Today's active website upgrades are centered on the public coaching portfolio experience:

- Homepage messaging now presents Matthew Fogarty as a college basketball coach, player development coach, scouting/program systems builder, and staff-ready contributor.
- Header and footer use the current `site-chrome` treatment: wider full-bleed chrome, compact `MF` mark, Matthew Fogarty wordmark, desktop nav, mobile hamburger nav, mobile Contact shortcut, and footer accordion link groups.
- The site uses a warm editorial coaching-portfolio brand palette: parchment background, black/brown text, gold accent, deep red, blue, green, and sand support colors. Core CSS variables live at the top of `styles.css`.
- `about.html` is now a personal letter-style About page with a coaching statement, image collage, and the custom signature asset at `assets/media/signature-matthew-fogarty.svg`.
- `systems.html` is now the deep Staff Systems page with document-preview carousels for Player Development, Scouting & Recruiting, DPAT, Program Support, Coaching Philosophy, and The Archer.
- `assets/documents/system-previews/` now contains the live WebP preview thumbnails used by the Systems document cards.
- `systems.js` powers horizontal document carousel arrows on the Systems page.
- `media.html` is now the Gallery Hub, with category previews, coaching galleries, video galleries, Playing Career, Awards, The Archer, and Anaya Beard media sections.
- `app.js` remains the central data/rendering file for homepage system cards, gallery/media albums, media overlays, playing-career carousels, and contact form mailto behavior.
- `contact.html` and the homepage contact section use the direct email `CoachMatthewFogarty@gmail.com`, location `Santa Ana, CA`, website `www.coachfogarty.com`, social links, and document quick actions.

For future edits, preserve the current brand direction and system architecture unless intentionally redesigning the portfolio.

## DPAT Direction

Use the active DPAT guide here:

```text
01-current-website/coach-fogarty-portfolio/dpat/README.md
```

Archived DPAT history lives in `04-archive/dpat-archive-2026-05-08/` and should not be used as the current design direction.

## Image Export Direction

Use the active Photoshop export guide here:

```text
02-design-source/Photoshop Website Export/README.md
```

The current Anaya crop record is:

```text
02-design-source/Photoshop Website Export/ANAYA-BEARD-CROP-MANIFEST-2026-05-08.md
```

## PC/Mac Notes

- Avoid hardcoded absolute paths like `C:\Users\...` or `/Users/...` in current scripts and READMEs.
- Keep macOS metadata files out of the project: `.DS_Store` and `._*`.
- Keep old experiments in `04-archive/` so searches and editor indexing stay focused.
