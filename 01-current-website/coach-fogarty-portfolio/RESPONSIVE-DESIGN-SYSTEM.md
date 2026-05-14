# Responsive Design System

This is the source-of-truth responsive system for the public Coach Fogarty portfolio website. Use it for new page sections, typography, spacing, cards, header/footer decisions, and responsive layout work.

Current companion specs:

- `docs/responsive/HOME-HERO-RESPONSIVE-SPEC.md` is the measured Home hero reference for the desktop shell, hero media, stat pills, and Portfolio Highlight overlay.

The implementation lives primarily in:

```text
styles.css
footer.js
```

`styles.css` defines the responsive type tokens, layout breakpoints, spacing, card dimensions, and component treatments. `footer.js` runs the heading/card-title fitter that protects one-line rules without letting text become unreadably small.

## Breakpoints

| Range | Name | Behavior |
|---|---|---|
| `<=430px` | small mobile | Tightest spacing, compact cards, protected mobile text floors |
| `431-720px` | mobile | Stacked layout, mobile drawer header, compact sections |
| `721-767px` | bridge | Tablet layout shell with mobile type scale |
| `768-1024px` | tablet | Mobile structure with roomier spacing and tablet type scale |
| `1025px+` | desktop | Desktop structure, desktop nav, split hero/column layouts allowed |

## Design Rule

Tablet should be mobile structure with desktop breathing room.

Use this decision model:

- `721-899px`: tablet portrait; keep stacked layouts.
- `900-1024px`: large tablet/tablet landscape; keep stacked layout, but add more desktop polish and spacing.
- `1025px+`: desktop structure begins.

For the homepage hero, keep the mobile/tablet stacked structure through `1024px`. Switch to the split desktop hero at `1025px+`.

## 2026-05-13 Desktop Width And Hero Source-Of-Truth

If older audit sheets conflict with this file or `docs/responsive/HOME-HERO-RESPONSIVE-SPEC.md`, use the current docs.

- Desktop begins at `1025px`. Do not bring back older `1000px` desktop-switch rules.
- Standard desktop uses the shared shell lane: `--page-shell-width: min(var(--page-max-desktop), calc(100vw - 88px))`.
- Wide desktop begins at `2200px+` and uses the wide shell lane: `--page-shell-width: min(var(--page-max-wide), calc(100vw - 320px))`.
- Current page width tokens are `--page-gutter: 44px`, `--page-max-desktop: 1680px`, and `--page-max-wide: 2240px`.
- Target desktop shell widths are `1192px` at `1280`, `1352px` at `1440`, `1680px` at `1920`, and `2240px` at `2560`.
- `2560x1440` is a real design tier. Do not treat it as a centered `1920` layout with large gutters.
- Home hero overlay and stat pill rules are captured in the Home hero spec. Keep label/link typography, overlay padding, and row spacing responsive rather than copying one fixed desktop value to all sizes.
- Old responsive audit CSV/XLSX files are historical and archived under `outputs/archive/2026-05-13-responsive-audits-superseded/`.

## 2026-05-11 Source-Of-Truth Cleanup

If older notes conflict with this file, use this file.

- Desktop begins at `1025px`. Do not bring back older `1000px` desktop-switch rules.
- The standard desktop content cap is `1680px`, and the wide desktop tier is `2240px` at `2200px+`. Use narrower widths only when a specific reading section needs them.
- Compact desktop tuning lives around `1025px-1240px`; this range should be desktop, but tighter and more carefully cropped than large desktop.
- Mobile/tablet structure stays stacked through `1024px` unless a component has a very specific, tested reason to split earlier.
- The public website and DPAT reports have separate design systems. Public website typography and table rules should not be copied into DPAT PDF tables, and DPAT black/gold report styling should not leak into the public site.

## Crop Size Ladder

Use this ladder from smallest mobile/thumbnail crop to largest desktop/detail crop:

| Crop | Size | Format | Use |
|---|---:|---|---|
| `overlay-thumb` | `600x400` | WebP | Smallest crop for overlay thumbnails, compact preview tiles, and light mobile thumbnail use |
| `media-card` | `1200x900` | AVIF | Default responsive card crop for homepage cards, media cards, system previews, and most gallery cards |
| `portrait` | `1800x2400` | AVIF | Tall portrait slots and detail views where vertical framing is the point |
| `landscape` | `2400x1800` | AVIF | Largest desktop/detail crop for wide displays, large media, and hero-style placements |

Crop rules:

- Start with the smallest crop that matches the actual rendered slot, then step up as the slot gets larger.
- Do not stretch a `600x400` thumbnail into desktop detail space when a `1200x900` or `2400x1800` approved crop exists.
- Keep `q98` and the crop label in the final filename so the live website can be traced back to the approved crop.
- Use `object-fit: cover` for photographic cards unless the asset is text-heavy or document-like. Use `contain` only for document previews or graphics that must remain fully visible.
- Do not solve mismatched image ratios with black bars, blurred fill, transparent padding, or fake borders.
- Protect faces, bodies, document text, basketball action, and logos before decorative composition.
- On mobile, prefer subject-safe crops and stable card height over dramatic desktop composition.
- On desktop, use the larger crop to show more context, but keep the subject readable inside the card or hero frame.

## Type Scale

| Item | Mobile | Tablet | Desktop |
|---|---:|---:|---:|
| Eyebrow | `10.88px` | `11.2px -> 12.16px` | `12.16px` |
| Eyebrow line-height | `13.06px` | `12.88px -> 13.98px` | `13.98px` |
| Section title | `24.8px` | `25.6px -> 35.2px` | `35.2px -> 40px` |
| Section title line-height | `26.78px` | `26.88px -> 36.96px` | `36.61px -> 41.6px` |
| Card title | `22.72px` | `23.36px -> 25.6px` | `25.6px -> 29.6px` |
| Card title line-height | `24.99px` | `25.23px -> 27.65px` | `27.65px -> 31.97px` |
| Stat pill value | `12.16px -> 20px` | `12.16px -> 20px` | `15.2px -> 20px` |
| Stat pill label | `8.32px -> 12.48px` | `8.32px -> 12.48px` | `10.24px -> 12.48px` |
| Hero title | `34.4px` | `37.6px -> 48px` | `52px -> 71.2px` |
| Paragraphs | `14.72px-16px` | mostly `16px` | mostly `16px` |
| Form input text | `16px` | `16px` | `16px` |

Smallest phones at `<=360px` can tighten further:

| Item | `<=360px` |
|---|---:|
| Eyebrow | `10.24px` |
| Section title token | `23.36px` |
| Card title token | `21.44px` |

Hero titles, section titles, and eyebrows should scale from their actual card or heading container width, not only from the viewport. Use the table above as the ceiling range, then tighten toward the readable floors when a card/image/section is narrow. The heading fitter in `footer.js` remains the final guard: it can shrink long headings to the readable floor and then allow wrapping when needed.

## Heading Fit Rules

The fitter runs across all viewport widths.

| Element | Rule |
|---|---|
| Eyebrows | Stay on one line; may shrink to `8px` minimum |
| Section titles | Try one line; shrink to a readable floor; then wrap if needed |
| Card titles | Try one line; shrink to a readable floor; then wrap if needed |

Readable floors:

| Element | Mobile | Tablet | Desktop |
|---|---:|---:|---:|
| Section title | `18px` | `20px` | `25px` |
| Card title | `18px` | `20px` | `22px` |
| Stat pill value | `11.52px` | `12.16px` | `15.2px` |
| Stat pill label | `8px` | `8.32px` | `10.24px` |
| Eyebrow | `8px` | `8px` | `8px` |

Do not force long titles to become microscopic just to keep one line. If they cannot fit above the floor, allow wrapping.

Homepage stat pills use the stat band as their sizing container, so the type follows the available card/image width instead of only the viewport. Keep the ceiling at `20px` for values and `12.48px` for labels; tighten toward the floors only on narrow cards.

## Layout Rules

| Area | Mobile | Tablet | Desktop |
|---|---|---|---|
| Overall structure | stacked | stacked, roomier | split/columns allowed |
| Homepage hero | stacked | stacked | split image/copy |
| Hero layout switch | mobile/tablet through `1024px` | desktop at `1025px+` | desktop |
| Header | mobile drawer | mobile drawer | full nav |
| Page width | full minus gutters | full minus larger gutters | `1680px` standard cap, `2240px` wide tier |
| Section grids | mostly `1fr` | mostly `1fr` or `2-col` | `2-4 col` as needed |
| Mini cards | compact on small mobile | desktop-like | desktop-like |

## Tables And Structured Data

For the public website, "table" also includes stats rows, credential/document grids, contact/document action groups, and other structured card layouts.

| Range | Table/Grid Behavior | Type Behavior |
|---|---|---|
| `<=430px` | Stack rows/cards; keep one primary action per row when possible | Do not shrink body/table text below readable mobile floors |
| `431-720px` | Stack first; use short two-column groups only for tiny action sets | Labels can tighten, but values and buttons stay readable |
| `721-899px` | Tablet portrait remains mostly stacked; two-column only when content is short | Use tablet floors, not desktop density |
| `900-1024px` | Add spacing and polish; still avoid major desktop table layouts | Keep headings and table labels readable before adding columns |
| `1025px-1240px` | Compact desktop; columns allowed, but reduce gaps/crop sizes carefully | Use compact desktop type, never tiny forced-fit type |
| `1241px+` | Full desktop grids/tables allowed within the `1680px` cap | Let columns breathe; do not scale text endlessly upward |

Rules:

- Prefer stacking or horizontal scrolling over unreadable table text.
- Use `minmax(0, 1fr)` in grids so text can wrap and the page avoids horizontal overflow.
- Keep buttons equal-height inside action groups.
- Use `overflow-wrap: anywhere` for long URLs, emails, filenames, and document titles.
- DPAT PDF reports are the exception; use the DPAT report design guide for those table sizes.

## Spacing And Padding

| Item | Small mobile `<=430px` | Mobile `431-720px` | Tablet `721-1024px` | Desktop |
|---|---:|---:|---:|---:|
| Page gutter | `12px` | `12px` each side | `16px -> 28px` | `44px` base gutter; `1680px` standard cap, `2240px` wide tier |
| Section gap | `18px` | `32px` typical | `24px` | `28px` typical |
| Section/card padding | `16px` | `18px` | `18px -> 28px` | `34px` sections, `22px` cards |
| Hero padding | `14px 16px 13px` | `14px 20px 12px` | `18px -> 28px` | `36px 42px 22px` |
| Card radius | `22px` | `22-28px` | `26px` | `24-34px` |
| Inner media radius | `16px` | `16-18px` | `16-18px` | `18px` |

## Component Specs

| Component | Mobile | Tablet | Desktop |
|---|---:|---:|---:|
| Form labels | `11.2px-11.84px` | `11.84px` | `11.84px` |
| Form input height | `40px` | `44px` | `44px` |
| Textarea height | `132px` | `140px` | `140px` |
| Footer headings | `11.52px` | `12.16px` | `12.16px` |
| Footer links | `14.4px` | `14.08px-15.2px` | `14.72px` |
| Header nav | `16px` drawer | `14.72px` drawer behavior | `15.68px` full nav |
| Mini-card title | `15.68px` small mobile | `16.32px` | `16.32px` |
| Mini-card subtext | `12.16px` small mobile | `13.44px` | `13.44px` |

## Page-Building Guidance

- Start mobile first.
- Keep tablet stacked unless a section clearly has enough width and content balance to split.
- Add desktop polish around `900px`, but do not force desktop structure before `1025px`.
- For new repeated cards, preserve the existing card rhythm: compact on mobile, roomier on tablet, dense only on desktop.
- Keep form input text at `16px` across all breakpoints.
- Keep public website visuals warm, editorial, parchment-based, and separate from the black/gold DPAT report design system.
- Keep section edges aligned to the shared page shell unless the component is intentionally full-bleed site chrome.
- Do not use a desktop crop, table, or grid rule as the reason text becomes unreadable; change structure before shrinking type below the floor.

## Verification Standard

When changing global type/layout rules, test representative widths:

```text
360, 390, 430, 768, 900, 1024, 1280, 1440, 1920, 2560
```

Check for:

- no horizontal heading overflow,
- no section titles below their readable floors,
- no card titles below their readable floors,
- tablet hero still stacked through `1024px`,
- desktop hero split at `1025px+`.
- compact desktop hero/table/card behavior still works from `1025px-1240px`,
- standard desktop remains composed at `1920x1080`,
- wide desktop remains intentional and readable at `2560x1440`.
