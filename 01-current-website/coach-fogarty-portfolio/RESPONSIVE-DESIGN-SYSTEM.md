# Responsive Design System

This is the global source of truth for the public Coach Fogarty portfolio website responsive and layout system. Use it before changing typography, spacing, page heroes, body text, pills, cards, overlays, or breakpoint behavior.

Companion active specs:

- `docs/responsive/HOME-HERO-RESPONSIVE-SPEC.md`: measured Home hero desktop system.
- `docs/image-export/README.md`: locked image export, crop, naming, and asset rules.

Implementation lives primarily in:

```text
styles.css
footer.js
```

## Breakpoints

| Range | Name | Behavior |
|---|---|---|
| `<=430px` | small mobile | Tightest spacing, compact cards, protected mobile text floors |
| `431-720px` | mobile | Stacked layout, mobile drawer header, compact sections |
| `721-767px` | bridge | Tablet layout shell with mobile type scale |
| `768-1024px` | tablet | Mobile structure with roomier spacing and tablet type scale |
| `1025-1199px` | small desktop / large tablet transition | Desktop begins; keep layout compact and protect image/text balance |
| `1200-2199px` | desktop | Desktop nav, split heroes, approved desktop page shell |
| `2200px+` | wide desktop | Wide shell and capped wide components |

Desktop starts at `1025px`. Do not bring back older `1000px` desktop-switch rules.

## Page Shell

Use the shared shell for major sections, page heroes, cards, contact modules, systems grids, and media previews.

```css
--page-gutter: 44px;
--page-max-desktop: 1680px;
--page-max-wide: 2240px;
--page-shell-width: min(var(--page-max-desktop), calc(100vw - 88px));

@media (min-width: 2200px) {
  --page-shell-width: min(var(--page-max-wide), calc(100vw - 320px));
}
```

Target shell widths:

| Viewport | Target shell |
|---|---:|
| `1025x768` | compact desktop shell with `44px` base gutter when possible |
| `1280x800` | `1192px` |
| `1440x900` | `1352px` |
| `1600x900` | `1512px` |
| `1920x1080` | `1680px` |
| `2560x1440` | `2240px` |

## Home Hero Desktop System

The Home hero is the approved desktop reference.

- Desktop starts at `1025px`.
- Use a two-column grid with left copy/stats and right portrait.
- Left column holds eyebrow, H1, body text, and six stat pills.
- Right column holds the portrait image only.
- Do not let the left-column pills run under the right image.
- Body text uses `max-width: 100%` and fills the left copy lane.
- Body typography changes by breakpoint to keep the lane balanced.
- Six stat pills use the approved `3 x 2` grid and approved sizing.
- Wide desktop pills are capped so they do not become long bars.
- Do not cap the whole hero to a narrow centered lane.

Use `docs/responsive/HOME-HERO-RESPONSIVE-SPEC.md` for measured Home hero values.

## Page Hero Left Column

Systems, Featured, Gallery, Anaya, Archer, and Credentials hero pages inherit the approved Home hero left-column rules where applicable.

Left-column rules:

- Copy container is `width: 100%`, `max-width: 100%`, and `min-width: 0`.
- Body text is `width: 100%` and `max-width: 100%`.
- Body text uses the approved Home hero rhythm by breakpoint.
- Pill/action rows use the Home hero pill sizing and `3` desktop columns.
- Six-pill stat groups must form `3 x 2`.
- Pills stay inside the left column and never slide under the right media column.

Protected areas:

- Do not change eyebrow, title, right image, right-column image crop, or overlay styling when the request is only left-column formatting.
- About and Contact are excluded from broad hero-left/body changes where the page already has approved custom rules.

## Eyebrows

Use one consistent eyebrow system across desktop pages.

- Color: `var(--red)`.
- Transform: uppercase.
- Letter spacing: use the approved desktop system value; current desktop section system uses `0.15em`.
- Font weight: `700`.
- Desktop size/line: current section system uses `12px / 15px`.
- Keep eyebrow-to-title spacing consistent; current desktop section system uses `10px`.
- Mobile/tablet may adjust spacing and size, but should keep the same color family and should not drift into a separate palette.

## Titles And Headers

Use one consistent section-title system across desktop pages.

- Desktop section titles use Georgia/Palatino serif styling.
- Current desktop section title size: `clamp(36px, 2.1vw, 42px)`.
- Current desktop line-height: `1.05`.
- Keep title line-height tight and premium.
- Keep spacing between eyebrow and title consistent.
- Keep spacing from title to body/content consistent.
- Hero H1 rules are separate from section H2 rules and follow the hero system.

Heading fit rules:

- Eyebrows try to stay on one line.
- Section titles and card titles try to stay one line, then wrap at readable floors.
- Do not force headings into tiny type to avoid wrapping.

Readable floors:

| Element | Mobile | Tablet | Desktop |
|---|---:|---:|---:|
| Section title | `18px` | `20px` | `25px` |
| Card title | `18px` | `20px` | `22px` |
| Eyebrow | `8px` | `8px` | `8px` |

## Body Text

Use the approved Home hero body rhythm where applicable.

- Body copy should be long enough to feel balanced in its lane.
- Avoid orphan one-word lines through copy editing first, then layout tuning.
- Do not cap hero body max-width unless a page has its own approved exception.
- Home hero body stays `max-width: 100%`.
- Page hero left-column body text should fill the left copy lane.
- About and Contact are excluded where existing approved page rules say not to touch them.

Desktop body rhythm for inherited page heroes:

| Range | Body size | Line-height |
|---|---:|---:|
| `1025-1349px` | about `17.5px` | `32px` |
| `1350-1499px` | about `17.5px` | `32px` |
| `1500-1719px` | about `17.5px` | `30px` |
| `1720-2199px` | about `17.5px` | `27.5px` |
| `2200px+` | `22px` | `46px` |

## Pills

Hero stat/action pills use the Home hero system.

- Use `3` columns on desktop for hero pill rows.
- Six hero pills must be `3` columns x `2` rows.
- Pills stay inside the left column.
- Wide desktop pills are capped.
- Pill colors, border radius, padding, font sizes, and gaps should match the Home hero system.
- Use `minmax(0, ...)` grid tracks so labels can stay inside the pill.

Current desktop pill rhythm:

| Range | Pill width | Pill height | Gap |
|---|---:|---:|---:|
| `1025-1349px` | `223px` | `60px` | `12px` |
| `1350-1499px` | `273.9px` | `63.9px` | `12px` |
| `1500-1719px` | `306px` | `70px` | `12px` |
| `1720-2199px` | `346.5px` | `76px` | `12px` |
| `2200px+` | capped around `364px` | `72px` | `12px` |

## Featured Cards

Featured cards and panels should feel like part of the website design system, not separate landing-page components.

- Keep card rhythm compact, readable, and aligned to the shared shell.
- Avoid nesting cards inside cards.
- Use stable media dimensions and `minmax(0, 1fr)` grid tracks.
- Keep button groups aligned and equal-height when presented as a group.
- Preserve approved proof chips/stat card sizing unless a specific card task asks for a change.

## Gallery Cards

Gallery cards use the locked image/card pattern.

- Media frame uses a stable `4 / 3` aspect ratio unless a page-specific approved slot says otherwise.
- Images use approved crops and object-position rules from the image/export system.
- Captions stay readable and should not push the card wider than its grid track.
- Card title rows may truncate only where the current gallery pattern already approves it.
- Mobile/tablet card color should match desktop card color; do not introduce a separate mobile palette.

## Images And Right Columns

Do not modify right-column image sizes, crops, object-position, or export assets unless specifically requested.

- Right-column hero images stay in the right column.
- The image frame is not resized to solve left-column copy or pill issues.
- Overlay boxes should not drive image sizing.
- Use the locked crop ladder and naming rules in `docs/image-export/README.md`.
- Protect faces, bodies, document text, basketball action, and logos before decorative composition.

## Overlay Boxes

Overlay boxes keep their approved right-column formatting.

- Keep overlays attached to the image/right column.
- Wide desktop overlay pills/cards should not stretch too far.
- Keep overlay text on one line where approved.
- Do not alter overlay text or right-column overlay styling when updating left-column hero rules.
- Overlay link rows should use distributed spacing at desktop/wide desktop instead of fixed gaps that create uneven rows.

## Tablet And Mobile Color Consistency

Tablet/mobile may change spacing, stack order, and size, but they should keep the approved color system.

- Eyebrows stay in the same red color family.
- Cards keep the same warm panel system.
- Buttons and pill accents stay consistent with desktop.
- Mobile/tablet structure stays stacked through `1024px` unless a component has a tested exception.

## Verification Standard

For hero, page shell, body rhythm, pill, overlay, and image-column work, test:

```text
1025x768
1280x800
1440x900
1600x900
1920x1080
2560x1440
```

Also check representative mobile/tablet widths:

```text
360
390
430
768
900
1024
```

Check for:

- desktop begins at `1025px`,
- no horizontal overflow,
- tablet/mobile colors match the approved desktop palette,
- hero body text fills the left lane without unwanted max-width caps,
- stat pills stay inside the left column,
- wide desktop pills/cards/overlays do not stretch into long bars,
- right-column images and overlays remain unchanged unless requested,
- About and Contact exclusions remain respected.
