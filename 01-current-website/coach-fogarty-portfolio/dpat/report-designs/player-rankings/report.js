function rankClass(rank, tone) {
  if (tone === "negative") return rank <= 3 ? `negative-rank-${rank}` : "";
  return rank <= 3 ? `rank-${rank}` : "";
}

function iconMarkup(type) {
  if (type === "bars") return `<span class="section-icon bars"><i></i><i></i><i></i></span>`;
  if (type === "clock") {
    return `
      <span class="section-icon possession-icon">
        <svg viewBox="0 0 72 40" aria-hidden="true">
          <path class="poss-arrow" d="M7 20 L29 8 V32 Z"></path>
          <path class="poss-arrow" d="M65 20 L43 8 V32 Z"></path>
        </svg>
      </span>
    `;
  }
  if (type === "shield") {
    return `
      <svg class="section-icon thumb-icon positive" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="8" y="29" width="13" height="25" rx="2.5" class="thumb-outline"></rect>
        <path d="M26 28 C30 25 32 21 34 15 C35 10 38 8 42 10 C45 12 45 16 44 20 L42 27 H51 C55 27 58 30 57 34 C59 37 57 41 54 42 C56 45 54 49 51 50 C52 54 49 57 44 57 H28 C24 57 22 54 22 50 V34 C22 31 23 29 26 28 Z" class="thumb-outline"></path>
        <rect x="8" y="29" width="13" height="25" rx="2.5" class="thumb-cuff"></rect>
        <path d="M26 28 C30 25 32 21 34 15 C35 10 38 8 42 10 C45 12 45 16 44 20 L42 27 H51 C55 27 58 30 57 34 C59 37 57 41 54 42 C56 45 54 49 51 50 C52 54 49 57 44 57 H28 C24 57 22 54 22 50 V34 C22 31 23 29 26 28 Z" class="thumb-hand"></path>
        <path d="M22 30 V55" class="thumb-break"></path>
        <path d="M42 27 H51 C55 27 58 30 57 34 C59 37 57 41 54 42 C56 45 54 49 51 50 C52 54 49 57 44 57" class="thumb-detail connected"></path>
        <path d="M44 36 H55 M43 44 H53 M41 51 H50" class="thumb-detail"></path>
      </svg>
    `;
  }
  return `
    <svg class="section-icon thumb-icon negative" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="43" y="10" width="13" height="25" rx="2.5" class="thumb-outline"></rect>
      <path d="M38 36 C34 39 32 43 30 49 C29 54 26 56 22 54 C19 52 19 48 20 44 L22 37 H13 C9 37 6 34 7 30 C5 27 7 23 10 22 C8 19 10 15 13 14 C12 10 15 7 20 7 H36 C40 7 42 10 42 14 V30 C42 33 41 35 38 36 Z" class="thumb-outline"></path>
      <rect x="43" y="10" width="13" height="25" rx="2.5" class="thumb-cuff"></rect>
      <path d="M38 36 C34 39 32 43 30 49 C29 54 26 56 22 54 C19 52 19 48 20 44 L22 37 H13 C9 37 6 34 7 30 C5 27 7 23 10 22 C8 19 10 15 13 14 C12 10 15 7 20 7 H36 C40 7 42 10 42 14 V30 C42 33 41 35 38 36 Z" class="thumb-hand"></path>
      <path d="M42 9 V36" class="thumb-break"></path>
      <path d="M22 37 H13 C9 37 6 34 7 30 C5 27 7 23 10 22 C8 19 10 15 13 14 C12 10 15 7 20 7" class="thumb-detail connected"></path>
      <path d="M20 28 H9 M21 20 H11 M23 13 H14" class="thumb-detail"></path>
    </svg>
  `;
}

function headerIcon(type) {
  if (type === "badge") {
    return `<img class="header-badge" src="assets/94-feet-defender-badge.png" alt="94 Feet Defender Badge">`;
  }

  if (type === "shield") {
    return `
      <svg class="header-shield" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M50 5 L86 18 V48 C86 70 70 88 50 96 C30 88 14 70 14 48 V18 Z" fill="none" stroke="currentColor" stroke-width="5" />
        <path d="M50 20 L70 28 V50 C70 65 60 76 50 82 C40 76 30 65 30 50 V28 Z" fill="none" stroke="currentColor" stroke-width="4" />
        <path d="M25 50 H75 M50 22 V83 M36 32 C43 42 43 58 36 68 M64 32 C57 42 57 58 64 68" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" />
      </svg>
    `;
  }
  return `
    <svg class="header-podium" viewBox="0 0 120 100" aria-hidden="true">
      <rect x="12" y="48" width="30" height="38" rx="1.5" class="podium-side"></rect>
      <rect x="45" y="30" width="32" height="56" rx="1.5" class="podium-center"></rect>
      <rect x="80" y="58" width="30" height="28" rx="1.5" class="podium-side"></rect>
      <path d="M49 27 L52 16 L58 22 L61 11 L64 22 L70 16 L73 27 Z" class="crown crown-main"></path>
      <circle cx="52" cy="16" r="2.4" class="crown-dot"></circle>
      <circle cx="61" cy="11" r="2.7" class="crown-dot"></circle>
      <circle cx="70" cy="16" r="2.4" class="crown-dot"></circle>
      <path d="M16 45 L19 35 L24 41 L27 31 L30 41 L35 35 L38 45 Z" class="crown crown-side"></path>
      <path d="M84 55 L87 45 L92 51 L95 41 L98 51 L103 45 L106 55 Z" class="crown crown-side"></path>
      <text x="61" y="58" text-anchor="middle" class="podium-num big">1</text>
      <text x="27" y="67" text-anchor="middle" class="podium-num">2</text>
      <text x="95" y="72" text-anchor="middle" class="podium-num">3</text>
    </svg>
  `;
}

function cardMarkup(card, section) {
  const cols = section.columns;
  const tableClass = cols.length > 3 ? "four-col" : "three-col";
  return `
    <section class="rank-card ${section.tone}">
      <h3>${card.title}</h3>
      <table class="${tableClass}">
        <colgroup>
          <col class="rank-col">
          <col class="player-col">
          ${cols.slice(2).map(() => `<col class="num-col">`).join("")}
        </colgroup>
        <thead>
          <tr>${cols.map(col => `<th>${col}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${card.rows.map(row => `
            <tr>
              <td class="rank-cell"><span class="rank-badge ${rankClass(row.rank, section.tone)}">${row.rank}</span></td>
              <td class="player-cell">${row.player}</td>
              <td class="num">${row.value}</td>
              ${cols.length > 3 ? `<td class="num">${row.perGame}</td>` : ""}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
}

function sectionMarkup(section) {
  return `
    <section class="leader-section ${section.tone}">
      <div class="section-heading">
        ${iconMarkup(section.icon)}
        <h2>${section.title}</h2>
      </div>
      <div class="card-grid">
        ${section.cards.map(card => cardMarkup(card, section)).join("")}
      </div>
    </section>
  `;
}

function pageMarkup() {
  return `
    <section class="page">
      <header class="report-header">
        <div class="header-mark">${headerIcon("badge")}</div>
        <div class="header-copy">
          <h1>${data.title}</h1>
          <p>${data.subtitle}</p>
        </div>
        <div class="header-mark right">${headerIcon("clipboard")}</div>
      </header>

      ${data.sections.map(sectionMarkup).join("")}

      <footer class="footer">
        <div class="footer-left">
          <span class="ball"></span>
          <span>Player Rankings</span>
          <span>&gt;</span>
          <span>Top 5 Leaderboards</span>
          <span>&gt;</span>
          <span>Defensive Performance Accountability Tracker</span>
        </div>
        <div class="page-num">PAGE 1 OF 1</div>
      </footer>
    </section>
  `;
}

document.getElementById("report").innerHTML = pageMarkup();
