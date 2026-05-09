# DPAT Player Rankings Report Design

Editable source files for the 2025-2026 DPAT Player Rankings report.

Use this folder as the working template for the Player Rankings portrait leaderboard report. The visual reference lives in:

`../../codex-design/player-rankings-report/dpat-player-rankings-current-report.pdf`

## Source Data

Workbook:

`../../source-data/player-rankings/dpat-player-rankings-source-workbook-2025-2026.xlsx`

Reference CSV:

`../../source-data/player-rankings/dpat-player-rankings-source-data-reference-2025-2026.csv`

## Editable Files

- `report-template.html`: Base HTML shell.
- `styles.css`: Portrait layout, DPAT colors, card grid, typography, icons, tables, and print rules.
- `report.js`: Builds the report page from extracted data.
- `report-data.js`: Extracted leaderboard data consumed by the template.
- `extract-data.py`: Rebuilds `report-data.js` from the source CSV.
- `render-pdf.cjs`: Exports the final PDF and proof PNG.

## Build Steps

From this folder, refresh report data:

```bash
python extract-data.py
```

Then regenerate the report:

```bash
node render-pdf.cjs
```

## Output

Final PDF:

`../../final-reports/player-rankings/dpat-player-rankings-report-2025-2026.pdf`

Local proof image:

`proof-page-1.png`

## Current Design Notes

- Letter portrait: `8.5in x 11in`.
- One-page report.
- Black canvas with DPAT gold border.
- Header uses the Season Total family: white Impact/Arial Black title, 94 Feet Defender badge, and gold podium/crown rankings icon.
- Header title matches Season Total: `Impact, "Arial Black", Arial, sans-serif`, `30pt`, line-height `0.9`, letter spacing `0`.
- Sections remain in this order: Performance Ratings, Possessions Per Game, Positive Defensive Impact, Negative Plays / Accountability, Value Statement.
- Four cards per leaderboard section: Overall, Man, 50, 21.
- Section headers use black bars.
- Performance Ratings and Possessions Per Game use gold icon/title text.
- Positive Defensive Impact uses the Season Total thumbs-up icon and green `#00B818` title/icon on a black section bar.
- Negative Plays / Accountability uses the Season Total thumbs-down icon and red `#D40000` title/icon on a black section bar.
- Positive card headers use solid `#00B818` with white Impact/Arial Black type.
- Negative card headers use solid `#D40000` with white Impact/Arial Black type.
- Top-five card headers match Season Total: `Impact, "Arial Black", Arial, sans-serif`, `10.2pt`, `0.25in` tall.
- Table subheaders match Season Total leaderboard cards: `6pt`, bold, centered, and vertically middle aligned.
- Performance and workload section headers use black card headers with gold section accents.
- Possessions Per Game uses the red two-arrow possession icon from `assets/possession-arrows.png`.
- Table body text stays black, bold, and enlarged for top-five readability.
- Top-five card rows are expanded vertically to use the page height and minimize unused black space above the footer.
- Footer matches the Season Total footer system: black strip, gold top rule, basketball mark, breadcrumb text, and page number.
- Do not use a boxed value-statement footer on DPAT reports; the footer must stay compact so leaderboard cards have more vertical space.
- Footer is anchored to the bottom of the page.
