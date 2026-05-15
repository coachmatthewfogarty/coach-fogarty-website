# Anaya Case Study Page Final Spec

Active spec date: 2026-05-14

This is the current active page-spec packet for `anaya-case-study.html`. It documents the rendered rules from `styles.css`, generated Anaya gallery data and shared overlay behavior from `app.js`, footer/mobile nav behavior from `footer.js`, and the image assets currently referenced by the page. No redesign changes were made during this pass.

## Files Controlling The Page

- `anaya-case-study.html`: document structure, hero copy, section copy, CTA links, overlay shell markup, footer markup.
- `styles.css`: all visual rules, responsive locks, typography, gallery, overlay, navigation, and footer layout.
- `app.js`: Anaya section gallery data, gallery card rendering, View More buttons, media overlay/lightbox rendering, thumbnail strip, keyboard/arrow navigation.
- `footer.js`: mobile nav open/close, scroll-hide header, footer accordion behavior.
- `anaya/**`: Anaya hero, gallery, poster, video, thumbnail, and player portfolio assets.

## Section Order

| # | ID | Classes | Heading | Rendered size at 1280 | Padding | Radius | Background |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | (hero) | hero page-hero-system | Anaya Beard | follows shared page hero system | shared page hero padding | shared page hero radius | shared page hero background |
| 2 | foundation | section anaya-journey-section | Building From The Starting Point | 1192x1301px | 34px 36px | 34px | rgba(255, 248, 240, 0.58) none |
| 3 | development-process | section anaya-journey-section | The Early Mornings, Repetition And Grind Behind The Growth | 1192x1346px | 34px 36px | 34px | rgba(255, 248, 240, 0.58) none |
| 4 | leadership-impact | section anaya-journey-section | The Turning Point Became A Program Standard | 1192x1278px | 34px 36px | 34px | rgba(255, 248, 240, 0.58) none |
| 5 | production | section anaya-journey-section | Growth That Transferred Against High-Level Competition | 1192x1112px | 34px 36px | 34px | rgba(255, 248, 240, 0.58) none |
| 6 | accolades-recognition | section anaya-journey-section | The Recognition Came From The Work | 1192x1282px | 34px 36px | 34px | rgba(255, 248, 240, 0.58) none |
| 7 | next-level | section anaya-journey-section | A Forward/Wing Projection Backed By Growth, Production And Toughness | 1192x1339px | 34px 36px | 34px | rgba(255, 248, 240, 0.58) none |
| 8 | (footer) | site-footer site-chrome | (none) | 1280x266px | 18px 0px 12px | 0px | rgba(0, 0, 0, 0) none |


## 1. Header / Navigation

Desktop header is shared chrome, full-bleed to viewport width while the page shell remains centered. At 1280px the header renders 1280px wide, 44px tall, x=-7.5px in the measured browser because the 100vw chrome spans the viewport while the document client width excludes the vertical scrollbar. Header padding is 4px 44px at 1280px, gap is 20px, display is flex, align-items center, justify-content space-between, border bottom is the shared rgba(31,27,22,0.14) line, background is rgba(246,240,229,0.72), shadow none.

The MF mark is a text logo, not an image: 40x40px desktop, 38x38px tablet, 36x36px at <=430px. It uses Georgia/Times, 1rem, 700 weight, #fff7eb text, 12px/11px mobile radius, and a 135deg red-to-gold gradient. Desktop nav is a single flex row with 16px base gap and 0.98rem / 500 serif links. Tablet/mobile convert to a burger control and fixed slide-out nav. The Contact shortcut appears as `.mobile-contact-link` on tablet/mobile, 36px min-height tablet and 34px min-height at <=430px.

Active state: no Anaya-specific active nav class exists. Systems has a page-specific active selector elsewhere; Anaya nav links use default/hover states only. Mobile burger adds `.nav-open`, morphing the three bars into an X, opening a fixed 282px max-width menu at top 72px tablet and 58px <=430px.

## 2. Page Hero

Hero markup: `.hero.page-hero-system`. Desktop >=1025 uses the reusable Page Hero Desktop Master Lock, with `.hero-left-system`, `.hero-right-system`, `.hero-portrait-card`, `.hero-portrait-overlay`, and `.hero-pill-system` as the only active hero behavior hooks. Grid areas are `copy portrait` and `stats portrait`.

Hero eyebrow text: `PLAYER DEVELOPMENT CASE STUDY`; 12.096px at 1280, 700 weight, 1.15 line-height, 0.14em letter-spacing, uppercase, red #8f2d1e, margin-bottom 12px. H1 text: `Anaya Beard`; Georgia/Palatino, 59.2px at 1280, 56.24px line-height, 700, #1f1b16, normal wrapping. Hero paragraph text is exactly the four-sentence paragraph in the HTML; 17.5px / 32px at 1280, 500 weight, muted #6a5f53, margin-top 25.5px, width 100% of the left column.

Hero image: `./anaya/photos/h/case-study-anaya-beard-header-coaching-hero-cover-center-q98-2000x1333.avif`. At 1280 it renders 390x380.5px, object-fit cover, object-position 50% 0%, card radius 28px, shadow var(--shadow), border 1px rgba(255,255,255,0.4). Source aspect ratio is 3:2; desktop card uses locked height rather than preserving source ratio. Tablet/mobile stack copy, image, and chips into one column; image is 320px tall at 1024/820/768 and scales down by width at 390/375.

Overlay card: `.hero-portrait-overlay` sits absolute over the hero image and follows `docs/responsive/HERO-OVERLAY-SYSTEM-LOCK.md`. Desktop <=1349 uses left/right clamp(10px,0.85vw,14px), bottom clamp(10px,0.9vw,18px), 10px/12px padding, 14px radius, rgba(32,28,24,0.74) background, blur(12px), gold title. At 1280 the overlay title is 11.8px, overlay links are 12px in the 1025-1599px guard range, flex nowrap with space-between. At >=2200 the overlay is centered, width min(calc(100% - 26px), clamp(560px,25vw,680px)), 13px 16px padding, title 15px and links 17px.

## 3. Impact / Accolade Chips

There are 6 chips: `350+ Hours Early Morning Work`, `Athlete of Year Major Recognition`, `OEC OPOY Conference Award`, `2x First Team All-Conference`, `DI/DII Offers Full-Ride Opportunities`, `2x Captain Leadership Standard`. Desktop hero chips are inside `.hero-stat-band.anaya-stat-band.hero-pill-system`, not a separate page section. At 1280 the row is a 3-column grid, two rows, 223.58px columns, 12px gap, aligned to the left column. Each pill is 58.81px tall at 1280, 1.5px gold border, 999px radius, layered ivory/gold background, inset highlight, and shared shadow. Pill value uses Georgia, #2f3148, 15.2px at 1280, 800 weight, line-height 1. Label uses muted #6a5f53, 8.64px, 700 weight. Tablet/mobile keep three columns but shrink widths; at 430px each chip is about 119.4x54px.

## 4. Case Study Intro / Story Sections

The page has six `.section.anaya-journey-section` story blocks. Section cards use shared `.section` styling and section heading lock. At 1280, each section is 1192px wide with 34px desktop heading top rhythm from late body-rhythm locks. Section title at 1280 is 36px / 37.8px; section intro body is 17px desktop rhythm where applied, muted text, max-width controlled by heading/container rules.

`.case-study-section` is two columns on desktop: 1.15fr / 0.85fr; at 1280 this computes to 630.188px and 465.812px with 22px gap. Each `.case-study-copy` card has 22px padding, 24px radius, 1px var(--line), var(--panel) rgba(255,250,243,0.82), and var(--shadow). Body paragraphs are muted, line-height 1.65. Lists are custom bullet grids with 10px row gap, 18px top margin, and 7px gold dot bullets. Tablet/mobile collapse to one column.

## 5. Development System / Training Process Section

This is section `#development-process` and uses the same story section/card system as section 01. It has 2 text cards and a generated gallery below. The section gallery has 11 items in `app.js`; the first 6 render as preview cards, with `View More` opening all items in the shared overlay. Desktop gallery preview is 3 columns; tablet/mobile becomes 1 column under the late tablet lock.

## 6. Production / Game Film / High-Level Competition Section

Section `#production` has a section heading, a `.production-link-grid`, and a generated gallery. Desktop production grid starts as repeat(5, minmax(0,1fr)); at 1280 each card is 211.2px wide with 14px gap, 18px padding, 18px radius, translucent white background, var(--line) border, var(--shadow), and hover translateY(-3px) with a deeper shadow. At <=1024 it collapses to one column. Card values use red Georgia 1.35rem / 1.1 and body text uses muted 1.45 line-height. Links currently point to `#` placeholders in the HTML. The generated Breakthrough Production gallery has 19 media items and passes overlay QA.

## 7. Accolades / Recognition Section

Section `#accolades-recognition` uses the same two-card story grid plus a generated gallery. It is not a separate accolade-card component; recognition items are an HTML list in the first card and gallery media below. The section gallery has 10 image items in `app.js`; preview renders the first 6 at 4:3 and View More opens all 10.

## 8. Next-Level Opportunities / Augusta Section

Section `#next-level` contains copy, two CTA buttons, and a featured one-card gallery for Augusta University. The CTA row is `.resource-strip`, display flex, wrap, 12px gap, margin-top 18px. Primary button links to `./anaya/documents/anaya-beard-player-portfolio.pdf`; secondary links to `./contact.html`. The Augusta media card uses `.anaya-gallery-featured`: one column, max-width 900px, centered, media frame 4:3, card radius 24px, gold-tinted border/background, and centered bold caption.

## 9. Gallery / Media Section

There is no single standalone gallery section; each case-study section has an `.anaya-gallery` mount. Preview grid rules: desktop repeat(3,1fr), 20px gap; <=1024 repeat(2,1fr) in earlier rules but final tablet/mobile lock sets one column at 1024 and below. Media frames use 4:3 aspect-ratio, object-fit cover, object-position center center. Cards are buttons with 24px radius, var(--panel), var(--line), var(--shadow), and hover translateY(-3px). View More is right-aligned with a secondary small button.

Lightbox: shared `#mediaOverlay`; opens by card click or View More. The overlay uses class `.is-gallery-overlay`, fixed inset 0, z-index 100, rgba(15,12,10,0.82) scrim, body class `.media-overlay-open`, Escape to close, left/right arrow keys, click background to close, thumbnail click/swipe/drag behavior, and previous/next buttons hidden for single-item galleries. At 1280 the panel is 860x760px, 26px padding, 28px radius, dark rgba(31,27,22,0.96), and hidden overflow. Viewer uses contain fit; thumbnails use 120x80px max desktop and clamp down on tablet/mobile.

| Gallery index | Section | Preview cards rendered | View More | Button state |
| --- | --- | --- | --- | --- |
| 0 | Foundation | 6 | Yes | Enabled |
| 1 | Development Process | 6 | Yes | Enabled |
| 2 | Leadership Impact | 6 | Yes | Enabled |
| 3 | Breakthrough Production | 6 | Yes | Enabled |
| 4 | Accolades Recognition | 6 | Yes | Enabled |
| 5 | Next-Level Opportunities | 1 | No | Enabled |


## 10. Contact / CTA Section

There is no separate final contact section on this page. CTA behavior lives inside `#next-level` as `.resource-strip`. Buttons inherit shared button styles: 48px min-height desktop, 0 18px padding, 999px radius, 700 weight, small-body font size. Primary button is red gradient with #fffaf1 text; secondary button is translucent/outlined shared style. At tablet/mobile, shared button locks make buttons full-width.

## 11. Footer

Footer is shared full-bleed chrome. At 1280 it renders 1280px wide, transparent background, 18px top / 12px bottom chrome padding, no side border, top border rgba(31,27,22,0.14). Footer grid at 1280 is four equal columns of about 230.8px with 36px gap. Link text uses Trebuchet/Gill Sans, muted color, small body sizing, and hover color shift. Social buttons are inline SVGs, not image assets. Tablet/mobile footer keeps accordion markup; <=820 footer accordions collapse link lists until toggled by `footer.js`.

## Typography Specs

| Style | Family | Size at 1280 | Weight | Line-height | Letter spacing | Transform | Color | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Body | "Trebuchet MS", "Gill Sans", sans-serif | 16px | normal | normal | 0 | none | rgb(31, 27, 22) | site-wide |
| Hero eyebrow | "Trebuchet MS", "Gill Sans", sans-serif | 12.096px | 700 | 13.9104px | 1.8144px | uppercase | rgb(143, 45, 30) | margin-bottom 10px |
| H1 | Georgia, "Palatino Linotype", serif | 59.2px | 700 | 56.24px | normal | none | rgb(31, 27, 22) | max-width 100% |
| Hero/body paragraph | "Trebuchet MS", "Gill Sans", sans-serif | 17.5px | 500 | 32px | normal | none | rgb(106, 95, 83) | margin-top 25.5px |
| Section eyebrow | "Trebuchet MS", "Gill Sans", sans-serif | 12px | 700 | 15px | 1.8px | uppercase | rgb(143, 45, 30) | margin-bottom 10px |
| H2 | Georgia, "Palatino Linotype", serif | 36px | 700 | 37.8px | normal | none | rgb(31, 27, 22) | max-width none |
| H3/card title | Georgia, "Palatino Linotype", serif | 21.6px | 700 | normal | normal | none | rgb(31, 27, 22) | margin-bottom 12px |
| Pill value | Georgia, "Times New Roman", serif | 21.824px | 700 | 21.824px | normal | none | rgb(31, 27, 22) | stat chip |
| Button | "Trebuchet MS", "Gill Sans", sans-serif | 14.016px | 700 | normal | normal | none | rgb(255, 250, 241) | min-height 48px |
| Footer link | "Trebuchet MS", "Gill Sans", sans-serif | 14.72px | 400 | 19.7248px | normal | none | rgb(31, 27, 22) | footer sitemap |


Responsive typography: desktop hero H1 is 59.2px at 1025-1600, 60.48px at 1920, 76px at 2560; tablet H1 fits from 71.2px at 1024 to 53.19px at 768; mobile H1 is 32px at 430/390/375. Section titles are 36px desktop at 1280-1600, 40.32px at 1920, 42px at 2560, then JS-assisted fit values of 32.11px at 1024, 28.68px at 820, 27.86px at 768, 21.21px at 430, 18.96px at 390, and 18.07px at 375.

## Color Specs

| Use | Token/source | Value |
| --- | --- | --- |
| Page background token | --bg | #f4efe7 |
| Panel | --panel | rgba(255, 250, 243, 0.82) |
| Strong panel | --panel-strong | #fff9f0 |
| Main text | --text | #1f1b16 |
| Muted text | --muted | #6a5f53 |
| Border line | --line | rgba(31, 27, 22, 0.12) |
| Gold accent | --gold | #b8872f |
| Red CTA / eyebrow | --red | #8f2d1e |
| Blue link/accent | --blue | #244f73 |
| Green token | --green | #315c43 |
| Sand overlay accent | --sand | #d7b377 |
| Ink stat text | --ink | #2f3148 |
| Primary shadow | --shadow | 0 20px 60px rgba(52, 36, 24, 0.12) |
| Header bg | computed | rgba(246, 240, 229, 0.72) |
| Hero bg | computed | linear-gradient(135deg, rgba(255, 248, 237, 0.94), rgba(246, 236, 219, 0.78)) |
| Overlay bg | computed | rgba(31, 27, 22, 0.96) |
| Overlay scrim | computed | rgba(15, 12, 10, 0.82) |
| Primary button gradient | computed | linear-gradient(135deg, #8f2d1e, #c4542c) |


## Spacing Specs

Page shell desktop width is `min(var(--site-card-width), calc(100% - 88px))`, where `--site-card-width` resolves to min(1680px, calc(100vw - 88px)) until the >=2200 wide lock raises the shell to 2240px. Mobile <=720 uses calc(100% - 24px), and <=430 uses a 12px mobile gutter token. Shared section margin-top is 28px base, then 24px tablet section gap and 18px <=430 section gap. Hero desktop margin is 24px auto 32px; mobile hero top after header is 22px from the shared header + main rule plus compact card padding.

Grid/card spacing: hero desktop column gap is 33.28px at 1025-1349, 37.44px at 1350-1719, 38.4px at 1720-2199, and 0px >=2200 with the visual shifted right by clamp(32px,2vw,56px). Story cards gap 22px. Gallery gap 20px desktop, 14px tablet/mobile grid gap in shared locks. Production grid gap 14px. Card padding: story 22px, production 18px, Anaya media caption 15px 16px, featured media caption 18px 16px 20px.

## Component Specs

- Buttons: shared `.button`, flex center, 48px min-height desktop, 999px radius, 700 weight. Hover/focus translateY(-2px), no disabled style except gallery disabled buttons opacity 0.55/cursor default.
- Pills/chips: `.hero-pill` inside `.anaya-stat-band`, 3-column desktop/tablet/mobile grid, 999px radius, gold border and ivory gradient.
- Cards: `.case-study-copy`, `.production-card`, `.anaya-media-card`, `.site-footer` link blocks all use var(--line), rounded radii, and shared panel/shadow language.
- Media cards: 4:3 frames, cover fit, center position, button semantics, hover lift.
- Image overlays/lightbox: shared overlay shell with close, previous/next, caption, counter when enabled, thumbnail strip and mobile compact overlay locks.
- Section headers: eyebrow + H2 + optional intro, with late body-rhythm/container heading locks and JS compact-heading fitting from `footer.js`.
- Footer links: desktop visible grid; <=820 accordion toggles open link lists.

## Breakpoint Measurements

| Viewport | Client width | Shell width | Header h | Hero rendered | Hero columns | Chip columns | Story columns | Gallery columns | Broken images | Overlay | Overflow check |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2560x1440 | 2545px | 2240px | 44px | 2240x568px | 1405.2px 716.797px | 460.391px 460.406px 460.391px | 1207.5px 892.5px | 694px 694px 694px | 0 | Pass | Shared 100vw chrome flag |
| 1920x1080 | 1905px | 1680px | 44px | 1680x449px | 1067.42px 480px | 347.797px 347.812px 347.797px | 899.203px 664.641px | 515.281px 515.281px 515.281px | 0 | Pass | Shared 100vw chrome flag |
| 1600x900 | 1585px | 1512px | 44px | 1512x430px | 1000.56px 400px | 318.656px 318.672px 318.656px | 811.438px 599.781px | 464.406px 464.406px 464.406px | 0 | Pass | Shared 100vw chrome flag |
| 1440x900 | 1425px | 1352px | 44px | 1352x444px | 850.562px 390px | 275.516px 275.516px 275.531px | 722.188px 533.812px | 412.656px 412.672px 412.656px | 0 | Pass | Shared 100vw chrome flag |
| 1280x800 | 1265px | 1192px | 44px | 1192x434px | 694.734px 390px | 223.578px 223.578px 223.578px | 630.188px 465.812px | 359.328px 359.328px 359.344px | 0 | Pass | Shared 100vw chrome flag |
| 1025x768 | 1010px | 937px | 44px | 937x434px | 439.734px 390px | 138.578px 138.578px 138.578px | 483.562px 357.438px | 274.328px 274.328px 274.344px | 0 | Pass | Shared 100vw chrome flag |
| 1024x768 | 1009px | 953px | 59px | 953x762px | 911px | 294.328px 294.328px 294.344px | 895px | 895px | 0 | Pass | Shared 100vw chrome flag |
| 820x1180 | 805px | 756px | 59px | 756x735px | 713.797px | 229.188px 229.188px 229.188px | 704.609px | 704.609px | 0 | Pass | Shared 100vw chrome flag |
| 768x1024 | 753px | 707px | 59px | 707x722px | 664.906px | 213.438px 213.453px 213.453px | 658.844px | 658.844px | 0 | Pass | Shared 100vw chrome flag |
| 430x932 | 415px | 406px | 57px | 406x737px | 372px | 119.406px 119.422px 119.406px | 372px | 372px | 0 | Pass | Pass |
| 390x844 | 375px | 366px | 57px | 366x734px | 332px | 106.5px 106.516px 106.5px | 332px | 332px | 0 | Pass | Pass |
| 375x812 | 360px | 351px | 57px | 351x721px | 317px | 101.656px 101.672px 101.656px | 317px | 317px | 0 | Pass | Pass |


Note on overflow: desktop/tablet audits report a document scrollWidth/clientWidth mismatch caused by shared full-bleed `100vw` header/footer chrome and classic scrollbar width. The page body has `overflow-x: hidden`; screenshots did not show visible horizontal scrolling or clipped content. Mobile 430/390/375 reports no overflow.
