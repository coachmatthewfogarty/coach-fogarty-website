# Homepage Playing Career & Honors Current Specs

Generated: 2026-05-14

This folder packages the current read-only spec for the homepage **Playing Career & Honors** section. No website source files were changed.

## Files

- `playing-career-honors-current-specs.csv` - flat CSV spec table for upload/import.
- `playing-career-honors-current-specs.xlsx` - spreadsheet version of the same table.
- `playing-career-honors-current-specs.json` - structured handoff data for ChatGPT or another tool.
- `CHATGPT-HANDOFF-playing-career-honors.md` - concise prompt/context file for another ChatGPT session.

## Key Source Locations

- HTML section: `/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/index.html:178`
- Base section CSS: `/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/styles.css:640`
- Pill/carousel CSS: `/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/styles.css:1371`
- Desktop heading cascade: `/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/styles.css:19707`
- Unified heading cascade: `/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/styles.css:19973`
- Carousel JS generation: `/Users/Fogg/Desktop/Coach Fogarty Website/01-current-website/coach-fogarty-portfolio/app.js:2322`

## Quick Summary

- Section element: `section.section.playing-career-section#playing-career`
- Desktop section width follows `.page-shell`: 1192px at 1280, 1352px at 1440, 1512px at 1600, 1680px at 1920, 2240px at 2560.
- Desktop section padding: 34px vertical and responsive inline padding from 36px to 58px.
- Desktop heading: eyebrow 12px/15px, title clamp(36px, 2.1vw, 42px) with line-height 1.05.
- Honors pills: 3 columns desktop, 2 columns on most mobile widths, 1 column at 1024 due tablet rule cascade.
- Carousel: 3 visible cards desktop, 1 visible card at 430px and below.
- Important conflicts: `.achievement-card` is layered and leaves a shadow on carousel cards; heading rules are overridden by later unified heading rules; carousel mobile rules are layered across <=720, <=900, and <=430 blocks.
