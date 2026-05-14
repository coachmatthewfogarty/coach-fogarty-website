# Home Hero Right Column Audit Handoff

Date: 2026-05-14

This package contains the current Home hero right-column audit handoff. No code was changed for this audit.

## Files

- `home-hero-right-column-audit-2026-05-14.csv`: breakpoint table for the current right-column image/card system.
- `home-hero-right-column-audit-2026-05-14.xlsx`: spreadsheet version of the same breakpoint table.
- `README.md`: this package guide.
- `CHATGPT-HANDOFF.md`: prompt-ready handoff summary for ChatGPT.

## Source Elements

- `.hero-visual`: wrapper around the Home hero image card.
- `.portrait-card`: the actual measured right-column visual box.
- `.portrait-card picture`: full-size image wrapper inside the card.
- `.portrait-card img[data-image-role="hero"]`: active Home hero image.
- `.hero-mobile-highlight`: highlight overlay that remains present inside the card on desktop.

## Important Computed Finding

On desktop, `.hero-visual` computes to `display: contents`, so the wrapper itself measures as `0 x 0`. The right-column system should therefore be audited through `.portrait-card`, the grid right track, and the nested image/overlay.

## Current Desktop Image Contract

- `1025px` through `2199px`: portrait width uses `clamp(390px, 25vw, 660px)`, while Home-specific height overrides use `--home-hero-image-height`.
- `2200px+`: portrait width uses `clamp(660px, 28vw, 740px)`, with `--home-hero-image-height: 512px`.
- Active desktop image source: `assets/images/hero/Cropped/home-matthew-fogarty-main-hero-2000x1333.avif`.
- Image fit/position: `object-fit: cover`, `object-position: 50% 0%`.

## Main Risk To Check Before Locking

The right column still relies on broad/shared selectors and several late breakpoint overrides. If this becomes a master reusable system, create explicit right-column classes before applying it elsewhere.
