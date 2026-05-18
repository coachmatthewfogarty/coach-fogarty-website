import { mkdir } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium, findBrowserExecutable } = require("../playwright-runtime.cjs");

const here = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(here, "../../final-reports/season-total-stats-report");
const outputPdf = path.join(outputDir, "dpat-season-total-stats-report-2025-2026.pdf");

await mkdir(outputDir, { recursive: true });

const executablePath = findBrowserExecutable(chromium);
const browser = await chromium.launch({
  headless: true,
  ...(executablePath ? { executablePath } : {}),
});
const page = await browser.newPage({ viewport: { width: 1320, height: 1020 }, deviceScaleFactor: 2 });
await page.goto(pathToFileURL(path.join(here, "report-template.html")).href, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: outputPdf,
  width: "11in",
  height: "8.5in",
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: "0in", right: "0in", bottom: "0in", left: "0in" },
});

await page.emulateMedia({ media: "screen" });
const pages = await page.locator(".page").all();
for (const [index, reportPage] of pages.entries()) {
  await reportPage.screenshot({ path: path.join(here, `proof-page-${index + 1}.png`) });
}
await browser.close();

console.log(outputPdf);
