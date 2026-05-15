# Home Hero Right Column Lock Prep

Date: 2026-05-14

This documents the desktop-only scoped class conversion for the Home hero right column. The same right-column hooks are now reused by `.page-hero-system` on Systems, Featured, Gallery/Media, Anaya Beard Case Study, and The Archer.

## Scoped Classes

- `.hero-right-system` is the real hero right-column grid item on desktop.
- `.hero-portrait-card` is the measured portrait card box.
- `.hero-portrait-picture` is the full-size picture wrapper.
- `.hero-portrait-image` is the controlled portrait image.
- `.hero-portrait-overlay` is the desktop-safe overlay name for the Portfolio Highlight links.
- `.hero-portrait-overlay-title` is the overlay label.
- `.hero-portrait-overlay-text` is the overlay link row.

## Desktop Contract

- `.hero-right-system` overrides the legacy desktop `display: contents` behavior and becomes a measurable grid item.
- `.hero-right-system` bottom-aligns inside the two-row desktop grid so the portrait/card bottom stays aligned with the 2-row stat-pill group when copy wraps differently across breakpoints.
- `.hero-portrait-card` follows the hero right grid track and keeps the existing visual card styling.
- `.hero-portrait-image` keeps `object-fit: cover` and `object-position: 50% 0%`.
- `2200px+` keeps the grid column gap at `0px` to avoid resizing the approved left copy/stat-pill lane, but adds `--home-hero-right-visual-gap: clamp(32px, 2vw, 56px)` as a scoped right-column visual offset.
- Existing `--home-hero-image-height` breakpoint values are preserved through `2199px`; `2200px+` now uses `clamp(500px, calc(644px - 6vw), 512px)` for a smaller ultra-wide portrait.
- `2200px+` overlay width uses `min(calc(100% - 26px), clamp(560px, 25vw, 680px))` to stay proportional to the wider portrait while remaining contained.
- At `2200px+`, `.hero-pill-system` does not use a lift transform. Width, columns, and horizontal alignment remain unchanged; bottom alignment comes from the right-column grid item.
- The approved `2200px+` stat-pill scale is `82px` height, `26px` main value text, and `13.5px` sub-label text.

## Ultra-Wide Gap Review

- `32px` was the most conservative option, but it still reads close to the old `0px` gap at `2200px`.
- `48px` works well at `2400px`, but is slightly more rigid across the tested range.
- A true CSS `column-gap` was rejected because it reduced the approved left-column/stat-pill width at `2200px` and `2400px`.
- `--home-hero-right-visual-gap: clamp(32px, 2vw, 56px)` was selected because it computes to `44px` at `2200px`, `48px` at `2400px`, and `51.2px` at `2560px`, keeping the wide layout close while preventing visual crowding without resizing the pill grid.

## Ultra-Wide Height Review

- `1920px` remains unchanged at the approved `380.6px` image height.
- Current `2200px+` portrait height computes to `512px` at `2200px` and `500px` at `2400px+`.
- Fixed tests at `512px / -52px`, `500px / -60px`, and `488px / -68px` were reviewed during the earlier balance pass. The final lock keeps the responsive portrait height ramp and removes pill-lift transforms; the right column bottom-aligns to the pill group.
- The crop remains controlled by `object-fit: cover` and `object-position: 50% 0%`.

## Legacy Rules Kept

The legacy classes `.hero-visual`, `.portrait-card`, `.hero-mobile-highlight`, `.page-highlight-bar`, and their broad selectors remain in the markup/CSS for tablet/mobile compatibility and older shared hero variants. The Home desktop lock and reusable page-hero lock now use the scoped classes listed above as the authoritative hooks.

## Reuse Note

Do not copy `.hero-mobile-highlight` or `.page-highlight-bar` as the desktop system hook for new page heroes. Keep them only where tablet/mobile compatibility or older markup still depends on them; use `.hero-portrait-overlay` for the reusable desktop system.
