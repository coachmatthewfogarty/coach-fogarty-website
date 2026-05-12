# Responsive Design System

This is the source-of-truth responsive system for the public Coach Fogarty portfolio website. Use it for new page sections, typography, spacing, cards, header/footer decisions, and responsive layout work.

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
| Page width | full minus gutters | full minus larger gutters | max `1200px` |
| Section grids | mostly `1fr` | mostly `1fr` or `2-col` | `2-4 col` as needed |
| Mini cards | compact on small mobile | desktop-like | desktop-like |

## Spacing And Padding

| Item | Small mobile `<=430px` | Mobile `431-720px` | Tablet `721-1024px` | Desktop |
|---|---:|---:|---:|---:|
| Page gutter | `12px` | `12px` each side | `16px -> 28px` | `16px+`, max page `1200px` |
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

## Verification Standard

When changing global type/layout rules, test representative widths:

```text
360, 390, 430, 768, 900, 1024, 1280, 1440
```

Check for:

- no horizontal heading overflow,
- no section titles below their readable floors,
- no card titles below their readable floors,
- tablet hero still stacked through `1024px`,
- desktop hero split at `1025px+`.
