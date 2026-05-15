# About Page Locked Spec

Status: locked as a special letter/gallery page as of May 14, 2026.

## Active Targets

- Page: `about.html`
- Main: `main.about-story-page.about-cover-page`
- Card/section: `.about-letter-section`
- Header group: `.about-letter-heading`
- Content grid: `.about-letter-body`
- Copy column: `.about-letter-copy.about-cover-copy`
- Text block: `.about-letter-text`
- Signature: `.about-signature`
- Gallery: `.about-letter-gallery`
- Final scoped CSS block: `About page locked letter/gallery layout`

About is intentionally excluded from the reusable `.page-hero-system`. It uses a special locked letter/gallery layout, but its outer width now follows the same page shell lane as the other locked pages.

## Page Structure

Order:

1. Shared site header
2. About letter section
3. Shared site footer
4. About gallery height sync script

There are no CTA buttons, pills, cards, stats, captions, extra content sections, or reusable subpage hero elements inside the About content.

## Width System

The About page uses the shared page shell rules:

- Base shell: `.page-shell`
- Desktop shell token: `--page-shell-width`
- Desktop 1025-2199: `min(1680px, calc(100vw - 88px))`
- Desktop 2200+: `min(2240px, calc(100vw - 320px))`
- About main: `width: 100%; max-width: 100%; margin: 0; overflow-x: clip`
- About section: `width: 100%; max-width: none; margin: 22px 0 0`

The About card no longer has a separate custom desktop width system. It sits inside the same page shell as the approved Home, Systems, Featured Work, Media, Archer, and Contact page locks.

## Desktop Layout

Applies at `min-width: 1200px`.

- Layout: 2 columns
- Left column: copy and signature
- Right column: 12-image gallery
- Content grid: `.about-letter-body`
- Columns: `minmax(0, clamp(520px, 39vw, 720px)) minmax(360px, 1fr)`
- Gap: `clamp(24px, 2.6vw, 48px)`
- Section padding: `34px-58px` inline via `clamp(34px, 2.4vw, 58px)`, top `var(--section-heading-top-gap-desktop, 34px)`, bottom `clamp(28px, 2.2vw, 44px)`
- Section radius: `34px`
- Section background: `linear-gradient(135deg, rgba(255, 248, 237, 0.92), rgba(247, 238, 224, 0.72))`
- Section shadow: `var(--shadow)` = `0 20px 60px rgba(52, 36, 24, 0.12)`
- Heading to content gap: `var(--section-title-to-content-gap, 24px)`
- Desktop title: nowrap

Compact desktop `1025px-1199px`:

- Layout: stacked, tablet-style
- Section margin top: `18px`
- Section padding: `24px 24px 26px`
- Body grid columns: `minmax(0, 1fr)`
- Body gap: `clamp(24px, 3vw, 32px)`
- Copy, cover-copy, and text block width: `100%`
- Copy, cover-copy, and text block max width: none
- Body copy: `0.88rem`, line-height `1.56`
- Paragraph gap: `11px`
- Signature width: `clamp(190px, 20vw, 230px)`
- Gallery placement: below the signature
- Gallery columns: `repeat(3, minmax(0, 1fr))`
- Gallery rows: `repeat(4, auto)`
- Gallery height: auto
- Gallery max-height: none
- Gallery image height: auto
- Gallery image aspect ratio: `4 / 3`
- Gallery gap: `8px`
- Purpose: `1025px-1199px` uses a tablet-style stacked About layout with full-width copy, signature below copy, and a `3 x 4` gallery below the signature to avoid a skinny right-side gallery column.

Small/mid desktop `1200px-1499px`:

- Columns: `minmax(520px, 52%) minmax(360px, 1fr)`
- Gap: `clamp(26px, 2.4vw, 32px)`
- Gallery: `2 columns x 4 rows`
- Visible images: first 8 gallery images only
- Hidden images: images 9-12 via CSS only; images remain in `about.html`
- `1350px-1499px` column polish: right column uses `minmax(360px, 0.9fr)`
- Body font size: unchanged from base desktop
- `1350px-1499px` body line-height: `1.4`
- `1350px-1499px` paragraph gap: `12px`
- Purpose: keep the locked two-column desktop layout at `1280 x 800` and `1440 x 900` while reducing the visual weight of the right-side gallery.

1600 readability range `1500px-1899px`:

- Grid: unchanged from base desktop
- Body font size: unchanged from base desktop
- Body line-height: `1.32`
- Paragraph gap: `12px`
- Purpose: lightly relax the body rhythm at `1600 x 900` while preserving the approved two-column one-page desktop feel.

Large desktop `1900px+`, with ultra-wide overrides at `2200px+`:

- Columns: `minmax(0, clamp(680px, 38vw, 820px)) minmax(640px, 1fr)`
- Gap: `clamp(34px, 2.8vw, 60px)`
- Body copy: `clamp(1rem, 0.54vw, 1.12rem)`, line-height `1.6`
- Paragraph gap: `12px`
- Signature width: `clamp(235px, 13vw, 320px)`
- Purpose: give `1920 x 1080` more comfortable line spacing while preserving the locked two-column gallery balance.

Ultra-wide `2200px+`:

- Columns: `minmax(0, clamp(960px, 39vw, 1020px)) minmax(860px, 1fr)`
- Gap: `clamp(46px, 2.2vw, 54px)`
- Body copy: `clamp(1.06rem, 0.5vw, 1.18rem)`
- Line-height: `1.60`
- Paragraph gap: `12px`
- Purpose: keep `2560 x 1400` visually closer to the approved `1920 x 1080` balance by giving the story column more presence and controlling the right gallery width.

## Gallery System

All 12 images stay in the locked set.

Desktop:

- Grid: `3 columns x 4 rows`
- Columns: `repeat(3, minmax(0, 1fr))`
- Rows: `repeat(4, minmax(0, 1fr))`
- Height: `var(--about-letter-copy-height, auto)`
- Max height: `var(--about-letter-copy-height, none)`
- Gap: `clamp(8px, 0.68vw, 12px)`
- Image width: `100%`
- Image height: `100%`
- Object fit: `cover`
- Object position: `center center`
- Aspect ratio: auto on desktop because row height is synced to copy height
- Radius: `16px`
- Shadow: none
- Captions: none

Tablet:

- Stack below copy
- Grid: `3 columns x 4 rows`
- Image aspect ratio: `4 / 3`
- Gap: `clamp(9px, 1.6vw, 12px)`
- Radius: `16px`

Mobile:

- Stack below copy
- Grid: `2 columns x 6 rows`
- Image aspect ratio: `4 / 3`
- Gap: `9px`
- Radius: `12px`
- No horizontal overflow

## Gallery Height Sync

The inline script in `about.html` measures `.about-letter-copy` at desktop widths and writes:

```css
--about-letter-copy-height: <copy column height>px;
```

That value drives `.about-letter-gallery` height and max-height, so changes to paragraph wrapping, font size, line-height, or signature size update the gallery height. The script removes the custom property below `1200px`, where the layout stacks and the gallery returns to fixed `4 / 3` thumbnails.

Sync triggers:

- Initial script run
- `window load`
- `resize`
- `ResizeObserver` on the copy column when available

## Tablet Layout

Applies at `max-width: 1024px`.

- Layout: stacked
- Order: heading, copy, signature, gallery
- Section margin top: `clamp(18px, 4vw, 28px)`
- Section padding: `clamp(20px, 4vw, 34px)`
- Section radius: `34px`
- Body grid columns: `minmax(0, 1fr)`
- Body gap: `clamp(24px, 4.6vw, 38px)`
- Copy, cover-copy, and text block width: `100%`
- Copy, cover-copy, and text block max width: none
- Tablet stacked layout uses full-width copy inside the card. No right-side desktop column space is reserved at `1024px` and below.
- Body copy: `clamp(0.92rem, 1.25vw, 1rem)`, line-height `1.5`
- Signature width: `clamp(220px, 30vw, 300px)`
- Signature max width: `48%`
- Signature margin top: `clamp(16px, 2.6vw, 22px)`
- Gallery: 3 columns, 4 rows, 4:3 images

## Mobile Layout

Applies at `max-width: 620px`.

- Layout: stacked
- Section padding: `clamp(16px, 4.4vw, 20px)`
- Section radius: `24px`
- Heading bottom gap: `18px`
- H1: `clamp(1.38rem, 6.1vw, 1.84rem)`, line-height `1.06`
- Eyebrow: `clamp(0.6rem, 2.5vw, 0.72rem)`, letter-spacing `0.1em`
- Body copy: `clamp(0.82rem, 3.35vw, 0.92rem)`, line-height `1.42`
- Paragraph gap: `12px`
- Signature width: `clamp(205px, 68vw, 275px)`
- Signature max width: `86%`
- Signature margin top: `clamp(16px, 5vw, 24px)`
- Gallery: 2 columns, 6 rows, 4:3 images

## Typography

Global font family:

- Body and About copy inherit `"Trebuchet MS", "Gill Sans", sans-serif`
- About H1 uses the shared section-title scale through `main:not(#top) .about-letter-heading > h1`

Eyebrow:

- Selector: `.about-letter-heading .eyebrow`
- Text: `ABOUT COACH FOGARTY`
- Transform: uppercase
- Weight: `700`
- Color: `var(--red)` = `#8f2d1e`
- Base size: `0.76rem`
- Desktop locked size: `var(--type-eyebrow-size)`; desktop token resolves from `clamp(0.76rem, calc(0.57rem + 0.22vw), 1.1rem)` before later page-specific caps
- Line height: `var(--type-eyebrow-line)` or base normal
- Letter spacing: `0.14em`, with responsive token fallback `clamp(0.08em, 0.16cqw, 0.14em)`
- Margin: `0 0 12px`
- Mobile: `clamp(0.6rem, 2.5vw, 0.72rem)`, letter-spacing `0.1em`

H1:

- Selector: `.about-letter-heading h1`
- Text: `Developing Players Building Programs`
- Margin: `0`
- Color: `var(--text)` = `#1f1b16`
- Desktop size: `var(--type-section-title-size)` through shared title lock
- Desktop line-height: `var(--type-section-title-line)`
- Desktop white-space: nowrap
- Measured size examples: `42px` at 2560, `40.32px` at 1920, `36px` at 1600/1440/1280/1025
- Tablet size: `clamp(2rem, 6vw, 2.85rem)`, line-height `1.02`
- Mobile size: `clamp(1.38rem, 6.1vw, 1.84rem)`, line-height `1.06`

Body copy:

- Selector: `.about-cover-copy p:not(.eyebrow)`
- Color: `var(--muted)` = `#6a5f53`
- Desktop size: `clamp(0.92rem, calc(0.74rem + 0.2vw), 1.05rem)`
- Desktop line-height: `clamp(1.36, calc(1.28 + 0.08vw), 1.46)`
- Paragraph gap: `var(--about-paragraph-gap, 14px)`
- Small desktop: `0.88rem`, line-height `1.35`, gap `10px`
- Tablet: `clamp(0.92rem, 1.25vw, 1rem)`, line-height `1.5`
- Mobile: `clamp(0.82rem, 3.35vw, 0.92rem)`, line-height `1.42`, gap `12px`
- Max width: none on desktop, tablet, and mobile

Signature:

- File: `assets/media/signature-matthew-fogarty.svg`
- Desktop width: `clamp(210px, 14vw, 285px)`
- Small desktop: `clamp(190px, 20vw, 230px)`
- Large desktop: `clamp(235px, 13vw, 320px)`
- Tablet: `clamp(220px, 30vw, 300px)`, max-width `48%`
- Mobile: `clamp(205px, 68vw, 275px)`, max-width `86%`
- Placement: under copy, aligned with copy column start

Buttons, pills, links:

- There are no About-content buttons, pills, CTA links, stat chips, or gallery captions.
- Header and footer links use the shared site chrome styles.

## Colors

Global page background:

- `--bg`: `#f4efe7`
- Body radial gold: `rgba(184, 135, 47, 0.18)`
- Body radial blue: `rgba(36, 79, 115, 0.12)`
- Body linear start: `#f6f0e5`
- Body linear middle: `#f3ede4`
- Body linear end: `#efe6da`

About section:

- Background gradient start: `rgba(255, 248, 237, 0.92)`
- Background gradient end: `rgba(247, 238, 224, 0.72)`
- Shadow: `0 20px 60px rgba(52, 36, 24, 0.12)`
- Image fallback background: `#1f1b16`

Shared tokens used on About:

- Text: `#1f1b16`
- Muted copy: `#6a5f53`
- Line: `rgba(31, 27, 22, 0.12)`
- Gold: `#b8872f`
- Red: `#8f2d1e`
- Blue: `#244f73`
- Green: `#315c43`
- Sand: `#d7b377`
- Ink: `#2f3148`
- Panel: `rgba(255, 250, 243, 0.82)`
- Strong panel: `#fff9f0`

## Image List

All paths exist and load.

| Order | File | Location | Export/naming status |
| --- | --- | --- | --- |
| Signature | `assets/media/signature-matthew-fogarty.svg` | Under copy | Existing SVG signature asset |
| 1 | `anaya/photos/2d/dp-coaching-feedback-card-q98-1200x900.avif` | Gallery | Existing exported AVIF; legacy Anaya path retained |
| 2 | `assets/media/championship-culture/photos/championship-culture-magic-elite-championship-media-card-1200x900.avif` | Gallery | Follows media naming/export pattern |
| 3 | `assets/media/championship-culture/photos/championship-culture-pacific-academy-three-peat-media-card-1200x900.avif` | Gallery | Follows media naming/export pattern |
| 4 | `assets/media/championship-culture/photos/championship-culture-pacific-academy-1st-school-championship-media-card-1200x900.avif` | Gallery | Follows media naming/export pattern |
| 5 | `assets/media/sideline-leadership/photos/sideline-leadership-hyped-media-card-cover-bottom-mid-1200x900.avif` | Gallery | Follows media naming/export pattern |
| 6 | `assets/media/sideline-leadership/photos/sideline-leadership-high-five-media-card-cover-bottom-mid-1200x900.avif` | Gallery | Follows media naming/export pattern |
| 7 | `assets/media/sideline-leadership/photos/sideline-leadership-staff-celebrating-media-card-cover-center-1200x900.avif` | Gallery | Follows media naming/export pattern |
| 8 | `assets/media/coaching-details/photos/coaching-details-santa-ana-college-pregame-warmup-media-card-1200x900.avif` | Gallery | Follows media naming/export pattern |
| 9 | `assets/media/coaching-details/photos/coaching-details-santa-ana-college-coaching-observation-01-media-card-cover-bottom-center-mid-1200x900.avif` | Gallery | Follows media naming/export pattern |
| 10 | `assets/media/team-celebration/photos/team-celebration-santa-ana-playoff-win-sideline-reaction-media-card-cover-upper-q98-1200x900.avif` | Gallery | Follows media naming/export pattern |
| 11 | `assets/media/team-celebration/photos/team-celebration-santa-ana-bench-cheering-03-media-card-cover-bottom-mid-q98-1200x900.avif` | Gallery | Follows media naming/export pattern |
| 12 | `assets/media/team-environment/photos/team-environment-huddle-media-card-cover-bottom-center-1200x900.avif` | Gallery | Follows media naming/export pattern |

## Header And Footer

- Header remains shared `.site-header.site-chrome`
- Footer remains shared `.site-footer.site-chrome`
- About section top spacing below header: `22px` desktop default, `18px` in the `1025px-1199px` compact desktop range, `clamp(18px, 4vw, 28px)` tablet/mobile
- Footer sits after the About section inside `main.about-cover-page`
- Footer lane uses the shared desktop `--page-shell-width`
- No About-specific header or footer redesign was introduced

## Cleanup Notes

Kept:

- Current About markup in `about.html`
- Shared header and footer
- Current About copy
- Current signature placement
- Current 12-image gallery set
- Current cream card, soft shadow, and rounded card feel
- One final scoped About CSS block
- Compact desktop rules consolidated inside the locked About CSS block instead of layered as loose overrides

Removed/consolidated:

- Old About hero rules
- Old About impact/journey/timeline/identity/foundation/proof/staff/card rules
- Old short About rules
- Duplicate final About override blocks
- Unused `.about-letter-text-column` and `.about-cover-copy h2` paths
- Stale About selectors that could override the locked layout

Do not reintroduce:

- Reusable `.page-hero-system` for About
- CTA buttons or pills inside About content
- Desktop images below the copy
- Captions in the About gallery
- Separate About-only page width logic

## Responsive QA

Measured through local Chrome against `http://127.0.0.1:4173/about.html`.

| Requested viewport | Page shell | About section | Layout | Gallery | Overflow | Notes |
| --- | ---: | ---: | --- | --- | --- | --- |
| 2560 x 1440 | 2240 | 2240 x 813 | 2 columns | 12 images, 3 x 4, synced to copy height | No | Card aligns with wide shell; title stays one line |
| 1920 x 1080 | 1680 | 1680 x 908 | 2 columns | 12 images, 3 x 4, synced to copy height | No | Gallery fills right column cleanly |
| 1600 x 900 | 1512 | 1512 x 865 | 2 columns | 12 images, 3 x 4, synced to copy height | No | Balanced copy/gallery fit |
| 1500 x 900 | 1412 | 1412 x 890 | 2 columns | 12 images, 3 x 4, synced to copy height | No | Full desktop gallery resumes at 1500px |
| 1499 x 900 | 1411 | 1411 x 805 | 2 columns | 8 images, 2 x 4, synced to copy height | No | Small/mid desktop gallery range ends here |
| 1440 x 900 | 1352 | 1352 x 839 | 2 columns | 8 images, 2 x 4, synced to copy height | No | Cleaner mid-desktop gallery weight |
| 1349 x 800 | 1261 | 1261 x 772 | 2 columns | 8 images, 2 x 4, synced to copy height | No | Small/mid desktop gallery range |
| 1280 x 800 | 1192 | 1192 x 786 | 2 columns | 8 images, 2 x 4, synced to copy height | No | Cleaner small-desktop gallery weight |
| 1200 x 800 | 1112 | 1112 x 837 | 2 columns | 8 images, 2 x 4, synced to copy height | No | Small desktop gallery range begins here |
| 1199 x 1183 | 1111 | Stacked range | Stacked | 3 x 4 below signature | No | Full-width copy; height sync cleared |
| 1025 x 1183 | 937 | Stacked range | Stacked | 3 x 4 below signature | No | Full-width copy; height sync cleared |
| 1199 x 800 | 1111 | Stacked range | Stacked | 3 x 4 below signature | No | Full-width copy; height sync cleared |
| 1100 x 768 | 1012 | Stacked range | Stacked | 3 x 4 below signature | No | Full-width copy; height sync cleared |
| 1025 x 768 | 937 | Stacked range | Stacked | 3 x 4 below signature | No | Stacked compact range removes skinny right gallery column |
| 1024 x 1366 | 968 | 968 x 1699 | Stacked | 3 x 4 below copy | No | Tablet stack begins exactly below desktop breakpoint |
| 820 x 1180 | 770.8 | 770.8 x 1598 | Stacked | 3 x 4 below copy | No | Clean tablet wrapping |
| 768 x 1024 | 721.9 | 721.9 x 1608 | Stacked | 3 x 4 below copy | No | Clean tablet wrapping |
| 430 x 932 | 406 | 406 x 2113 | Stacked | 2 x 6 below copy | No | Mobile layout verified |
| 390 x 844 | 366 | 366 x 1928 | Stacked | 2 x 6 below copy | No | Mobile layout verified |
| 375 x 812 | 351 | 351 x 1967 | Stacked | 2 x 6 below copy | No | Mobile layout verified |

QA confirmations:

- No horizontal scroll at tested desktop/tablet widths
- Mobile CSS uses `2 x 6` gallery at `max-width: 620px`
- Tablet CSS uses `3 x 4` gallery below copy at `max-width: 1024px`
- Compact desktop uses stacked full-width copy and a `3 x 4` gallery below the signature at `1025px-1199px`
- Small/mid desktop CSS uses an 8-image `2 x 4` right-column gallery from `1200px-1499px`
- Desktop CSS returns to the full 12-image `3 x 4` right-column gallery at `1500px+`
- Desktop gallery height sync tracks the left copy/signature height at `1200px+`
- All 12 gallery images and the signature path exist
- No About-content button or pill labels exist, so there is no label wrapping risk inside the section
