# Home Media Cleanup And Design-Lock Plan

Generated: 2026-05-14

Status: planning only. No live design changes have been made.

## Executive Decision

Use the Home-specific media/card block as the canonical card system, but update the audit line reference:

- Audit reference: `coach-fogarty-portfolio/styles.css:8343-8485`
- Current verified location: `coach-fogarty-portfolio/styles.css:8154-8295`
- Canonical selector family: `main#top #media ...`

This block should control Home Media section spacing, grid, card sizing, caption sizing, title sizing, arrow sizing, and Home-specific responsive card behavior.

Shared/global systems should remain shared:

- `coach-fogarty-portfolio/styles.css:1435-1672`: generic gallery grid/card/media/crop/caption base rules
- `coach-fogarty-portfolio/styles.css:1674-2189`: shared media overlay/modal base rules
- `coach-fogarty-portfolio/app.js:211-573`: `mediaAlbums` data source
- `coach-fogarty-portfolio/app.js:1625-1655`: `renderGallery()`
- `coach-fogarty-portfolio/app.js:2133-2161`: one-thumbnail-at-a-time thumbnail carousel scroll
- `coach-fogarty-portfolio/app.js:2174-2256`: `renderMediaOverlay()`
- `coach-fogarty-portfolio/app.js:2610-2679`: modal arrows, thumbnail arrows, thumbnail click/drag behavior

## Non-Negotiables

- Do not change `mediaAlbums` order or image order.
- Do not change card thumbnail logic.
- Card thumbnail stays tied to the album thumbnail / first intended carousel image.
- Thumbnail arrows stay one image/thumbnail per click.
- Thumbnail arrows wrap at both ends.
- The Magic Elite championship image in Winning Standard stays at the end of that carousel.
- Do not break the shared modal used by Home Media and the media library.

## Canonical Home Media Specs

| Spec | Locked Value |
| --- | --- |
| Section eyebrow | HTML text `Media`; visual system may uppercase it as `MEDIA` |
| Section title | `Program Moments` |
| Canonical section selector | `main#top #media` |
| Canonical card block | `styles.css:8154-8295` |
| Desktop grid | `repeat(3, minmax(0, 1fr))` |
| Tablet grid | `repeat(2, minmax(0, 1fr))` at `max-width: 1024px` |
| Mobile grid | One column via global mobile grid rules; should be moved into/confirmed inside canonical Home block |
| Card aspect ratio | `4 / 3` |
| Card image fit | `object-fit: cover`; crop controlled by `--img-x`, `--img-y`, `--img-zoom` |
| Card gap | `--gallery-grid-gap: clamp(14px, 1.35vw, 22px)` desktop; `clamp(14px, 2vw, 22px)` tablet; `clamp(8px, 2.6vw, 14px)` mobile |
| Card border radius | `clamp(16px, 1.35vw, 22px)` on card; media frame radius `0` inside card |
| Caption layout | Grid: `minmax(0, 1fr) var(--gallery-arrow-size)` |
| Caption padding | `var(--gallery-caption-pad-y) var(--gallery-caption-pad-x) calc(var(--gallery-caption-pad-y) + 1px)` |
| Caption title size | `--gallery-title-size`, default `clamp(0.86rem, calc(0.68rem + 0.34vw), 1rem)` |
| Caption title behavior | single line, ellipsis, `white-space: nowrap` |
| Arrow icon size | `--gallery-arrow-size`, default `clamp(20px, 1.7vw, 24px)` |
| Section spacing | `padding: var(--gallery-section-pad) !important`, default `clamp(28px, 3vw, 42px)` |
| Desktop max width behavior | At `min-width:1600px`, gallery grid maxes at `2040px` and centers |
| Modal thumbnail behavior | horizontal strip, drag scroll, click to select, arrows on both sides, arrows move one thumbnail at a time, wrap both directions |

## Stale Spec Decision

`--gallery-media-height` should be removed, not wired.

Reason: the locked visual direction uses `aspect-ratio: 4 / 3` and `height: auto` on `main#top #media .gallery-card .gallery-media`. The height variable is declared repeatedly but does not control the card frame.

Remove these declarations during cleanup:

- `styles.css:8158`: `--gallery-media-height: clamp(168px, 15.5vw, 230px);`
- `styles.css:8250`: `--gallery-media-height: clamp(260px, 12.5vw, 330px);`
- `styles.css:8265`: `--gallery-media-height: clamp(145px, 16vw, 178px);`
- `styles.css:8275`: `--gallery-media-height: clamp(170px, 22vw, 230px);`
- `styles.css:8284`: `--gallery-media-height: clamp(92px, 29vw, 142px);`

## Rule Classification

### Generic Gallery Card Base

| Location | Selectors | Label | Action |
| --- | --- | --- | --- |
| `styles.css:1000-1003` | `.gallery-grid` shared display/gap | KEEP | Shared grid baseline. Home-specific block overrides gap. |
| `styles.css:1435-1437` | `.gallery-grid` 3-column base | KEEP | Shared default; Home canonical block repeats and strengthens it. |
| `styles.css:1439-1450` | `.gallery-card` button/card reset | KEEP | Shared card baseline. Do not duplicate in Home block. |
| `styles.css:1453-1459` | `.gallery-media` 4:3 media frame | KEEP | Shared ratio baseline. Home block remains explicit. |
| `styles.css:1461-1469` | `.gallery-card img` image fit/crop vars | KEEP | Shared crop mechanism. |
| `styles.css:1471-1624` | `.gallery-card-sideline`, `.gallery-card-huddle`, `.gallery-card-teaching`, `.gallery-card-oncourt`, `.gallery-card-celebration`, `.gallery-card-culture` | KEEP | Card-specific crop rules; leave shared. |
| `styles.css:1626-1667` | generic caption/title/arrow rules | KEEP | Shared baseline; Home block overrides values under `main#top #media`. |
| `styles.css:1669-1672` | `.gallery-card:hover` | KEEP | Shared hover. |

### Canonical Home Media Block

| Location | Selectors | Label | Action |
| --- | --- | --- | --- |
| `styles.css:8154-8165` | `main#top #media` variables and padding | REWRITE | Keep as canonical; remove unused `--gallery-media-height`. |
| `styles.css:8167-8174` | `main#top #media .section-heading`, `.eyebrow` | KEEP | Home-specific heading spacing/eyebrow sizing. Must not be overridden later. |
| `styles.css:8176-8180` | `main#top #media .gallery-section-title` | KEEP | Home-specific title sizing. Must be protected from later broad heading locks. |
| `styles.css:8182-8189` | `main#top #media .gallery-grid` | KEEP | Canonical desktop card grid. |
| `styles.css:8191-8198` | `main#top #media .gallery-card` | KEEP | Canonical Home card shell. |
| `styles.css:8200-8206` | `main#top #media .gallery-card .gallery-media` | KEEP | Canonical Home media frame. |
| `styles.css:8208-8222` | Home caption selectors | KEEP | Canonical Home caption layout/padding. |
| `styles.css:8224-8233` | Home title selectors | KEEP | Canonical Home card title. |
| `styles.css:8235-8240` | Home arrow selectors | KEEP | Canonical Home card arrow size. |
| `styles.css:8242-8246` | `@media (max-width:1024px)` 2-column grid | KEEP | Canonical tablet grid. |
| `styles.css:8248-8258` | `@media (min-width:1600px)` grid max width | REWRITE | Keep max-width/centering; remove stale media-height variable. |
| `styles.css:8260-8277` | tablet variable overrides | REWRITE | Keep active spacing/title/arrow vars; remove stale media-height vars. |
| `styles.css:8279-8295` | mobile variable/title overrides | REWRITE | Keep active spacing/title/arrow vars; remove stale media-height var. Add explicit one-column grid here if removing broad mobile grid locks. |

### Older Mobile/Gallery Overlap Rules

| Location | Selectors | Label | Action |
| --- | --- | --- | --- |
| `styles.css:5440-5442` | `.gallery-grid` 2 columns | KEEP | Shared tablet-ish baseline if still inside its current media query; do not treat as Home source of truth. |
| `styles.css:6375-6382` | `.gallery-grid`, `.gallery-card` mobile/tablet baseline | ARCHIVE / COMMENT OUT ONLY IF SAFE | Broad legacy rule. Verify scope before removing; Home block should own Home card behavior. |
| `styles.css:8931-8948` | broad mobile heading locks including `main#top #media .section-heading h2` | REWRITE | Remove Home Media from broad selector or move equivalent into canonical Home block. Currently can fight `gallery-section-title`. |
| `styles.css:9025-9061` | mobile Home Media grid/card/media/caption overrides | MOVE INTO CANONICAL BLOCK | These are Home-specific but live in a broad mobile cleanup area. Fold needed values into `styles.css:8154-8295`; remove duplicate after visual match. |
| `styles.css:9215-9221` | broad mobile `.gallery-grid` 2-column lock | REWRITE | Keep only if needed globally. Home Media should get explicit mobile/tablet grid in canonical block. |
| `styles.css:9450-9465` | broad mobile section/grid gap locks | REWRITE | Keep global gaps only if still needed. Avoid overriding Home `--gallery-grid-gap`. |
| `styles.css:9493-9553` | duplicate Home Media mobile grid/card/caption/title/arrow rules | MOVE INTO CANONICAL BLOCK | Duplicate of earlier Home mobile block. Fold needed values into canonical block and remove duplicate. |
| `styles.css:9556-9578` | duplicate generic gallery-card-caption/title/arrow rules | REMOVE | Duplicates `styles.css:1637-1667`. Remove after confirming no selector gap. |
| `styles.css:9580-9602` | late Home Media title/caption mobile tweaks | MOVE INTO CANONICAL BLOCK | Preserve intended small-phone title/caption behavior under canonical Home block, then remove late copy. |
| `styles.css:10423-10432` | broad mobile one-column `.gallery-grid` | MOVE INTO CANONICAL BLOCK / REWRITE | Home needs one-column mobile behavior, but it should be explicit under `main#top #media` instead of relying only on broad grid locks. |

### Shared Overlay/Modal Base

| Location | Selectors | Label | Action |
| --- | --- | --- | --- |
| `styles.css:1674-1687` | `.media-overlay`, `.media-overlay.is-open` | KEEP | Shared overlay root/open state. |
| `styles.css:1689-1695` | `.media-overlay.is-gallery-overlay` vars | KEEP | Shared gallery overlay sizing variables. |
| `styles.css:1697-1719` | `.media-overlay-open`, `.media-overlay-panel`, gallery panel | KEEP | Shared modal panel system. |
| `styles.css:1721-1749` | `.media-overlay-content`, gallery content grid | KEEP | Shared layout grid. |
| `styles.css:1751-1800` | eyebrow/title/viewer/image/portrait states | KEEP | Shared modal content rules. |
| `styles.css:1802-1815` | gallery viewer sizing | KEEP | Shared gallery viewer lock. |
| `styles.css:1817-1902` | awards overlay variants | KEEP | Shared with Playing Career Awards. Be careful not to break. |
| `styles.css:1904-1928` | caption/counter | KEEP | Shared modal text metadata. |
| `styles.css:1930-1971` | thumbnail strip shell and thumbnail nav | KEEP | Shared thumbnail-arrow shell base. |
| `styles.css:1973-1997` | thumbnail strip | KEEP | Shared horizontal strip base. |
| `styles.css:1999-2026` | `.media-thumb`, `.media-thumb img` | KEEP | Shared thumb sizing and image fit. |
| `styles.css:2057-2112` | close and main nav buttons | KEEP | Shared modal controls. |
| `styles.css:2114-2189` | tablet/short-height overlay adjustments | KEEP | Shared responsive overlay adjustments. |

### Overlay Rules That Fight Each Other

| Location | Selectors | Label | Action |
| --- | --- | --- | --- |
| `styles.css:6476-6578` | older mobile `.media-overlay` block | REMOVE | Superseded by later final overlay rules. Contains large bottom padding and alternate thumb padding that can fight the current shell. |
| `styles.css:9357-9383` | older mobile `.media-overlay-panel`/nav block | REMOVE | Superseded by current shared overlay and final mobile overlay rules. |
| `styles.css:9783-9887` | older compact mobile gallery/awards overlay block | REWRITE | Fold any needed small-height values into one canonical mobile overlay block, then remove this duplicate. |
| `styles.css:20081-20233` | final mobile gallery overlay block | MOVE INTO CANONICAL BLOCK | Keep the intent, but move beside shared overlay rules. Rewrite the thumbnail-shell pieces below. |
| `styles.css:20190-20198` | hides thumbnail nav on mobile and collapses shell to one column | REWRITE | This fights the requested arrow-on-both-sides behavior and beats the newer patch with `!important`. Replace with a three-column shell and visible thumb buttons. |
| `styles.css:20716-20724` | newest strip-shell strip patch | MOVE INTO CANONICAL BLOCK | Keep this adjustment, but place it in the shared overlay section rather than as a late patch. |
| `styles.css:20726-20737` | newest mobile thumb shell/button sizing | MOVE INTO CANONICAL BLOCK | Keep the intended mobile shell/button sizes. Needs specificity/placement that beats the old hidden-nav rule after that rule is removed. |

### Late Heading/Layout Locks

| Location | Selectors | Label | Action |
| --- | --- | --- | --- |
| `styles.css:19365-19409` | desktop home section heading locks including `main#top #media` | REWRITE | This can override canonical Home Media heading spacing/title sizing. Remove `#media` from broad lock or move exact intended values into canonical Home block. |
| `styles.css:19596-19743` | unified site section heading system including `main#top #media` | REWRITE | Good global system, but Home Media needs one source of truth. Either exclude `#media` or deliberately set Home values inside canonical block after this system. |
| `styles.css:19759-19774` | broad heading-content margin reset including `.section-heading + .gallery-grid` | REWRITE | Can override Home heading-to-grid rhythm. Home Media should use `--gallery-heading-gap` from canonical block. |

## Overlay Markup Recommendation

Use one shared overlay system.

Current markup:

- `index.html:344-360`: newer overlay shell with counter and thumbnail arrow shell.
- `media.html:198-215`: newer overlay shell with counter and thumbnail arrow shell.
- `anaya-case-study.html:388-399`: older overlay shell with bare `#mediaOverlayStrip`, no counter, no `#mediaOverlayStripShell`, no thumbnail arrows.

Recommended cleanup:

1. Update `anaya-case-study.html` to the same overlay shell used by `index.html` and `media.html`.
2. Keep Anaya's visible eyebrow text as `ANAYA GALLERY` if desired by setting the existing eyebrow content or by data-driven JS.
3. Do not fork overlay CSS for Anaya unless there is a specific design requirement.
4. Keep JS optional checks for `mediaOverlayCounter`, `mediaOverlayStripShell`, `mediaOverlayThumbPrev`, and `mediaOverlayThumbNext` so pages remain resilient.

Safest fallback if Anaya must stay visually different:

- Add a page-specific class to the Anaya overlay and isolate its old strip behavior from `.media-overlay.is-gallery-overlay`.
- Do not let the bare strip inherit shell-specific assumptions.

## Exact Rules To Remove Or Consolidate After Approval

Remove stale variable declarations:

- `main#top #media --gallery-media-height` at current lines `8158`, `8250`, `8265`, `8275`, `8284`

Move into canonical Home block, then delete the late duplicate copies:

- `styles.css:9025-9061`
- `styles.css:9493-9553`
- `styles.css:9580-9602`

Remove duplicate generic caption rules if no selector gap remains:

- `styles.css:9556-9578`

Move into shared overlay/modal block, then delete late patch position:

- `styles.css:20081-20233`, but rewrite `20190-20198`
- `styles.css:20716-20737`

Remove or archive after visual parity is confirmed:

- `styles.css:6476-6578`
- `styles.css:9357-9383`
- `styles.css:9783-9887`

Rewrite broad heading locks so Home Media is not controlled in two places:

- `styles.css:8931-8948`
- `styles.css:19365-19409`
- `styles.css:19596-19743`
- `styles.css:19759-19774`

## Rules That Must Stay Untouched

- `coach-fogarty-portfolio/app.js:211-573`: `mediaAlbums`
- `coach-fogarty-portfolio/app.js:1625-1655`: `renderGallery()`
- `coach-fogarty-portfolio/app.js:2133-2161`: `scrollMediaThumbnails(direction)`
- `coach-fogarty-portfolio/app.js:2174-2256`: `renderMediaOverlay()`
- `coach-fogarty-portfolio/app.js:2610-2679`: modal and thumbnail event handlers
- `coach-fogarty-portfolio/index.html:170-175`: Home Media semantic section/content unless copy changes are explicitly requested
- `coach-fogarty-portfolio/index.html:344-360`: current shared overlay shell
- `coach-fogarty-portfolio/media.html:198-215`: current shared overlay shell
- `styles.css:1471-1624`: album-specific crop rules

## Proposed Cleanup Sequence

1. Add a short comment above `styles.css:8154` marking the Home Media block as canonical.
2. Remove `--gallery-media-height` declarations from the Home Media block and responsive variants.
3. Move any still-needed Home-specific mobile rules from late blocks into the canonical Home Media block.
4. Add explicit mobile one-column Home grid behavior under `main#top #media` if the cleanup removes broad `.gallery-grid` mobile locks.
5. Rewrite broad heading locks so they do not override Home Media's canonical heading/title rules.
6. Move the final overlay mobile behavior and thumbnail-shell patch into the shared overlay section near `styles.css:1674-2189`.
7. Replace the mobile hidden thumbnail-nav rule with visible left/right thumbnail buttons.
8. Remove superseded older mobile overlay blocks after visual parity is confirmed.
9. Unify `anaya-case-study.html` overlay markup with the shared overlay shell.
10. Run syntax and visual QA.

## Visual QA Checklist

Run Home page checks at these viewport widths:

- 375
- 720
- 768
- 1024
- 1280
- 1440
- 1600
- 1920
- 2560

For each viewport, verify:

- Home Media section still appears after the Archer/hero section in the same location.
- Eyebrow reads correctly and does not wrap awkwardly.
- `Program Moments` fits without clipping or overlapping.
- Card grid matches lock: desktop 3 columns, tablet 2 columns, mobile 1 column.
- Card aspect ratio remains 4:3.
- Card images fill frames with no blank bars.
- Card captions do not overflow or collide with arrow icons.
- Card arrow icons remain centered and consistent.
- Section top/bottom padding visually matches the current design.
- At 1600, 1920, and 2560, gallery width caps/centers correctly and does not sprawl beyond the intended width.
- Clicking each card opens the first intended image for that card.
- The modal main arrows move one media item at a time.
- Thumbnail strip arrows appear on both sides wherever the thumbnail strip is shown.
- Thumbnail strip arrows move one thumbnail at a time.
- Thumbnail strip arrows wrap at both ends.
- Dragging the thumbnail strip still works.
- Clicking a thumbnail still selects the matching main image.
- Single-image albums do not show broken controls.
- Winning Standard keeps Magic Elite championship image at the end.
- Media Library modal still works.
- Anaya modal still works after markup unification or isolation.

## Approval Decision Needed

Recommended approval path:

- Approve `styles.css:8154-8295` as the Home Media card source of truth.
- Approve removing `--gallery-media-height`.
- Approve unifying Anaya overlay markup with the shared shell.
- Approve keeping thumbnail arrows visible on both sides of the thumbnail carousel, including mobile, with one-thumbnail scroll and wrapping.

