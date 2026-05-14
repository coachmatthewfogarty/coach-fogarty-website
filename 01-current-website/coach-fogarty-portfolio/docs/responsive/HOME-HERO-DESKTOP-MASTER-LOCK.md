# HOME HERO DESKTOP MASTER LOCK

Date: 2026-05-14

The Home Hero desktop system is the approved source for future desktop hero systems. Do not apply it to subpage heroes until their page-specific content and media needs are mapped.

## Scope

Desktop lock begins at `1025px`. Tablet and mobile keep their existing shared/legacy rules.

## Left Column

- `.hero-left-system` controls the copy lane.
- `.hero-pill-system` controls the stat-pill grid.
- `.hero-pill`, `.hero-pill-main`, and `.hero-pill-sub` control stat-pill internals.
- Copy and stat pills share the same width on desktop.
- `1025px` through `1919px`: `--home-hero-left-system-max: 980px`.
- `1920px+`: `--home-hero-left-system-max: 100%`, so copy and stat pills fill the safe left grid track.
- `2200px+` stat pills use `--home-hero-pill-lift: 0px` so the 2-row pill group bottom-aligns with the right portrait card; width, columns, and horizontal alignment are unchanged.
- `2200px+` stat-pill scale: `82px` pill height, `26px` main value, and `13.5px` sub-label.

## Right Column

- `.hero-right-system` is the real measurable right-column grid item on desktop.
- `.hero-portrait-card` fills the right grid track.
- `.hero-portrait-picture` and `.hero-portrait-image` fill the portrait card.
- `.hero-portrait-image` keeps `object-fit: cover` and `object-position: 50% 0%`.
- `.hero-portrait-overlay`, `.hero-portrait-overlay-title`, and `.hero-portrait-overlay-text` are the desktop-safe overlay hooks.
- `.hero-mobile-highlight` remains on the overlay for tablet/mobile compatibility only.

## Wide Desktop Refinements

- `2200px+` grid column gap remains `0px` so the approved left copy/stat-pill width does not shrink.
- `2200px+` right-column visual gap: `--home-hero-right-visual-gap: clamp(32px, 2vw, 56px)`.
- Tested visual gap outputs: `44px` at `2200px`, `48px` at `2400px`, `51.2px` at `2560px`.
- `2200px+` portrait height uses `--home-hero-image-height: clamp(500px, calc(644px - 6vw), 512px)`, which computes to `512px` at `2200px` and `500px` by `2400px+`.
- `2200px+` overlay width uses `min(calc(100% - 26px), clamp(560px, 25vw, 680px))`, so it remains `560px` at `2200px`, grows to `600px` at `2400px`, and grows to `640px` at `2560px`.
- `1920px` portrait height remains unchanged at `380.6px`.
- The final wide-desktop rhythm keeps the portrait height ramp but removes the pill lift. The body paragraph uses `margin-top: clamp(28px, calc(-166px + 8.8vw), 48px)` at `2200px+` to keep the title/body/pill rhythm balanced after the larger pill group bottom-aligns with the portrait card.

## Legacy Rules Kept

The stylesheet still contains broad/shared rules for `.hero`, `main#top > .hero`, `.hero-copy`, `.hero-text`, `.hero-stat-band`, `.stat-band`, `.hero-visual`, `.portrait-card`, `.hero-mobile-highlight`, `.proof-card`, `.hero-kicker`, and `.hero-actions`.

Those rules may support tablet/mobile, old Home hero variants, or subpage experiments. The desktop master lock wins through later scoped selectors rather than removing those shared rules.
