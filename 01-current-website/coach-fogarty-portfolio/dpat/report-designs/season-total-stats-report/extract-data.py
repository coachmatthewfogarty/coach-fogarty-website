import json
from datetime import datetime
from pathlib import Path

import pandas as pd


ROOT = Path(__file__).resolve().parents[2]
SOURCE_DIR = ROOT / "source-data" / "season-total-stats-report"
WORKBOOK = SOURCE_DIR / "dpat-season-total-stats-source-workbook-2025-2026.xlsx"
CSV_REFERENCE = SOURCE_DIR / "dpat-season-total-stats-source-data-reference-2025-2026.csv"
OUT = Path(__file__).resolve().parent / "report-data.js"

SECTIONS = [
    {"key": "overall", "label": "Overall", "row": 3, "subtitle": "Overall Defensive Summary", "volume": "Minutes Played", "rating": "PPM"},
    {"key": "man", "label": "Man", "row": 19, "subtitle": "Man Defensive Summary", "volume": "Possessions", "rating": "PPP"},
    {"key": "50", "label": "50", "row": 35, "subtitle": "50 Defensive Summary", "volume": "Possessions", "rating": "PPP"},
    {"key": "21", "label": "21", "row": 67, "subtitle": "21 Defensive Summary", "volume": "Possessions", "rating": "PPP"},
]


def clean_number(value):
    if pd.isna(value) or value == "":
        return None
    if hasattr(value, "item"):
        value = value.item()
    if isinstance(value, str):
        value = value.strip()
        if not value:
            return None
        try:
            as_number = float(value.replace(",", ""))
            return int(as_number) if as_number.is_integer() else as_number
        except ValueError:
            return value
    if isinstance(value, float) and value.is_integer():
        return int(value)
    return value


def short_player(name):
    if not isinstance(name, str):
        return name
    parts = name.split(" - ", 1)
    return parts[1] if len(parts) == 2 else name


def player_reference():
    ref = pd.read_excel(WORKBOOK, sheet_name="Reference", header=None)
    players = {}
    for _, row in ref.iloc[2:14, 0:5].iterrows():
        full_name = clean_number(row.iloc[2])
        if not full_name:
            continue
        players[full_name] = {
            "Jersey": clean_number(row.iloc[0]),
            "Position": clean_number(row.iloc[3]),
        }
    return players


def record_from_row(headers, row):
    item = {}
    for idx, header in enumerate(headers):
        if not header or pd.isna(header):
            continue
        item[str(header)] = clean_number(row.iloc[idx])
    if item.get("Player"):
        item["Player Short"] = short_player(item["Player"])
    return item


def numeric(value):
    return value if isinstance(value, (int, float)) else None


def top_rows(players, key, reverse=True):
    usable = [p for p in players if isinstance(p.get(key), (int, float))]
    return sorted(usable, key=lambda p: p[key], reverse=reverse)[:5]


def section_payload(df, spec, player_meta):
    section_row = spec["row"]
    header_row = section_row + 1
    headers = [clean_number(v) for v in df.iloc[header_row, 0:27].tolist()]

    players = []
    total = None
    average = None

    for row_idx in range(header_row + 1, min(header_row + 16, len(df))):
        row = df.iloc[row_idx, 0:27]
        label = row.iloc[0]
        if pd.isna(label) or label == "":
            continue
        record = record_from_row(headers, row)
        if label == "TOTAL":
            total = record
        elif label == "Per-Game Average":
            average = record
        else:
            has_volume = isinstance(record.get(spec["volume"]), (int, float)) and record.get(spec["volume"]) > 0
            has_games = isinstance(record.get("Games Played"), (int, float)) and record.get("Games Played") > 0
            if has_volume or has_games:
                record.update(player_meta.get(record.get("Player"), {}))
                players.append(record)

    for player in players:
        games = numeric(player.get("Games Played")) or 0
        volume = numeric(player.get(spec["volume"]))
        positive = numeric(player.get("Positive Total"))
        negative = numeric(player.get("Negative Total"))
        player["Volume Per Game"] = (volume / games) if games and volume is not None else None
        player["Positive Per Game"] = (positive / games) if games and positive is not None else None
        player["Negative Per Game"] = (negative / games) if games and negative is not None else None

    return {
        "key": spec["key"],
        "label": spec["label"],
        "subtitle": spec["subtitle"],
        "volume": spec["volume"],
        "rating": spec["rating"],
        "headers": headers,
        "players": players,
        "total": total,
        "average": average,
        "leaders": {
            "rating": top_rows(players, spec["rating"], True),
            "volume": top_rows(players, spec["volume"], True),
            "positive": top_rows(players, "Positive Total", True),
            "negative": top_rows(players, "Negative Total", False),
        },
    }


def main():
    df = pd.read_excel(WORKBOOK, sheet_name="Season Total Stats", header=None)
    csv = pd.read_csv(CSV_REFERENCE)
    player_meta = player_reference()
    payload = {
        "title": "DPAT Season Total Stats Report",
        "season": "2025-2026",
        "generated": datetime.now().isoformat(timespec="seconds"),
        "sourceWorkbook": WORKBOOK.name,
        "sourceSheet": "Season Total Stats",
        "referenceCsv": {
            "name": CSV_REFERENCE.name,
            "rows": int(csv.shape[0]),
            "columns": int(csv.shape[1]),
        },
        "pages": [section_payload(df, spec, player_meta) for spec in SECTIONS],
    }
    OUT.write_text("window.DPAT_REPORT_DATA = " + json.dumps(payload, indent=2) + ";\n", encoding="utf-8")
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
