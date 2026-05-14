# Home Hero Responsive Design Spec

Last updated: 2026-05-13

This is the current source of truth for the Home page hero desktop system after the site-wide responsive scaling cleanup. Use this when continuing the hero work, tuning other hero pages, or checking whether future CSS changes preserve the established Home hero rhythm.

Scope:
- Page: `index.html`
- Primary CSS: `styles.css`
- Component: `main#top > .hero`
- Desktop verification sizes: `1280x800`, `1440x900`, `1920x1080`, `2560x1440`
- Mobile/tablet are intentionally not redefined here.

Do not use older responsive audit sheets as current specs. They are archived under `outputs/archive/2026-05-13-responsive-audits-superseded/`.

## Current Design Intent

The Home hero uses the shared desktop page lane, scales up to a true `2560x1440` wide tier, and keeps the content feeling composed rather than centered in large gutters.

Rules established today:
- Use the shared page shell token for the hero/card lane.
- Keep `2560x1440` as a real design tier with a `2240px` page shell.
- Keep the hero image in the right column.
- Keep copy, paragraph, stats, and overlay readable through max-widths and explicit row rules.
- Do not cap the entire hero inner layout to a narrow centered lane.
- The overlay link row starts slightly inside the label lane at every desktop size.

## Global Desktop Width System

Source selectors:
- `:root`
- `.page-shell`
- `@media (min-width: 1025px)`
- `@media (min-width: 2200px)`

Current tokens:

```css
--page-gutter: 44px;
--page-max-desktop: 1680px;
--page-max-wide: 2240px;
--page-shell-width: min(var(--page-max-desktop), calc(100vw - 88px));

@media (min-width: 2200px) {
  --page-shell-width: min(var(--page-max-wide), calc(100vw - 320px));
}
```

Rendered page shell:

| Viewport | Shell Width | Left Gutter | Right Gutter | Horizontal Overflow |
|---|---:|---:|---:|---|
| `1280x800` | `1192px` | `44px` | `44px` | no |
| `1440x900` | `1352px` | `44px` | `44px` | no |
| `1920x1080` | `1680px` | `120px` | `120px` | no |
| `2560x1440` | `2240px` | `160px` | `160px` | no |

## Hero Layout Tokens

Source selectors:
- `:root`
- `@media (min-width: 1025px)`
- `@media (min-width: 2200px)`

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

--hero-wide-gap: 0px;
--hero-wide-copy-max: 1180px;
--hero-wide-paragraph-max: 1120px;
--hero-wide-support-max: 1354px;
--hero-wide-title-size: clamp(76px, 3.1vw, 82px);
--hero-wide-portrait-width: clamp(660px, 28vw, 740px);
--hero-wide-portrait-height: clamp(480px, 20vw, 540px);
```

Wide desktop rule:

```css
@media (min-width: 2200px) {
  body .page-shell main#top > .hero {
    --hero-portrait-width: var(--hero-wide-portrait-width) !important;
    --hero-portrait-height: var(--hero-wide-portrait-height) !important;
    grid-template-columns: minmax(0, 1fr) var(--hero-wide-portrait-width) !important;
    grid-template-areas:
      "copy portrait"
      "stats portrait" !important;
    column-gap: var(--hero-wide-gap) !important;
  }
}
```

## Hero Card Measurements

Selector: `main#top > .hero`

| Viewport | Hero Size | Padding | Grid Columns | Column Gap | Row Gap | Copy Left Inset | Image Right Inset |
|---|---:|---:|---:|---:|---:|---:|---:|
| `1280x800` | `1192px x 423.2px` | `28.16px 36px 23.04px` | `694.734px 390px` | `33.28px` | `14.08px` | `37px` | `37px` |
| `1440x900` | `1352px x 429.6px` | `31.68px 36px 25.92px` | `850.562px 390px` | `37.44px` | `15.84px` | `37px` | `37px` |
| `1920x1080` | `1680px x 446.7px` | `36px 46.08px 30px` | `1067.45px 480px` | `38.4px` | `20px` | `47.1px` | `47.1px` |
| `2560x1440` | `2240px x 580px` | `36px 58px 30px` | `1405.2px 716.797px` | `0px` | `20px` | `59px` | `59px` |

Notes:
- At `2560x1440`, the visible left-support-to-image spacing is controlled by the copy/support max-widths and the `0px` column gap.
- The left content remains anchored to the normal hero left inset. It grows rightward through max-width and support widths.

## Hero Copy And Typography

Selectors:
- `main#top > .hero .hero-copy`
- `main#top > .hero .eyebrow`
- `main#top > .hero h1`
- `main#top > .hero .hero-text`

| Viewport | Copy Box | Eyebrow Font / Line | Title Font / Line | Paragraph Font / Line | Paragraph Width | Paragraph Max |
|---|---:|---:|---:|---:|---:|---:|
| `1280x800` | `694.7px x 172.3px` | `12.096px / 13.9104px` | `59.2px / 56.24px` | `16.704px / 25.3901px` | `694.7px` | `min(100%, 920px)` |
| `1440x900` | `850.6px x 177.3px` | `12.288px / 14.1312px` | `59.2px / 56.24px` | `17.152px / 26.071px` | `850.6px` | `min(100%, 920px)` |
| `1920x1080` | `980px x 192.7px` | `12.864px / 14.7936px` | `60.48px / 57.456px` | `18px / 27.36px` | `920px` | `min(100%, 920px)` |
| `2560x1440` | `1354px x 185.8px` | `13.632px / 15.6768px` | `79.36px / 75.392px` | `18px / 27.36px` | `1120px` | `min(100%, 1120px)` |

Paragraph vertical placement:

| Viewport | Title Top From Hero | Paragraph Top From Hero | Paragraph Margin Top |
|---|---:|---:|---:|
| `1280x800` | `53.1px` | `125.3px` | `16px` |
| `1440x900` | `57.6px` | `131.8px` | `18px` |
| `1920x1080` | `66.2px` | `147.6px` | `24px` |
| `2560x1440` | `68.7px` | `168px` | `24px` |

## Hero Image

Selectors:
- `main#top > .hero .portrait-card`
- `main#top > .hero .portrait-card img`

| Viewport | Image Frame | Image Left / Top | Object Fit | Object Position |
|---|---:|---:|---|---|
| `1280x800` | `390px x 370px` | `809px / 95.2px` | `cover` | `50% 0%` |
| `1440x900` | `390px x 370px` | `969px / 98.7px` | `cover` | `50% 0%` |
| `1920x1080` | `480px x 370px` | `1272.9px / 103px` | `cover` | `50% 0%` |
| `2560x1440` | `716.8px x 512px` | `1624.2px / 103px` | `cover` | `50% 0%` |

Image rules:
- Do not change image file, crop, or object-position without an explicit visual reason.
- At wide desktop, the right image column stays where the grid places it.
- The overlay is positioned inside this image frame and should not drive image sizing.

## Portfolio Highlight Overlay

Selectors:
- `main#top > .hero .hero-mobile-highlight`
- `main#top > .hero .hero-mobile-highlight p`
- `main#top > .hero .hero-mobile-highlight div`

Purpose:
- The overlay is a compact image-attached navigation strip.
- It should remain low on the image.
- The label line starts at the overlay padding lane.
- The blue link row starts slightly inside the label lane at every desktop size.
- Links stay on one line.

Current desktop row-balance rules:

```css
main#top > .hero .hero-mobile-highlight {
  --home-highlight-row-balance: 0px;
  --home-highlight-row-offset: 0px;
}

main#top > .hero .hero-mobile-highlight div {
  justify-content: space-between;
  width: calc(100% + var(--home-highlight-row-balance));
  margin-inline: var(--home-highlight-row-offset);
  gap: 0;
}

@media (min-width: 1025px) and (max-width: 1349px) {
  --home-highlight-row-balance: -6px;
  --home-highlight-row-offset: 3px;
}

@media (min-width: 1350px) and (max-width: 1719px) {
  --home-highlight-row-balance: -6px;
  --home-highlight-row-offset: 3px;
}

@media (min-width: 1720px) and (max-width: 2199px) {
  --home-highlight-row-balance: -8px;
  --home-highlight-row-offset: 4px;
}

@media (min-width: 2200px) {
  width: calc(100% - 18px);
  margin-inline: auto;
}
```

Overlay measurements:

| Viewport | Overlay Size | Padding | Gap Between Lines | Bottom From Image | Left / Right From Image |
|---|---:|---:|---:|---:|---:|
| `1280x800` | `366.3px x 55.7px` | `10px 12px` | `8px` | `12.5px` | `11.9px / 11.9px` |
| `1440x900` | `363.5px x 57.5px` | `10.8px 12px` | `8px` | `14px` | `13.2px / 13.2px` |
| `1920x1080` | `454px x 65.3px` | `11.904px` | `9.984px` | `18.3px` | `13px / 13px` |
| `2560x1440` | `690.8px x 80.8px` | `15px 18px` | `10px` | `18px` | `13px / 13px` |

Overlay type:

| Viewport | Label Font / Line | Link Font / Line | Links One Line |
|---|---:|---:|---|
| `1280x800` | `11.8px / 11.8px` | `12.1px / 13.915px` | yes |
| `1440x900` | `12px / 12px` | `12.1px / 13.915px` | yes |
| `1920x1080` | `13.2px / 13.2px` | `14.25px / 16.3875px` | yes |
| `2560x1440` | `17px / 17px` | `19px / 21.85px` | yes |

Overlay vertical rhythm:

| Viewport | Label Top From Overlay | Gap Between Label And Links | Links Bottom From Overlay |
|---|---:|---:|---:|
| `1280x800` | `11px` | `8px` | `11px` |
| `1440x900` | `11.8px` | `8px` | `11.8px` |
| `1920x1080` | `12.9px` | `10px` | `12.9px` |
| `2560x1440` | `16px` | `10px` | `16px` |

Overlay horizontal rhythm:

| Viewport | Label Left | Link Left | Link Right | Link Indent From Label |
|---|---:|---:|---:|---:|
| `1280x800` | `13px` | `16px` | `16px` | `+3px` |
| `1440x900` | `13px` | `16px` | `16px` | `+3px` |
| `1920x1080` | `12.9px` | `16.9px` | `16.9px` | `+4px` |
| `2560x1440` | `19px` | `28px` | `28px` | `+9px` |

Overlay guardrails:
- The link row should not start left of the label lane.
- The link row should remain a little inset from the label line, not heavily centered.
- Do not use fixed `gap` between every link/divider at wide desktop; use the distributed row.
- Do not allow wrapping, clipping, or horizontal overflow.

## Stat Pills

Selectors:
- `main#top > .hero .hero-stat-band`
- `main#top > .hero #impact.hero-stat-band article`
- `main#top > .hero #impact.hero-stat-band article strong`
- `main#top > .hero #impact.hero-stat-band article span`

| Viewport | Stat Band | Grid Columns | Gap | Pill Size | Pill Padding | Value Font / Line | Label Font / Line |
|---|---:|---:|---:|---:|---:|---:|---:|
| `1280x800` | `694.7px x 132.7px` | `223.047px 223.047px 223.047px` | `12.8px` | `223px x 60px` | `9.216px 12.8px` | `21.824px / 21.824px` | `11.584px / 12.7424px` |
| `1440x900` | `850.6px x 142.1px` | `273.922px 273.922px 273.938px` | `14.4px` | `273.9px x 63.9px` | `10.368px 14.4px` | `22.912px / 22.912px` | `12.032px / 13.2352px` |
| `1920x1080` | `1067.5px x 166px` | `346.484px 346.484px 346.484px` | `14px` | `346.5px x 76px` | `12px 18px` | `22.336px / 22.336px` | `11.84px / 13.024px` |
| `2560x1440` | `1354px x 166px` | `442px 442px 442px` | `14px` | `442px x 76px` | `12px 18px` | `24.32px / 24.32px` | `12.8px / 14.08px` |

Stat pill guardrails:
- Keep the stat grid inside the left content/support area.
- Do not let stat pills run under the image column.
- At `2560`, the stat grid should fill the left column intentionally without moving the left content group right.

## CSS Selector Map

Primary rules to inspect before editing:

```text
:root
@media (min-width: 1025px)
@media (min-width: 1720px)
@media (min-width: 2200px)
main#top > .hero
main#top > .hero .hero-copy
main#top > .hero h1
main#top > .hero .hero-text
main#top > .hero .portrait-card
main#top > .hero .hero-mobile-highlight
main#top > .hero .hero-mobile-highlight p
main#top > .hero .hero-mobile-highlight div
main#top > .hero .hero-stat-band
main#top > .hero #impact.hero-stat-band article
```

## Verification Checklist

Run visual and measurement checks at:

```text
1280x800
1440x900
1920x1080
2560x1440
```

Check:
- page shell width matches the target lane,
- hero card matches the shell width,
- image remains in the right column,
- text remains readable and paragraph max-width is respected,
- stat pills stay inside the left support area,
- overlay label and link row keep their established alignment,
- overlay links stay on one line,
- no horizontal overflow.

## Superseded Files

The previous audit outputs were useful during diagnosis, but their numbers predate the current desktop lane, hero media, typography, and overlay tuning. They are archived in:

```text
outputs/archive/2026-05-13-responsive-audits-superseded/
```

Archived groups:
- `structured-responsive-audit`
- `section-width-measurements`
- `responsive-scaling-audit`

Use this spec and `RESPONSIVE-DESIGN-SYSTEM.md` for current implementation decisions.
