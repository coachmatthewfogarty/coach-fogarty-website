# HOME HERO DESKTOP MASTER LOCK

Date: 2026-05-15

The Home Hero desktop system is the approved source for page hero systems. It has now been applied to Home, Systems, Featured, Gallery/Media, Anaya Beard Case Study, The Archer, and Credentials through the scoped `.page-hero-system` hook. About and Contact remain excluded.

## Scope

Desktop lock begins at `1025px`. Tablet and mobile now use the same `.page-hero-system` source of truth.

Reusable page heroes must use the Home hero class hooks:

- `.page-hero-system` on the upgraded page hero section.
- `.hero-left-system` on the copy lane.
- `.hero-pill-system`, `.hero-pill`, `.hero-pill-main`, and `.hero-pill-sub` on the pill/action group.
- `.hero-right-system`, `.hero-portrait-card`, `.hero-portrait-picture`, and `.hero-portrait-image` on the right image system.
- `.hero-portrait-overlay`, `.hero-portrait-overlay-title`, and `.hero-portrait-overlay-text` on the overlay.

Do not make `#impact`, `main#top`, or Home-only section ids part of any reusable subpage hero implementation.

## Left Column

- `.hero-left-system` controls the copy lane.
- `.hero-pill-system` controls the stat-pill grid.
- `.hero-pill`, `.hero-pill-main`, and `.hero-pill-sub` control stat-pill internals.
- Copy and stat pills share the same width on desktop.
- `1025px` through `1919px`: `--home-hero-left-system-max: 980px`.
- `1920px+`: `--home-hero-left-system-max: 100%`, so copy and stat pills fill the safe left grid track.
- The right column bottom-aligns inside the two-row desktop grid so the 2-row pill group visually aligns with the right portrait card bottom; width, columns, and horizontal alignment are unchanged.
- `2200px+` stat-pill scale: `82px` pill height, `26px` main value, and `13.5px` sub-label.
- Desktop stat-pill text is controlled by `.hero-pill-main` and `.hero-pill-sub`; legacy `#impact` selectors are not part of the reusable page-hero contract.

## Right Column

- `.hero-right-system` is the real measurable right-column grid item on desktop.
- `.hero-right-system` aligns to the bottom of its desktop grid area to preserve pill/portrait bottom alignment at copy-wrap breakpoints.
- `.hero-portrait-card` fills the right grid track.
- `.hero-portrait-picture` and `.hero-portrait-image` fill the portrait card.
- `.hero-portrait-image` keeps `object-fit: cover` and `object-position: 50% 0%`.
- `.hero-portrait-overlay`, `.hero-portrait-overlay-title`, and `.hero-portrait-overlay-text` are the desktop-safe overlay hooks.
- `.hero-portrait-overlay` is the only active overlay behavior hook.

## Wide Desktop Refinements

- `2200px+` grid column gap remains `0px` so the approved left copy/stat-pill width does not shrink.
- `2200px+` right-column visual gap: `--home-hero-right-visual-gap: clamp(32px, 2vw, 56px)`.
- Tested visual gap outputs: `44px` at `2200px`, `48px` at `2400px`, `51.2px` at `2560px`.
- `2200px+` portrait height uses `--home-hero-image-height: clamp(500px, calc(644px - 6vw), 512px)`, which computes to `512px` at `2200px` and `500px` by `2400px+`.
- `2200px+` overlay width uses `min(calc(100% - 26px), clamp(560px, 25vw, 680px))`, so it remains `560px` at `2200px`, grows to `600px` at `2400px`, and grows to `640px` at `2560px`.
- `1920px` portrait height remains unchanged at `380.6px`.
- The final wide-desktop rhythm keeps the portrait height ramp and does not use a stat-pill lift transform. The body paragraph uses `margin-top: clamp(28px, calc(-166px + 8.8vw), 48px)` at `2200px+` to keep the title/body/pill rhythm balanced while the right column bottom-aligns to the pill group.

## Legacy Rules Removed

The old `.subpage-hero`, Anaya-specific, Archer-specific, Featured-specific, Gallery-specific, Credentials-specific, `.systems-jump-nav`, `.media-filter-row`, `.hero-actions`, `.page-highlight-bar`, `#impact`, and `main#top` reusable hero rules were removed from `styles.css`. Reusable hero behavior now lives in `.page-hero-system`.

## Applied Page Heroes

The reusable desktop lock currently covers:

- `systems.html`
- `featured-work.html`
- `media.html`
- `anaya-case-study.html`
- `archer-visuals.html`
- `credentials.html`

Desktop verification sizes for those pages follow the master responsive list in `RESPONSIVE-DESIGN-SYSTEM.md`: compact desktop starts at `1025`, standard desktop covers `1200-1599`, large desktop covers `1600-2199`, and ultra-wide starts at `2200`. Tablet/mobile safety checks use the master mobile and tablet portrait/landscape sizes instead of old one-off safety widths.
