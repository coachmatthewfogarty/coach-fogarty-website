# Responsive Specs

Use this folder for active responsive specs only.

## Current Specs

- `HOME-HERO-RESPONSIVE-SPEC.md`: measured Home hero desktop source of truth and reusable `.page-hero-system` spec for Systems, Featured, Gallery/Media, Anaya Beard Case Study, and The Archer. About and Contact are excluded.
- `PAGE-HERO-SYSTEM-LOCK.md`: active shared hero contract for Home, Systems, Featured, Gallery/Media, Anaya Beard Case Study, The Archer, and Credentials. About and Contact are excluded.
- `HERO-OVERLAY-SYSTEM-LOCK.md`: active shared hero image overlay card contract for Home, Systems, Featured, Gallery/Media, Anaya Beard Case Study, The Archer, and Credentials. About and Contact are excluded.
- `HOME-MEDIA-SECTION-LOCK-README.md`: locked Home Media source of truth for card layout, responsive grid behavior, title-below-image captions, 1600px+ caption scaling, shared overlay structure, thumbnail arrows, and single-image overlay state.
- `../gallery/GALLERY-PAGE-FINAL-SPEC.md`: locked Gallery / Media page source of truth for page identity, hero, sections, cards, images, overlay, buttons, colors, footer, interactions, cleanup, and QA.
- `HOME-CONTACT-CLOSEOUT-LOCK-README.md`: locked Home Portfolio Materials + Contact closeout source of truth for the two-card grid, document pills, contact form, colors, typography, and breakpoint QA.
- `SYSTEMS-PAGE-LOCK-README.md`: FINAL LOCKED Systems page source of truth for the shared internal hero, six-card systems library, detail sections, document carousel behavior, image rules, buttons, footer links, and breakpoint QA. Only `1025px` remains on the Systems watch list for future regressions.
- `FEATURED-WORK-PAGE-LOCK-README.md`: locked Featured Work detailed section source of truth for the shared hero, Homepage-style six stat-pill grid, approved `.hero-portrait-overlay` treatment, restored detailed body sections, cleanup notes, and breakpoint QA.
- `ARCHER-PAGE-LOCK-README.md`: locked The Archer source of truth for the product case study structure, shared hero usage, section cards, media roles, scoped exceptions, and breakpoint QA.
- `ABOUT-PAGE-LOCKED-SPEC.md`: locked About page source of truth for the special letter/gallery layout, shared page-shell width alignment, desktop gallery height sync, responsive gallery behavior, image list, cleanup notes, and breakpoint QA. About is excluded from the reusable `page-hero-system`.
- `../../RESPONSIVE-DESIGN-SYSTEM.md`: global source of truth for breakpoints, page hero left-column rules, headings, eyebrows, body text, pills, cards, overlays, responsive color consistency, and verification.
- `../image-export/README.md`: locked image export, crop, naming, and asset rules.

## Required Desktop Checks

```text
1025x768
1280x800
1440x900
1600x900
1920x1080
2560x1440
```

Desktop starts at `1025px`. The `1025-1199px` range is the small-desktop / large-tablet transition range and should be tested as desktop.

Exception: About is intentionally excluded from the reusable `.page-hero-system` and does not use the normal `1025px` two-column hero start. About stays stacked/tablet-style through `1439px`; its locked letter/gallery layout starts the full two-column copy-left, gallery-right desktop composition at `1440px`. See `ABOUT-PAGE-LOCKED-SPEC.md` before changing About breakpoints.

## Archived Inputs

Older responsive audit CSV/XLSX files and conflicting notes were kept for history but are no longer active. They live in:

```text
../../docs/archive/
../../../outputs/archive/2026-05-13-responsive-audits-superseded/
```

If an archived sheet or note conflicts with the current docs, use the current docs.
