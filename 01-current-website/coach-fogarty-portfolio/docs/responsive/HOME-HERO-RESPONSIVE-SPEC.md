# Home Hero Responsive Design Spec

Last updated: 2026-05-14

This is the measured source of truth for the approved Home hero desktop system and the reusable page-hero system inherited from it. Use it when changing the Home hero, tuning inherited page hero left columns, or checking whether future CSS preserves the approved body, pill, portrait, and overlay rhythm.

Scope:

- Page: `index.html`
- Primary CSS: `styles.css`
- Component: `main#top > .hero`
- Reusable page-hero hook: `.page-hero-system`
- Desktop starts: `1025px`
- Required desktop verification sizes: `1025x768`, `1280x800`, `1440x900`, `1600x900`, `1920x1080`, `2560x1440`

Older responsive audit sheets and copy notes are archived. Do not use them as current specs.

## Approved Desktop Intent

The Home hero uses the shared desktop/wide-desktop page shell, a two-column grid, left copy/stats, and a right portrait. The hero should feel composed at compact desktop, standard desktop, and true wide desktop.

Rules:

- Desktop begins at `1025px`.
- Use the shared desktop and wide-desktop page shell widths.
- Keep eyebrow, H1, body text, and six stat pills in the left column.
- Keep the portrait image in the right column.
- Do not let left-column pills run under the right image.
- Keep body `max-width: 100%`.
- Let body text fill the left copy lane.
- Change body typography by breakpoint instead of adding a narrow paragraph cap.
- Use the approved six-pill `3 x 2` grid.
- Keep wide desktop pills matched to the approved left lane; do not reintroduce the old `1120px` pill cap.
- Do not change right-column image sizes/crops or overlay styling when the request is left-column formatting.

## Page Shell

Current shell tokens:

```css
--page-gutter: 44px;
--page-max-desktop: 1680px;
--page-max-wide: 2240px;
--page-shell-width: min(var(--page-max-desktop), calc(100vw - 88px));

@media (min-width: 2200px) {
  --page-shell-width: min(var(--page-max-wide), calc(100vw - 320px));
}
```

Rendered targets:

| Viewport | Shell width | Notes |
|---|---:|---|
| `1025x768` | compact desktop lane | desktop structure begins |
| `1280x800` | `1192px` | standard shell with `44px` gutters |
| `1440x900` | `1352px` | standard shell with `44px` gutters |
| `1600x900` | `1512px` | standard shell |
| `1920x1080` | `1680px` | standard desktop cap |
| `2560x1440` | `2240px` | wide desktop tier |

## Layout Tokens

Current hero tokens:

```css
--hero-media-portrait-width: clamp(390px, 25vw, 660px);
--hero-media-portrait-height: clamp(370px, 18.5vw, 500px);
--hero-title-size: clamp(59.2px, 3.15vw, 76px);
--hero-title-line: 0.95;
--hero-body-size: clamp(16px, calc(13.12px + 0.28vw), 18px);
--hero-body-line: 1.52;
--hero-copy-max: 980px;
--hero-paragraph-max: 920px;
--hero-eyebrow-size: clamp(11.84px, calc(10.56px + 0.12vw), 13.76px);
--hero-eyebrow-line: 1.15;

--hero-wide-gap: 0px; /* legacy token; Home desktop master lock overrides 2200px+ gap */
--hero-wide-copy-max: 1180px;
--hero-wide-paragraph-max: 1120px;
--hero-wide-support-max: 1354px; /* legacy/shared token; Home desktop master lock fills the grid track at 1920px+ */
--hero-wide-title-size: clamp(76px, 3.1vw, 82px);
--hero-wide-portrait-width: clamp(660px, 28vw, 740px);
--hero-wide-portrait-height: clamp(480px, 20vw, 540px);
```

Later approved locks override paragraph max-width to `100%` for the Home hero body and make the stat-pill grid follow `.hero-left-system` / `.hero-pill-system` width.

## Two-Column Grid

| Viewport | Hero padding | Grid columns | Column gap | Right image frame |
|---|---:|---:|---:|---:|
| `1025x768` | compact desktop tuned | left lane + right portrait | compact | protected portrait column |
| `1280x800` | `28.2px 36px 23px` | left lane + `390px` | `33.28px` | about `390px x 380.5px` |
| `1440x900` | `31.7px 36px 25.9px` | left lane + `390px` | `37.44px` | about `390px x 389.5px` |
| `1600x900` | `31.7px 36px 25.9px` | left lane + right portrait | `37.44px` | about `370px` tall |
| `1920x1080` | `36px 46.1px 30px` | full left lane + `480px` | `38.4px` | about `480px x 380.6px` |
| `2560x1440` | `36px 58px 30px` | left lane + wide portrait | grid gap `0px`; visual right-column offset `51.2px` | about `716.8px x 500px` |

Guardrails:

- The right image column stays where the grid places it.
- The image frame is not changed to fix left-column text or pills.
- At wide desktop, spacing is controlled by left support widths and capped components, not by stretching pills into the image lane.

## Copy And Typography

Selectors:

```text
main#top > .hero .hero-copy
main#top > .hero .eyebrow
main#top > .hero h1
main#top > .hero .hero-text
```

Approved body behavior:

| Range | Body max-width | Body size | Line-height | Notes |
|---|---:|---:|---:|---|
| `1025-1199px` | `100%` | compact desktop tuned | compact desktop tuned | protect two-column fit |
| `1200-1499px` | `100%` | `17.5px` | `32px` | approved live rhythm |
| `1500-1599px` | `100%` | `17.25px` | `28px` | fills left lane |
| `1600-1919px` | `100%` | `17.5px` | `30px` | fills left lane |
| `1920-2199px` | `100%` | `17.5px` | `27.5px` | fills full left grid track |
| `2200px+` | `100%` | `22px` | `46px` | wide desktop rhythm; body margin-top uses `clamp(28px, calc(-166px + 8.8vw), 48px)` |

Copy rules:

- Body text should be balanced enough to fill the hero lane.
- Avoid one-word orphan lines through copy edits first.
- Keep the title-to-body gap approved by the current CSS locks.
- Do not add a new paragraph max-width cap unless a page has an approved exception.

## Stat Pills

Selectors:

```text
main#top > .hero .hero-pill-system
main#top > .hero .hero-pill-system > .hero-pill
main#top > .hero .hero-pill-main
main#top > .hero .hero-pill-sub
```

Approved stat pill system:

- Six pills use `3` columns x `2` rows.
- Pills stay in the left support area.
- Pills never run underneath the right portrait.
- Pill colors, border radius, padding, type, and gaps match the Home hero system.
- Wide desktop pills are not capped narrower than the left copy lane.
- At `2200px+`, the pill group uses no lift transform. The right-column grid item bottom-aligns so the 2-row group aligns with the right portrait card.
- `#impact` remains the Home section id/anchor and may appear in legacy selectors, but it is not part of the reusable page-hero system.

Current sizing targets:

| Range | Grid | Pill width | Pill height | Gap | Value size | Label size |
|---|---|---:|---:|---:|---:|---:|
| `1025-1349px` | `3 x 2` | about `223px` | `60px` | about `12px` | about `21.8px` | about `11.6px` |
| `1350-1499px` | `3 x 2` | about `273.9px` | `63.9px` | about `12px` | about `22.9px` | about `12px` |
| `1500-1719px` | `3 x 2` | about `306px` | `70px` | about `12px` | about `22.6px` | about `12px` |
| `1720-2199px` | `3 x 2` | about `346.5px` | `76px` | about `12px` | about `22.3px` | about `11.8px` |
| `2200px+` | `3 x 2` | stretches with full left grid track | `82px` | about `12px` | `26px` | `13.5px` |

Wide desktop guardrail:

```css
main#top > .hero .hero-left-system,
main#top > .hero .hero-pill-system {
  width: min(100%, var(--home-hero-left-system-max));
  max-width: min(100%, var(--home-hero-left-system-max));
}

/* 1920px+ sets --home-hero-left-system-max: 100% */
```

## Right Image

Scoped desktop selectors:

```text
main#top > .hero .hero-right-system
main#top > .hero .hero-portrait-card
main#top > .hero .hero-portrait-picture
main#top > .hero .hero-portrait-image
```

Image rules:

- Do not change image file, crop, frame size, or object-position without a specific visual request.
- Keep the portrait in the right column.
- Keep image crop rules aligned with `docs/image-export/README.md`.
- Overlay positioning should not drive image sizing.

## Portfolio Highlight Overlay

Scoped desktop selectors:

```text
main#top > .hero .hero-portrait-overlay
main#top > .hero .hero-portrait-overlay-title
main#top > .hero .hero-portrait-overlay-text
```

Overlay rules:

- Keep the overlay attached to the right portrait.
- `.hero-mobile-highlight` is retained as a legacy/tablet/mobile compatibility class, but desktop lock work should target `.hero-portrait-overlay`.
- Keep the approved right-column formatting.
- Keep approved overlay text on one line.
- Wide desktop overlay should be capped so it does not stretch too far.
- Do not alter overlay text or overlay styling when updating left-column hero rules.
- Link rows should stay distributed and aligned, not forced by fixed large gaps.

Current wide desktop overlay cap:

```css
main#top > .hero .hero-portrait-overlay {
  width: min(calc(100% - 26px), clamp(560px, 25vw, 680px));
  max-width: min(calc(100% - 26px), clamp(560px, 25vw, 680px));
}
```

## Inherited Page Heroes

Systems, Featured, Gallery/Media, Anaya Beard Case Study, and The Archer now inherit the approved Home hero desktop system through `.page-hero-system`. Credentials keeps its prior shared fallback. About and Contact are excluded.

Rules:

- Reuse `.hero-left-system`, `.hero-pill-system`, `.hero-pill`, `.hero-pill-main`, `.hero-pill-sub`, `.hero-right-system`, `.hero-portrait-card`, `.hero-portrait-picture`, `.hero-portrait-image`, `.hero-portrait-overlay`, `.hero-portrait-overlay-title`, and `.hero-portrait-overlay-text`.
- Do not rely on `#impact`, `main#top`, `.hero-visual display: contents`, old pill caps, or page-specific hero hacks for reusable subpage heroes.
- Keep the page hero left-column body `max-width: 100%`.
- Use the Home-like body rhythm by breakpoint.
- Use `3` desktop columns for pill/action rows.
- Use `3 x 2` for six stat-pill groups.
- Keep right-column image and overlay formatting matched to Home unless a page-specific crop is explicitly approved.
- About and Contact are excluded where existing approved rules say not to touch them.

## Verification Checklist

Run checks at:

```text
1025x768
1280x800
1440x900
1600x900
1920x1080
2560x1440
```

Check:

- page shell matches the target lane,
- hero is split at `1025px+`,
- body text fills the left lane,
- no paragraph cap prevents approved rhythm,
- stat pills stay in the left column,
- wide desktop pills do not become long bars,
- right portrait remains in the right column,
- overlay stays attached to the right image and keeps approved formatting,
- no horizontal overflow.
