# Coach Fogarty Portfolio Website

This is the active public coaching portfolio site for Matthew Fogarty.

Open the site from this folder:

```text
01-current-website/coach-fogarty-portfolio/
```

The site is a static HTML/CSS/JS portfolio. There is no package build step required for normal editing.

## Current Page Map

- `index.html`: homepage, hero, impact stats, systems preview, featured work, gallery preview, playing career, and contact section.
- `about.html`: personal letter-style About page with coaching statement, signature, and image collage.
- `systems.html`: deep Staff Systems page with document-preview carousels.
- `featured-work.html`: featured coaching work and proof-of-impact stories.
- `media.html`: Gallery Hub for coaching photos, videos, Playing Career, Awards, The Archer, and Anaya Beard media.
- `anaya-case-study.html`: Anaya Beard player-development case study.
- `archer-visuals.html`: The Archer visual and video page.
- `credentials.html`: professional credentials and supporting documents.
- `contact.html`: contact form, direct contact details, social links, and quick document actions.

## Current Code Map

- `styles.css`: main visual system, responsive layout, mobile navigation, system/document cards, media library, about page, contact page, and footer chrome.
- `app.js`: homepage system-card data, gallery/media album data, gallery rendering, media overlay behavior, playing-career carousel, Anaya gallery rendering, and contact form mailto behavior.
- `systems.js`: horizontal carousel controls for system document rows on `systems.html`.
- `footer.js`: footer accordion and shared footer interaction behavior.
- `assets/js/image-fallbacks.js`: image fallback behavior for site images.
- `RESPONSIVE-DESIGN-SYSTEM.md`: current mobile/tablet/desktop rules for font specs, heading fitting, layout behavior, section/card padding, header/footer sizing, contact form sizing, and homepage hero breakpoints.

## Current Brand Memory

The active website brand should feel like a polished basketball coaching portfolio: warm, credible, organized, staff-ready, and proof-driven.

Core brand identity:

- Name: Matthew Fogarty.
- Short site brand: `MF` mark plus `Matthew Fogarty`.
- Primary positioning: College Basketball Coach | Player Development | Scouting | Program Systems.
- Core proof themes: player development systems, scouting and recruiting preparation, defensive accountability, program operations, staff support, credentials, references, and documented coaching impact.
- Voice: direct, professional, detailed, coach-to-coach, and staff-ready.

Core CSS palette:

- Background: `#f4efe7`
- Panel: `rgba(255, 250, 243, 0.82)`
- Strong panel: `#fff9f0`
- Text: `#1f1b16`
- Muted text: `#6a5f53`
- Gold accent: `#b8872f`
- Deep red: `#8f2d1e`
- Blue: `#244f73`
- Green: `#315c43`
- Sand: `#d7b377`
- Ink: `#2f3148`

Do not drift the public website into the black/gold DPAT report look. DPAT reports have their own brand system inside `dpat/`.

## Alignment And Branding Rules

These rules are current as of the May 11 responsive cleanup:

- Keep the public site warm, editorial, proof-driven, and staff-ready. The site should read like a serious college basketball coaching portfolio, not a generic landing page or a DPAT report.
- Use the shared page shell for alignment. Major sections, cards, contact forms, systems grids, and media previews should line up to the same content edge unless a full-bleed header/footer treatment is intentional.
- Do not add floating section cards inside other cards. Individual repeated cards are fine; page sections should remain clean bands or framed modules.
- Keep the `MF` mark, Matthew Fogarty wordmark, current nav labels, and direct contact information stable unless the real brand/contact information changes.
- Use `minmax(0, 1fr)` for responsive grids so text, buttons, tables, and image captions can shrink without creating horizontal overflow.
- Long headings try to stay one line, then wrap at readable floors. Do not force brand or section titles into tiny text.
- Buttons and document actions should stay visually aligned and equal-height when they are presented as a group.
- Image crops should protect the subject first, then the composition. Faces, bodies, document text, and basketball action should not be accidentally cut off by a desktop-only crop rule.

## Responsive Design System

Use `RESPONSIVE-DESIGN-SYSTEM.md` as the current source of truth before changing typography, spacing, tablet behavior, page grids, the homepage hero, header, footer, pills, mini boxes, cards, or forms.

Current global responsive rules:

- `<=430px`: small mobile, tightest spacing and compact cards.
- `431-720px`: mobile, stacked layout.
- `721-767px`: bridge range, tablet layout shell with mobile type scale.
- `768-1024px`: tablet, mobile structure with roomier spacing.
- `1025px+`: desktop structure starts.

Current desktop cap:

- Active desktop content cap is `1680px` through `--site-card-width` and `--site-chrome-content-width`.
- Older `1200px` width notes are legacy defaults for narrow reading sections, not the global website cap.
- Very large monitors should show more breathing room, not oversized typography or stretched cards.

Tablet design rule:

- Tablet should feel like mobile structure with desktop breathing room.
- `721-899px` should remain tablet portrait/stacked.
- `900-1024px` can gain desktop polish, but should still stay stacked for the homepage hero.
- The homepage hero switches from stacked to split layout at `1025px+`.

Crop-size ladder:

- `600x400 overlay-thumb` WebP: smallest crop for overlay thumbnails, compact preview tiles, and fallback thumbnail use.
- `1200x900 media-card` AVIF: standard card crop for homepage/media cards and most responsive previews.
- `1800x2400 portrait` AVIF: tall portrait/detail slots where vertical framing is intentional.
- `2400x1800 landscape` AVIF: largest crop for desktop detail views, large media displays, and wide/hero-style placements.
- Do not wire a smaller crop into a larger desktop slot when a larger approved `q98` crop exists.
- Keep crop labels in filenames so final website assets can be traced back to the approved crop decision.

Table and structured-grid rule:

- Mobile uses stacked cards/rows first.
- Tablet can use two-column grids only when labels, numbers, buttons, and captions remain readable.
- Desktop can use denser grids at `1025px+`, with compact desktop tuning around `1025px-1240px`.
- Tables should scroll or stack before text becomes unreadable. Keep public website table/body copy at readable size; DPAT PDF reports have their own separate table sizing rules under `dpat/`.

Heading fit rule:

- Eyebrows, section titles, and card titles try to stay one line.
- If a title cannot stay one line without becoming too small, it wraps instead of shrinking into unreadable text.
- Readable floors are: section title `18px` mobile, `20px` tablet, `25px` desktop; card title `18px` mobile, `20px` tablet, `22px` desktop; eyebrow `8px` all breakpoints.

When changing global responsive rules, verify representative widths: `360`, `390`, `430`, `768`, `900`, `1024`, `1280`, `1440`, and `1680`.

## 2026-05-10 Updates To Remember

Today's active website updates and upgrades:

- Added the custom signature asset at `assets/media/signature-matthew-fogarty.svg` and used it on the About page.
- Reworked `about.html` into a letter-style coaching introduction with personal positioning, staff-ready contribution language, and an image collage.
- Expanded `systems.html` into a full Staff Systems page with sections for Development, Evaluation, DPAT, Operations, Leadership, and Innovation.
- Added system document cards that link directly to PDFs and show WebP previews from `assets/documents/system-previews/`.
- Added `systems.js` so long document rows scroll by card width with previous/next arrows.
- Built the `media.html` Gallery Hub with category previews, coaching photo groups, video galleries, Playing Career, Awards, The Archer, and Anaya Beard media.
- Upgraded `app.js` media behavior to support reusable media-library albums, preview carousels, overlay counters, overlay thumbnails, video cards, and direct gallery-opening buttons.
- Updated the homepage to foreground Staff-Ready Systems, coaching proof, credential links, featured Anaya and Archer work, media previews, Playing Career, and direct contact.
- Updated the contact experience with first/last name fields, email, phone, reason selector, message, direct mailto generation, contact details, social links, and document quick actions.
- Refined `styles.css` for full-bleed site chrome, responsive mobile navigation, footer accordion behavior, media-library layouts, system document cards, contact layout, and mobile-safe spacing.

## Important Paths

System preview images:

```text
assets/documents/system-previews/
```

Signature:

```text
assets/media/signature-matthew-fogarty.svg
```

Portfolio documents:

```text
assets/documents/
```

Responsive design system:

```text
RESPONSIVE-DESIGN-SYSTEM.md
```

DPAT report design and source memory:

```text
dpat/README.md
dpat/report-designs/README-dpat-report-design-system.md
```

## Editing Rules

- Keep public website assets under this folder's `assets/` tree.
- Use relative paths in HTML, CSS, JS, and README files.
- Keep generated system preview thumbnails in `assets/documents/system-previews/`.
- Keep DPAT report design files under `dpat/`; do not mix report source/build files into public website pages unless linking to final PDFs.
- Preserve the current page names and nav labels: Home, About, Systems, Featured, Gallery, Contact.
- Preserve the direct contact email: `CoachMatthewFogarty@gmail.com`.
- Preserve `Santa Ana, CA`, `www.coachfogarty.com`, LinkedIn, and Instagram links unless the real contact information changes.
- When adding new media, update the album data in `app.js` and place the files in the matching `assets/media/`, `anaya/`, or `assets/the-archer/` folder.
- When adding a new system document, add the PDF under `assets/documents/`, add a WebP preview under `assets/documents/system-previews/`, then link both from `systems.html`.
