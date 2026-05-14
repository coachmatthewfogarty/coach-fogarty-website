import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const out = (name) => path.join(__dirname, name);

const sourceFiles = {
  html: "/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/index.html:178",
  cssSection: "/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/styles.css:640",
  cssPillsCarousel: "/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/styles.css:1371",
  cssDesktopHeadings: "/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/styles.css:19707",
  cssUnifiedHeadings: "/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/styles.css:19973",
  jsCarousel: "/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/app.js:2322"
};

const desktopBreakpoints = [
  {
    viewport: 1280,
    sectionWidth: "1192px",
    sectionInlinePadding: "36px",
    titleSize: "36px",
    titleLineHeight: "37.8px",
    carouselTrackWidth: "976px",
    cardSize: "314.66 x 235.98px",
    visibleCards: "3"
  },
  {
    viewport: 1440,
    sectionWidth: "1352px",
    sectionInlinePadding: "36px",
    titleSize: "36px",
    titleLineHeight: "37.8px",
    carouselTrackWidth: "1136px",
    cardSize: "368 x 276px",
    visibleCards: "3"
  },
  {
    viewport: 1600,
    sectionWidth: "1512px",
    sectionInlinePadding: "38.4px",
    titleSize: "36px",
    titleLineHeight: "37.8px",
    carouselTrackWidth: "1291.22px",
    cardSize: "419.73 x 314.8px",
    visibleCards: "3"
  },
  {
    viewport: 1920,
    sectionWidth: "1680px",
    sectionInlinePadding: "46.08px",
    titleSize: "40.32px",
    titleLineHeight: "42.336px",
    carouselTrackWidth: "1443.84px",
    cardSize: "470.61 x 352.95px",
    visibleCards: "3"
  },
  {
    viewport: 2560,
    sectionWidth: "2240px",
    sectionInlinePadding: "58px",
    titleSize: "42px",
    titleLineHeight: "44.1px",
    carouselTrackWidth: "1980px",
    cardSize: "649.33 x 486.98px",
    visibleCards: "3"
  }
];

const rows = [
  ["Section wrapper", "Markup", "section.section.playing-career-section#playing-career", "class/id", ".section playing-career-section / #playing-career", "", "", "", "", "", "Same element at all breakpoints", sourceFiles.html],
  ["Section wrapper", "Width", "#playing-career", "width/max-width", "Follows .page-shell; max logic min(1680px, 100vw - 88px), min(2240px, 100vw - 320px) at >=2200", "1192px", "1352px", "1512px", "1680px", "2240px", "1024: 968px; 768: 721.91px; 720: 696px; 430: 406px; 390: 366px", sourceFiles.cssSection],
  ["Section wrapper", "Padding", "#playing-career", "padding", "34px top/bottom; inline clamp(36px, 2.4vw, 58px)", "34px 36px", "34px 36px", "34px 38.4px", "34px 46.08px", "34px 58px", "1024: 28px; 768: 23.04px; 720: 18px; <=430: 16px", `${sourceFiles.cssSection}; ${sourceFiles.cssDesktopHeadings}`],
  ["Section wrapper", "Margin/top spacing", "#playing-career", "margin-top", "28px", "28px", "28px", "28px", "28px", "28px", "1024/768: 24px; 720: 32px; <=430: 18px", "/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/styles.css:160"],
  ["Section wrapper", "Border radius", "#playing-career", "border-radius", "34px", "34px", "34px", "34px", "34px", "34px", "1024/768: 26px; 720: 34px; <=430: 22px", sourceFiles.cssSection],
  ["Section wrapper", "Background", "#playing-career", "background", "rgba(255, 248, 240, 0.58)", "", "", "", "", "", "Same unless overridden by generic mobile section sizing", sourceFiles.cssSection],
  ["Section wrapper", "Border", "#playing-career", "border", "1px solid rgba(31, 27, 22, 0.12)", "", "", "", "", "", "Same", sourceFiles.cssSection],
  ["Section wrapper", "Box shadow", "#playing-career", "box-shadow", "none", "", "", "", "", "", "Same", "Computed browser value"],

  ["Section heading", "Heading wrapper", ".section-heading", "margin-bottom", "24px desktop", "24px", "24px", "24px", "24px", "24px", "16px tablet/mobile", sourceFiles.cssUnifiedHeadings],
  ["Section heading", "Eyebrow text", ".section-heading .eyebrow", "text", "BASKETBALL BACKGROUND", "", "", "", "", "", "Same", sourceFiles.html],
  ["Section heading", "Eyebrow style", ".section-heading .eyebrow", "font-size/line/color/spacing/weight", "12px / 15px / rgb(143,45,30) / 1.8px / 700", "12px", "12px", "12px", "12px", "12px", "1024: 11.006px; 768: 10.392px; 430/390: 9.92px", sourceFiles.cssUnifiedHeadings],
  ["Section heading", "Eyebrow margin", ".section-heading .eyebrow", "margin-bottom", "10px", "10px", "10px", "10px", "10px", "10px", "1024/768/720: 2px; <=430: 4px", sourceFiles.cssUnifiedHeadings],
  ["Section heading", "Title font", ".section-heading h2", "font-family/font-weight/color", "Georgia, Palatino Linotype, serif / 700 / rgb(31,27,22)", "", "", "", "", "", "Same", sourceFiles.cssUnifiedHeadings],
  ["Section heading", "Title size", ".section-heading h2", "font-size/line-height", "clamp(36px, 2.1vw, 42px); line-height 1.05", "36px / 37.8px", "36px / 37.8px", "36px / 37.8px", "40.32px / 42.336px", "42px / 44.1px", "1024: 32.38/33.35px; 768: 28.129/28.973px; 430: 22.696/23.377px; 390: 21.976/22.635px", sourceFiles.cssUnifiedHeadings],
  ["Section heading", "Gap to honors/stat pills", ".section-heading + .achievement-highlights", "visual gap", "24px visual; heading margin-bottom 24px and grid margin-top 22px collapse", "24px", "24px", "24px", "24px", "24px", "16px heading margin; grid margin-top 0", `${sourceFiles.cssDesktopHeadings}; ${sourceFiles.cssUnifiedHeadings}`],

  ["Honors/stat pill grid", "Grid class", ".achievement-highlights", "class", "achievement-highlights", "", "", "", "", "", "Same", sourceFiles.html],
  ["Honors/stat pill grid", "Columns", ".achievement-highlights", "grid-template-columns", "repeat(3, minmax(0, 1fr)); renders 3 x 2", "3", "3", "3", "3", "3", "1024: 1 column; 900/768/720/430/390: 2 columns", sourceFiles.cssPillsCarousel],
  ["Honors/stat pill grid", "Gaps", ".achievement-highlights", "column-gap/row-gap", "12px / 12px", "12px", "12px", "12px", "12px", "12px", "10px at 900 and below", sourceFiles.cssPillsCarousel],
  ["Honors/stat pill grid", "Pill sizing", ".achievement-chip", "width/height/min-height", "Width fills grid column; min-height 78px", "364.66 x 78px", "418 x 78px", "469.73 x 78px", "520.61 x 78px", "699.33 x 78px", "1024: 910 x 78px; 768: 331.92 x 50px; 430: 181 x 50px; 390: 161 x 50px", sourceFiles.cssPillsCarousel],
  ["Honors/stat pill grid", "Pill padding/radius", ".achievement-chip", "padding/border-radius", "14px 22px / 999px", "", "", "", "", "", "900-390: 3px 8px / 999px", sourceFiles.cssPillsCarousel],
  ["Honors/stat pill grid", "Pill visual", ".achievement-chip", "background/border/shadow/text-align", "Gradient cream background; 1px solid rgba(184,135,47,.34); 0 14px 34px rgba(52,36,24,.1); center", "", "", "", "", "", "Same visual; tighter sizing on mobile", sourceFiles.cssPillsCarousel],

  ["Honors/stat pill text", "Main label", ".achievement-chip strong", "font-family/size/weight/color/line-height", "Georgia, Palatino Linotype, serif / 17.28px / 700 / rgb(31,27,22) / 19.872px", "", "", "", "", "", "900/768/720: 14.4px; 430: 13.975px; 390: 13.44px", sourceFiles.cssPillsCarousel],
  ["Honors/stat pill text", "Subtext", ".achievement-chip span", "font-size/weight/color/line-height", "13.76px / 400 / rgb(106,95,83) / 17.2px", "", "", "", "", "", "900/768/720: 12.48px; <=430: 11.84px; color rgba(72,63,54,.68)", sourceFiles.cssPillsCarousel],
  ["Honors/stat pill text", "Text gap", ".achievement-chip", "gap", "5px", "5px", "5px", "5px", "5px", "5px", "900/768/720: 1px; <=430: gap 0 and subtext margin-top 3px", sourceFiles.cssPillsCarousel],

  ["View Career Awards button", "Button class/id", "#playingCareerAwards", "class/id", "button button-secondary button-small / playingCareerAwards", "", "", "", "", "", "Same", sourceFiles.html],
  ["View Career Awards button", "Desktop button", "#playingCareerAwards", "width/height/padding/radius/font/color/background/border", "163.61px x 40px; min-height 40px; padding 0 14px; radius 999px; 14px 700; text rgb(31,27,22); bg rgba(255,255,255,.58); border 1px solid rgba(31,27,22,.12)", "", "", "", "", "", "1024: full width but secondary style; 900 and below full width primary gradient", "/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/styles.css:310"],
  ["View Career Awards button", "Action wrapper", ".playing-career-actions", "display/gap/margin", "flex; align-items center; gap 10px 12px; margin 0 0 20px", "", "", "", "", "", "900 and below display block; <=430 margin-bottom 14px", sourceFiles.cssPillsCarousel],

  ["Carousel/media wrapper", "Wrapper", ".playing-career-carousel", "class/display/grid", "playing-career-carousel; grid; columns auto minmax(0,1fr) auto; gap 12px; align-items center", "", "", "", "", "", "<=720 grid-template-columns 1fr; <=430 overflow hidden", sourceFiles.cssPillsCarousel],
  ["Carousel/media wrapper", "Width/height", ".playing-career-carousel", "computed size", "Fills section content width", "1118 x 287.98px", "1278 x 328px", "1433.22 x 366.8px", "1585.84 x 404.95px", "2122 x 538.98px", "720: 658 x 252px; 430: 372 x 279.5px; 390: 332 x 249.5px", "Computed browser values"],
  ["Carousel/media wrapper", "Visual", ".playing-career-carousel", "padding/radius/background/border/shadow", "18px 14px 16px; radius 28px; gradient cream/gold; border 1px solid rgba(31,27,22,.12); shadow none", "", "", "", "", "", "720: padding 12px; <=430: padding 0, radius 22px", sourceFiles.cssPillsCarousel],

  ["Carousel image cards", "Generated card", "#playingCareerTrack .achievement-card", "markup/class", "button.achievement-card generated by JS", "", "", "", "", "", "Same", sourceFiles.jsCarousel],
  ["Carousel image cards", "Visible cards", "#playingCareerTrack", "visible cards", "3", "3", "3", "3", "3", "3", "900/768: 3; 720: about 2 plus peek; <=430: 1", sourceFiles.cssPillsCarousel],
  ["Carousel image cards", "Track", ".playing-career-track", "display/gap/overflow/snap", "flex; gap 16px; overflow-x auto; scroll-snap-type x mandatory; scrollbar-width thin", "", "", "", "", "", "<=430: padding 0; scrollbar-width none", sourceFiles.cssPillsCarousel],
  ["Carousel image cards", "Card sizing", ".playing-career-track .achievement-card", "flex-basis/aspect/radius", "calc((100% - 32px) / 3); aspect-ratio 4/3; radius 24px", "314.66 x 235.98px", "368 x 276px", "419.73 x 314.8px", "470.61 x 352.95px", "649.33 x 486.98px", "720: 280 x 210px; <=430: 100% basis and radius 0", sourceFiles.cssPillsCarousel],
  ["Carousel image cards", "Image", ".achievement-card img", "width/height/object-fit/object-position", "100% x 100%; object-fit cover; default center center; item inline positions such as first image 50% 42%", "", "", "", "", "", "Same; image fills card", sourceFiles.jsCarousel],

  ["Carousel arrows", "Arrow classes", ".playing-career-arrow-prev/.playing-career-arrow-next", "classes", "playing-career-arrow playing-career-arrow-prev/next", "", "", "", "", "", "Same", sourceFiles.html],
  ["Carousel arrows", "Desktop arrows", ".playing-career-arrow", "size/position/radius/background/border/font/color", "44 x 54px; static; radius 999px; bg rgba(255,250,243,.82); border 1px solid rgba(31,27,22,.14); font-size 32px; color rgb(31,27,22)", "", "", "", "", "", "900 and below 34 x 40px, 24.8px, bg rgba(255,250,243,.72); <=720 absolute centered vertically", sourceFiles.cssPillsCarousel],
  ["Carousel arrows", "Left/right spacing", ".playing-career-arrow-prev/next", "left/right", "Desktop: static grid columns with 12px gap", "", "", "", "", "", "900 sets left/right 5px but only applies once arrows become absolute at <=720", "/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/styles.css:8775"],

  ["Old/duplicate CSS", "Unused old grid", ".playing-career-grid", "impact", "Exists in CSS but not used by homepage Playing Career & Honors section", "", "", "", "", "", "No direct effect unless markup changes to use it", "/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/styles.css:1031"],
  ["Old/duplicate CSS", "Achievement card layering", ".achievement-card", "impact", "Shared card style gives padding/border/radius/background/shadow; later reset clears padding; track rule clears border/background but shadow remains", "", "", "", "", "", "This is why carousel cards still compute a shadow", `${sourceFiles.cssPillsCarousel}; /Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/styles.css:1470`],
  ["Old/duplicate CSS", "Heading cascade", ".section-heading rules", "impact", "Earlier home desktop lock and later unified heading system both affect title/eyebrow/gaps", "", "", "", "", "", "Later unified system wins for desktop heading typography; earlier more-specific adjacent grid margin keeps grid margin-top 22px", `${sourceFiles.cssDesktopHeadings}; ${sourceFiles.cssUnifiedHeadings}`],
  ["Old/duplicate CSS", "Carousel mobile cascade", ".playing-career-carousel/.track/.arrow", "impact", "Base rules, <=720 rules, <=900 rules, and <=430 final harmonizer all layer together", "", "", "", "", "", "At <=430 carousel padding becomes 0 and card basis 100%", "/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/styles.css:6588"],
  ["Old/duplicate CSS", "Gallery/media rules", ".gallery-grid/.gallery-card/.media-preview-carousel", "impact", "Present elsewhere but do not directly style this homepage carousel", "", "", "", "", "", "Homepage section uses .playing-career-* plus .achievement-card", "Code inspection"]
];

const header = [
  "Category",
  "Spec Item",
  "Selector/Class",
  "Property",
  "Desktop/Base Value",
  "1280",
  "1440",
  "1600",
  "1920",
  "2560",
  "Tablet/Mobile Value",
  "Source/Notes"
];

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

const csv = [header, ...rows].map((row) => row.map(csvEscape).join(",")).join("\n") + "\n";

const json = {
  title: "Homepage Playing Career & Honors Current Specs",
  generatedDate: "2026-05-14",
  note: "Read-only inspection output. No website files were edited.",
  sourceFiles,
  desktopBreakpoints,
  rows: rows.map((row) => Object.fromEntries(header.map((key, index) => [key, row[index] ?? ""])))
};

const readme = `# Homepage Playing Career & Honors Current Specs

Generated: 2026-05-14

This folder packages the current read-only spec for the homepage **Playing Career & Honors** section. No website source files were changed.

## Files

- \`playing-career-honors-current-specs.csv\` - flat CSV spec table for upload/import.
- \`playing-career-honors-current-specs.xlsx\` - spreadsheet version of the same table.
- \`playing-career-honors-current-specs.json\` - structured handoff data for ChatGPT or another tool.
- \`CHATGPT-HANDOFF-playing-career-honors.md\` - concise prompt/context file for another ChatGPT session.

## Key Source Locations

- HTML section: \`${sourceFiles.html}\`
- Base section CSS: \`${sourceFiles.cssSection}\`
- Pill/carousel CSS: \`${sourceFiles.cssPillsCarousel}\`
- Desktop heading cascade: \`${sourceFiles.cssDesktopHeadings}\`
- Unified heading cascade: \`${sourceFiles.cssUnifiedHeadings}\`
- Carousel JS generation: \`${sourceFiles.jsCarousel}\`

## Quick Summary

- Section element: \`section.section.playing-career-section#playing-career\`
- Desktop section width follows \`.page-shell\`: 1192px at 1280, 1352px at 1440, 1512px at 1600, 1680px at 1920, 2240px at 2560.
- Desktop section padding: 34px vertical and responsive inline padding from 36px to 58px.
- Desktop heading: eyebrow 12px/15px, title clamp(36px, 2.1vw, 42px) with line-height 1.05.
- Honors pills: 3 columns desktop, 2 columns on most mobile widths, 1 column at 1024 due tablet rule cascade.
- Carousel: 3 visible cards desktop, 1 visible card at 430px and below.
- Important conflicts: \`.achievement-card\` is layered and leaves a shadow on carousel cards; heading rules are overridden by later unified heading rules; carousel mobile rules are layered across <=720, <=900, and <=430 blocks.
`;

const handoff = `# ChatGPT Handoff: Homepage Playing Career & Honors Specs

Use this as context for the current homepage Playing Career & Honors section. The CSV/XLSX/JSON files in this same folder contain the full spec table.

Please treat these as the current specs before any redesign work:

- Section: \`section.section.playing-career-section#playing-career\`
- Button: \`#playingCareerAwards.button.button-secondary.button-small\`
- Honors grid: \`.achievement-highlights\` with \`.achievement-chip\` children
- Carousel: \`.playing-career-carousel > #playingCareerTrack.playing-career-track > button.achievement-card > img\`

Primary desktop values:

| Viewport | Section width | Inline padding | Title | Track | Card size | Visible cards |
|---:|---:|---:|---:|---:|---:|---:|
${desktopBreakpoints.map((bp) => `| ${bp.viewport} | ${bp.sectionWidth} | ${bp.sectionInlinePadding} | ${bp.titleSize} / ${bp.titleLineHeight} | ${bp.carouselTrackWidth} | ${bp.cardSize} | ${bp.visibleCards} |`).join("\n")}

Source files:

- \`${sourceFiles.html}\`
- \`${sourceFiles.cssSection}\`
- \`${sourceFiles.cssPillsCarousel}\`
- \`${sourceFiles.cssDesktopHeadings}\`
- \`${sourceFiles.cssUnifiedHeadings}\`
- \`${sourceFiles.jsCarousel}\`
`;

await fs.writeFile(out("playing-career-honors-current-specs.csv"), csv, "utf8");
await fs.writeFile(out("playing-career-honors-current-specs.json"), `${JSON.stringify(json, null, 2)}\n`, "utf8");
await fs.writeFile(out("README-playing-career-honors-current-specs.md"), readme, "utf8");
await fs.writeFile(out("CHATGPT-HANDOFF-playing-career-honors.md"), handoff, "utf8");

const workbook = await Workbook.fromCSV(csv, { sheetName: "Current Specs" });
const spreadsheet = await SpreadsheetFile.exportXlsx(workbook);
await spreadsheet.save(out("playing-career-honors-current-specs.xlsx"));

console.log(JSON.stringify({
  files: [
    out("playing-career-honors-current-specs.csv"),
    out("playing-career-honors-current-specs.xlsx"),
    out("README-playing-career-honors-current-specs.md"),
    out("playing-career-honors-current-specs.json"),
    out("CHATGPT-HANDOFF-playing-career-honors.md")
  ]
}, null, 2));
