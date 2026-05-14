# Home Page Media Section Spec Audit

Generated: 2026-05-14

Audit folder: `outputs/home-media-section-spec-audit-2026-05-14`

## Scope

This audit covers the Home Page Media section at `coach-fogarty-portfolio/index.html#media`, the shared gallery modal used by that section, all JavaScript that renders or controls the media cards/carousel, all CSS rules found that can affect the section, related image assets, old notes, archive-style rules, and generated audit references.

The most important active files are:

- `coach-fogarty-portfolio/index.html`
- `coach-fogarty-portfolio/app.js`
- `coach-fogarty-portfolio/styles.css`
- `coach-fogarty-portfolio/media.html` because it duplicates the overlay shell
- `coach-fogarty-portfolio/anaya-case-study.html` because it still contains an older overlay duplicate
- `build-responsive-scaling-audit-workbook.mjs` as reference-only historical audit data

## How The Section Currently Works

The Home Media section is a static HTML mount point plus a JavaScript-rendered gallery. The markup in `index.html:170-175` defines the section label, heading, and `#galleryGrid`. The card data lives in `mediaAlbums` in `app.js:211-573`. `renderGallery()` in `app.js:1625-1655` loops through the albums and creates one card per album.

Each card uses the first item in its album as the card thumbnail. Clicking a card calls `openMediaAlbum(album.id, 0)`, so the modal opens to the same first image that appears on the Home card.

The modal is the shared `#mediaOverlay` markup in `index.html:344-360`. `renderMediaOverlay()` fills the title, category, caption, main image, and thumbnail buttons. The large side arrows move the active image one item at a time. The bottom thumbnail carousel now has left and right arrow buttons, and `scrollMediaThumbnails(direction)` moves the thumbnail strip one thumbnail at a time using the first `.media-thumb` width plus the CSS gap. It wraps at both ends.

## Current Active Card Specs

- Section selector: `main#top #media`
- Desktop grid: 3 columns
- Tablet grid: 2 columns at `max-width:1024px`
- Mobile grid: 1 column at `max-width:640px`
- Card frame: `aspect-ratio: 4 / 3`
- Card surface: rounded 10px, overflow hidden, shadow, light background
- Caption row: flex row, title left, circular arrow right
- Card image fit: `object-fit: cover`, with crop variables controlled by class and item data
- Card thumbnail rule: first album item controls both Home card thumbnail and first modal image

## Current Active Modal Specs

- Modal root: `.media-overlay`, fixed full viewport, grid centered, z-index 1000
- Gallery state class: `.media-overlay.is-gallery-overlay`
- Panel: max width about 1250px, max-height 92vh, scrollable internally
- Main image: contained, max-height about 64vh on desktop
- Main nav: large circular previous/next buttons at left/right of viewer
- Thumbnail shell: 3-column grid with left button, horizontal strip, right button
- Thumbnail size default: `--overlay-thumb-width:146px`, `--overlay-thumb-height:82px`
- Thumbnail behavior: click selects image, drag scrolls strip, arrows scroll one image at a time, strip wraps at ends

## Responsive Rules Found

- Breakpoint: Current behavior Recommendation: Recommendation
- All: Home Media renders 6 cards from mediaAlbums and uses shared modal overlay. Recommendation: Keep
- Desktop default: 3-column grid, content-wide max width, 4:3 card image frames. Recommendation: Keep
- <=1024px: Home card grid becomes 2 columns. Recommendation: Keep
- >=1600px: Grid max-width becomes 2040px; unused --gallery-media-height variable set to 360px. Recommendation: Clean up unused variable or wire it intentionally.
- <=900px: Home section variables shrink padding/gaps/caption/title/arrow. Recommendation: Keep
- <=640px: Home grid becomes one column with max-width 430px. Recommendation: Keep
- Overlay desktop: Modal uses 1250px max width, 64vh main image, 146x82 thumbs, 6 visible thumbs variable. Recommendation: Keep
- Overlay mobile: Several responsive/late-lock blocks compete for panel, image, and thumb sizing. Recommendation: Consolidate after redesign.

## Issues, Conflicts, And Old Rules Found

- `main#top #media --gallery-media-height` is set in the Home-specific block and changed again at wide desktop, but the actual card image frame uses `aspect-ratio: 4 / 3` and `height:auto`. This variable appears unused.
- There are generic gallery rules near `styles.css:1589-1825` and Home-specific rules near `styles.css:8343-8485`. This is acceptable, but the Home-specific block should be treated as canonical.
- There are older mobile/gallery/media responsive rules around `styles.css:9270-9965`. Some may still affect this section through broad selectors and should be reviewed before redesign.
- Late-file heading/layout locks around `styles.css:19735-19820` and `styles.css:20028-20270` can override earlier typography/spacing decisions.
- Late mobile overlay locks around `styles.css:20459-20592` and the newest thumbnail shell patch around `styles.css:21078-21094` should be consolidated into one canonical overlay section after the design is locked.
- `media.html` has a matching overlay shell. `anaya-case-study.html` has an older overlay duplicate without the thumbnail arrow shell.
- `build-responsive-scaling-audit-workbook.mjs:63` contains historical homepage gallery measurement notes. It is reference-only and not active runtime styling.

## Recommended Cleanup Plan

1. Keep `mediaAlbums` as the single source for card order, thumbnails, modal order, captions, and category labels.
2. Keep the current rule that card thumbnails use the first album image and modal opens at index 0.
3. Keep the current thumbnail arrow behavior: one thumbnail per click, wrapping left/right at strip edges.
4. Move the late thumbnail shell patch into the main overlay CSS block once the redesigned modal dimensions are approved.
5. Remove or intentionally wire `--gallery-media-height`; right now it reads like a stale spec because aspect ratio controls image height.
6. Consolidate broad old mobile gallery rules and late heading locks into a documented responsive section.
7. Update `anaya-case-study.html` overlay markup or isolate it from shared overlay CSS/JS if it is no longer intended to share Home Media behavior.

## Structured Specs

See:

- `home-media-section-current-specs.csv`
- `home-media-section-current-specs.xlsx`

## Current Specs Preview

| Area | Selector / File / Location | Property / Rule | Current Value | Breakpoint | Notes | Disposition |
| --- | --- | --- | --- | --- | --- | --- |
| HTML | coach-fogarty-portfolio/index.html:170 :: #media | section id and aria-label | <section class="media-section content-section" id="media" aria-label="Program media"> | all | Home Page Media section anchor and landmark. | Keep |
| HTML | coach-fogarty-portfolio/index.html:171 :: #media .section-label | eyebrow text | MEDIA | all | Visible section label above heading. | Keep |
| HTML | coach-fogarty-portfolio/index.html:172 :: #media h2 | heading text | Program Moments | all | Section headline. Typography is heavily overridden in CSS. | Keep |
| HTML | coach-fogarty-portfolio/index.html:173 :: #galleryGrid | dynamic gallery mount | <div class="gallery-grid" id="galleryGrid"></div> | all | Cards are injected by app.js from mediaAlbums. | Keep |
| HTML | coach-fogarty-portfolio/index.html:344 :: #mediaOverlay | shared gallery modal | <div class="media-overlay" id="mediaOverlay" hidden> | all | Home gallery uses the global media overlay markup. | Keep |
| HTML | coach-fogarty-portfolio/index.html:345 :: #mediaOverlayBackdrop | modal backdrop | <button class="media-overlay-backdrop" ...> | all | Click target closes modal. | Keep |
| HTML | coach-fogarty-portfolio/index.html:346 :: #mediaOverlayPanel | modal shell | <div class="media-overlay-panel" ... role="dialog" aria-modal="true"> | all | Dialog container; receives is-gallery-overlay class from JS. | Keep |
| HTML | coach-fogarty-portfolio/index.html:347-351 :: #mediaOverlayCategory/#mediaOverlayTitle/#mediaOverlayCaption | overlay text nodes | category, title, caption | all | Populated from selected media album/item. | Keep |
| HTML | coach-fogarty-portfolio/index.html:352-354 :: #mediaOverlayPrev/#mediaOverlayNext | main image nav buttons | previous and next buttons | all | Large side arrows change the active image. | Keep |
| HTML | coach-fogarty-portfolio/index.html:355 :: #mediaOverlayImage | main image | <img ... decoding="async"> | all | JS controls src/alt/object-position. | Keep |
| HTML | coach-fogarty-portfolio/index.html:356-360 :: .media-overlay-strip-shell | thumbnail carousel shell | left arrow + strip + right arrow | all | Bottom thumbnail carousel includes arrow buttons on both sides. | Keep |
| HTML | coach-fogarty-portfolio/media.html:198-215 :: #mediaOverlay duplicate | same overlay shell | same as home overlay | all | Media page shares the same overlay structure and styles. | Keep |
| HTML | coach-fogarty-portfolio/anaya-case-study.html:388-399 :: #mediaOverlay older duplicate | older overlay shell | strip without .media-overlay-strip-shell | all | Legacy duplicate lacks thumbnail arrow buttons. It may still be affected by shared CSS/JS assumptions. | Archive candidate |
| JavaScript Data | coach-fogarty-portfolio/app.js:211-573 :: mediaAlbums | gallery source data | 6 album objects | all | Single source for Home Media card order, card thumbnails, overlay titles, captions, category labels, and image arrays. | Keep |
| JavaScript Data | coach-fogarty-portfolio/app.js:213-248 :: mediaAlbums[0] | Leadership in Action | 6 items | all | First image is the card thumbnail and opens first in carousel. | Keep |
| JavaScript Data | coach-fogarty-portfolio/app.js:251-358 :: mediaAlbums[1] | Teaching Moments | 12 items | all | First image is the card thumbnail and opens first in carousel. | Keep |
| JavaScript Data | coach-fogarty-portfolio/app.js:361-379 :: mediaAlbums[2] | Player Growth | 1 item | all | Single-image album; overlay nav buttons should hide/disable naturally via JS. | Keep |
| JavaScript Data | coach-fogarty-portfolio/app.js:381-408 :: mediaAlbums[3] | Program Standards | 2 items | all | First image is the card thumbnail and opens first in carousel. | Keep |
