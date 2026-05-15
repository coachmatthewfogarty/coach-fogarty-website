# Page Hero System Lock

Date: 2026-05-15

This is the active source of truth for every active page hero except About and Contact. The Home hero and the reusable `.page-hero-system` are now the same component system across desktop, tablet, and mobile.

## Covered Pages

- `index.html`
- `systems.html`
- `featured-work.html`
- `media.html`
- `anaya-case-study.html`
- `archer-visuals.html`
- `credentials.html`

About and Contact are intentionally excluded.

## Required Markup Order

1. Eyebrow
2. Title
3. Body text
4. Right image/card
5. Overlay
6. Pill/action grid

## Required Hooks

- `.page-hero-system`
- `.hero-left-system`
- `.hero-pill-system`
- `.hero-pill`
- `.hero-pill-main`
- `.hero-pill-sub`
- `.hero-right-system`
- `.hero-portrait-card`
- `.hero-portrait-picture`
- `.hero-portrait-image`
- `.hero-portrait-overlay`
- `.hero-portrait-overlay-title`
- `.hero-portrait-overlay-text`

## Retired Hooks

Do not use these as page hero behavior hooks: `.subpage-hero`, `.anaya-hero`, `.featured-hero`, `.media-hero`, `.credentials-hero`, `.systems-jump-nav`, `.media-filter-row`, `.hero-actions`, `.page-highlight-bar`, `#impact`, or `main#top`.

## CSS Rule

Reusable hero behavior belongs in the canonical `.page-hero-system` block in `styles.css`. Page-specific hero CSS should not be added back unless it is scoped to About or Contact, or it is a narrow non-hero content rule.

Hero image overlay behavior is locked separately in `HERO-OVERLAY-SYSTEM-LOCK.md`. The only active hero overlay hooks for covered pages are `.hero-portrait-overlay`, `.hero-portrait-overlay-title`, and `.hero-portrait-overlay-text`.
