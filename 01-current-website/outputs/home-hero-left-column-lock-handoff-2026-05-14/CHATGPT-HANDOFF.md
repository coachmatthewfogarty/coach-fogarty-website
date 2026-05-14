# ChatGPT Handoff: Home Hero Left Column Lock

Use this as the source-of-truth summary for the Home hero left-column system.

## Goal

The Home hero needed one unified left-column width system. Previously, `.hero-copy` capped at `980px` from roughly `1600px` through `2199px`, while `#impact.hero-stat-band` could remain wider because it followed the full left grid track. That created a visible copy/stat-pill mismatch.

## Final Decision

The Home hero now locks eyebrow, title, body text, and stat-pill grid to the same desktop width.

## Explicit Classes Added

- `.hero-left-system`: Home hero copy container.
- `.hero-pill-system`: Home hero stat-pill grid.
- `.hero-pill`: individual stat pill.
- `.hero-pill-main`: main stat text.
- `.hero-pill-sub`: stat label text.

## Desktop Widths

| Breakpoint | Left max-width | Measured left width | Stat-pill grid width | Body paragraph width |
|---|---:|---:|---:|---:|
| 1025-1199px | 980px | 439.73-613.73px | 439.73-613.73px | 439.73-613.73px |
| 1200-1349px | 980px | 614.73-763.73px | 614.73-763.73px | 614.73-763.73px |
| 1350-1499px | 980px | 760.56-909.56px | 760.56-909.56px | 760.56-909.56px |
| 1500-1599px | 980px | 910.56-980px | 910.56-980px | 910.56-980px |
| 1600-1919px | 980px | 980px | 980px | 980px |
| 1920-2199px | 980px | 980px | 980px | 980px |
| 2200px+ | var(--hero-wide-support-max), currently 1354px | 1102px at 2200px; 1290px at 2400px | same | same |

## Confirmation

Copy and pills now align at every tested desktop breakpoint. The body paragraph no longer caps narrower than the pill grid. The pill grid no longer extends wider than the copy unless the copy expands with it.

## What Was Not Changed

- No tablet/mobile behavior changed.
- No right-column image sizing changed.
- No Home hero text content changed.
- No subpage hero system was updated.

## Legacy Handling

No old rules were removed. Older broad rules for `.hero-kicker`, `.hero-actions`, `.proof-card`, base `.hero`, `.stat-band`, and `.hero-stat-band` remain in the stylesheet and are documented as legacy/shared rules. The Home hero is isolated by a late scoped CSS block named `Home Hero Left Column Master Lock`.
