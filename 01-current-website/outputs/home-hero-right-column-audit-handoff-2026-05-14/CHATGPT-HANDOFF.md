# ChatGPT Handoff: Home Hero Right Column Audit

Use this as the source-of-truth summary for checking the current Home hero right-column image system.

## Goal

Audit the current Home Hero right column and determine whether it is clean enough to lock as a reusable desktop hero-right-column system later.

## Scope

Focus only on the Home hero right column:

- `.hero-visual`
- `.portrait-card`
- `.portrait-card picture`
- `.portrait-card img[data-image-role="hero"]`
- `.hero-mobile-highlight`

Do not audit or change the Home hero left column, stat pills, mobile/tablet behavior, subpage heroes, or text content.

## Key Computed Finding

On desktop, `.hero-visual` computes to `display: contents`. That means the wrapper has no real layout box and measures `0 x 0`. The actual right-column visual system is the `.portrait-card` inside the hero grid's right track.

## Current Desktop Specs

| Breakpoint | Right track / card width | Card height | Image inner box | Column gap | Notes |
|---|---:|---:|---:|---:|---|
| 1025-1199px | 390px | 380.5px | 388px x 378.5px | 33.28px | Stable minimum portrait width |
| 1200-1349px | 390px | 380.5px | 388px x 378.5px | 33.28px | Stable minimum portrait width |
| 1350-1499px | 390px | 389.5px to 384.59px | 388px x 387.5px to 388px x 382.59px | 37.44px | Height split at 1420px |
| 1500-1599px | 390px to 399.75px | 370px | 388px to 397.75px x 368px | 37.44px | Card begins scaling with 25vw |
| 1600-1919px | 400px to 479.75px | 370px to 380.59px | 398px to 477.75px x 368px to 378.59px | 37.44px to 38.4px | Gap/height changes at 1720px |
| 1920-2199px | 480px to 549.75px | 380.59px | 478px to 547.75px x 378.59px | 38.4px | Page shell is capped at 1680px |
| 2200px+ | 660px to 672px tested | 512px | 658px to 670px x 510px | 0px | Wide portrait token takes over |

## Current Image Rules

- Active desktop source: `assets/images/hero/Cropped/home-matthew-fogarty-main-hero-2000x1333.avif`.
- Source media: `(min-width: 1025px)`.
- Object fit: `cover`.
- Object position: `50% 0%`.
- Card border radius: `28px`.
- Card border: `1px solid rgba(255, 255, 255, 0.4)`.
- Card overflow: `hidden`.
- Card background: `rgb(216, 195, 166)`.
- Card shadow: `rgba(52, 36, 24, 0.12) 0px 20px 60px 0px`.

## Overlay Notes

`.hero-mobile-highlight` remains visible inside the portrait card on desktop. It is not mobile-only despite the class name. It is positioned differently at wide desktop:

- Below 2200px: overlay widths scale roughly from `362.5px` to `523.75px`.
- At 2200px+: overlay width is capped at `560px`, centered with `translateX(-50%)`.

## Risks / Cleanup Candidates

Ask ChatGPT to check:

1. Whether `.hero-visual { display: contents; }` is intentional for the reusable right-column system.
2. Whether the class name `.hero-mobile-highlight` should be renamed or wrapped for desktop use before locking.
3. Whether the multiple late breakpoint overrides for `--home-hero-image-height` should be consolidated.
4. Whether broad/shared selectors for `.portrait-card`, `.hero-visual`, and `.hero-mobile-highlight` could affect subpages.
5. Whether 2200px+ should keep the current `0px` column gap between left and right hero tracks.

## Confirmation From Current Audit

The right-column image renders at every tested desktop breakpoint. The portrait card follows the hero right grid track. The image fills the card's inner picture box with `cover` and top-centered positioning. No code changes were made for this right-column audit.
