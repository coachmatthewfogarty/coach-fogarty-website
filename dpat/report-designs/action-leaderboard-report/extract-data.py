import csv
import json
from datetime import datetime
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
SOURCE_CSV = ROOT / "source-data" / "action-leaderboard-report" / "dpat-action-leaderboard-source-data-reference-2025-2026.csv"
OUT = Path(__file__).resolve().parent / "report-data.js"

PLAYERS = [
    "0 - Mia Rivera",
    "2 - Victoria Om",
    "11 - Anaya Beard",
    "12 - Aisleigh Canaday",
    "20 - Faith Ledesma",
    "21 - Beverly Tandarich",
    "22 - Jayleen Rivera",
    "23 - Sophia Boyer",
    "24 - Claudia Solis",
    "25 - Chloe Espinosa",
    "30 - Kiki Graham",
    "40 - Kimberly Limon",
]

ACTION_GAMES_TRACKED = 19

POSITIVE_CARDS = [
    ("Team Defense", "category", "Team Defense"),
    ("Stops", "category", "Stops"),
    ("Hustle Plays", "category", "Hustle Plays"),
    ("Rebounding", "category", "Rebounding"),
    ("Rotation Help", "action", "Rotation Help"),
    ("Blocks", "action", "Block"),
    ("Contested Shots", "action", "Contested Shot"),
    ("Steals", "action", "Steal"),
    ("Charges", "action", "Charge"),
    ("Jump Balls", "action", "Jump Ball"),
    ("PNR Trap", "action", "PNR Trap"),
    ("Good Fouls", "action", "Good Foul"),
    ("Tips", "action", "Tip"),
    ("No Ball in Paint", "action", "No Ball In Paint"),
    ("Successful Trap", "action", "Successful Trap"),
    ("Audibles", "action", "Audible"),
]

NEGATIVE_CARDS = [
    ("Team Defensive Errors", "category", "Team Errors"),
    ("Coverage Errors", "category", "Coverage Errors"),
    ("Rebounding Errors", "category", "Rebounding Errors"),
    ("Foul Issues", "category", "Foul Issues"),
    ("Failed Audibles", "action", "Failed Audible"),
    ("Middle Drive", "action", "Middle Drive"),
    ("Missed REB Duty", "action", "Missed REB Duty"),
    ("Bad Fouls", "action", "Bad Foul"),
    ("Missed PNR Trap", "action", "Missed PNR Trap"),
    ("No Shot Contest", "action", "No Shot Contest"),
    ("Scored On", "action", "Scored On"),
    ("Missed Rotation", "action", "Missed Rotation"),
    ("Same Side Help", "action", "Same Side Help"),
    ("Missed Trap", "action", "Missed Trap"),
    ("No Front (High)", "action", "No Front (High)"),
    ("No Front (Low)", "action", "No Front (Low)"),
]


def clean_number(value):
    if value is None:
        return None
    value = str(value).strip()
    if not value:
        return None
    try:
        number = float(value.replace(",", ""))
    except ValueError:
        return value
    return int(number) if number.is_integer() else number


def short_player(player):
    return player.split(" - ", 1)[1] if " - " in player else player


def read_rows():
    with SOURCE_CSV.open("r", encoding="utf-8-sig", newline="") as handle:
        return list(csv.reader(handle))


def section_map(rows, start_col, row_name_col, value_cols, first_data_row=2):
    data = {}
    per_game_average = {}
    for row in rows[first_data_row:]:
        name = row[row_name_col].strip() if row_name_col < len(row) else ""
        if not name:
            continue
        values = {
            player: clean_number(row[col]) if col < len(row) else None
            for player, col in zip(PLAYERS, value_cols)
        }
        if name == "Per-Game Average":
            per_game_average = values
        elif name not in {"TOTAL", "Defensive Breakdown % of Net", "Team Value Totals"}:
            data[name] = values
    return data, per_game_average


def category_map(rows, start_col, first_data_row=2):
    headers = rows[1]
    categories = [headers[col] for col in range(start_col + 1, start_col + 9)]
    data = {category: {} for category in categories}
    for row in rows[first_data_row:]:
        player = row[start_col].strip() if start_col < len(row) else ""
        if not player or player not in PLAYERS:
            continue
        for offset, category in enumerate(categories, start=1):
            data[category][player] = clean_number(row[start_col + offset])
    return data


def make_card(display, source, totals, per_games):
    ranked = []
    for order, player in enumerate(PLAYERS):
        total = totals.get(source, {}).get(player)
        if isinstance(total, (int, float)) and total > 0:
            ranked.append({
                "sourceOrder": order,
                "player": short_player(player),
                "total": total,
                "perGame": total / ACTION_GAMES_TRACKED,
            })
    ranked.sort(key=lambda row: (-row["total"], row["sourceOrder"]))
    rows = []
    for rank in range(5):
        if rank < len(ranked):
            item = ranked[rank]
            rows.append({
                "rank": rank + 1,
                "player": item["player"],
                "total": item["total"],
                "perGame": item["perGame"],
            })
        else:
            rows.append({
                "rank": rank + 1,
                "player": None,
                "total": None,
                "perGame": None,
            })
    return {
        "title": display,
        "source": source,
        "rows": rows,
    }


def page_payload(page_key, subtitle, description, footer_headline, footer_body, cards, totals, per_games):
    return {
        "key": page_key,
        "subtitle": subtitle,
        "description": description,
        "footerHeadline": footer_headline,
        "footerBody": footer_body,
        "cards": [make_card(display, source, totals, per_games) for display, _, source in cards],
    }


def main():
    rows = read_rows()
    category_totals = category_map(rows, 96)
    category_per_games = category_map(rows, 359)
    action_totals, _ = section_map(rows, 177, 177, list(range(178, 190)))
    action_per_games, _ = section_map(rows, 371, 371, list(range(372, 384)))

    totals = {**category_totals, **action_totals}
    per_games = {**category_per_games, **action_per_games}

    payload = {
        "title": "DPAT Action Leaderboard Report",
        "season": "2025-2026",
        "generated": datetime.now().isoformat(timespec="seconds"),
        "sourceCsv": SOURCE_CSV.name,
        "pages": [
            page_payload(
                "positive",
                "Positive Action Leaderboards",
                "Top 5 player leaderboards by positive defensive actions and impact metrics.",
                "Positive Actions. Positive Results.",
                "Effort, awareness, and teamwork that drive winning outcomes every game.",
                POSITIVE_CARDS,
                totals,
                per_games,
            ),
            page_payload(
                "negative",
                "Negative Action Leaderboards",
                "Top 5 player leaderboards by negative defensive actions and accountability metrics.",
                "Accountability Drives Improvement.",
                "Breakdowns become standards, habits, and a stronger connected defense.",
                NEGATIVE_CARDS,
                totals,
                per_games,
            ),
        ],
    }
    OUT.write_text("window.DPAT_ACTION_REPORT_DATA = " + json.dumps(payload, indent=2) + ";\n", encoding="utf-8")
    print(f"Wrote {OUT.name}")


if __name__ == "__main__":
    main()
