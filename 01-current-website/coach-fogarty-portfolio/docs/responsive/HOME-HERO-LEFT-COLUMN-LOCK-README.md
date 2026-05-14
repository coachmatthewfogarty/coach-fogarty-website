# Home Hero Left Column Lock

Date: 2026-05-14

This file documents the locked Home hero left-column system created from the Home Hero Left Column Audit source of truth.

## Locked Classes

- `.hero-left-system` is the explicit Home hero copy container hook.
- `.hero-pill-system` is the explicit Home hero stat-pill grid hook.
- `.hero-pill` is the explicit individual pill hook.
- `.hero-pill-main` is the explicit stat value hook.
- `.hero-pill-sub` is the explicit stat label hook.

## Desktop Width Contract

- `1025px` through `1919px`: copy and stat pills share `--home-hero-left-system-max: 980px`.
- `1920px+`: copy and stat pills share `--home-hero-left-system-max: 100%` and fill the safe left grid track.
- Eyebrow, title, body text, and stat-pill grid share the same locked width on desktop.
- The body paragraph is reset to `width: 100%` and `max-width: 100%` inside `.hero-left-system`, so it cannot cap narrower than the stat-pill grid.
- The old `1120px` wide-desktop stat-pill cap has been removed from the active Home hero lock; `.hero-pill-system` now follows the same width as `.hero-left-system` at `1920px+` and `2200px+`.
- At `2200px+`, the body paragraph uses `margin-top: clamp(28px, calc(-166px + 8.8vw), 48px)` and the stat-pill grid uses `--home-hero-pill-lift: 0px` so the pill group bottom-aligns with the right portrait card without changing width or layout.
- The locked `2200px+` stat-pill scale is `82px` height, `26px` main value text, and `13.5px` sub-label text.

## Legacy Rules Kept

The stylesheet still contains older broad rules for `.hero-kicker`, `.hero-actions`, `.proof-card`, base `.hero`, `.stat-band`, and `.hero-stat-band`. They were not removed because they may support older subpage variants, archived hero work, or non-Home sections.

The Home hero now uses a late, scoped desktop layer in `styles.css` named `Home Hero Left Column Master Lock`. That layer isolates the Home hero from broad legacy selectors without changing tablet/mobile behavior, right-column image sizing, or other pages.
