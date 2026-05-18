# The Archer Page Lock

Last updated: 2026-05-14

This is the active source of truth for `archer-visuals.html`. If an older audit, output package, or prompt conflicts with this file, use this file plus `../../RESPONSIVE-DESIGN-SYSTEM.md`.

## Page Purpose

The Archer page is a premium innovation and product case study inside Matthew Fogarty's coaching portfolio. It presents The Archer as a basketball player development tool for shooting arc, touch, release awareness, post-player skill work, and repeatable mechanics.

The page should feel technical, athletic, clean, and portfolio-ready. It should not read like a standalone product ad.

## Active Sections

- Hero: `Innovation`, `The Archer`, product tool description, three hero pills, and right-column product visual.
- Product Overview: `Training Tool`, product explanation, outcome chips, and tool diagram.
- How It Works: four equal cards for arc, instant feedback, repeatable mechanics, and skill-to-result connection.
- Player Development Connection: image-led connection to shooting workouts, finishing touch, post-player development, accountability, mechanics, and visual feedback.
- Visual Gallery: six product/training photo cards.
- Video Gallery: three selected teaching-rep video cards.
- Portfolio Value: three-step innovation process.
- CTA: contact, player development systems, and full portfolio links.

## Hero System

- The page uses the reusable `.page-hero-system`.
- The copy lane uses `.hero-left-system`.
- The right visual uses `.hero-right-system`, `.hero-portrait-card`, `.hero-portrait-picture`, `.hero-portrait-image`, and `.hero-portrait-overlay`.
- The hero pills use `.hero-pill-system`, `.hero-pill`, `.hero-pill-main`, and `.hero-pill-sub`.
- Desktop starts at `1025px`.
- Right-column image sizing, overlay treatment, typography, pills, and shell alignment are inherited from the locked page-hero system.

## Image Roles

Current Archer assets are live under `assets/the-archer/`.

- Hero/social image: `assets/the-archer/photos/archer-shooting-development-wide-01.jpg`.
- Product diagram: `assets/the-archer/documents/player-development-innovation-the-archer-diagram.png`.
- Featured/logo asset: `assets/the-archer/featured/player-development-innovation-the-archer-logo-white-featured-cover-center-q98-1200x900.avif`.
- Photo gallery cards: current JPG/PNG originals in `assets/the-archer/photos/` until approved AVIF/WebP crops are exported.
- Video cards: current MOV files in `assets/the-archer/videos/` with poster images from the photo set.

Future exports should follow the locked crop ladder:

- `600x400` WebP for overlay thumbnails.
- `1200x900` AVIF for media-card/featured crops.
- `2400x1800` AVIF for large landscape/detail crops.
- PNG only for diagrams/logos that need crisp transparency or source fidelity.

## Scoped Exceptions

- The product diagram uses `object-fit: contain` inside the approved image frame so the tool graphic is not cropped.
- The Archer page has a scoped final CSS block named `Archer Page Final Lock`; it only organizes page sections, grids, product visuals, and media cards.
- No new colors, radius system, button style, shadow language, or page shell were introduced.

## Cleanup Status

- Removed the old standalone `.archer-page .asset-grid` media override after replacing the page with `.archer-media-grid`.
- Removed the old six-button Archer hero navigation from the HTML.
- Removed the old Archer-specific hero fallback rules; the shared `.page-hero-system` owns hero behavior across all device ranges.
- No separate Archer overlay/gallery JavaScript was added; the page uses native images/videos while the Gallery page retains the site-wide media overlay.

## Required QA Breakpoints

Check these viewports after Archer page edits:

```text
1025x768
1280x800
1440x900
1600x900
1920x1080
2560x1440
1024x768
820x1180
768x1024
430x932
390x844
375x812
```

## Latest QA

May 14, 2026 pass:

- `1025`, `1280`, `1440`, `1600`, `1920`, `2560`: pass.
- `1024`, `820`, `768`: pass.
- `430`, `390`, `375`: pass.
- Checked horizontal overflow, hero bounds, hero buttons, overlay bounds, image loading, section count, and card counts.
- QA screenshots and JSON were saved under `outputs/archer-page-qa-2026-05-14/`.
