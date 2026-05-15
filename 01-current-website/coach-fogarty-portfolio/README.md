# Coach Fogarty Portfolio Website

This is the active public coaching portfolio site for Matthew Fogarty.

Open the site from this folder:

```text
01-current-website/coach-fogarty-portfolio/
```

The site is a static HTML/CSS/JS portfolio. There is no package build step required for normal editing.

## Active Documentation

These are the only active website rule documents. If an archived note or old audit conflicts with this list, use the active documents below.

| Source of truth | Active document |
|---|---|
| Website map, editing rules, and doc index | `README.md` |
| Global responsive, heading, body text, card, pill, overlay, and page-layout rules | `RESPONSIVE-DESIGN-SYSTEM.md` |
| Measured Home hero desktop system | `docs/responsive/HOME-HERO-RESPONSIVE-SPEC.md` |
| Locked Home Media cards, carousel, and shared overlay behavior | `docs/responsive/HOME-MEDIA-SECTION-LOCK-README.md` |
| Locked Gallery / Media page specs, image inventory, interactions, cleanup, and QA | `docs/gallery/GALLERY-PAGE-FINAL-SPEC.md` |
| Locked Systems page hero, library, details, image, button, and QA rules | `docs/responsive/SYSTEMS-PAGE-LOCK-README.md` |
| Locked Featured Work detailed section page | `docs/responsive/FEATURED-WORK-PAGE-LOCK-README.md` |
| Locked The Archer product case study page | `docs/responsive/ARCHER-PAGE-LOCK-README.md` |
| Responsive-doc index and verification sizes | `docs/responsive/README.md` |
| Locked image export, crop, naming, and asset rules | `docs/image-export/README.md` |

Archived or superseded notes live under `docs/archive/` or `../outputs/archive/`. They are historical only.

## Current Page Map

- `index.html`: Home page, approved desktop hero, impact stats, systems preview, featured work, gallery preview, playing career, and contact closeout.
- `about.html`: excluded from global hero-left/body changes where noted; uses its own letter-style layout and image collage.
- `systems.html`: Staff Systems page; inherits the approved internal page hero and includes the locked six-card systems library plus detail carousels.
- `featured-work.html`: Featured Work detailed section page; locked as a shared hero with six Home-style stat pills, impact summary, detailed feature sections, strategy panel, CTA, and footer.
- `media.html`: Gallery Hub; inherits the approved hero left-column body and pill rhythm; active page-specific source of truth is `docs/gallery/GALLERY-PAGE-FINAL-SPEC.md`.
- `anaya-case-study.html`: Anaya Beard case study; inherits the approved hero left-column body and six-stat-pill rhythm.
- `archer-visuals.html`: The Archer innovation/product case study page; inherits the approved page hero, pill, card, media, and section rhythm.
- `credentials.html`: Credentials and supporting documents; follows the current page hero and pill rhythm where applicable.
- `contact.html`: excluded from global hero-left/body changes where noted; preserve existing approved Contact formatting.

## Current Code Map

- `styles.css`: main visual system, responsive layout, desktop/wide desktop rules, hero systems, cards, media library, page-specific overrides, and footer chrome.
- `app.js`: Home system-card data, gallery/media album data, gallery rendering, media overlay behavior, playing-career carousel, Anaya gallery rendering, and contact mailto behavior.
- `systems.js`: horizontal carousel controls for system document rows on `systems.html`.
- `footer.js`: footer accordion and shared heading/card-title fitting behavior.
- `assets/js/image-fallbacks.js`: image fallback behavior for site images.

## Approved Layout Rules

Desktop begins at `1025px`. The `1025-1199px` range is small desktop / large tablet transition and still uses desktop structure when the component is approved for desktop.

Home hero desktop rules:

- Use the shared desktop and wide-desktop page shell widths.
- Use a two-column grid: left copy/stats and right portrait.
- Keep eyebrow, H1, body text, and six stat pills in the left column.
- Keep the portrait image in the right column.
- Do not let left-column pills run under the right image.
- Keep hero body `max-width: 100%` so body copy fills the left copy lane.
- Use the approved six-pill `3 x 2` grid.
- Let wide desktop pills fill the safe left grid track through `.hero-pill-system`; do not reintroduce old narrow pill caps.

Global page hero rules:

- Systems, Featured, Gallery, Anaya, and Archer hero pages inherit the updated hero left-column rhythm.
- Do not change eyebrow/title/right image/overlay when only left-column formatting is requested.
- Do not modify right-column image sizes, crops, or overlay formatting unless specifically requested.
- About and Contact are excluded from broad global changes where existing approved page rules say not to touch them.

The Archer page:

- Status: product case study lock added May 14, 2026.
- Active source of truth: `docs/responsive/ARCHER-PAGE-LOCK-README.md`.
- Structure: shared `.page-hero-system`, product overview, how-it-works cards, player development connection, photo cards, video cards, innovation value, and CTA.
- Keep the page technical and player-development focused; do not turn it into a separate product microsite.
- Preserve the approved colors, card treatment, button/pill style, shadows, radii, and page shell.

Featured Work page:

- Status: detailed section lock corrected May 14, 2026.
- Active source of truth: `docs/responsive/FEATURED-WORK-PAGE-LOCK-README.md`.
- Structure: shared `.page-hero-system`, Homepage-style six stat-pill hero grid, Impact Summary, Pacific Academy, Santa Ana College, Anaya Beard, The Archer, Complete Coaching Profile, and Explore the Work CTA.
- Featured Work uses the shared page hero system with the Homepage-style 6 stat-pill grid, while the page body preserves the original detailed Featured Work section layout. Do not replace the body with a simplified 4-card grid.
- Preserve the approved cream background, navy/dark text, red accents, image-forward section system, soft shadow, rounded cards, and responsive shell.
- Hero overlay: use the shared approved `page-highlight-bar hero-portrait-overlay` treatment. Do not add Featured-only hero overlay card rules or local overlay overrides.
- Cleanup: the simplified 4-card rebuild was removed/reverted, and the wrong Featured-only white hero caption card rules were removed.

Typography and components:

- Use one consistent eyebrow system across desktop pages: same color, transform, letter spacing, font weight, and spacing. Mobile/tablet keep the same color even when spacing changes.
- Use one consistent section-title system across desktop pages with tight line-height and stable eyebrow-to-title/title-to-body spacing.
- Body copy should be balanced, long enough to hold the layout, and written to avoid orphan one-word lines.
- Stat pills use Home hero colors, radius, padding, font sizes, and gaps.
- Featured cards and gallery cards keep the current card rhythm: clear media, stable crop, readable caption/title, and no card-inside-card layouts.

Locked Homepage Systems section:

- Status: visually approved and locked as of May 14, 2026.
- Section target: `#systems.section.library-section`.
- Eyebrow: `COACHING SYSTEMS`.
- Heading: `Systems & Proof of Work`.
- Cards: Player Development, Defensive Tracker, Coaching Philosophy, Recruiting, Program Support, Scouting.
- Coaching Philosophy buttons: Assistant Philosophy, 30-60-90 Plan, DEI Statement, Head Coach Alignment.
- Layout: desktop `3` columns at `>=1025px`, tablet `2` columns from `721px` through `1024px`, mobile `1` column through `720px`.
- Preserve the cream section background, red card titles, rounded cards, image-forward layout, `4 / 3` media ratio, `object-fit: cover`, and pill button structure.
- Do not redesign or change colors, typography, image ratio, spacing, card structure, or button style unless fixing a true bug.

Final Locked Systems page:

- Status: FINAL LOCKED as of May 14, 2026.
- Active source of truth: `docs/responsive/SYSTEMS-PAGE-LOCK-README.md`.
- Page target: `systems.html`.
- Hero target: `.page-hero-system`.
- Library target: `#systems-library.systems-core-library`.
- Core library cards: Player Development Systems, Scouting & Recruiting, DPAT, Program Support, Coaching Philosophy, The Archer.
- Layout: desktop library `3` columns at `>=1025px`, tablet `2` columns from `721px` through `1024px`, mobile `1` column through `720px`.
- Detail sections keep the staff workflow carousels for Player Development, Scouting, Recruiting, DPAT, Program Support and Coaching Philosophy, plus The Archer resource cards.
- DPAT copy must include Defensive Performance Accountability Tracker.
- Preserve the shared hero, cream card system, red titles, `4 / 3` media frames, approved crops, and pill/button style.
- Do not continue Systems-specific cleanup or redesign unless a future bug appears.
- Keep only `1025px` on the Systems watch list because it is the tightest desktop breakpoint; do not redesign it unless there is real overflow, ugly wrapping or button/image collision.

Locked Homepage Media section:

- Status: visually approved and locked as of May 14, 2026.
- Active source of truth: `docs/responsive/HOME-MEDIA-SECTION-LOCK-README.md`.
- Section target: `#media.media-section`.
- Cards render from `mediaAlbums` in `app.js` through `renderGallery()`.
- Card thumbnails stay aligned with the first intended overlay image, and card clicks open the overlay at that matching first item.
- Layout: desktop `3` columns, tablet `2` columns, mobile `1` column.
- Preserve the `4 / 3` image frame, `object-fit: cover`, and title-below-image caption bar.
- Captions keep the 1280px/1440px behavior and use the locked 1600px+ title/padding/arrow scaling.
- Home Media, Media page, and Anaya use the shared media overlay shell.
- Multi-image thumbnail arrows move one image at a time, wrap both directions, and remain draggable/clickable.
- Single-image albums use the single-item overlay state: centered normal-size active thumbnail, thumbnail arrows hidden.
- Do not reintroduce `--gallery-media-height`, duplicate late Home Media overrides, or old overlay rules that hide thumbnail arrows with `!important`.

## Responsive Verification

Use these key sizes for hero/layout work:

```text
1025x768
1280x800
1440x900
1600x900
1920x1080
2560x1440
```

For mobile/tablet color and structure checks, also verify representative widths around `360`, `390`, `430`, `768`, `900`, and `1024`.

## Brand Memory

The active website brand should feel like a polished basketball coaching portfolio: warm, credible, organized, staff-ready, and proof-driven.

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

## Editing Rules

- Keep public website assets under this folder's `assets/` tree.
- Use relative paths in HTML, CSS, JS, and README files.
- Preserve the current page names and nav labels: Home, About, Systems, Featured, Gallery, Contact.
- Preserve the direct contact email: `CoachMatthewFogarty@gmail.com`.
- Preserve `Santa Ana, CA`, `www.coachfogarty.com`, LinkedIn, and Instagram links unless the real contact information changes.
- When adding media, follow `docs/image-export/README.md`, update the album data in `app.js`, and place files in the matching `assets/media/`, `anaya/`, or `assets/the-archer/` folder.
- When adding a new system document, add the PDF under `assets/documents/`, add a WebP preview under `assets/documents/system-previews/`, then link both from `systems.html`.
- Keep DPAT report design files under `dpat/`; do not mix report source/build files into public website pages unless linking to final public PDFs.
