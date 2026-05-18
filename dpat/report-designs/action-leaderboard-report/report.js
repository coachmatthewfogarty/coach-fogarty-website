const data = window.DPAT_ACTION_REPORT_DATA;

function fmt(value, digits = 0) {
  if (value === null || value === undefined || value === "") return "-";
  if (typeof value !== "number") return value;
  return value.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function rankBadge(rank, negative = false) {
  const cls = negative ? `negative-rank-${rank}` : `rank-${rank}`;
  return `<span class="rank-badge ${rank <= 3 ? cls : ""}">${rank}</span>`;
}

function iconMarkup(tone) {
  return tone === "positive"
    ? `<svg class="report-icon svg-icon" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M50 5 L86 17 V50 C86 70 70 86 50 96 C30 86 14 70 14 50 V17 Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>
        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" stroke-width="4"/>
        <path d="M25 50 H75 M50 25 V75 M35 30 C43 43 43 57 35 70 M65 30 C57 43 57 57 65 70" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
      </svg>`
    : `<div class="report-icon clipboard-icon"><span></span></div>`;
}

function cardMarkup(card, tone) {
  const isNegative = tone === "negative";
  return `
    <section class="leader-card">
      <div class="leader-title ${tone}">${card.title}</div>
      <table class="leader-table">
        <thead>
          <tr>
            <th class="rank-col">Rank</th>
            <th class="player-col">Player</th>
            <th class="num-col">Total</th>
            <th class="num-col">Per/G</th>
          </tr>
        </thead>
        <tbody>
          ${card.rows.map(row => `
            <tr class="${row.player ? "" : "empty-row"}">
              <td class="rank-col">${rankBadge(row.rank, isNegative)}</td>
              <td class="player-col">${row.player ?? "-"}</td>
              <td class="num-col">${fmt(row.total)}</td>
              <td class="num-col">${fmt(row.perGame, 1)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
}

function pageMarkup(page, index, count) {
  const tone = page.key;
  return `
    <section class="page ${tone}-page">
      <header class="report-header">
        <div class="header-copy">
          <h1 class="title">${data.title}</h1>
          <p class="subtitle">${page.subtitle}</p>
          <p class="description">${page.description}</p>
        </div>
        <div class="header-accent">${iconMarkup("negative")}</div>
      </header>

      <div class="divider"></div>

      <section class="leader-grid">
        ${page.cards.map(card => cardMarkup(card, tone)).join("")}
      </section>

      <footer class="footer ${tone}">
        <div class="footer-icon">${tone === "positive" ? "+" : "!"}</div>
        <div class="footer-copy">
          <div class="footer-headline">${page.footerHeadline}</div>
          <div class="footer-body">${page.footerBody}</div>
        </div>
        <div class="page-num">PAGE ${index + 1} OF ${count}</div>
      </footer>
    </section>
  `;
}

document.getElementById("report").innerHTML = data.pages
  .map((page, index) => pageMarkup(page, index, data.pages.length))
  .join("");
