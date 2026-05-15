import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = new URL("./", import.meta.url);
const xlsxPath = new URL("./ABOUT-DESKTOP-BREAKPOINT-CHART.xlsx", outputDir);

const headers = [
  "Width range",
  "Layout",
  "Gallery",
  "Visible images",
  "Body font size",
  "Line-height",
  "Paragraph gap",
  "Height sync",
];

const rows = [
  ["1025px-1279px", "Stacked compact desktop", "3 x 4 below signature", 12, "0.88rem", "1.56", "11px", "Off"],
  ["1280px-1439px", "Stacked compact desktop", "3 x 4 below signature", 12, "0.88rem", "1.56", "11px", "Off"],
  ["1440px-1599px", "Two-column desktop", "3 x 4 right side", 12, "clamp(0.92rem, calc(0.74rem + 0.2vw), 1.05rem)", "1.4 / 1.32 currently split", "12px", "On"],
  ["1600px-1919px", "Two-column desktop", "3 x 4 right side", 12, "clamp(0.92rem, calc(0.74rem + 0.2vw), 1.05rem)", "1.32", "12px", "On"],
  ["1920px-2199px", "Two-column desktop", "3 x 4 right side", 12, "clamp(1rem, 0.54vw, 1.12rem)", "1.6", "12px", "On"],
  ["2200px+", "Two-column desktop", "3 x 4 right side", 12, "clamp(1.06rem, 0.5vw, 1.18rem)", "1.6", "12px", "On"],
];

const csv = [
  headers,
  ...rows,
  [],
  ["Note", "1440px-1599px is one layout range, but current typography still has an internal line-height split: 1440px-1499px uses 1.4, and 1500px-1599px uses 1.32."],
].map((row) =>
  row.map((value) => {
    const text = String(value ?? "");
    return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
  }).join(",")
).join("\n");

const workbook = await Workbook.fromCSV(csv, { sheetName: "About Breakpoints" });
const sheetInfo = await workbook.inspect({ kind: "sheet", include: "id,name", maxChars: 1000 });
const sheetId = JSON.parse(sheetInfo.ndjson.trim().split("\n")[0]).id;
const sheet = workbook.resolve(sheetId);

sheet.getRange("A1:H1").format = {
  fill: { color: "#1f1b16" },
  font: { color: "#fff8ed", bold: true },
  horizontalAlignment: "center",
};
sheet.getRange("A1:H7").format = {
  borders: {
    insideHorizontal: { style: "thin", color: "#d8c8b2" },
    insideVertical: { style: "thin", color: "#d8c8b2" },
    outline: { style: "thin", color: "#b9875a" },
  },
  verticalAlignment: "middle",
  wrapText: true,
};
sheet.getRange("A9:H9").format = {
  fill: { color: "#fff8ed" },
  font: { italic: true, color: "#6a5f53" },
  wrapText: true,
};

sheet.getRange("A:A").columnWidthPx = 135;
sheet.getRange("B:B").columnWidthPx = 185;
sheet.getRange("C:C").columnWidthPx = 165;
sheet.getRange("D:D").columnWidthPx = 95;
sheet.getRange("E:E").columnWidthPx = 370;
sheet.getRange("F:F").columnWidthPx = 165;
sheet.getRange("G:G").columnWidthPx = 110;
sheet.getRange("H:H").columnWidthPx = 105;
sheet.getRange("A1:H9").rowHeightPx = 34;
sheet.getRange("A9:H9").rowHeightPx = 58;

await fs.mkdir(outputDir, { recursive: true });
const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(xlsxPath);

const check = await workbook.inspect({
  kind: "table",
  range: "About Breakpoints!A1:H9",
  include: "values",
  tableMaxRows: 10,
  tableMaxCols: 8,
  maxChars: 4000,
});
console.log(check.ndjson);
console.log(`saved ${xlsxPath.pathname}`);
