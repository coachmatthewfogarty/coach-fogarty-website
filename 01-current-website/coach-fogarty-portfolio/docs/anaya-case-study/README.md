# Anaya Case Study Page Spec

This folder contains the current active Anaya Case Study page spec. Active date: 2026-05-14.

## Active Docs

- `ANAYA-CASE-STUDY-PAGE-FINAL-SPEC.md`: full visual, responsive, typography, color, spacing, component, and section spec.
- `ANAYA-CASE-STUDY-RESPONSIVE-QA.md`: measured breakpoint QA and screenshot index.
- `ANAYA-CASE-STUDY-IMAGE-ASSET-MAP.md`: current Anaya page image/video/poster/thumbnail asset map.
- `ANAYA-CASE-STUDY-CSS-RULE-MAP.md`: CSS and JS rule ownership map plus cleanup notes.
- `anaya-case-study-qa-data.json`: raw rendered measurement data from the QA harness.
- `anaya-case-study-assets-data.json`: generated asset-role data from `app.js`.
- `screenshots/`: full-page and overlay screenshots for every requested breakpoint.

## Files Controlling The Page

- `../../anaya-case-study.html`
- `../../styles.css`
- `../../app.js`
- `../../footer.js`
- `../../anaya/**`

## Archived Docs

No prior active Anaya-specific docs existed in `docs/anaya-case-study`, so nothing was archived. Related shared docs remain active in `docs/responsive` because they control shared Home/Page Hero/Media systems. Old copy notes remain in `docs/archive/old-website-copy-notes-archived.txt`.

## Breakpoints Passed QA

- 2560x1440: rendered, no broken images, overlay opens, screenshots captured; shared 100vw chrome overflow measurement noted.
- 1920x1080: rendered, no broken images, overlay opens, screenshots captured; shared 100vw chrome overflow measurement noted.
- 1600x900: rendered, no broken images, overlay opens, screenshots captured; shared 100vw chrome overflow measurement noted.
- 1440x900: rendered, no broken images, overlay opens, screenshots captured; shared 100vw chrome overflow measurement noted.
- 1280x800: rendered, no broken images, overlay opens, screenshots captured; shared 100vw chrome overflow measurement noted.
- 1025x768: rendered, no broken images, overlay opens, screenshots captured; shared 100vw chrome overflow measurement noted.
- 1024x768: rendered, no broken images, overlay opens, screenshots captured; shared 100vw chrome overflow measurement noted.
- 820x1180: rendered, no broken images, overlay opens, screenshots captured; shared 100vw chrome overflow measurement noted.
- 768x1024: rendered, no broken images, overlay opens, screenshots captured; shared 100vw chrome overflow measurement noted.
- 430x932: rendered, no broken images, overlay opens, screenshots captured.
- 390x844: rendered, no broken images, overlay opens, screenshots captured.
- 375x812: rendered, no broken images, overlay opens, screenshots captured.

## Known Issues

- Desktop/tablet audits flag scrollWidth greater than clientWidth because shared full-bleed header/footer chrome use `100vw` while the browser excludes scrollbar width from clientWidth. Body overflow hides the horizontal axis and screenshots did not show visible content overflow. This was left untouched because it is shared chrome, not an Anaya-only rule.
- Production stat cards currently link to `#` placeholders for future full game film links.
- One Development Process entry uses the same AVIF media-card file as an overlay thumbnail fallback (`dp-coaching-feedback-card-q98-1200x900.avif`); it exists and renders, but it is not a WebP thumbnail export.
- No CSS was removed; legacy Anaya fallback selectors were documented but preserved to avoid changing shared locks or unrelated in-progress CSS edits.
