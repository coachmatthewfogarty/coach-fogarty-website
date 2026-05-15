# Featured Work Page Lock

Status: corrected and locked as a detailed Featured Work section page as of May 14, 2026.

## Active Targets

- Page: `featured-work.html`
- Main: `main.featured-page`
- Hero: `.featured-hero.page-hero-system`
- Hero stats: `.featured-hero-actions.hero-pill-system`
- Hero overlay: `.page-highlight-bar.hero-portrait-overlay`
- Summary: `.featured-summary-section`
- Detailed sections: `.featured-pillar`
- Strategy panel: `.featured-strategy-panel`
- CTA: `.featured-final-cta`

## Page Purpose

Featured Work uses the shared page hero system with the Homepage-style 6 stat-pill grid, while the page body preserves the original detailed Featured Work section layout. Do not replace the body with a simplified 4-card grid.

Use this order:

1. Header
2. Featured Work hero
3. Impact Summary
4. Pacific Academy program turnaround section
5. Santa Ana College collegiate impact section
6. Anaya Beard player development case study section
7. The Archer innovation section
8. Complete Coaching Profile strategy panel
9. Explore the Work CTA
10. Footer

## Hero Pill Lock

The Featured Work hero uses the existing Homepage Hero stat-pill system:

- `20+` / `Years Coaching Experience`
- `338-43` / `Head Coaching Record`
- `26` / `Championships`
- `College` / `Player Development`
- `Staff` / `Recruiting Systems`
- `Program` / `Operations`

Desktop uses the approved `3 x 2` pill grid inside the left hero column. Tablet and mobile follow the shared responsive `.hero-pill-system` behavior.

## Design Rules

- Use the shared public-site cream background and page shell.
- Use the shared header and footer without local overrides.
- Use the reusable `.page-hero-system` hooks.
- The hero image overlay must use the shared approved Home/Page Hero treatment: `page-highlight-bar hero-portrait-overlay`.
- Do not add a Featured-only hero overlay card system or override the shared overlay position, padding, radius, background, shadow, or typography.
- Preserve navy/dark ink type, red accents, warm cream panels, soft borders, soft shadows, rounded portfolio cards, and the original detailed section rhythm.
- Keep the restored `.featured-summary-*`, `.featured-pillar-*`, `.featured-stat-*`, `.featured-problem-*`, and `.featured-value-*` sections active.

## Responsive QA

Test these widths for the Featured page:

```text
375
390
430
768
820
1024
1280
1440
1600
1920
2560
```

Confirm no horizontal overflow, clean hero wrapping, intentional image crops, six hero stat pills, a `3 x 2` desktop pill grid, restored detailed body sections, balanced CTA spacing, and no missing images or broken local links.

## Cleanup Notes

The simplified 4-card rebuild was removed/reverted. Do not rebuild the body as only Proof of Work overview, four cards, compact proof metrics, and a generic CTA.

The wrong Featured-only white hero caption card was removed. Featured Work now inherits the shared approved page-hero image overlay treatment; no Featured-only overlay selectors should be added back.
