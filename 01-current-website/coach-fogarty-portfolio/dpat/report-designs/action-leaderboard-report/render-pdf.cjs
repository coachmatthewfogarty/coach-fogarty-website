const { mkdir } = require("node:fs/promises");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { chromium, findBrowserExecutable } = require("../playwright-runtime.cjs");

const here = __dirname;
const outputDir = path.resolve(here, "../../final-reports/action-leaderboard-report");
const outputPdf = path.join(outputDir, "dpat-action-leaderboard-report-combined.pdf");
const pageOnePdf = path.join(outputDir, "dpat-action-leaderboard-report-page-1-positive.pdf");
const pageTwoPdf = path.join(outputDir, "dpat-action-leaderboard-report-page-2-negative.pdf");
const pageOnePng = path.join(outputDir, "dpat-action-leaderboard-report-page-1-positive.png");
const pageTwoPng = path.join(outputDir, "dpat-action-leaderboard-report-page-2-negative.png");

async function main() {
  await mkdir(outputDir, { recursive: true });

  const executablePath = findBrowserExecutable(chromium);
  const browser = await chromium.launch({
    headless: true,
    ...(executablePath ? { executablePath } : {}),
  });
  const page = await browser.newPage({ viewport: { width: 850, height: 1100 }, deviceScaleFactor: 2 });
  await page.goto(pathToFileURL(path.join(here, "report-template.html")).href, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });

  const pdfOptions = {
    width: "8.5in",
    height: "11in",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0in", right: "0in", bottom: "0in", left: "0in" },
  };

  await page.pdf({ ...pdfOptions, path: outputPdf });
  await page.pdf({ ...pdfOptions, path: pageOnePdf, pageRanges: "1" });
  await page.pdf({ ...pdfOptions, path: pageTwoPdf, pageRanges: "2" });

  await page.emulateMedia({ media: "screen" });
  const pages = await page.locator(".page").all();
  await pages[0].screenshot({ path: pageOnePng });
  await pages[1].screenshot({ path: pageTwoPng });
  await pages[0].screenshot({ path: path.join(here, "proof-page-1-positive.png") });
  await pages[1].screenshot({ path: path.join(here, "proof-page-2-negative.png") });

  await browser.close();

  console.log(outputPdf);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
