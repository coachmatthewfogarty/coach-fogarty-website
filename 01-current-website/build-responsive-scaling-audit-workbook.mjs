import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = path.resolve("outputs/responsive-scaling-audit");
const csvPath = path.join(outputDir, "responsive-scaling-audit-grid.csv");
const xlsxPath = path.join(outputDir, "responsive-scaling-audit-grid.xlsx");

const headers = [
  "Audit Area",
  "Item",
  "CSS Selector / Rule",
  "Current Value",
  "Scales With Viewport?",
  "Stops / Caps At",
  "Rendered Evidence",
  "Notes / Recommendation",
];

const rows = [
  ["Global page shell / section width", "Desktop width token", ":root @media (min-width: 1025px)", "--site-card-width: 1680px; --site-chrome-content-width: 1680px", "No", "1680px", "Page shell: 1192 -> 1352 -> 1680 -> 1680", "2560 adds gutters, not more layout width."],
  ["Global page shell / section width", "Page shell", ".page-shell", "width: min(var(--site-card-width), calc(100% - 88px))", "Yes until cap", "1680px", "1280:1192, 1440:1352, 1920:1680, 2560:1680", "Primary global width system is capped before 2560."],
  ["Global page shell / section width", "Homepage lane", "main#top > .hero, main#top > .section, main#top > #featured-work @media (min-width: 1720px)", "width: min(1540px, 100%)", "Yes until 1720px breakpoint", "1540px", "1920:1540, 2560:1540", "Home uses a narrower wide-desktop lane than the global shell."],
  ["Global page shell / section width", "Featured page lane", ".featured-page; .featured-page > .subpage-hero/.section/.featured-pillar", "--featured-max-width: 1600px; width: min(var(--featured-max-width), 100%)", "Yes until cap", "1600px", "1920:1600, 2560:1600", "Featured Work uses a separate 1600px system."],
  ["Global page shell / section width", "About page card", ".about-cover-page .about-letter-section", "width: min(1900px, calc(100vw - clamp(56px, 6vw, 150px))); 2200px+: min(2240px, calc(100vw - clamp(80px, 7vw, 190px)))", "Yes", "1900px then 2240px", "1920:1804.8 with overflow; 2560:2240", "About is the custom outlier and should be handled separately."],

  ["Homepage hero", "Hero width", "main#top > .hero", "100% until wide desktop; 1720px+: width: min(1540px, 100%)", "Yes until cap", "1540px", "1192 -> 1352 -> 1540 -> 1540", "Hero and homepage sections match each other, but not global 1680."],
  ["Homepage hero", "Hero grid columns", "main#top > .hero", "grid-template-columns: minmax(0, 1fr) var(--hero-portrait-width)", "Yes", "Limited by 1540px hero cap", "1280: 694.7/390; 1440: 837.4/403.2; 1920: 967.5/440; 2560: 854/520", "At 2560 the image grows to 520 while the hero stays 1540, so copy column shrinks."],
  ["Homepage hero", "Hero image width", "--hero-portrait-width", "base clamp(390px, 28vw, 520px); wide clamp(440px, 22vw, 520px)", "Yes", "520px", "390 -> 403.2 -> 440 -> 520", "The image reaches its max only at 2560."],
  ["Homepage hero", "Hero image height", "--hero-portrait-height", "base clamp(370px, 28vw, 430px); wide clamp(370px, 16vw, 430px)", "Yes", "430px", "370 -> 403.2 -> 370 -> 409.6", "Height actually dips at 1920 because the wide rule changes the clamp."],
  ["Homepage hero", "Hero title", "main#top > .hero h1", "font-size: clamp(3.35rem, 9.1cqw, var(--type-hero-title-size))", "Yes", "71.2px rendered max", "59.36 -> 62.08 -> 70.24 -> 71.2", "Title is already near capped by 1920."],
  ["Homepage hero", "Hero paragraph", "main#top > .hero .hero-text", "font-size clamp; line-height 1.5; max-width min(100%, 920px)", "Slightly", "16.32px rendered", "15.55 -> 15.78 -> 16.32 -> 16.32", "Paragraph stops early and does not use extra 2560 space."],
  ["Homepage hero", "Stat pills", "main#top > .hero #impact.hero-stat-band article", "3-column grid; min-height/padding clamps; value uses --type-stat-value-size", "Yes, but constrained by hero grid", "Hero lane cap", "Pill width: 223 -> 269.5 -> 313.1 -> 275.3", "Pills get narrower at 2560 because image column grows while hero stays capped."],
  ["Homepage hero", "Hero overlay", "main#top > .hero .hero-mobile-highlight", "absolute overlay with clamp insets, padding, label/link font clamps", "Yes", "Image width cap", "Overlay: 366.3 -> 376.7 -> 414 -> 494", "Overlay grows mainly with image width."],

  ["Standard subpage hero", "Hero width", "main.archer-page > .subpage-hero; main.media-library-page > .media-hero", "width: 100% inside page shell", "Yes until shell cap", "1680px", "Archer/Media hero: 1192 -> 1352 -> 1680 -> 1680", "Standard subpages use the global shell width."],
  ["Standard subpage hero", "Grid columns", "main.* > .subpage-hero @media (min-width: 1025px)", "grid-template-columns: minmax(0, 1fr) clamp(330px, 33vw, 410px)", "Yes until image cap", "410px image column", "1280+: image column already 410px", "Image column caps too early for 2560."],
  ["Standard subpage hero", "Image frame", ".subpage-hero-visual", "max-width: 410px; aspect-ratio: 16 / 10", "No after 1280", "410 x 307.5", "410x307.5 at 1280, 1440, 1920, 2560", "This is the biggest standard subpage wide-screen limitation."],
  ["Standard subpage hero", "H1", "main:not(#top) .subpage-hero h1", "clamp(2.9rem, 5.2vw, 4.45rem) plus global type overrides", "Yes", "71.2px", "59.36 -> 62.08 -> 70.24 -> 71.2", "Type grows while media does not."],
  ["Standard subpage hero", "Paragraph", "main:not(#top) .subpage-hero p:not(.eyebrow)", "var(--type-body-size); line-height: 1.62; max about 780px", "Yes", "19.52px", "16 -> 16.7/18.4 -> 19.52", "Readable, but the text max-width keeps copy narrow."],
  ["Standard subpage hero", "Page highlight overlay", ".page-highlight-bar", "absolute overlay with clamp insets, padding and type", "Yes, but image-constrained", "410px image frame", "Archer overlay grows in type but sits in 410px frame", "If hero image grows, overlay must be retuned with it."],

  ["Systems hero", "Hero width", "main.systems-detail-page > .subpage-hero", "width: 100%; max-width: none inside 1680 shell", "Yes until shell cap", "1680px", "1192 -> 1352 -> 1680 -> 1680", "Systems is aligned to global shell."],
  ["Systems hero", "Grid columns", "main.systems-detail-page > .subpage-hero", "grid-template-columns: minmax(0, 1fr) var(--systems-hero-image-width)", "Yes", "1680 shell / 520 image", "694.7/390 -> 837.4/403.2 -> 1107.5/440 -> 994/520", "At 2560 image grows, copy column narrows but shell remains 1680."],
  ["Systems hero", "Image width", "--systems-hero-image-width", "base clamp(390px, 28vw, 520px); wide clamp(440px, 22vw, 520px)", "Yes", "520px", "390 -> 403.2 -> 440 -> 520", "Systems matches homepage image scaling."],
  ["Systems hero", "Image height", "--systems-hero-image-height", "base clamp(370px, 28vw, 430px); wide clamp(370px, 16vw, 430px)", "Yes", "430px", "370 -> 403.2 -> 370 -> 409.6", "Same height dip pattern as homepage."],
  ["Systems hero", "Staff Systems title", "main.systems-detail-page > .subpage-hero h1", "clamp(3.35rem, 9.1cqw, var(--type-hero-title-size))", "Yes", "71.2px", "59.36 -> 62.08 -> 70.24 -> 71.2", "Good wide scaling, nearly capped at 1920."],
  ["Systems hero", "Paragraph", ".subpage-hero-copy > p:not(.eyebrow)", "var(--type-body-size); line-height: 1.52; max-width 920px", "Yes", "19.52px", "16.13 -> 16.70 -> 18.43 -> 19.52", "Good scaling, but still limited to 920px text."],
  ["Systems hero", "Jump pills", ".systems-jump-nav a", "min-height clamp(54px, 3.4vw, 62px); font-size clamp(0.9rem, 0.82vw, 1rem)", "Yes", "62px high / 16px font", "225.6x54 -> 272.4x54 -> 361.1x62 -> 323.3x62", "At 2560 each pill is narrower because image column grows."],
  ["Systems hero", "Page Highlight overlay", ".page-highlight-bar", "height/inset/padding/type clamps; custom grid link layout", "Yes", "Image width cap", "366x58 -> 376.7x58 -> 410x74 -> 490x74", "Systems overlay is the most tuned subpage overlay."],

  ["Featured Work banners", "Homepage featured outer", "main#top #featured-work", "inside homepage 1540 lane; one-column grid", "Yes until Home cap", "1540px", "1192 -> 1352 -> 1540 -> 1540", "Homepage featured banners stop with Home lane."],
  ["Featured Work banners", "Homepage banner image", ".innovation-thumbnail / .innovation-panel", "desktop panel column clamp(330px, 28cqw, 430px)", "Yes until cap", "About 395px rendered in current lane", "330 -> 344.1 -> 394.8 -> 394.8", "Does not get larger at 2560 because home lane is capped."],
  ["Featured Work banners", "Homepage banner text column", ".innovation-card-copy", "width: min(100%, 820px)", "Limited", "820px", "Copy column around 711px at 1280; constrained by panel", "Extra 2560 width does not create a richer banner."],
  ["Featured Work banners", "Homepage banner title", ".innovation-section .section-heading h2", "clamp(2rem, 2.8vw, 3rem)", "Yes until cap", "3rem", "35.84px at 1280; larger then capped", "Title scale is already generous."],
  ["Featured Work banners", "Proof chips", ".innovation-proof-chips span", "min-height 30px; padding 6px 13px; font-size clamp(0.82rem, 0.68rem + 0.16vw, 0.88rem)", "Slightly", "0.88rem", "Chip height 30px", "Controlled growth is fine."],
  ["Featured Work banners", "CTA", ".innovation-panel .button", "width: min(100%, 380px); min-height 44px", "No after cap", "380px", "Button 380x44 at 1280+", "CTA is fixed-scale on wide screens."],
  ["Featured Work banners", "Featured page outer", ".featured-page > .featured-pillar", "width: min(1600px, 100%)", "Yes until cap", "1600px", "1192 -> 1352 -> 1600 -> 1600", "Featured page uses separate 1600 lane."],
  ["Featured Work banners", "Featured page pillar grid", ".featured-pillar-grid", "minmax(0, 1fr) minmax(420px, 0.86fr)", "Yes until page cap", "1600px lane", "Image about 501 -> 573 -> 680 -> 678", "Stops by 1920; 2560 only adds gutters."],
  ["Featured Work banners", "Featured page title", ".featured-pillar-copy h2", "clamp(2rem, 1.8vw, 2.5rem)", "Yes until cap", "about 30.2px rendered", "26.5 -> 28 -> 30.2 -> 30.2", "Title caps by 1920."],

  ["Card grids", "Portfolio Systems grid", "main#top #systems .library-grid", "repeat(3, minmax(0, 1fr)); gap clamp(14px, 1.35vw, 28px)", "Yes until Home cap", "1540px lane", "Card width: 362.8 -> 415 -> 467.3 -> 459.3", "Cards actually narrow slightly at 2560 because Home hero/section cap and padding behavior settle."],
  ["Card grids", "Homepage Gallery grid", "main#top #media .gallery-grid", "repeat(3, minmax(0, 1fr)); gap clamp(14px, 1.35vw, 22px)", "Yes until Home cap", "1540px lane", "Card width: 359.6 -> 409 -> 470 -> 470", "Gallery stops growing by 1920."],
  ["Card grids", "Media page grid", ".media-section-grid", "repeat(3, minmax(0, 1fr)); gap: 14px", "Yes until shell cap", "1680px shell", "Columns: 332.7 -> 386 -> 495.3 -> 495.3", "No 2560-specific density or larger media."],

  ["Wide-screen recommendation", "Core direction", "New wide breakpoint", "Add intentional min-width: 2200px tier", "Would scale", "TBD", "Current 2560 is mostly centered 1920 layout", "Pick one lane system first: 1680, 1840/1920, or keep 1540 intentionally narrow."],
  ["Wide-screen recommendation", "Media growth", "Hero media variables", "Increase standard subpage hero image from 410 cap if using wider shells", "Would scale", "TBD", "Standard subpage image is 410x307.5 at all desktop sizes", "Most important visual fix for 2560."],
  ["Wide-screen recommendation", "Grid density", "Card grids", "Either widen media/cards or add more intentional spacing/density", "Would scale", "TBD", "Cards stop by 1920", "Do not only widen containers; tune card media, gaps, and text together."],
  ["Wide-screen recommendation", "Unify lanes", "Page width variables", "Use --page-max-width, --hero-media-width, --section-pad per page type", "Would scale", "TBD", "Current lanes: 1540 Home, 1600 Featured, 1680 standard, 2240 About", "This will make future changes safer."],
];

const escapeCsv = (value) => {
  if (value === null || value === undefined) return "";
  const text = String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
};

await fs.mkdir(outputDir, { recursive: true });
const csv = [headers, ...rows].map((row) => row.map(escapeCsv).join(",")).join("\n") + "\n";
await fs.writeFile(csvPath, csv, "utf8");

const workbook = await Workbook.fromCSV(csv, { sheetName: "Responsive Scaling Audit" });

const preview = await workbook.inspect({
  kind: "table",
  range: "Responsive Scaling Audit!A1:H12",
  include: "values",
  tableMaxRows: 12,
  tableMaxCols: 8,
});
console.log(preview.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "formula error scan",
});
console.log(errors.ndjson);

await workbook.render({ sheetName: "Responsive Scaling Audit", range: "A1:H18", scale: 2 });

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(xlsxPath);

console.log(JSON.stringify({ csvPath, xlsxPath }, null, 2));
