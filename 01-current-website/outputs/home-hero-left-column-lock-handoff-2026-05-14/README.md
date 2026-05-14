# Home Hero Left Column Lock Handoff

Date: 2026-05-14

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

- `1025px` through `2199px`: copy and stat pills share `--home-hero-left-system-max: 980px`.
- `2200px+`: copy and stat pills expand together through `--home-hero-left-system-max: var(--hero-wide-support-max)`.
- Body text, eyebrow, title, and stat-pill grid now share the same left-column width on desktop.
- Tablet, mobile, right-column image sizing, and text content were not changed.

## Legacy Rules

Older broad rules for `.hero-kicker`, `.hero-actions`, `.proof-card`, base `.hero`, `.stat-band`, and `.hero-stat-band` were kept in place and isolated by the new scoped Home hero lock. They were not removed because they may support older subpage variants or archived hero work.
