# ChatGPT Handoff: Home Page Media Section

Generated: 2026-05-14

Historical/reference note: this handoff captured the pre-lock audit state. It is no longer the active source of truth, and some line numbers reflect pre-cleanup code. Use `coach-fogarty-portfolio/docs/responsive/HOME-MEDIA-SECTION-LOCK-README.md` for the locked Home Media specs.

## Current Source Of Truth

The Home Page Media section lives at `coach-fogarty-portfolio/index.html:170-175`. The visible cards are rendered into `#galleryGrid` by `renderGallery()` in `coach-fogarty-portfolio/app.js:1625-1655`.

The media content source is `mediaAlbums` in `coach-fogarty-portfolio/app.js:211-573`. Each card thumbnail is the first image in its album. Clicking any Home Media card opens the modal at image index 0, so the first thumbnail in the modal matches the card thumbnail.

The shared modal markup is in `coach-fogarty-portfolio/index.html:344-360`. The bottom thumbnail carousel includes a left arrow, horizontal thumbnail strip, and right arrow.

## Current Specs

- Section eyebrow: MEDIA
- Section title: Program Moments
- Desktop card grid: 3 columns
- Tablet card grid: 2 columns at `max-width:1024px`
- Mobile card grid: 1 column at `max-width:640px`
- Card image ratio: 4:3
- Card caption: title plus circular arrow icon
- Modal main image: contained image with large left/right arrows
- Modal thumbnail strip: horizontal, draggable, clickable, and arrow-controlled
- Thumbnail carousel arrows: move one image/thumbnail at a time, not a whole section
- Thumbnail carousel edge behavior: wraps in either direction
- Winning Standard album: Magic Elite championship image is at the end of the carousel

## Files And Selectors To Check Before Redesign

- `coach-fogarty-portfolio/index.html:170-175`: Home Media section markup
- `coach-fogarty-portfolio/index.html:344-360`: Home modal markup
- `coach-fogarty-portfolio/media.html:198-215`: duplicate overlay markup
- `coach-fogarty-portfolio/anaya-case-study.html:388-399`: older overlay duplicate without thumbnail arrows
- `coach-fogarty-portfolio/app.js:211-573`: mediaAlbums content/order
- `coach-fogarty-portfolio/app.js:1625-1655`: card rendering
- `coach-fogarty-portfolio/app.js:2105-2161`: thumbnail auto-scroll and arrow scroll behavior
- `coach-fogarty-portfolio/app.js:2174-2256`: modal rendering
- `coach-fogarty-portfolio/app.js:2610-2679`: overlay arrows, thumbnail arrows, drag/click behavior
- `coach-fogarty-portfolio/styles.css:1589-1825`: generic gallery card rules
- `coach-fogarty-portfolio/styles.css:1828-2310`: overlay/modal rules
- `coach-fogarty-portfolio/styles.css:8343-8485`: canonical Home Media section/card responsive rules
- `coach-fogarty-portfolio/styles.css:9270-9965`: older mobile/gallery overlap rules
- `coach-fogarty-portfolio/styles.css:19735-19820` and `20028-20270`: late heading/layout locks
- `coach-fogarty-portfolio/styles.css:20459-20592`: late mobile overlay locks
- `coach-fogarty-portfolio/styles.css:21078-21094`: newest thumbnail shell patch

## Issues Or Conflicts Found

1. `--gallery-media-height` appears stale or unused because card frames use `aspect-ratio: 4 / 3`.
2. Home Media is controlled by both generic gallery rules and later Home-specific rules. The Home-specific block should be treated as canonical.
3. Multiple late responsive/heading/overlay locks can override earlier rules and should be consolidated.
4. `anaya-case-study.html` still has older overlay markup without thumbnail arrows.
5. Historical audit code in `build-responsive-scaling-audit-workbook.mjs` includes old homepage gallery specs but is not active runtime code.

## Recommended Cleanup Plan

1. Keep `mediaAlbums` as the content/order source of truth.
2. Keep card thumbnail equals first carousel image.
3. Keep thumbnail arrows moving exactly one thumbnail at a time.
4. Consolidate the late thumbnail-shell patch into the main overlay CSS block.
5. Remove or intentionally use `--gallery-media-height`.
6. Consolidate old mobile gallery rules and late heading locks after the redesign direction is approved.
7. Decide whether `media.html` and `anaya-case-study.html` should share the same overlay component or use isolated markup/styles.

## Decisions Needed Before Redesign

- Should the Home Media card grid stay 3/2/1 columns, or should desktop go wider with more columns?
- Should card image height remain ratio-based, or should a fixed responsive height be introduced?
- Should modal thumbnail arrows wrap forever, or disable at the ends?
- Should duplicate overlay markup be unified into one reusable component?
- Should the older mobile/late-lock CSS blocks be archived immediately or only after visual QA?
