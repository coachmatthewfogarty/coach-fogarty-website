from pathlib import Path
import csv
import json

SOURCE = Path("../../source-data/player-rankings/dpat-player-rankings-source-data-reference-2025-2026.csv")
OUTPUT = Path("report-data.js")

SEASON_STARTS = {
    "overall": 235,
    "man": 245,
    "50": 255,
    "21": 275,
}

PER_GAME_STARTS = {
    "overall": 285,
    "man": 295,
    "50": 305,
    "21": 325,
}


def clean_player(value):
    value = (value or "").strip()
    if " - " in value:
        return value.split(" - ", 1)[1]
    return value


def num(value):
    value = (value or "").strip().replace(",", "")
    if value == "":
        return None
    try:
        return float(value)
    except ValueError:
        return None


def fmt(value, digits=0):
    if value is None:
        return ""
    if digits == 0:
        return str(int(round(value)))
    return f"{value:.{digits}f}"


def section_rows(rows, starts, key, value_col, per_col=None, reverse=True, value_digits=0, per_digits=1):
    start = starts[key]
    items = []
    for row in rows:
        player = clean_player(row[start] if start < len(row) else "")
        if not player:
            continue
        value = num(row[start + value_col] if start + value_col < len(row) else "")
        if value is None:
            continue
        per = None
        if per_col == "games":
            games = num(row[start + 1] if start + 1 < len(row) else "")
            per = value / games if games else None
        elif per_col is not None:
            per = num(row[start + per_col] if start + per_col < len(row) else "")
        items.append({
            "player": player,
            "value": value,
            "display": fmt(value, value_digits),
            "perGame": fmt(per, per_digits) if per is not None else "",
        })
    items.sort(key=lambda item: item["value"], reverse=reverse)
    return [
        {
            "rank": index + 1,
            "player": item["player"],
            "value": item["display"],
            "perGame": item["perGame"],
        }
        for index, item in enumerate(items[:5])
    ]


def build_cards(rows, starts, value_col, per_col=None, reverse=True, value_digits=0, per_digits=1):
    cards = []
    for key, label, metric in [
        ("overall", "Overall", "PPM"),
        ("man", "Man", "PPP"),
        ("50", "50", "PPP"),
        ("21", "21", "PPP"),
    ]:
        rows_out = section_rows(rows, starts, key, value_col, per_col, reverse, value_digits, per_digits)
        cards.append({
            "key": key,
            "title": f"{label} {metric}" if value_col == 6 else label,
            "rows": rows_out,
        })
    return cards


def main():
    with SOURCE.open(newline="", encoding="utf-8-sig") as source:
        all_rows = list(csv.reader(source))

    data_rows = [row for row in all_rows[2:] if len(row) > 2 and row[1].strip()]

    data = {
        "title": "DPAT Player Rankings",
        "subtitle": "Defensive performance leaderboards for efficiency, workload, impact, and accountability.",
        "sections": [
            {
                "title": "Performance Ratings",
                "tone": "gold",
                "icon": "bars",
                "columns": ["Rank", "Player", "Rating"],
                "cards": build_cards(data_rows, SEASON_STARTS, 6, reverse=True, value_digits=2),
            },
            {
                "title": "Possessions Per Game",
                "tone": "gold",
                "icon": "clock",
                "columns": ["Rank", "Player", "Poss", "Per/Game"],
                "cards": build_cards(data_rows, SEASON_STARTS, 2, "games", reverse=True, value_digits=0, per_digits=1),
            },
            {
                "title": "Positive Defensive Impact",
                "tone": "positive",
                "icon": "shield",
                "columns": ["Rank", "Player", "Total", "Per/Game"],
                "cards": build_cards(data_rows, SEASON_STARTS, 3, "games", reverse=True, value_digits=0, per_digits=1),
            },
            {
                "title": "Negative Plays / Accountability",
                "tone": "negative",
                "icon": "alert",
                "columns": ["Rank", "Player", "Total", "Per/Game"],
                "cards": build_cards(data_rows, SEASON_STARTS, 4, "games", reverse=False, value_digits=0, per_digits=1),
            },
        ],
        "valueStatement": "The Defensive Performance Accountability Tracker evaluates defensive performance beyond traditional statistics by measuring player impact, scheme execution, effort, communication, rotations, positive plays, negative plays, and possession-level accountability. This allows coaches to create objective feedback, identify defensive trends, improve player development, and connect daily habits directly to team standards.",
    }

    OUTPUT.write_text("const data = " + json.dumps(data, indent=2) + ";\n", encoding="utf-8")


if __name__ == "__main__":
    main()
