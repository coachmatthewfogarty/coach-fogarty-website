const { existsSync } = require("node:fs");
const path = require("node:path");
const os = require("node:os");

function tryRequire(specifier) {
  if (!specifier) return null;

  try {
    return require(specifier);
  } catch {
    return null;
  }
}

function bundledPlaywrightPath() {
  const nodeBin = path.dirname(process.execPath);
  return path.resolve(nodeBin, "..", "node_modules", "playwright");
}

function loadPlaywright() {
  const candidates = [
    "playwright",
    process.env.PLAYWRIGHT_MODULE_PATH,
    process.env.PLAYWRIGHT_NODE_MODULES
      ? path.join(process.env.PLAYWRIGHT_NODE_MODULES, "playwright")
      : null,
    bundledPlaywrightPath(),
    path.join(
      os.homedir(),
      ".cache",
      "codex-runtimes",
      "codex-primary-runtime",
      "dependencies",
      "node",
      "node_modules",
      "playwright"
    ),
  ];

  for (const candidate of candidates) {
    const playwright = tryRequire(candidate);
    if (playwright) return playwright;
  }

  throw new Error(
    "Could not load Playwright. Run this with a Node environment that has Playwright installed, or set PLAYWRIGHT_MODULE_PATH."
  );
}

function firstExisting(candidates) {
  return candidates.find((candidate) => candidate && existsSync(candidate));
}

function findBrowserExecutable(chromium) {
  let bundledChromium = null;
  try {
    bundledChromium = chromium.executablePath();
  } catch {
    bundledChromium = null;
  }

  return firstExisting([
    process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,
    process.env.CHROME_EXECUTABLE,
    bundledChromium,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
  ]);
}

const { chromium } = loadPlaywright();

module.exports = {
  chromium,
  findBrowserExecutable,
};
