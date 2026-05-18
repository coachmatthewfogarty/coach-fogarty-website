const data = window.DPAT_REPORT_DATA;

const scale = [
  ["Liability", "<0", "#FF1C12", "#FFFFFF"],
  ["Poor", ".00-.19", "#FF6900"],
  ["Weak", ".20-.39", "#FFB000"],
  ["Fair", ".40-.59", "#FFF200"],
  ["Good", ".60-.79", "#B8FF2C"],
  ["Strong", ".80-.99", "#7CFF00"],
  ["Elite", "1.00", "#00E51D"],
];

function fmt(value, digits = 0) {
  if (value === null || value === undefined || value === "") return "-";
  if (typeof value !== "number") return value;
  return value.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function metric(value) {
  if (value === null || value === undefined || value === "") return "-";
  return Number(value).toFixed(2);
}

function signedClass(value) {
  if (typeof value !== "number" || value === 0) return "neutral";
  return value > 0 ? "positive" : "negative";
}

function ratingClass(value) {
  if (typeof value !== "number") return "neutral";
  if (value >= 1) return "elite";
  if (value >= 0.8) return "strong";
  if (value >= 0.6) return "good";
  if (value >= 0.4) return "fair";
  if (value >= 0.2) return "weak";
  if (value >= 0) return "poor";
  return "liability";
}

function td(content, className = "") {
  return `<td class="${className}">${content}</td>`;
}

function scaleChip(value) {
  return `<span class="scale-chip ${ratingClass(value)}">${metric(value)}</span>`;
}

function rankBadge(rank, negative = false) {
  const cls = negative ? `negative-rank-${rank}` : `rank-${rank}`;
  return `<span class="rank-badge ${rank <= 3 ? cls : ""}">${rank}</span>`;
}

function scaleMarkup() {
  return `
    <div class="scale">
      <div class="scale-title">DEFENSIVE SCALE</div>
      <div class="scale-grid">
        ${scale.map(([label, range, color, textColor = "#050505"]) => `
          <div>
            <div class="scale-badge" style="background:${color}; color:${textColor}"><span>${label}</span></div>
            <div class="scale-range">${range}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function leaderCard(title, rows, columns, tone = "black", negativeRanks = false, extraClass = "") {
  return `
    <section class="leader-card ${extraClass}">
      <div class="leader-title ${tone}">${title}</div>
      <table class="leader-table">
        <thead>
          <tr>
            <th class="rank-cell">RANK</th>
            <th>PLAYER</th>
            ${columns.map(c => `<th class="num">${c.label.toUpperCase()}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${rows.map((row, idx) => `
            <tr>
              ${td(rankBadge(idx + 1, negativeRanks), "rank-cell")}
              ${td(row["Player Short"])}
              ${columns.map(c => {
                const value = c.format === "metric" ? scaleChip(row[c.key]) : fmt(row[c.key], c.digits || 0);
                const cls = [
                  c.format === "metric" ? "metric-cell" : "",
                  c.format !== "metric" && c.classKey === "negative" ? "negative" : "",
                ].filter(Boolean).join(" ");
                return td(value, `num ${cls}`);
              }).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
}

function kpiIcon(type, cls = "") {
  const icons = {
    calendar: `
      <svg class="kpi-icon kpi-icon-calendar ${cls}" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="8" y="13" width="48" height="46" rx="6" class="calendar-body"></rect>
        <rect x="13" y="25" width="38" height="29" rx="2" class="calendar-window"></rect>
        <line x1="20" y1="8" x2="20" y2="20" class="calendar-ring"></line>
        <line x1="44" y1="8" x2="44" y2="20" class="calendar-ring"></line>
        <circle cx="22" cy="32" r="3.7" class="calendar-dot"></circle>
        <circle cx="32" cy="32" r="3.7" class="calendar-dot"></circle>
        <circle cx="42" cy="32" r="3.7" class="calendar-dot"></circle>
        <circle cx="22" cy="41" r="3.7" class="calendar-dot"></circle>
        <circle cx="32" cy="41" r="3.7" class="calendar-dot"></circle>
        <circle cx="42" cy="41" r="3.7" class="calendar-dot"></circle>
        <circle cx="22" cy="49" r="3.7" class="calendar-dot"></circle>
        <circle cx="32" cy="49" r="3.7" class="calendar-dot"></circle>
        <circle cx="42" cy="49" r="3.7" class="calendar-dot"></circle>
      </svg>
    `,
    trend: `
      <svg class="kpi-icon kpi-icon-trend ${cls}" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="8" y="42" width="10" height="13" rx="1.5"></rect>
        <rect x="25" y="35" width="10" height="20" rx="1.5"></rect>
        <rect x="45" y="24" width="10" height="31" rx="1.5"></rect>
        <path d="M9 36 L24 22 L35 29 L56 8" class="trend-line"></path>
        <path d="M45 8 H56 V19" class="trend-arrow"></path>
      </svg>
    `,
    shield: `
      <svg class="kpi-icon kpi-icon-shield ${cls}" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 4 L56 15 V28 C56 45 45 56 32 61 C19 56 8 45 8 28 V15 Z" class="shield-shell"></path>
        <path d="M32 10 L51 18 V29 C51 43 42 53 32 58 C22 53 13 43 13 29 V18 Z" class="shield-channel"></path>
        <path d="M32 16 L45 22 V30 C45 40 39 48 32 52 C25 48 19 40 19 30 V22 Z" class="shield-face"></path>
      </svg>
    `,
    "thumb-up": `
      <svg class="kpi-icon kpi-icon-thumb ${cls}" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="8" y="29" width="13" height="25" rx="2.5" class="thumb-cuff"></rect>
        <path d="M26 28 C30 25 32 21 34 15 C35 10 38 8 42 10 C45 12 45 16 44 20 L42 27 H51 C55 27 58 30 57 34 C59 37 57 41 54 42 C56 45 54 49 51 50 C52 54 49 57 44 57 H28 C24 57 22 54 22 50 V34 C22 31 23 29 26 28 Z" class="thumb-hand"></path>
        <line x1="22" y1="30" x2="22" y2="55" class="thumb-break"></line>
        <path d="M43 27 H51 C55 27 58 30 57 34" class="thumb-detail"></path>
        <path d="M44 36 H55" class="thumb-detail"></path>
        <path d="M43 44 H53" class="thumb-detail"></path>
        <path d="M41 51 H50" class="thumb-detail"></path>
      </svg>
    `,
    "thumb-down": `
      <svg class="kpi-icon kpi-icon-thumb ${cls}" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="43" y="10" width="13" height="25" rx="2.5" class="thumb-cuff"></rect>
        <path d="M38 36 C34 39 32 43 30 49 C29 54 26 56 22 54 C19 52 19 48 20 44 L22 37 H13 C9 37 6 34 7 30 C5 27 7 23 10 22 C8 19 10 15 13 14 C12 10 15 7 20 7 H36 C40 7 42 10 42 14 V30 C42 33 41 35 38 36 Z" class="thumb-hand"></path>
        <line x1="42" y1="9" x2="42" y2="36" class="thumb-break"></line>
        <path d="M21 37 H13 C9 37 6 34 7 30" class="thumb-detail"></path>
        <path d="M20 28 H9" class="thumb-detail"></path>
        <path d="M21 20 H11" class="thumb-detail"></path>
        <path d="M23 13 H14" class="thumb-detail"></path>
      </svg>
    `,
    scales: `
      <svg class="kpi-icon kpi-icon-scales ${cls}" viewBox="0 0 72 64" aria-hidden="true">
        <line x1="36" y1="9" x2="36" y2="54" class="scale-line"></line>
        <line x1="14" y1="20" x2="58" y2="20" class="scale-line"></line>
        <line x1="18" y1="20" x2="9" y2="38" class="scale-line scale-hanger"></line>
        <line x1="18" y1="20" x2="28" y2="38" class="scale-line scale-hanger"></line>
        <line x1="54" y1="20" x2="44" y2="38" class="scale-line scale-hanger"></line>
        <line x1="54" y1="20" x2="63" y2="38" class="scale-line scale-hanger"></line>
        <path d="M8 38 H29 C27 48 10 48 8 38 Z" class="scale-pan"></path>
        <path d="M43 38 H64 C62 48 45 48 43 38 Z" class="scale-pan"></path>
        <line x1="26" y1="56" x2="46" y2="56" class="scale-line scale-base"></line>
      </svg>
    `,
  };
  return icons[type] || icons.calendar;
}

function kpiCard(label, value, cls = "", extraClass = "", iconType = "calendar") {
  return `
    <section class="kpi-card ${extraClass}">
      ${kpiIcon(iconType, cls)}
      <div class="kpi-body">
        <div class="kpi-label">${label}</div>
        <div class="kpi-value ${cls}">${value}</div>
      </div>
    </section>
  `;
}

function kpiRatingCard(label, value) {
  return `
    <section class="kpi-card kpi-rating-card">
      ${kpiIcon("trend", `team-trend ${ratingClass(value)}`)}
      <div class="kpi-body">
        <div class="kpi-label">${label}</div>
        <div class="kpi-value rating-kpi-value">${scaleChip(value)}</div>
      </div>
    </section>
  `;
}

function pageMarkup(page, index, count) {
  const total = page.total;
  const isOverall = page.key === "overall";
  const volumeLabel = isOverall ? "Minutes Played" : "Possessions";
  const volumeShort = isOverall ? "MIN" : "POSS";
  const volumePerGame = isOverall ? "Per/Game" : "Poss/G";
  const ratingTitle = `${page.label.toUpperCase()} ${page.rating}`;
  const summaryTitle = `${page.label.toUpperCase()} ROSTER SUMMARY`;
  const teamRating = metric(total[page.rating]);
  const description = isOverall
    ? "Season totals, player rankings, workload, impact, and accountability overview."
    : `${page.label} defensive totals, player rankings, possessions, impact, and accountability overview.`;

  return `
    <section class="page">
      <header class="report-header">
        <div>
          <h1 class="title">${data.title}</h1>
          <p class="subtitle">${page.subtitle}</p>
          <p class="description">${description}</p>
        </div>
        ${scaleMarkup()}
        ${kpiIcon("shield", "header-shield")}
      </header>

      <div class="kpi-grid">
        ${kpiCard("Games Tracked", fmt(total["Games Played"]), "", "games-kpi", "calendar")}
        ${kpiCard("Positive Total", fmt(total["Positive Total"]), "positive", "", "thumb-up")}
        ${kpiCard("Negative Total", fmt(total["Negative Total"]), "negative", "", "thumb-down")}
        ${kpiCard("Net Performance", fmt(total["Net Performance"]), "net", "net-kpi", "scales")}
        ${kpiRatingCard(`Team ${page.rating}`, total[page.rating])}
      </div>

      <div class="leader-grid">
        ${leaderCard(volumeLabel, page.leaders.volume, [
          { label: isOverall ? "Minutes" : "Poss", key: page.volume },
          { label: volumePerGame, key: "Volume Per Game", digits: 1 },
        ], "workload")}
        ${leaderCard("Positive Total", page.leaders.positive, [
          { label: "Total", key: "Positive Total" },
          { label: "Per/Game", key: "Positive Per Game", digits: 1 },
        ], "green")}
        ${leaderCard("Negative Total", page.leaders.negative, [
          { label: "Total", key: "Negative Total" },
          { label: "Per/Game", key: "Negative Per Game", digits: 1 },
        ], "red", true)}
        ${leaderCard(ratingTitle, page.leaders.rating, [{ label: "Rating", key: page.rating, format: "metric", classKey: "rating" }], "black", false, "rating-card")}
      </div>

      <section class="roster-card">
        <div class="roster-title">${summaryTitle}</div>
        <table class="roster-table">
          <thead>
            <tr>
              <th class="jersey-col num">#</th>
              <th class="player-col">PLAYER</th>
              <th class="position-col num">POS</th>
              <th class="small-col num">GP</th>
              <th class="small-col num">${volumeShort}</th>
              <th class="small-col num positive-header">POSITIVE</th>
              <th class="small-col num negative-header">NEGATIVE</th>
              <th class="small-col num">NET</th>
              <th class="small-col num">${page.rating}</th>
            </tr>
          </thead>
          <tbody>
            ${page.players.map(player => `
              <tr>
                ${td(player["Jersey"] ?? "", "num jersey-cell")}
                ${td(player["Player Short"])}
                ${td(player["Position"] ?? "", "num position-cell")}
                ${td(fmt(player["Games Played"]), "num")}
                ${td(fmt(player[page.volume]), "num")}
                ${td(fmt(player["Positive Total"]), "num")}
                ${td(fmt(player["Negative Total"]), "num black-number")}
                ${td(fmt(player["Net Performance"]), "num black-number")}
                ${td(scaleChip(player[page.rating]), "num rating-pill")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <footer class="footer">
        <div class="footer-left">
          <span class="ball"></span>
          <span>Season Total Stats</span>
          <span>&gt;</span>
          <span>${page.label} Summary</span>
          <span>&gt;</span>
          <span>Defensive Performance Accountability Tracker</span>
        </div>
        <div class="page-num">PAGE ${index + 1} OF ${count}</div>
      </footer>
    </section>
  `;
}

document.getElementById("report").innerHTML = data.pages
  .map((page, index) => pageMarkup(page, index, data.pages.length))
  .join("");
