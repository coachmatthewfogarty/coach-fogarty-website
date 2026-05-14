import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const generatedAt = "2026-05-14";
const outputDir = new URL("./", import.meta.url);
const siteRoot = "/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio";

const selectors = [
  ["Section", "#systems.section.library-section", "Preserved"],
  ["Grid", "#libraryGrid.library-grid", "Preserved"],
  ["Card", ".library-card.system-card", "Preserved"],
  ["Image wrapper", ".library-card-media", "Preserved"],
  ["Button wrapper", ".library-actions", "Preserved"],
];

const finalSpecRows = [
  ["Heading", "Eyebrow", "#systems .section-heading .eyebrow", "COACHING SYSTEMS", "Confirmed in index.html"],
  ["Heading", "Title", "#systems .section-heading h2", "Systems & Proof of Work", "Lowercase of confirmed in index.html"],
  ["Layout", "Desktop grid", "main#top #systems .library-grid", "3 columns at >=1025px", "Preserved"],
  ["Layout", "Tablet grid", "main#top #systems .library-grid", "2 columns from 721px through 1024px", "Preserved"],
  ["Layout", "Mobile grid", "main#top #systems .library-grid", "1 column through 720px", "Preserved"],
  ["Layout", "Desktop grid gap", "main#top #systems .library-grid", "clamp(14px, 1.15vw, 22px)", "Preserved existing Systems-specific rule"],
  ["Card", "Card visual system", ".library-card.system-card", "Cream rounded cards, red titles, image-forward layout, pill buttons", "Preserved"],
  ["Card", "Desktop card title", "main#top #systems .library-card.system-card h3", "26px / 28px; color var(--red)", "Preserved"],
  ["Image", "Media ratio", "main#top #systems .library-card-media", "aspect-ratio: 4 / 3", "Preserved"],
  ["Image", "Image fit", ".library-card-media img", "object-fit: cover", "Preserved"],
  ["Image", "Document preview crop", "DPAT, Recruiting, Scouting", "object-position: center top", "Preserved"],
  ["Buttons", "Button grid", ".library-actions", "2 columns x 2 rows", "Preserved"],
  ["Buttons", "Button height", "main#top #systems .button-small", "Desktop clamp(36px, 7cqw, 42px); tablet/mobile 40px", "Equal heights verified"],
  ["Buttons", "Desktop button font fit", "main#top #systems .system-card .button-small", "font-size: clamp(11px, 1.05vw, 14px) !important", "Existing desktop rule edited to fit Head Coach Alignment"],
  ["Buttons", "Tablet button font fit", "main#top #systems .system-card .button-small", "font-size: clamp(0.74rem, 1.35vw, 0.86rem)", "Existing tablet rule edited"],
  ["Links", "Homepage Scouting hrefs", "Scouting buttons in app.js", "./assets/documents/scouting/*.pdf", "Confirmed current Scouting document folder"],
  ["Detail page cleanup", "Head Coach label", "systems.html", "Head Coach Alignment", "Confirmed full Head Coach label"],
  ["Detail page cleanup", "Head Coach DEI label", "systems.html", "Head Coach DEI", "Confirmed full Head Coach label"],
  ["Detail page cleanup", "Scouting hrefs", "systems.html", "./assets/documents/scouting/*.pdf", "Confirmed current Scouting document folder"],
];

const cardRows = [
  ["1", "Player Development", "Player plans, drill logs, measurable growth.", "Overview | Training Programs | Drill Log | Complete Portfolio"],
  ["2", "Defensive Tracker", "DPAT grading and accountability tracking.", "Overview | Game Report | Team Rankings | Complete Portfolio"],
  ["3", "Coaching Philosophy", "Leadership, alignment, program standards.", "Assistant Philosophy | 30-60-90 Plan | DEI Statement | Head Coach Alignment"],
  ["4", "Recruiting", "Recruiting plans and program workflow.", "Recruiting Plan | Program Overview | Team Plan | Staff Plan"],
  ["5", "Program Support", "Operations plans and year-round organization.", "Overview | Operations Plan | Staff Plan | Fundraising Plan"],
  ["6", "Scouting", "Opponent prep and game-ready staff tools.", "Overview | Personnel Report | In-Game Notes | Complete Portfolio"],
];

const desktopRows = [
  ["1280", "1192px", "34px 36px 34px 36px", "28px", "34px", "36px / 37.8px", "3", "14.72px", "362.844px", "324.844 x 243.625", "26px / 28px", "36px", "13.44px"],
  ["1440", "1352px", "34px 36px 34px 36px", "28px", "34px", "36px / 37.8px", "3", "16.56px", "414.969px", "376.969 x 282.719", "26px / 28px", "36px", "14px"],
  ["1600", "1512px", "34px 38.4px 34px 38.4px", "28px", "34px", "36px / 37.8px", "3", "18.4px", "465.469px", "427.469 x 320.594", "26px / 28px", "36px", "14px"],
  ["1920", "1680px", "34px 46.08px 34px 46.08px", "28px", "34px", "40.32px / 42.336px", "3", "22px", "513.938px", "475.938 x 356.953", "26px / 28px", "36px", "14px"],
  ["2560", "2240px", "34px 58px 34px 58px", "28px", "34px", "42px / 44.1px", "3", "22px", "692.656px", "654.656 x 490.984", "26px / 28px", "42px", "14px"],
];

const qaRows = [
  ["Section title", "Systems & Proof of Work", "Passed"],
  ["Eyebrow", "COACHING SYSTEMS", "Passed"],
  ["All card titles", "Requested 6 cards", "Passed"],
  ["All descriptions", "Requested descriptions", "Passed"],
  ["Coaching Philosophy buttons", "Assistant Philosophy and Head Coach Alignment", "Passed"],
  ["No old abbreviations", "No stale Coaching Philosophy abbreviations in active checked files", "Passed"],
  ["Desktop", "3 columns at 1280, 1440, 1600, 1920, 2560", "Passed"],
  ["Tablet", "2 columns at 768 and 1024", "Passed"],
  ["Mobile", "1 column at 375 and 720", "Passed"],
  ["Images", "No broken rendered images; 4 / 3; object-fit cover", "Passed"],
  ["Links", "No missing app.js or systems.html document links", "Passed"],
  ["Buttons", "Equal row heights and no clipped labels", "Passed"],
];

const sourceRows = [
  ["Homepage heading", `${siteRoot}/index.html`, "105-106", "Eyebrow and final title"],
  ["Homepage app cache bust", `${siteRoot}/index.html`, "361", "app.js query bumped to home-systems-copy-cleanup-20260514"],
  ["Homepage card data", `${siteRoot}/app.js`, "1-168", "Final six cards, descriptions, labels, links, images"],
  ["Detail page labels", `${siteRoot}/systems.html`, "331-351", "Assistant and Head Coach labels cleaned"],
  ["Detail page Scouting links", `${siteRoot}/systems.html`, "141-181", "Scouting href folder fixed"],
  ["Systems grid/media rules", `${siteRoot}/styles.css`, "12157-12280", "Grid, media ratio, tablet button fit"],
  ["Desktop button fit", `${siteRoot}/styles.css`, "19798-19816", "Existing homepage desktop button rule adjusted"],
];

const markdownDoc = `# Homepage Systems Section Final Handoff

Generated: ${generatedAt}

This is the final cleaned handoff for the locked homepage Systems section.

## Files

- \`build-home-systems-final-handoff.mjs\`
- \`homepage-systems-section-final-handoff-2026-05-14.xlsx\`
- \`homepage-systems-section-final-handoff-2026-05-14.csv\`
- \`homepage-systems-section-final-handoff-2026-05-14.md\`
- \`README-homepage-systems-section-final-handoff-2026-05-14.md\`

## Final Homepage Text

- Eyebrow: \`COACHING SYSTEMS\`
- Heading: \`Systems & Proof of Work\`

## Final Coaching Philosophy Buttons

- \`Assistant Philosophy\`
- \`30-60-90 Plan\`
- \`DEI Statement\`
- \`Head Coach Alignment\`

## Layout Preserved

- Desktop: 3 columns at \`>=1025px\`
- Tablet: 2 columns from \`721px\` through \`1024px\`
- Mobile: 1 column through \`720px\`
- Media ratio: \`4 / 3\`
- Image fit: \`cover\`
- Desktop card title: \`26px / 28px\`

## Cleanup Completed

- Confirmed full Coaching Philosophy button labels on the homepage
- Confirmed full Head Coach labels on the systems detail page
- Confirmed current Scouting document paths in homepage card data and systems detail page
- Bumped homepage \`app.js\` query string so the updated card data is not hidden by browser cache

## QA

Checked rendered homepage at \`375\`, \`768\`, \`1024\`, \`1280\`, \`1440\`, \`1600\`, \`1920\`, and \`2560\`.

All checks passed for text, card order, descriptions, button labels, column counts, image loading, document links, image ratio, object-fit, button height consistency, and clipped labels.
`;

const readme = `# Final Homepage Systems Handoff

Generated: ${generatedAt}

Use this folder as the single current handoff. Older Systems spec handoff folders were removed after this package was generated.

Contents:

- \`build-home-systems-final-handoff.mjs\`: generator source
- \`homepage-systems-section-final-handoff-2026-05-14.xlsx\`: spreadsheet workbook
- \`homepage-systems-section-final-handoff-2026-05-14.csv\`: flat CSV
- \`homepage-systems-section-final-handoff-2026-05-14.md\`: readable Markdown spec document
- \`README-homepage-systems-section-final-handoff-2026-05-14.md\`: this README

Final live copy:

- \`Systems & Proof of Work\`
- \`COACHING SYSTEMS\`
- \`Assistant Philosophy\`
- \`Head Coach Alignment\`

Verified:

- No stale Coaching Philosophy abbreviations or retired Scouting folder references in the active checked files.
- No missing homepage or systems document links.
`;

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function toCsv(rows) {
  return rows.map((row) => row.map(csvEscape).join(",")).join("\n") + "\n";
}

function writeBlock(sheet, start, rows) {
  const startCol = start.match(/[A-Z]+/)[0];
  const startRow = Number(start.match(/\d+/)[0]);
  const startColNumber = startCol.charCodeAt(0) - 64;
  const endCol = String.fromCharCode(64 + startColNumber + rows[0].length - 1);
  const endRow = startRow + rows.length - 1;
  sheet.getRange(`${start}:${endCol}${endRow}`).values = rows;
}

function setColumns(sheet, widths) {
  widths.forEach((width, index) => {
    sheet.getRange(`${String.fromCharCode(65 + index)}:${String.fromCharCode(65 + index)}`).format.columnWidthPx = width;
  });
}

function style(sheet, usedRange, headerRange = null) {
  const used = sheet.getRange(usedRange);
  used.format.font.name = "Arial";
  used.format.font.size = 10;
  used.format.font.color = "#1f1b16";
  used.format.wrapText = true;
  used.format.verticalAlignment = "top";
  if (headerRange) {
    const header = sheet.getRange(headerRange);
    header.format.font.bold = true;
    header.format.font.color = "#ffffff";
    header.format.fill.color = "#1f1b16";
  }
}

const workbook = Workbook.create();
const summary = workbook.worksheets.add("Summary");
const spec = workbook.worksheets.add("Final Specs");
const cards = workbook.worksheets.add("Cards");
const desktop = workbook.worksheets.add("Desktop Values");
const qa = workbook.worksheets.add("QA");
const sources = workbook.worksheets.add("Sources");

summary.getRange("A1").values = [["Homepage Systems Section Final Handoff"]];
summary.getRange("A1").format.font.bold = true;
summary.getRange("A1").format.font.size = 16;
writeBlock(summary, "A3", [
  ["Generated", generatedAt],
  ["Final title", "Systems & Proof of Work"],
  ["Final eyebrow", "COACHING SYSTEMS"],
  ["Main cleanup", "Assistant Philosophy and Head Coach Alignment are now used; stale abbreviations removed from active checked files."],
  ["Cache", "Homepage app.js query string bumped."],
]);
style(summary, "A1:B8");
setColumns(summary, [170, 820]);

writeBlock(spec, "A1", [["Category", "Item", "Selector / Area", "Final Value", "Notes"], ...finalSpecRows]);
style(spec, `A1:E${finalSpecRows.length + 1}`, "A1:E1");
setColumns(spec, [130, 190, 300, 460, 420]);
spec.freezePanes.freezeRows(1);

writeBlock(cards, "A1", [["Order", "Title", "Description", "Buttons"], ...cardRows]);
style(cards, `A1:D${cardRows.length + 1}`, "A1:D1");
setColumns(cards, [65, 190, 320, 620]);
cards.freezePanes.freezeRows(1);

writeBlock(desktop, "A1", [["Viewport", "Section width", "Section padding", "Margin top", "Radius", "Title size / line", "Grid cols", "Grid gap", "Card width", "Image size", "Card title", "Button height", "Button font"], ...desktopRows]);
style(desktop, `A1:M${desktopRows.length + 1}`, "A1:M1");
setColumns(desktop, [90, 115, 205, 90, 80, 145, 80, 90, 110, 150, 120, 110, 105]);
desktop.freezePanes.freezeRows(1);

writeBlock(qa, "A1", [["Check", "Expected", "Result"], ...qaRows]);
style(qa, `A1:C${qaRows.length + 1}`, "A1:C1");
setColumns(qa, [230, 530, 110]);
qa.freezePanes.freezeRows(1);

writeBlock(sources, "A1", [["Area", "File", "Lines", "Why It Matters"], ...sourceRows]);
style(sources, `A1:D${sourceRows.length + 1}`, "A1:D1");
setColumns(sources, [220, 640, 120, 460]);
sources.freezePanes.freezeRows(1);

await fs.writeFile(new URL("homepage-systems-section-final-handoff-2026-05-14.csv", outputDir), toCsv([["Category", "Item", "Selector / Area", "Final Value", "Notes"], ...finalSpecRows]), "utf8");
await fs.writeFile(new URL("homepage-systems-section-final-handoff-2026-05-14.md", outputDir), markdownDoc, "utf8");
await fs.writeFile(new URL("README-homepage-systems-section-final-handoff-2026-05-14.md", outputDir), readme, "utf8");

const specInspect = await workbook.inspect({
  kind: "table",
  range: "Final Specs!A1:E10",
  include: "values",
  tableMaxRows: 10,
  tableMaxCols: 5,
});
console.log(specInspect.ndjson);

const errorScan = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 50 },
  summary: "formula error scan",
});
console.log(errorScan.ndjson);

await workbook.render({ sheetName: "Summary", range: "A1:B8", scale: 2 });
await workbook.render({ sheetName: "Final Specs", range: "A1:E20", scale: 2 });
await workbook.render({ sheetName: "Cards", range: "A1:D7", scale: 2 });
await workbook.render({ sheetName: "Desktop Values", range: "A1:M6", scale: 2 });
await workbook.render({ sheetName: "QA", range: "A1:C13", scale: 2 });
await workbook.render({ sheetName: "Sources", range: "A1:D8", scale: 2 });

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(new URL("homepage-systems-section-final-handoff-2026-05-14.xlsx", outputDir));
