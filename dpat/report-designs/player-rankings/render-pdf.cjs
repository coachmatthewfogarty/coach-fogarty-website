const { copyFile, mkdir } = require("node:fs/promises");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { chromium, findBrowserExecutable } = require("../playwright-runtime.cjs");

const here = __dirname;
const outputDir = path.resolve(here, "../../final-reports/player-rankings");
const outputPdf = path.join(outputDir, "dpat-player-rankings-report-2025-2026.pdf");
const buildPdf = path.join(outputDir, "dpat-player-rankings-report-2025-2026-build.pdf");
const outputPng = path.join(outputDir, "dpat-player-rankings-report-2025-2026.png");

async function main() {
  await mkdir(outputDir, { recursive: true });

  const executablePath = findBrowserExecutable(chromium);
  const browser = await chromium.launch({
    headless: true,
    ...(executablePath ? { executablePath } : {}),
  });
  const page = await browser.newPage({ viewport: { width: 850, height: 1100 }, deviceScaleFactor: 2 });
  await page.goto(pathToFileURL(path.join(here, "report-template.html")).href, { waitUntil: "load" });
  await page.waitForSelector(".page");
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: buildPdf,
    width: "8.5in",
    height: "11in",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0in", right: "0in", bottom: "0in", left: "0in" },
  });

  await page.emulateMedia({ media: "screen" });
  const reportPage = page.locator(".page").first();
  const proofPng = path.join(here, "proof-page-1.png");
  await reportPage.screenshot({ path: proofPng });
  await copyFile(proofPng, outputPng);

  await browser.close();
  try {
    await copyFile(buildPdf, outputPdf);
    console.log(outputPdf);
  } catch (error) {
    console.warn(`Could not overwrite open PDF; rendered build file instead: ${buildPdf}`);
    console.warn(error.message);
    console.log(buildPdf);
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
