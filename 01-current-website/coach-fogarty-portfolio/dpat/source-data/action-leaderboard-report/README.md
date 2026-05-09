# DPAT Action Leaderboard Source Data

Source data files for the 2025-2026 DPAT Action Leaderboard Report.

## Files

- `dpat-action-leaderboard-source-data-reference-2025-2026.csv`
- `dpat-action-leaderboard-source-workbook-2025-2026.xlsx`

## Used By

Editable report design:

`../../report-designs/action-leaderboard-report/`

The extraction script reads the CSV from this folder:

`../../report-designs/action-leaderboard-report/extract-data.py`

## Notes

- The action leaderboard report currently calculates `Per/G` using 19 tracked games.
- If a future report uses a different game count, update `ACTION_GAMES_TRACKED` in `extract-data.py` before rebuilding.
