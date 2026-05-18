# DPAT Report Design System Notes

Shared design and build notes for the finished DPAT report designs.

Use this file when creating future reports so the designs stay consistent with:

- `season-total-stats-report`
- `action-leaderboard-report`
- `player-rankings`
- `game-report`

## Current Finished Reports

### Season Total Stats Report

Source folder:

`season-total-stats-report/`

Final PDF:

`../final-reports/season-total-stats-report/dpat-season-total-stats-report-2025-2026.pdf`

Format:

- 4 pages
- Letter landscape
- Page 1: Overall Defensive Summary
- Page 2: Man Defensive Summary
- Page 3: 50 Defensive Summary
- Page 4: 21 Defensive Summary

Core layout:

- Wide landscape dashboard.
- Large title and subtitle on the left.
- Defensive scale on the right.
- Tall gold shield icon at far right.
- KPI cards under the header: Games Tracked, Positive Total, Negative Total, Net Performance, Team PPM/PPP.
- Four top-five panels: Minutes/Possessions, Positive Total, Negative Total, Overall/Man/50/21 PPM/PPP.
- Large roster summary table.
- Gold breadcrumb/footer bar.

### Action Leaderboard Report

Source folder:

`action-leaderboard-report/`

Final PDF:

`../final-reports/action-leaderboard-report/dpat-action-leaderboard-report-combined.pdf`

Format:

- 2 pages
- Letter portrait
- Page 1: Positive Action Leaderboards
- Page 2: Negative Action Leaderboards

Core layout:

- Portrait leaderboard grid.
- Large title and colored subtitle.
- Clipboard icon at far right.
- 4 by 4 grid of compact leaderboard cards.
- One-line footer statement.
- Page badge at bottom right.

### Player Rankings Report

Source folder:

`player-rankings/`

Reference PDF:

`../codex-design/player-rankings-report/dpat-player-rankings-current-report.pdf`

Format:

- 1 page
- Letter portrait
- Four leaderboard sections: Performance Ratings, Possessions Per Game, Positive Defensive Impact, Negative Plays / Accountability
- Each section uses four cards: Overall, Man, 50, 21

Core layout:

- Portrait leaderboard dashboard.
- Header with the 94 Feet Defender Badge on the left and gold podium/crown rankings icon on the right.
- Four compact 4-column leaderboard grids.
- Season Total-style footer strip with black background, gold top rule, basketball mark, breadcrumb text, and page number.

### Game Report

Source folder:

`game-report/`

Starting reference:

`../codex-design/game-report/dpat-game-report-cuesta-2025-12-19-reference-report.pdf`

Format:

- 5 pages
- Letter landscape
- Page 1: Overall
- Page 2: Man
- Page 3: 50
- Page 4: 32
- Page 5: 21

Core layout:

- Wide landscape game dashboard.
- Game summary, execution, and breakdown sections.
- Player rows with team total row.
- Defensive scale treatment should follow the updated DPAT system.
- Footer uses the Season Total-style black strip with gold top rule, basketball mark, breadcrumb text, and page number.
- Old PDF/screenshots are structure references only; rebuild in the updated DPAT brand direction.

## Shared Brand Rules

- Background: black or near-black.
- Border: thin DPAT gold.
- Main title: white, Impact/Arial Black style.
- Primary accent gold: `#F6C400`.
- Border gold: `#D6A000`.
- Season Total positive header green: `#00B818`.
- Season Total elite/KPI positive icon green: `#00E51D`.
- Negative red: `#D40000` for report negative headers and KPI numbers.
- Body panels: white with light gray alternating rows.
- Data text: bold black for readability.
- Avoid decorative gradients or extra visual noise.
- These are coaching reports first, so readability beats ornament.

## Season Total Color Scale

Use this defensive scale for Season Total-style defensive dashboard reports:

| Label | Range | Hex | Text |
|---|---:|---:|---|
| Liability | `<0` | `#FF1C12` | White |
| Poor | `.00-.19` | `#FF6900` | Black |
| Weak | `.20-.39` | `#FFB000` | Black |
| Fair | `.40-.59` | `#FFF200` | Black |
| Good | `.60-.79` | `#B8FF2C` | Black |
| Strong | `.80-.99` | `#7CFF00` | Black |
| Elite | `1.00` | `#00E51D` | Black |

Positive table headers use `#00B818` with white text so the header reads cleanly. Rating chips use the defensive scale colors.

## Header Rules

Season Total and Action Leaderboard should feel related, but they do not have identical headers because the pages have different shapes.

Season Total:

- Landscape page gives the title more horizontal room.
- Header includes the defensive scale.
- Subtitle is gold because the page type is a defensive summary.
- Top-right mark is the gold shield, sized taller than the scale chips but kept above the scale range-number baseline.

Action Leaderboard:

- Portrait page is narrower.
- No defensive scale, so the header needs breathing room instead of more content.
- Subtitle color identifies page purpose:
  - Positive page: `#168A2F`
  - Negative page: red
- Title should be large but not squeezed. Current action title is intentionally balanced for portrait.

## Typography Rules

- Main title:
  - Use `Impact, "Arial Black", Arial, sans-serif`.
  - Season Total, Action Leaderboard, and Player Rankings title size is `30pt` unless the report format changes.
  - Keep letter spacing at `0`.
  - Do not use negative letter spacing.
- Top-five card headers:
  - Season Total and Player Rankings use `Impact, "Arial Black", Arial, sans-serif`.
  - Use `10.2pt` type in a `0.25in` header bar for the current top-five card style.
- Table subheaders:
  - Season Total and Player Rankings leaderboard cards use `6pt` bold subheaders.
  - Keep `Rank`, `Player`, metric columns, and `Per/Game` centered and vertically aligned.
- Card and table text:
  - Use bold Arial/Helvetica for maximum PDF readability.
  - Avoid thin weights in small tables.
- Footer:
  - Headline should be strong but not overpower the body line.
  - Body line must remain readable at 100% PDF view.

## Layout Rules

Season Total:

- Use landscape Letter: `11in x 8.5in`.
- Keep the dashboard hierarchy:
  - Header
  - KPI row
  - Leader panels
  - Roster summary
  - Breadcrumb footer
- Keep the footer compact enough that the summary table and top-five cards have room to breathe.
- KPI row order should follow the summary story: Games Tracked, Positive Total, Negative Total, Net Performance, Team PPM/PPP.
- Top-five row order should match the summary story: workload, positive, negative, PPM/PPP.

Season Total KPI icons:

- Games Tracked: white calendar with gold dots.
- Positive Total: green thumbs-up with wrist/cuff break.
- Negative Total: red thumbs-down with wrist/cuff break.
- Net Performance: gold balance scale with white number.
- Team PPM/PPP: trend chart icon colored by the team rating class.
- Header: gold shield.

Season Total roster summary:

- Use `# | PLAYER | POS | GP/POSS | MIN/POSS | POSITIVE | NEGATIVE | NET | PPM/PPP`.
- Keep Negative and Net numbers black in the roster table.
- PPM/PPP gets defensive-scale chips and should be the clearest roster metric.

Action Leaderboard:

- Use portrait Letter: `8.5in x 11in`.
- Keep exactly 16 cards per page unless the report brief changes.
- Cards should stay compact but readable.
- Do not add KPI cards to this report; it is a leaderboard report, not a dashboard.
- Footer should stay one line.

Player Rankings:

- Use portrait Letter: `8.5in x 11in`.
- Keep the section order: Performance Ratings, Possessions Per Game, Positive Defensive Impact, Negative Plays / Accountability.
- Keep four cards per section: Overall, Man, 50, 21.
- Header uses the 94 Feet Defender Badge and gold podium/crown rankings icon.
- Section headers use black bars.
- Performance Ratings and Possessions Per Game use gold title text/icons.
- Positive Defensive Impact section header uses green `#00B818` icon and title text on black.
- Negative Plays / Accountability section header uses red `#D40000` icon and title text on black.
- Positive card headers remain solid `#00B818` with white Impact/Arial Black type.
- Negative card headers remain solid `#D40000` with white Impact/Arial Black type.
- Top-five card headers use the Season Total `10.2pt` header style.
- Table subheaders use the Season Total `6pt` leaderboard style.
- Keep table values black for readability.
- Use the Season Total-style footer strip; do not use boxed DPAT Value Statement footers on current DPAT reports.
- Keep the footer compact and one line whenever possible so the top-five cards have room to breathe.
- Use the current reference PDF in `../codex-design/player-rankings-report/` when matching spacing and hierarchy.

## Build Commands

### Action Leaderboard

From `action-leaderboard-report/`:

```bash
python extract-data.py
node render-pdf.cjs
```

### Season Total Stats

From `season-total-stats-report/`:

```bash
python extract-data.py
node render-pdf.mjs
```

### Player Rankings

From `player-rankings/`:

```bash
python extract-data.py
node render-pdf.cjs
```

## Future Report Checklist

1. Decide the report shape first:
   - Dashboard summary: use Season Total landscape pattern.
   - Dense leaderboard: use Action Leaderboard portrait pattern.
2. Reuse the same black/gold frame.
3. Use the report-specific positive green:
   - Season Total dashboard headers: `#00B818`.
   - Action Leaderboard positive page: `#168A2F` unless that report is intentionally refreshed.
4. Keep title treatment consistent with existing reports.
5. Make table text readable at 100% PDF zoom.
6. Render proof PNGs.
7. Check every page visually before calling it final.
8. Export final files into the matching folder under `../final-reports/`.

## Common Mistakes To Avoid

- Do not make the portrait title as wide-feeling as the landscape title. It will look cramped.
- Do not shrink table text too far just to fit more rows.
- Do not let footer text wrap to two lines unless the design brief changes.
- Do not mix Season Total positive greens accidentally: `#00B818` is the positive header green, while `#00E51D` is the Elite scale/KPI icon green.
- Do not use the older Player Rankings full green/red section-banner direction; use black section bars with colored icon/title text.
- Do not let page badges, footer text, or icons crowd the page border.
- Do not redesign the report family from scratch for each new report.
