# Hero Overlay System Lock

Date: 2026-05-15

This is the active source of truth for the overlay card that sits on top of the right hero image. It applies to Home, Systems, Featured Work, Gallery / Media, Anaya Beard Case Study, The Archer, and Credentials. About and Contact are intentionally excluded.

## Required Hooks

- `.hero-portrait-overlay`
- `.hero-portrait-overlay-title`
- `.hero-portrait-overlay-text`

No page-specific hero overlay behavior should be added for these pages. Overlay behavior belongs inside the canonical `.page-hero-system` block in `styles.css`.

## Shared Values

Base/tablet/mobile values live as `--hero-overlay-*` custom properties on `.page-hero-system`.

- Placement: absolute inside `.hero-portrait-card`.
- Background: `rgba(32, 28, 24, 0.74)`.
- Border: `1px solid rgba(255, 255, 255, 0.2)`.
- Radius: `14px`.
- Shadow: `0 14px 30px rgba(18, 14, 10, 0.22)` plus inset highlight.
- Blur: `backdrop-filter: blur(12px)`.
- Title: uppercase gold, `800`, `0.08em` letter spacing.
- Links: `#8bb8e8`, `800`, no underline, nowrap.
- Dividers: inline spans between links, `rgba(255, 246, 230, 0.56)`.

## Breakpoint Contract

Mobile and tablet use inset left/right/bottom overlay placement with wrapped, centered links:

```css
--hero-overlay-left: clamp(10px, 2.75vw, 24px);
--hero-overlay-right: clamp(10px, 2.75vw, 24px);
--hero-overlay-bottom: clamp(10px, 2.75vw, 24px);
--hero-overlay-width: auto;
--hero-overlay-max-width: none;
--hero-overlay-padding-block-start: clamp(7px, 1.45cqw, 14px);
--hero-overlay-padding-inline: clamp(10px, 2.15cqw, 22px);
--hero-overlay-padding-block-end: clamp(8px, 1.55cqw, 15px);
--hero-overlay-title-size: clamp(0.66rem, 2.2cqw, 1rem);
--hero-overlay-link-size: clamp(0.64rem, 3.25cqw, 1rem);
--hero-overlay-link-gap-column: clamp(4px, 1.8cqw, 12px);
--hero-overlay-justify: center;
--hero-overlay-wrap: wrap;
```

`430px` and below tightens only the inline padding, link gap, and link size so the row stays inside the image card.

Desktop `1025px+` uses the locked Home overlay treatment:

```css
--hero-overlay-left: clamp(10px, 0.85vw, 14px);
--hero-overlay-right: clamp(10px, 0.85vw, 14px);
--hero-overlay-bottom: clamp(10px, 0.9vw, 18px);
--hero-overlay-gap: 7px;
--hero-overlay-padding-block-start: 10px;
--hero-overlay-padding-inline: 12px;
--hero-overlay-padding-block-end: 10px;
--hero-overlay-title-size: 11.8px;
--hero-overlay-link-size: 13.2px;
--hero-overlay-link-gap-column: 6px;
--hero-overlay-justify: space-between;
--hero-overlay-wrap: nowrap;
```

Desktop `1025px` through `1599px` keeps links at `12px` to prevent crowding.

Wide desktop `2200px+` centers the overlay over the larger portrait:

```css
--hero-overlay-left: 50%;
--hero-overlay-right: auto;
--hero-overlay-width: min(calc(100% - 26px), clamp(560px, 25vw, 680px));
--hero-overlay-max-width: min(calc(100% - 26px), clamp(560px, 25vw, 680px));
--hero-overlay-padding-block-start: 13px;
--hero-overlay-padding-inline: 16px;
--hero-overlay-padding-block-end: 13px;
--hero-overlay-title-size: 15px;
--hero-overlay-link-size: 17px;
```

## Retired Overlay Systems

Do not reintroduce `.hero-mobile-highlight`, `.page-highlight-bar`, `.proof-card`, old portrait-card overlay rules, old page-specific hero overlay rules, fixed divider spacing rules, local blue-link row rules, or broad late overlay overrides. If an overlay exception is ever required for About or Contact, scope it only to that excluded page.
