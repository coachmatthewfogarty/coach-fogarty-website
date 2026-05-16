# Home Media Section Lock

Locked: 2026-05-14

Status: active source of truth for the Home page Media section. If an older audit, handoff, CSV, workbook, or note conflicts with this document, use this document plus the active code comments/selectors listed below.

## Active Files

- `index.html`: owns the Home Media mount point at `#media` and the shared `#mediaOverlay` shell.
- `app.js`: owns `mediaAlbums`, `renderGallery()`, `openMediaAlbum()`, `renderMediaOverlay()`, and thumbnail carousel behavior.
- `styles.css`: owns the canonical Home Media CSS block and the shared overlay/modal system.
- `media.html`: uses the same shared overlay shell.
- `anaya-case-study.html`: uses the same shared overlay shell, with Anaya-specific eyebrow text.

## Current Locked Structure

The Home Media section lives in `index.html` as:

- Section selector: `section#media.media-section`
- Grid mount: `#galleryGrid.gallery-grid`
- Eyebrow text: `Media`
- Section title: `Program Moments`

Cards render from `mediaAlbums` in `app.js`. `renderGallery()` is the only active Home Media card renderer. It creates one button card per album, uses the album thumbnail for the card image, stores the matching album/item indices on the card, and opens the overlay through `openMediaAlbum(...)` when the card is clicked.

Locked thumbnail behavior:

- The Home card thumbnail must remain aligned with the first intended overlay image for that album.
- In the locked content set, the card thumbnail and first overlay image match.
- Clicking a card opens the overlay at the matching first image/item index.
- Do not change `mediaAlbums` order, individual image order, captions, category labels, or thumbnail alignment unless intentionally updating content.

## Current Locked Card Layout

The canonical Home Media card CSS is the Home-specific block in `styles.css` beginning with:

```css
/* Canonical Home Media system: card layout, responsive rhythm, and ratio-based thumbnails. */
main#top #media { ... }
```

This block controls Home Media spacing, max-width behavior, grid columns, card sizing, caption spacing, title sizing, arrow sizing, and responsive card behavior.

Locked card specs:

- Desktop grid: `3` columns.
- Tablet grid: `2` columns.
- Mobile grid: `1` column.
- Desktop media rail: Home Media image widths follow the full-bleed Systems & Proof media frame reference from `1025px+`.
- Desktop reference widths: about `278.3px` at `1025px`, `362.8px` at `1280px`, `415px` at `1440px`, `465.5px` at `1600px`, `513.9px` at `1920px`, and `692.7px` at `2560px`.
- Card image frame: `aspect-ratio: 4 / 3`.
- Card image fit: `object-fit: cover`.
- Card titles stay below images in the caption bar.
- Do not overlay titles on images.
- Caption row holds the title on the left and the circular arrow on the right.
- Caption title should stay on one line where possible, with ellipsis protection.
- 1280px and 1440px desktop behavior now follows the full-bleed Systems & Proof frame-width rhythm.
- 1600px, 1920px, and 2560px use the locked 1600+ caption/title/arrow scaling so captions feel proportional to larger cards while the grid stays on the approved Home rail.
- Cards keep the current image-forward visual direction and 3x2 desktop rhythm.
- Do not reintroduce the old centered `2040px` desktop max-width that made the 2560px Home Media grid drift inward from the approved Home rail.

Do not add duplicate late Home Media overrides after the canonical block. If a future card rule is needed, update the canonical block unless the rule is truly shared/global.

## Current Locked Overlay Behavior

Home Media, the Media page, and Anaya use the shared `#mediaOverlay` structure:

- `.media-overlay`
- `.media-overlay-panel`
- `.media-overlay-close`
- `.media-overlay-nav.media-overlay-prev`
- `.media-overlay-content`
- `.media-overlay-counter`
- `.media-overlay-viewer`
- `.media-overlay-caption`
- `.media-overlay-strip-shell`
- `.media-overlay-thumb-nav.media-overlay-thumb-prev`
- `.media-overlay-strip`
- `.media-overlay-thumb-nav.media-overlay-thumb-next`
- `.media-overlay-nav.media-overlay-next`

Locked overlay behavior:

- Multi-image albums show thumbnail arrows.
- Thumbnail arrows move one thumbnail/image at a time.
- Thumbnail arrows wrap at both ends.
- Thumbnail strip remains draggable and clickable.
- Clicking a thumbnail selects that image.
- Main overlay arrows move through media items and remain separate from thumbnail strip arrows.
- Single-image albums use the single-item state.
- Single-image thumbnail is centered, normal sized, and active.
- Single-image thumbnail arrows are hidden because there is nothing to scroll.

Single-image state selectors:

- `.media-overlay--single-item`
- `.media-overlay-strip-shell.is-single-item`
- `.media-overlay-strip.has-single-thumb`

Do not reintroduce old overlay CSS that hides thumbnail arrows with broad selectors or `!important`. Mobile, tablet, and desktop thumbnail arrows should remain visible for multi-image albums.

## Cleanup Notes

`--gallery-media-height` was removed during the lock pass and should not be reintroduced. Home Media cards are intentionally ratio-based through `aspect-ratio: 4 / 3`; do not wire a fixed media-height variable back into the card system.

Keep these systems separate:

- Home-specific card/layout rules belong in the canonical Home Media block.
- Generic gallery card base rules stay shared.
- Shared overlay/modal rules stay shared.
- `mediaAlbums` remains the content/data source for Home cards and the Gallery Hub.
- `renderGallery()` remains the Home card renderer.
- `renderMediaOverlay()` and `scrollMediaThumbnails()` remain the shared modal/thumbnail behavior.

Avoid these regressions:

- Do not add broad mobile/tablet/desktop rules that override the canonical Home Media block.
- Do not add duplicate late Home Media locks later in `styles.css`.
- Do not add old overlay/mobile rules that hide thumbnail arrows.
- Do not change `mediaAlbums` order unless the content order is intentionally being updated.
- Do not decouple card thumbnails from the first intended overlay image.
- Do not move titles onto the card images.

## Historical References

The generated audit folder remains useful history, but it is not the active spec:

```text
../../../outputs/home-media-section-spec-audit-2026-05-14/
```

Those files may contain old line numbers and pre-cleanup findings. Treat them as historical/reference only. The active Home Media source of truth is this document, the root `README.md` active-doc table, `docs/responsive/README.md`, and the canonical Home Media/shared overlay code.

## Final Lock Note

Home Media is locked as of the 2026-05-14 cleanup/refinement pass. Future edits should start from the canonical Home Media block in `styles.css` plus the shared overlay system in `index.html`, `media.html`, `anaya-case-study.html`, and `app.js`.
