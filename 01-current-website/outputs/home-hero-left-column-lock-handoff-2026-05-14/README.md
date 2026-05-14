# Home Hero Left Column Lock Handoff

Date: 2026-05-14

Superseded note: this package captured the first left-column lock pass. The current source of truth is `coach-fogarty-portfolio/docs/responsive/HOME-HERO-DESKTOP-MASTER-LOCK.md`, which now sets `1920px+` left/copy/pill width to the full safe left grid track and uses the final `2200px+` pill scale.

This package contains the locked Home hero left-column system handoff.

## Files

- `home-hero-left-column-lock-2026-05-14.csv`: breakpoint width table.
- `home-hero-left-column-lock-2026-05-14.xlsx`: spreadsheet version of the same breakpoint width table.
- `README.md`: this package guide.
- `CHATGPT-HANDOFF.md`: plain-language handoff prompt for ChatGPT.

## Source Files Updated

- `index.html`
- `styles.css`
- `docs/responsive/HOME-HERO-LEFT-COLUMN-LOCK-README.md`

## Locked Classes

- `.hero-left-system`
- `.hero-pill-system`
- `.hero-pill`
- `.hero-pill-main`
- `.hero-pill-sub`

## Width Contract

- Current final lock: `1025px` through `1919px` use `--home-hero-left-system-max: 980px`.
- Current final lock: `1920px+` copy and stat pills share `--home-hero-left-system-max: 100%` and fill the safe left grid track.
- Current final lock: `2200px+` stat pills use `82px` height, `26px` main text, `13.5px` sub-label text, and `--home-hero-pill-lift: 0px`.
- Body text, eyebrow, title, and stat-pill grid now share the same left-column width on desktop.
- Tablet, mobile, right-column image sizing, and text content were not changed.

## Legacy Rules

Older broad rules for `.hero-kicker`, `.hero-actions`, `.proof-card`, base `.hero`, `.stat-band`, and `.hero-stat-band` were kept in place and isolated by the new scoped Home hero lock. They were not removed because they may support older subpage variants or archived hero work.
