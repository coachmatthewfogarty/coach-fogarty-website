# DPAT Action Leaderboard Report Design

Editable source files for the 2025-2026 DPAT Action Leaderboard Report.

This report is the finished 2-page portrait leaderboard design:

- Page 1: Positive Action Leaderboards
- Page 2: Negative Action Leaderboards
- Letter portrait PDF
- 4 columns by 4 rows of Top 5 leaderboard cards per page
- Built for portfolio/report presentation, not website publishing

## Final Output

Combined PDF:

`../../final-reports/action-leaderboard-report/dpat-action-leaderboard-report-combined.pdf`

Individual page exports:

- `../../final-reports/action-leaderboard-report/dpat-action-leaderboard-report-page-1-positive.pdf`
- `../../final-reports/action-leaderboard-report/dpat-action-leaderboard-report-page-2-negative.pdf`
- `../../final-reports/action-leaderboard-report/dpat-action-leaderboard-report-page-1-positive.png`
- `../../final-reports/action-leaderboard-report/dpat-action-leaderboard-report-page-2-negative.png`

Local proof images:

- `proof-page-1-positive.png`
- `proof-page-2-negative.png`

## Source Data

Reference CSV:

`../../source-data/action-leaderboard-report/dpat-action-leaderboard-source-data-reference-2025-2026.csv`

Workbook reference:

`../../source-data/action-leaderboard-report/dpat-action-leaderboard-source-workbook-2025-2026.xlsx`

Design reference assets:

`../../codex-design/action-leaderboard-report/`

Important extraction note:

- `extract-data.py` currently uses `ACTION_GAMES_TRACKED = 19`.
- This keeps the Per/G values aligned with the original action leaderboard reference screenshots.
- If the season/game count changes, update this value before regenerating `report-data.js`.

## Editable Files

- `report-template.html`: Base HTML shell.
- `styles.css`: Portrait layout, header, card grid, typography, colors, footer, and print styling.
- `report.js`: Builds the positive and negative report pages from the data object.
- `report-data.js`: Extracted action leaderboard data consumed by the template.
- `extract-data.py`: Rebuilds `report-data.js` from the source CSV/workbook reference.
- `render-pdf.cjs`: Exports the combined PDF, individual page PDFs, final PNGs, and local proof PNGs.

## Build Steps

From this folder, refresh the report data:

```bash
python extract-data.py
```

Then regenerate the final PDF and PNG exports:

```bash
node render-pdf.cjs
```

## Final Design Notes

- Overall page size is Letter portrait: `8.5in x 11in`.
- Page background is black with a thin gold border.
- Header uses the Season Total report family:
  - Impact/Arial Black title treatment.
  - Large white title.
  - Colored subtitle.
  - Gold divider built into the header.
  - Clipboard icon on the right.
- Positive green is `#168A2F`.
- Negative red is `#ff1c12` for page subtitle/footer accents and darker red for card headers.
- Leaderboard cards use white bodies, alternating light gray rows, bold black data text, and compact green/red category headers.
- Table columns are always: `Rank`, `Player`, `Total`, `Per/G`.
- Footer stays one line:
  - Positive headline: `POSITIVE ACTIONS. POSITIVE RESULTS.`
  - Positive body: `Effort, awareness, and teamwork that drive winning outcomes every game.`
  - Negative headline: `ACCOUNTABILITY DRIVES IMPROVEMENT.`
  - Negative body: `Breakdowns become standards, habits, and a stronger connected defense.`
- Footer body text was increased and the headline reduced so the footer does not read like fine print.

## Future Edit Checklist

1. Update source data if needed.
2. Run `extract-data.py`.
3. Run `render-pdf.cjs`.
4. Open the combined PDF and check both pages at 100-110%.
5. Confirm:
   - Header title does not feel cramped.
   - Footer is still one line.
   - All cards remain readable.
   - Green remains `#168A2F`.
   - Final files appear in `../../final-reports/action-leaderboard-report/`.
