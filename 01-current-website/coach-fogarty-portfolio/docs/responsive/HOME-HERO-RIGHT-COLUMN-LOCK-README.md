# Home Hero Right Column Lock Prep

Date: 2026-05-14

This documents the desktop-only scoped class conversion for the Home hero right column.

## Scoped Classes

- `.hero-right-system` is the real Home hero right-column grid item on desktop.
- `.hero-portrait-card` is the measured portrait card box.
- `.hero-portrait-picture` is the full-size picture wrapper.
- `.hero-portrait-image` is the controlled portrait image.
- `.hero-portrait-overlay` is the desktop-safe overlay name for the Portfolio Highlight links.
- `.hero-portrait-overlay-title` is the overlay label.
- `.hero-portrait-overlay-text` is the overlay link row.

## Desktop Contract

- `.hero-right-system` overrides the legacy desktop `display: contents` behavior and becomes a measurable grid item.
- `.hero-portrait-card` follows the hero right grid track and keeps the existing visual card styling.
- `.hero-portrait-image` keeps `object-fit: cover` and `object-position: 50% 0%`.
- `2200px+` uses `--home-hero-column-gap: clamp(32px, 2vw, 56px)` instead of the previous `0px` wide-desktop gap.
- Existing `--home-hero-image-height` breakpoint values are preserved for visual continuity.

## Legacy Rules Kept

The legacy classes `.hero-visual`, `.portrait-card`, `.hero-mobile-highlight`, and their broad selectors remain in the markup/CSS for tablet/mobile compatibility and older shared hero variants. The Home desktop lock now uses the scoped classes listed above as the authoritative hooks.

## Remaining Approval Note

Before applying this system to subpage heroes, review whether the legacy `.hero-mobile-highlight` class should be fully removed after tablet/mobile selectors are migrated to `.hero-portrait-overlay`.
