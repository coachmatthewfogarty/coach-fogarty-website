import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const root = path.resolve("coach-fogarty-portfolio");
const outputDir = path.resolve("outputs/structured-responsive-audit");
const xlsxPath = path.join(outputDir, "structured-responsive-audit.xlsx");
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const viewports = [
  { label: "1280x800", width: 1280, height: 800 },
  { label: "1440x900", width: 1440, height: 900 },
  { label: "1920x1080", width: 1920, height: 1080 },
  { label: "2560x1440", width: 2560, height: 1440 },
];

const pages = [
  {
    page: "Home",
    file: "index.html",
    hero: "main#top > .hero",
    content: "main#top > #systems",
    h1: "main#top > .hero h1",
    paragraph: "main#top > .hero .hero-text",
    visual: "main#top > .hero .portrait-card",
    image: "main#top > .hero .portrait-card img",
    overlay: "main#top > .hero .hero-mobile-highlight",
    overlayLinks: "main#top > .hero .hero-mobile-highlight div",
    extra: {
      statPill: "main#top > .hero #impact.hero-stat-band article",
      statValue: "main#top > .hero #impact.hero-stat-band article strong",
    },
  },
  {
    page: "Systems",
    file: "systems.html",
    hero: "main.systems-detail-page > .subpage-hero",
    content: "main.systems-detail-page > .system-detail-section",
    h1: "main.systems-detail-page > .subpage-hero h1",
    paragraph: "main.systems-detail-page > .subpage-hero .subpage-hero-copy > p:not(.eyebrow)",
    visual: "main.systems-detail-page > .subpage-hero .subpage-hero-visual",
    image: "main.systems-detail-page > .subpage-hero .subpage-hero-visual img",
    overlay: "main.systems-detail-page > .subpage-hero .page-highlight-bar",
    overlayLinks: "main.systems-detail-page > .subpage-hero .page-highlight-bar div",
    extra: {
      jumpPill: "main.systems-detail-page > .subpage-hero .systems-jump-nav a",
    },
  },
  {
    page: "Featured Work",
    file: "featured-work.html",
    hero: "main.featured-page > .featured-hero",
    content: "main.featured-page > .featured-summary-section",
    h1: "main.featured-page > .featured-hero h1",
    paragraph: "main.featured-page > .featured-hero .subpage-hero-copy > p:not(.eyebrow)",
    visual: "main.featured-page > .featured-hero .subpage-hero-visual",
    image: "main.featured-page > .featured-hero .subpage-hero-visual img",
    overlay: "main.featured-page > .featured-hero .page-highlight-bar",
    overlayLinks: "main.featured-page > .featured-hero .page-highlight-bar div",
    extra: {
      pillarImage: "main.featured-page .featured-pillar-visual img",
      pillarTitle: "main.featured-page .featured-pillar-copy h2",
    },
  },
  {
    page: "Gallery / Media",
    file: "media.html",
    hero: "main.media-library-page > .media-hero",
    content: "main.media-library-page > .media-library-section",
    h1: "main.media-library-page > .media-hero h1",
    paragraph: "main.media-library-page > .media-hero .subpage-hero-copy > p:not(.eyebrow)",
    visual: "main.media-library-page > .media-hero .subpage-hero-visual",
    image: "main.media-library-page > .media-hero .subpage-hero-visual img",
    overlay: "main.media-library-page > .media-hero .page-highlight-bar",
    overlayLinks: "main.media-library-page > .media-hero .page-highlight-bar div",
    extra: {
      mediaGrid: "main.media-library-page .media-section-grid",
    },
  },
  {
    page: "Archer",
    file: "archer-visuals.html",
    hero: "main.archer-page > .subpage-hero",
    content: "main.archer-page > .section",
    h1: "main.archer-page > .subpage-hero h1",
    paragraph: "main.archer-page > .subpage-hero .subpage-hero-copy > p:not(.eyebrow)",
    visual: "main.archer-page > .subpage-hero .subpage-hero-visual",
    image: "main.archer-page > .subpage-hero .subpage-hero-visual img",
    overlay: "main.archer-page > .subpage-hero .page-highlight-bar",
    overlayLinks: "main.archer-page > .subpage-hero .page-highlight-bar div",
  },
  {
    page: "Anaya Case Study",
    file: "anaya-case-study.html",
    hero: "main > .anaya-hero",
    content: "main > .anaya-journey-section",
    h1: "main > .anaya-hero h1",
    paragraph: "main > .anaya-hero .hero-text",
    visual: "main > .anaya-hero .portrait-card",
    image: "main > .anaya-hero .portrait-card img",
    overlay: "main > .anaya-hero .hero-mobile-highlight",
    overlayLinks: "main > .anaya-hero .hero-mobile-highlight div",
    extra: {
      statPill: "main > .anaya-hero .hero-stat-band article",
      statValue: "main > .anaya-hero .hero-stat-band article strong",
    },
  },
  {
    page: "Credentials",
    file: "credentials.html",
    hero: "main.credentials-page > .credentials-hero",
    content: "main.credentials-page > .credential-summary-section",
    h1: "main.credentials-page > .credentials-hero h1",
    paragraph: "main.credentials-page > .credentials-hero .subpage-hero-copy > p:not(.eyebrow)",
    visual: "main.credentials-page > .credentials-hero .credentials-hero-visual",
    image: "main.credentials-page > .credentials-hero .credentials-hero-visual img",
  },
  {
    page: "Contact",
    file: "contact.html",
    hero: "main.contact-page > .contact-hero",
    content: "main.contact-page > .contact-section",
    h1: "main.contact-page > .contact-hero h1",
    paragraph: "main.contact-page > .contact-hero .subpage-hero-copy > p:not(.eyebrow)",
  },
  {
    page: "About",
    file: "about.html",
    hero: "main.about-cover-page > .about-letter-section",
    content: null,
    h1: "main.about-cover-page .about-letter-heading h1",
    paragraph: "main.about-cover-page .about-letter-text p",
    visual: "main.about-cover-page .about-letter-gallery",
    image: "main.about-cover-page .about-letter-gallery img",
  },
];

const round = (n) => (n === null || n === undefined || Number.isNaN(n) ? "" : Math.round(n * 10) / 10);
const sizeText = (m) => (m ? `${m.w} x ${m.h}` : "N/A");
const fontText = (m) => (m ? m.fontSize : "N/A");
const lineText = (m) => (m ? m.lineHeight : "N/A");
const maxWidthText = (m) => (m ? m.maxWidth : "N/A");
const gridText = (m) => (m ? m.gridTemplateColumns : "N/A");
const widthText = (m) => (m ? String(m.w) : "N/A");

function colName(index) {
  let name = "";
  let n = index + 1;
  while (n > 0) {
    const rem = (n - 1) % 26;
    name = String.fromCharCode(65 + rem) + name;
    n = Math.floor((n - 1) / 26);
  }
  return name;
}

function escapeCsv(value) {
  if (value === null || value === undefined) return "";
  const text = String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function writeCsv(name, rows) {
  const csv = rows.map((row) => row.map(escapeCsv).join(",")).join("\n") + "\n";
  return fs.writeFile(path.join(outputDir, `${name}.csv`), csv, "utf8");
}

function addSheet(workbook, sheetName, rows) {
  const sheet = workbook.worksheets.add(sheetName);
  const end = `${colName(rows[0].length - 1)}${rows.length}`;
  sheet.getRange(`A1:${end}`).values = rows;
}

function byViewport(measurements, pageName, selectorKey) {
  const values = {};
  for (const vp of viewports) {
    values[vp.label] = measurements[vp.label]?.[pageName]?.[selectorKey] || null;
  }
  return values;
}

function heroRuleRows(measurements) {
  const rows = [[
    "Page",
    "Selector",
    "Element",
    "1280 Value",
    "1440 Value",
    "1920 Value",
    "2560 Value",
    "CSS Rule",
    "Notes",
  ]];

  const add = (page, selectorKey, selector, element, formatter, cssRule, notes) => {
    const vals = byViewport(measurements, page, selectorKey);
    rows.push([
      page,
      selector,
      element,
      formatter(vals["1280x800"]),
      formatter(vals["1440x900"]),
      formatter(vals["1920x1080"]),
      formatter(vals["2560x1440"]),
      cssRule,
      notes,
    ]);
  };

  for (const spec of pages) {
    add(spec.page, "hero", spec.hero, "Hero/card width", widthText, spec.page === "Home" ? "1720px+: width: min(1540px, 100%)" : spec.page === "Featured Work" ? "width: min(var(--featured-max-width), 100%)" : spec.page === "About" ? "custom about-letter-section width" : "width: 100% inside page shell", "Compare this with main section width in Tab 1.");
    add(spec.page, "hero", spec.hero, "Hero grid columns", gridText, spec.page === "Home" || spec.page === "Systems" || spec.page === "Anaya Case Study" ? "minmax(0, 1fr) var(--hero/media-width)" : "standard subpage grid or page-specific layout", "Shows whether the media column grows or caps.");
    if (spec.visual) add(spec.page, "visual", spec.visual, "Hero image/frame size", sizeText, "various clamp/max-width rules by page", "Frame size, not always the raw img crop.");
    add(spec.page, "h1", spec.h1, "Hero/title font", fontText, "hero/title clamp and global desktop type vars", "Rendered font-size.");
    add(spec.page, "paragraph", spec.paragraph, "Hero paragraph font / line-height", (m) => (m ? `${m.fontSize} / ${m.lineHeight}` : "N/A"), "var(--type-body-size) or page-specific clamp", "Rendered font-size and line-height.");
    if (spec.overlay) add(spec.page, "overlay", spec.overlay, "Hero overlay size", sizeText, "absolute highlight overlay with clamp insets/padding", "Overlay is constrained by image/frame width.");
    if (spec.overlayLinks) add(spec.page, "overlayLinks", spec.overlayLinks, "Hero overlay link font", fontText, "overlay div font-size clamp", "Rendered link-row font.");
    if (spec.extra?.statPill) add(spec.page, "statPill", spec.extra.statPill, "Hero stat pill size", sizeText, "stat-band grid pill sizing", "Only on Home and Anaya.");
    if (spec.extra?.jumpPill) add(spec.page, "jumpPill", spec.extra.jumpPill, "Systems jump pill size", sizeText, "min-height/font clamp on .systems-jump-nav a", "Systems-specific control row.");
  }

  return rows;
}

function imageRows(measurements) {
  const rows = [[
    "Page",
    "Image Selector",
    "1280 Size",
    "1440 Size",
    "1920 Size",
    "2560 Size",
    "Object Fit",
    "Object Position",
    "Notes",
  ]];

  for (const spec of pages) {
    if (!spec.image) {
      rows.push([spec.page, "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "No primary hero image on this page."]);
      continue;
    }
    const vals = byViewport(measurements, spec.page, "image");
    const ref = vals["1920x1080"] || vals["2560x1440"] || vals["1440x900"] || vals["1280x800"];
    rows.push([
      spec.page,
      spec.image,
      sizeText(vals["1280x800"]),
      sizeText(vals["1440x900"]),
      sizeText(vals["1920x1080"]),
      sizeText(vals["2560x1440"]),
      ref?.objectFit || "N/A",
      ref?.objectPosition || "N/A",
      spec.page === "Archer" || spec.page === "Gallery / Media" || spec.page === "Featured Work" ? "Standard subpage hero frame caps early at about 410px wide." : spec.page === "About" ? "About uses a custom gallery, not a standard hero image." : "Primary hero image measurement.",
    ]);
    if (spec.extra?.pillarImage) {
      const vals2 = byViewport(measurements, spec.page, "pillarImage");
      const ref2 = vals2["1920x1080"] || vals2["2560x1440"];
      rows.push([
        spec.page,
        spec.extra.pillarImage,
        sizeText(vals2["1280x800"]),
        sizeText(vals2["1440x900"]),
        sizeText(vals2["1920x1080"]),
        sizeText(vals2["2560x1440"]),
        ref2?.objectFit || "N/A",
        ref2?.objectPosition || "N/A",
        "Featured content banner/pillar image, not the hero image.",
      ]);
    }
  }
  return rows;
}

function textRows(measurements) {
  const rows = [[
    "Page",
    "Element",
    "1280 Font",
    "1440 Font",
    "1920 Font",
    "2560 Font",
    "Line Height",
    "Max Width",
    "Notes",
  ]];

  const add = (page, key, element, notes) => {
    const vals = byViewport(measurements, page, key);
    const ref = vals["1920x1080"] || vals["2560x1440"] || vals["1440x900"] || vals["1280x800"];
    rows.push([
      page,
      element,
      fontText(vals["1280x800"]),
      fontText(vals["1440x900"]),
      fontText(vals["1920x1080"]),
      fontText(vals["2560x1440"]),
      lineText(ref),
      maxWidthText(ref),
      notes,
    ]);
  };

  for (const spec of pages) {
    add(spec.page, "h1", "Hero/title", "Primary title rendered font-size.");
    add(spec.page, "paragraph", "Hero/body paragraph", "Primary hero/body copy rendered font-size.");
    if (spec.overlayLinks) add(spec.page, "overlayLinks", "Hero overlay links", "Rendered link-row font-size.");
    if (spec.extra?.statValue) add(spec.page, "statValue", "Hero stat value", "Rendered stat value font-size.");
    if (spec.extra?.jumpPill) add(spec.page, "jumpPill", "Systems jump pill", "Rendered jump-pill font-size.");
    if (spec.extra?.pillarTitle) add(spec.page, "pillarTitle", "Featured pillar title", "Featured Work content section title.");
  }
  return rows;
}

function issueRows() {
  return [[
    "Priority",
    "Page",
    "Viewport",
    "Issue",
    "Suggested Fix",
    "Notes",
  ], [
    "High",
    "Global",
    "2560x1440",
    "Most pages stop at the 1680px shell, while Home stops at 1540px and Featured Work stops at 1600px.",
    "Choose one intentional desktop lane system or define named page lanes.",
    "Current 2560 layout mostly adds gutters instead of a new design tier.",
  ], [
    "High",
    "Standard subpages",
    "1920+",
    "Hero image frame caps at about 410 x 307.5 on Archer, Media, Featured hero, and similar standard heroes.",
    "Add a wide-desktop hero media token similar to Systems/Home, or intentionally keep a compact editorial hero.",
    "Type grows but media does not, so wide screens feel less balanced.",
  ], [
    "High",
    "About",
    "1280 and 1920",
    "About card uses custom width and can exceed the shell / create horizontal overflow.",
    "Normalize About width rules or explicitly isolate it as a full-width editorial page.",
    "Earlier measurement showed overflow at 1280 and 1920.",
  ], [
    "Medium",
    "Home",
    "2560x1440",
    "Hero image grows to 520px while the Home lane remains 1540px, shrinking the copy/stat column.",
    "If keeping 1540px lane, cap hero image closer to 440px or widen Home lane at 2200px+.",
    "Stats get narrower at 2560 than 1920.",
  ], [
    "Medium",
    "Home / Grids",
    "1920+",
    "Portfolio Systems and homepage Gallery cards stop growing around the 1540px Home lane.",
    "For 2560, either widen the lane, increase media/card scale, or add more intentional whitespace.",
    "Avoid changing width without retuning card media and text.",
  ], [
    "Medium",
    "Featured Work",
    "1920+",
    "Featured Work page has a separate 1600px cap and does not use 1680px standard shell.",
    "Decide whether Featured should join the global shell or remain a special proof-of-work lane.",
    "Hero and sections match each other, but differ from standard pages.",
  ], [
    "Medium",
    "Systems",
    "2560x1440",
    "Systems scales better than most pages, but the shell still caps at 1680px.",
    "If adding a 2200px+ tier, Systems is the model to extend: image, overlay, jump pills, and type together.",
    "Most coherent wide hero currently.",
  ], [
    "Low",
    "Contact",
    "All desktop",
    "Contact has no primary hero image and uses compact form-first layout.",
    "Keep separate from image hero rules unless redesigning the contact page.",
    "Not a width-system blocker.",
  ]];
}

async function measure() {
  const browser = await chromium.launch({ headless: true, executablePath: chromePath });
  const measurements = {};

  for (const vp of viewports) {
    measurements[vp.label] = {};
    for (const spec of pages) {
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
      await page.goto(`file://${path.join(root, spec.file)}`, { waitUntil: "load" });
      await page.waitForTimeout(350);
      measurements[vp.label][spec.page] = await page.evaluate(({ spec }) => {
        const measureElement = (selector) => {
          if (!selector) return null;
          const el = document.querySelector(selector);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          const style = getComputedStyle(el);
          return {
            w: Math.round(rect.width * 10) / 10,
            h: Math.round(rect.height * 10) / 10,
            left: Math.round(rect.left * 10) / 10,
            right: Math.round((innerWidth - rect.right) * 10) / 10,
            fontSize: style.fontSize,
            lineHeight: style.lineHeight,
            maxWidth: style.maxWidth,
            gridTemplateColumns: style.gridTemplateColumns,
            objectFit: style.objectFit,
            objectPosition: style.objectPosition,
          };
        };
        const selectors = {
          shell: ".page-shell",
          hero: spec.hero,
          content: spec.content,
          h1: spec.h1,
          paragraph: spec.paragraph,
          visual: spec.visual,
          image: spec.image,
          overlay: spec.overlay,
          overlayLinks: spec.overlayLinks,
          ...(spec.extra || {}),
        };
        const data = {};
        for (const [key, selector] of Object.entries(selectors)) {
          data[key] = measureElement(selector);
        }
        const scrollWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        data.overflow = scrollWidth > innerWidth + 1 || Object.values(data).some((m) => m && (m.left < -1 || m.right < -1));
        return data;
      }, { spec });
      await page.close();
    }
  }

  await browser.close();
  return measurements;
}

function widthRows(measurements) {
  const rows = [[
    "Viewport",
    "Page",
    "Shell Width",
    "Hero Width",
    "Main Section Width",
    "Left Gutter",
    "Right Gutter",
    "Overflow",
    "Notes",
  ]];
  for (const vp of viewports) {
    for (const spec of pages) {
      const data = measurements[vp.label][spec.page];
      const notes = spec.page === "Home"
        ? "Home uses 1540px wide-desktop lane at 1720px+."
        : spec.page === "Featured Work"
          ? "Featured Work uses 1600px page-specific lane at desktop."
          : spec.page === "About"
            ? "About uses custom editorial card width; no separate below-hero section."
            : "Standard page shell lane.";
      rows.push([
        vp.label,
        spec.page,
        data.shell?.w ?? "N/A",
        data.hero?.w ?? "N/A",
        data.content?.w ?? "N/A",
        data.hero?.left ?? "N/A",
        data.hero?.right ?? "N/A",
        data.overflow ? "Yes" : "No",
        notes,
      ]);
    }
  }
  return rows;
}

await fs.mkdir(outputDir, { recursive: true });
const measurements = await measure();

const sheets = {
  "Width Measurements": widthRows(measurements),
  "Hero Scaling Rules": heroRuleRows(measurements),
  "Image Scaling": imageRows(measurements),
  "Text Scaling": textRows(measurements),
  "Issues Recommendations": issueRows(),
};

for (const [name, rows] of Object.entries(sheets)) {
  const slug = name.toLowerCase().replaceAll(" ", "-");
  await writeCsv(slug, rows);
}

const workbook = Workbook.create();
for (const [name, rows] of Object.entries(sheets)) {
  addSheet(workbook, name, rows);
}

for (const name of Object.keys(sheets)) {
  const preview = await workbook.inspect({
    kind: "table",
    range: `${name}!A1:${colName(sheets[name][0].length - 1)}${Math.min(8, sheets[name].length)}`,
    include: "values",
    tableMaxRows: 8,
    tableMaxCols: sheets[name][0].length,
  });
  console.log(preview.ndjson);
  await workbook.render({ sheetName: name, range: `A1:${colName(sheets[name][0].length - 1)}${Math.min(14, sheets[name].length)}`, scale: 2 });
}

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "formula error scan",
});
console.log(errors.ndjson);

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(xlsxPath);

console.log(JSON.stringify({ xlsxPath, csvDir: outputDir }, null, 2));
