# DPAT Season Total Stats Report Design

Editable source files for the 2025-2026 DPAT Season Total Stats Report.

Use this folder as the working template for the next DPAT dashboard-style report. Keep the same print-first rules: landscape PDF, black/gold DPAT frame, high-contrast tables, readable player data, and no website publishing.

## Report Output

Final PDF:

`../../final-reports/season-total-stats-report/dpat-season-total-stats-report-2025-2026.pdf`

Final proof images:

`../../final-reports/season-total-stats-report/proofs/`

## Source Data

Workbook:

`../../source-data/season-total-stats-report/dpat-season-total-stats-source-workbook-2025-2026.xlsx`

Workbook tab:

`Season Total Stats`

Reference CSV:

`../../source-data/season-total-stats-report/dpat-season-total-stats-source-data-reference-2025-2026.csv`

Design references:

`../../codex-design/season-total-stats-report/`

## Editable Files

- `report-template.html`: Base HTML shell.
- `styles.css`: Layout, typography, color, spacing, table, badge, chip, KPI, footer, and print styling.
- `report.js`: Report rendering logic, page structure, KPI icons, defensive scale, and tables.
- `report-data.js`: Extracted report data consumed by the template.
- `extract-data.py`: Rebuilds `report-data.js` from workbook and CSV sources.
- `render-pdf.mjs`: Exports the final PDF and refreshes proof images.
- `proof-page-1.png` through `proof-page-4.png`: Latest visual proofs.

## Build Steps

From this folder, refresh report data:

```bash
python extract-data.py
```

Then regenerate the final PDF and proof images:

```bash
node render-pdf.mjs
```

Verify the PDF:

```bash
mdls -name kMDItemNumberOfPages -name kMDItemPageHeight -name kMDItemPageWidth "../../final-reports/season-total-stats-report/dpat-season-total-stats-report-2025-2026.pdf"
```

Expected:

- `kMDItemNumberOfPages = 4`
- `kMDItemPageWidth = 792`
- `kMDItemPageHeight = 612`

## Required Report Format

- 4 pages total.
- Landscape Letter PDF, `11in x 8.5in`.
- Page 1: Overall.
- Page 2: Man.
- Page 3: 50.
- Page 4: 21.
- Designed for portfolio/report presentation.
- Do not publish to the website.

## Current Page Structure

Each page uses the same dashboard order:

1. Header: title, page subtitle, short description, defensive scale, gold shield mark.
2. KPI row: Games Tracked, Positive Total, Negative Total, Net Performance, Team PPM/PPP.
3. Top-five row: Minutes/Possessions, Positive Total, Negative Total, Overall/Man/50/21 PPM/PPP.
4. Roster summary table.
5. Breadcrumb footer with page number.

## Color Tokens

Use these hex values unless the next report has a clear reason to deviate.

| Purpose | Hex | Notes |
|---|---:|---|
| Page black | `#050505` | Main report background. |
| Header/card black | `#111111` | Top-five card headers. |
| KPI card black | `#0B0B0B` | KPI panel fill. |
| DPAT gold | `#F6C400` | Main gold text/icons. |
| Border gold | `#D6A000` | Page borders, dividers, card outlines. |
| White | `#FFFFFF` | Main light text. |
| Row gray | `#F2F2F2` | Alternating roster rows. |
| Negative red | `#D40000` | Negative KPI number and red headers. |
| Positive header green | `#00B818` | Positive top-five header and roster summary positive header. |
| Elite scale green | `#00E51D` | Elite defensive scale and top positive KPI icon. |
| Strong scale green | `#7CFF00` | Rating chip scale. |
| Good scale green | `#B8FF2C` | Rating chip scale. |
| Fair yellow | `#FFF200` | Rating chip scale. |
| Weak orange | `#FFB000` | Rating chip scale. |
| Poor orange | `#FF6900` | Rating chip scale. |
| Liability red | `#FF1C12` | Liability scale chip and liability rating chip. |
| Silver rank | `#BFC4CA` | Second-place rank badge. |
| Bronze rank | `#C98A37` | Third-place rank badge. |

## Defensive Scale Rules

Scale order is low-to-high, left-to-right:

| Label | Range | Hex | Text |
|---|---:|---:|---|
| Liability | `<0` | `#FF1C12` | White |
| Poor | `.00-.19` | `#FF6900` | Black |
| Weak | `.20-.39` | `#FFB000` | Black |
| Fair | `.40-.59` | `#FFF200` | Black |
| Good | `.60-.79` | `#B8FF2C` | Black |
| Strong | `.80-.99` | `#7CFF00` | Black |
| Elite | `1.00` | `#00E51D` | Black |

Defensive scale labels must be centered horizontally and vertically inside their color boxes. Range numbers sit below the boxes in white and should remain readable at 100% PDF zoom.

## Icon Rules

Current KPI icon set:

- Games Tracked: white calendar with 9 gold dots.
- Positive Total: green thumbs-up with wrist/cuff break.
- Negative Total: red thumbs-down with wrist/cuff break.
- Net Performance: gold balance scale with white number.
- Team PPM/PPP: trend chart icon. Icon color follows the team PPM/PPP defensive scale class.
- Header mark: taller gold shield at top right.

Icon colors:

- Positive icon: `#00E51D`.
- Negative icon: `#D40000`.
- Net icon: `#F6C400`.
- Games icon: white shell with `#F6C400` dots.
- Header shield: `#F6C400`.
- Team PPM/PPP trend icon: use the same rating class as the team PPM/PPP chip.

Keep icons bold and simple. They should read clearly in a PDF screenshot, not just at full resolution.

## KPI Row Rules

KPI order:

1. Games Tracked
2. Positive Total
3. Negative Total
4. Net Performance
5. Team PPM/PPP

All five KPI boxes use the same width and height. Keep labels and values centered within each card. Team PPM/PPP uses a defensive-scale chip for the number, and that chip should visually align with the PPM/PPP chips used in the top-five and roster summary sections.

Net Performance uses white number text even when positive. The balance scale icon stays gold.

## Top-Five Rules

Top-five order:

1. Minutes Played or Possessions.
2. Positive Total.
3. Negative Total.
4. Overall/Man/50/21 PPM or PPP.

All four top-five boxes use the same height. The PPM/PPP box may be slightly narrower than the three four-column boxes so the other charts get breathing room.

Table rules:

- Column headers are uppercase.
- Column headers are centered and vertically middle aligned.
- Rank and numeric columns are centered.
- Player names stay left aligned.
- Player names are indented slightly to close the visual gap from rank to player.
- Rank badges use gold, silver, and bronze for top three.
- Negative top-three rank badges use red, orange, and yellow.
- Negative total top-five numeric values are black, not red.
- Rating chips use the defensive scale background and font color.

## Roster Summary Rules

Roster columns:

`# | PLAYER | POS | GP/POSS | MIN/POSS | POSITIVE | NEGATIVE | NET | PPM/PPP`

Rules:

- Header labels are uppercase.
- Player header is centered.
- Positive header uses `#00B818` with white text.
- Negative header uses `#D40000` with white text.
- Negative column numbers are black.
- Net column numbers are black.
- PPM/PPP values are the most important roster numbers and use defensive-scale chips.
- PPM/PPP chips should visually match the top-five rating chips.
- Player rows should fill the table vertically with no wasted white space.

## Typography Rules

- Main title: `Impact, "Arial Black", Arial, sans-serif`.
- Letter spacing: `0`.
- Do not use negative letter spacing.
- Body/table text: bold Arial/Helvetica.
- Use all caps for report section headers and table headers.
- Keep small table text readable at 100% PDF zoom.
- PPM/PPP numbers should be bolder and more prominent than normal table data.

## Layout Rules

- Page size: `11in x 8.5in`.
- Use a thin gold outer border.
- Keep sections tight and aligned to the same left/right page margins.
- Avoid oversized footer black space.
- Footer should stay compact but readable.
- Do not place cards inside cards.
- Do not add decorative gradients or unrelated ornament.
- Do not use website layout assumptions; this is a PDF report design.

## Export And File Placement Rules

Final PDF belongs here:

`../../final-reports/season-total-stats-report/`

Editable design files belong here:

`../../report-designs/season-total-stats-report/`

Source/reference data belongs here:

`../../source-data/season-total-stats-report/`

Original brief/reference files belong here:

`../../codex-design/season-total-stats-report/`

Do not overwrite source workbook, source CSV, current report PDF reference, or screenshot references.

## Archive

Older README copies were moved out of the active DPAT tree:

`../../../../../04-archive/dpat-subfolder-archives-2026-05-08/report-designs/season-total-stats-report/archive/`

Most recent archived README before this update:

`../../../../../04-archive/dpat-subfolder-archives-2026-05-08/report-designs/season-total-stats-report/archive/README-dpat-season-total-stats-report-design-archived-2026-05-06-before-style-system-update.md`
