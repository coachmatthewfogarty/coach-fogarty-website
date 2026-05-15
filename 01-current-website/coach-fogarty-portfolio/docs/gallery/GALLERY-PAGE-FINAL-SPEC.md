# Gallery Page Final Spec

Status: active source of truth as of 2026-05-14. This document captures the current Gallery / Media page implementation. It does not redesign the page. If this document conflicts with older Gallery, Media, Home Media, or responsive audit notes, use this file plus the active code in `media.html`, `styles.css`, `app.js`, and `footer.js`.

## 1. Page Identity

- Page file: `media.html`.
- Page purpose: Gallery Hub for coaching photos, team culture, training clips, The Archer visuals, Anaya Beard case study media, playing-career photos, and playing-career awards.
- HTML title: `Gallery | Matthew Fogarty`.
- Meta description: `Coach Fogarty media gallery for coaching photos, videos, playing background and team culture visuals.`
- Final nav label: `Gallery`.
- Header active state: no page-specific active class is rendered; active page is represented by the current URL matching `./media.html`.
- Footer links related to this page: Footer Site column includes `Gallery` -> `./media.html`; Featured footer column links to Anaya and Archer companion pages.
- Page wrapper: `<main class="media-library-page">`; outer shared wrapper is `.page-shell`.
- Shared layout systems: `.site-header.site-chrome`, `.site-footer.site-chrome`, `.page-hero-system`, `.hero-left-system`, `.hero-right-system`, `.hero-pill-system`, shared `.section`, shared button system, shared media overlay.

## 2. Header / Navigation Specs

The Gallery page uses the shared sticky full-bleed header. Desktop header height measured at 44px from 1025px through 2560px; tablet header height measured at 59px; mobile measured at 57px.

| Viewport | Header padding | Display | Nav display | Nav gap | Brand mark | Link type |
|---|---|---|---|---|---|---|
| 2560 | 4px 160px 4px 160px | flex | flex row | 20px | 35px x 35px | Georgia/Palatino; `calc(var(--type-small-body-size) + 1px)`; #100d0a |
| 1920 | 4px 120px 4px 120px | flex | flex row | 20px | 35px x 35px | Georgia/Palatino; `calc(var(--type-small-body-size) + 1px)`; #100d0a |
| 1440 | 4px 44px 4px 44px | flex | flex row | 20px | 35px x 35px | Georgia/Palatino; `calc(var(--type-small-body-size) + 1px)`; #100d0a |
| 1280 | 4px 44px 4px 44px | flex | flex row | 20px | 35px x 35px | Georgia/Palatino; `calc(var(--type-small-body-size) + 1px)`; #100d0a |
| 1025 | 4px 44px 4px 44px | flex | flex row | 20px | 35px x 35px | Georgia/Palatino; `calc(var(--type-small-body-size) + 1px)`; #100d0a |
| 1024 | shared tablet header; measured 59px tall | grid | flex/grid tablet nav | 11px | 38px x 38px | Georgia/Palatino; var(--text) |
| 820 | shared tablet header; measured 59px tall | grid | flex/grid tablet nav | 11px | 38px x 38px | Georgia/Palatino; var(--text) |
| 768 | shared tablet header; measured 59px tall | grid | flex/grid tablet nav | 11px | 38px x 38px | Georgia/Palatino; var(--text) |
| 430 | 8px/10px mobile chrome rhythm; measured 57px tall | grid | drawer trigger + fixed nav | 8px 14px | 36px x 36px | Georgia/Palatino; var(--text) |
| 390 | 8px/10px mobile chrome rhythm; measured 57px tall | grid | drawer trigger + fixed nav | 8px 14px | 36px x 36px | Georgia/Palatino; var(--text) |
| 375 | 8px/10px mobile chrome rhythm; measured 57px tall | grid | drawer trigger + fixed nav | 8px 14px | 36px x 36px | Georgia/Palatino; var(--text) |

Header rules:

- Width behavior: `.site-header.site-chrome` is full viewport width, `width: 100vw`, centered with `margin-left/right: calc(50% - 50vw)`.
- Desktop content alignment: padding-inline resolves to `calc((100vw - var(--page-shell-width)) / 2)` from 1025px up.
- Background: `rgba(246, 240, 229, 0.72)`.
- Border: desktop bottom divider `1px solid rgba(31, 27, 22, 0.14)`; side borders removed.
- Shadow: final full-bleed chrome rule sets `box-shadow: none` for header chrome.
- Sticky behavior: `position: sticky`; desktop `top: 0`; mobile `top: 8px`.
- Scroll behavior: `footer.js` toggles `.header-hidden` after downward scroll beyond threshold, and reveals on upward scroll.
- Logo/MF mark: final desktop polish sets `35px x 35px`, radius `10px`, font-size `0.88rem`; tablet uses `38px x 38px`; smallest mobile uses `36px x 36px`; Georgia bold `MF`; gradient `linear-gradient(135deg, var(--red), var(--gold))`; text color `#fff7eb`.
- Desktop nav: flex row, no wrap, `gap: 16px` base and `11px` in tablet-ish shared breakpoint; link font Georgia/Palatino, `0.98rem` base, weight `500`, color `#100d0a`, no underline.
- Dropdowns: none.
- Mobile menu: below 720px, hamburger button appears, brand copy hides, Contact shortcut appears, nav becomes a fixed drawer at `top: 72px`, `left: 14px`, width `min(282px, calc(100vw - 28px))`, initially translated offscreen with opacity 0; `.nav-open` translates to 0 and opacity 1. Escape/outside click closes.

## 3. Gallery Hero Section

Hero classes: `.hero.page-hero-system`. Left copy uses `.hero-left-system`; right image uses `.hero-right-system` with `.hero-portrait-card`; hero pills use `.hero-pill-system`.

- Eyebrow: `GALLERY HUB`.
- H1: `Gallery Hub`.
- Body text: four-sentence visual library description in `.hero-text`.
- Right image: `assets/media/sideline-leadership/photos/sideline-leadership-staff-celebrating-media-card-cover-center-1200x900.avif`.
- Overlay links: Gallery, Photos, Videos, Archer, Anaya.
- Hero pills: Coaching, Player Development, The Archer, Playing Career, Awards, Anaya Beard.

Measured active hero values:

| Viewport | Header padding | Hero columns | Hero padding | H1 size/line | Body size/line | Pill columns | Card-title sample |
|---|---|---|---|---|---|---|---|
| 2560 | 4px 160px 4px 160px | `minmax(0, 1fr) var(--hero-wide-portrait-width)` | 36px 58px 30px | `var(--hero-wide-title-size)` / 0.95 | 22px / 46px | 3 columns | responsive fit from `--type-card-title-size` |
| 1920 | 4px 120px 4px 120px | `minmax(0, 1fr) var(--hero-portrait-width)` | 36px 46.1px 30px | `var(--hero-title-size)` / 0.95 | about 17.5px / 27.5px | 3 columns | responsive fit from `--type-card-title-size` |
| 1440 | 4px 44px 4px 44px | `minmax(0, 1fr) var(--hero-portrait-width)` | 31.7px 36px 25.9px | `var(--hero-title-size)` / 0.95 | 17.5px / 32px | 3 columns | responsive fit from `--type-card-title-size` |
| 1280 | 4px 44px 4px 44px | `minmax(0, 1fr) var(--hero-portrait-width)` | 28.2px 36px 23px | `var(--hero-title-size)` / 0.95 | 17.5px / 32px | 3 columns | responsive fit from `--type-card-title-size` |
| 1025 | 4px 44px 4px 44px | `minmax(0, 1fr) var(--hero-portrait-width)` | 28.2px 36px 23px | `var(--hero-title-size)` / 0.95 | 16px / 24.32px | 3 columns | responsive fit from `--type-card-title-size` |
| 1024 | tablet stacked | `minmax(0, 1fr)` | `clamp(24px, 4.5vw, 32px)` | `clamp(2.35rem, 8.6cqw, 3rem)` / 1 | inherited tablet body | 3 preview cards; hero pills in stats row | tablet fit |
| 820 | tablet stacked | `minmax(0, 1fr)` | `clamp(24px, 4.5vw, 32px)` | `clamp(2.35rem, 8.6cqw, 3rem)` / 1 | inherited tablet body | 3 preview cards; hero pills in stats row | tablet fit |
| 768 | tablet stacked | `minmax(0, 1fr)` | `clamp(24px, 4.5vw, 32px)` | `clamp(2.35rem, 8.6cqw, 3rem)` / 1 | inherited tablet body | 3 preview cards; hero pills in stats row | tablet fit |
| 430 | mobile stacked | `minmax(0, 1fr)` | 20px 16px | `clamp(2.05rem, 10vw, 2.42rem)` / 1 | mobile inherited body | 1 column | mobile fit |
| 390 | mobile stacked | `minmax(0, 1fr)` | 20px 16px | `clamp(2.05rem, 10vw, 2.42rem)` / 1 | mobile inherited body | 1 column | mobile fit |
| 375 | mobile stacked | `minmax(0, 1fr)` | 20px 16px | `clamp(2.05rem, 10vw, 2.42rem)` / 1 | mobile inherited body | 1 column | mobile fit |

Hero rules:

- Page shell width: `var(--page-shell-width)`; target 1680px at 1920px and 2240px at 2560px.
- Desktop layout from 1025px: grid areas `copy portrait` and `stats portrait`, columns `minmax(0, 1fr) var(--hero-portrait-width)`.
- Desktop margins: `24px auto 32px`.
- Desktop border/radius/background/shadow: `1px solid var(--line)`, radius `32px`, background `linear-gradient(135deg, rgba(255, 248, 237, 0.94), rgba(246, 236, 219, 0.78))`, shadow `var(--shadow)`.
- Desktop image height: 380.5px default, 389.5px at 1350-1419px, 384.6px at 1420-1499px, 370px at 1500-1719px, 380.6px at 1720-2199px, clamp up to about 512px at 2200px+.
- Desktop image object: `object-fit: cover`, active class-authority object-position `50% 0%`.
- Tablet/mobile through 1024px: one-column grid areas copy, stats, portrait; visual max-height 320px, aspect `16 / 10` before smaller mobile polish sets Gallery visual aspect `4 / 3`.
- Mobile 430px and below: hero padding `20px 16px`, radius `22px`, pills become one column.

## 4. Gallery Section Structure

| Order | Section | ID | Class names | Eyebrow | Title | Behavior |
|---|---|---|---|---|---|---|
| 1 | Hero | (none) | hero page-hero-system | GALLERY HUB | Gallery Hub | 6 hero pills plus right image overlay |
| 2 | Featured Portfolio Galleries | featured-media | section media-library-section | GALLERY CATEGORIES | Featured Portfolio Galleries | Carousel over 10 category cards; 3 visible desktop/tablet, 1 visible mobile |
| 3 | Coaching Photos and Team Culture | coaching-media | section media-library-section | COACHING PHOTOS | Coaching Photos and Team Culture | Carousel over 6 coaching albums plus 6 gallery buttons |
| 4 | Teaching and Training Clips | video-galleries | section media-library-section | TRAINING VIDEOS | Teaching and Training Clips | Carousel over Archer + Anaya video items plus 2 action buttons |
| 5 | Playing Career Photos | playing-career-media | section media-library-section | PLAYING CAREER | Playing Career Photos | Carousel over 13 images plus 2 action buttons |
| 6 | Playing Career Awards | playing-awards-media | section media-library-section | PLAYING AWARDS | Playing Career Awards | Carousel over 6 awards plus All Awards button |
| 7 | The Archer Training Visuals | archer-media | section media-library-section | THE ARCHER | The Archer Training Visuals | Carousel over 20 Archer items plus page/photos/videos actions |
| 8 | Anaya Beard Development Gallery | anaya-media | section media-library-section | CASE STUDY | Anaya Beard Development Gallery | Carousel over 6 Anaya section preview cards plus case study/gallery actions |

Album inventory by section:

| Section | Album | Eyebrow/category | Items | Primary thumbnail |
|---|---|---|---|---|
| Coaching Photos and Team Culture | Leadership in Action | SIDELINE | 3 | assets/media/sideline-leadership/photos/sideline-leadership-hyped-media-card-cover-bottom-mid-1200x900.avif |
| Coaching Photos and Team Culture | Teaching Moments | COURTSIDE | 11 | assets/media/coaching-details/photos/coaching-details-santa-ana-college-pregame-warmup-media-card-1200x900.avif |
| Coaching Photos and Team Culture | Player Growth | DEVELOPMENT | 1 | assets/media/player-development/photos/player-development-on-court-instruction-01-media-card-cover-center-1200x900.avif |
| Coaching Photos and Team Culture | Program Standards | LOCKER ROOM | 2 | assets/media/team-environment/photos/team-environment-huddle-media-card-cover-bottom-center-1200x900.avif |
| Coaching Photos and Team Culture | Celebration Moments | ENERGY | 10 | assets/media/team-celebration/photos/team-celebration-santa-ana-3-pointer-01-media-card-cover-upper-mid-zoom-out-3-q98-1200x900.avif |
| Coaching Photos and Team Culture | Winning Standard | CHAMPIONSHIP | 6 | assets/media/championship-culture/photos/championship-culture-pacific-academy-three-peat-media-card-1200x900.avif |
| Playing Career Photos | Playing Career & Achievements | PLAYING BACKGROUND | 13 | assets/images/playing-career/photos/playing-career-shasta-college-jump-shot-carousel-1200x900.avif |
| Playing Career Awards | Playing Career Awards | PLAYING BACKGROUND | 6 | assets/images/playing-career/awards/playing-awards-shasta-college-hall-of-fame-overlay-thumb-600x400.webp |
| The Archer Training Visuals | The Archer Training Visuals | PLAYER DEVELOPMENT INNOVATION | 20 |  |
| Anaya Beard Development Gallery | Foundation |  | 9 | first item |
| Anaya Beard Development Gallery | Development Process |  | 11 | first item |
| Anaya Beard Development Gallery | Leadership Impact |  | 15 | first item |
| Anaya Beard Development Gallery | Breakthrough Production |  | 19 | first item |
| Anaya Beard Development Gallery | Accolades Recognition |  | 10 | first item |
| Anaya Beard Development Gallery | Next-Level Opportunities |  | 1 | first item |

Featured category cards rendered by `renderMediaLibraryPage()`:

| Card title | Slug | Anchor target | Album opened | Album item count |
|---|---|---|---|---|
| Program Standards | team-environment | #coaching-media | Team Environment album | 2 |
| Celebration Moments | team-celebration | #coaching-media | Team Celebration album | 10 |
| Winning Standard | championship-culture | #coaching-media | Championship Culture album | 5 |
| Leadership in Action | sideline-leadership | #coaching-media | Leadership in Action album | 3 |
| Teaching Moments | coaching-details | #coaching-media | Teaching Moments album | 11 |
| Player Growth | player-development | #coaching-media | Player Growth album | 1 |
| The Archer | the-archer | #archer-media | The Archer aggregate album | 20 |
| Anaya Beard Case Study | anaya-beard-case-study | #anaya-media | Anaya full album | 65 |
| Playing Career | playing-career | #playing-career-media | Playing Career & Achievements | 13 |
| Playing Career Awards | playing-career-awards | #playing-awards-media | Playing Career Awards | 6 |

## 5. Section Headers / Typography System

- Section heading selector: `.media-library-page .section-heading`.
- Section heading margin-bottom: 14px measured and set in CSS.
- Eyebrow base: `var(--red)`, uppercase, weight 700, letter-spacing inherited from shared eyebrow system, base `0.76rem` / `1.15`; mobile 0.68rem / 1.2; <=360px 0.64rem.
- Section title base variable on Gallery: `clamp(2.2rem, calc(1.93rem + 0.3vw), 2.5rem)`, line `1.04`. Tablet: `clamp(1.6rem, calc(1.12rem + 1.1vw), 2.2rem)`; mobile: `1.55rem` / 1.08; <=360px: 1.46rem.
- Font family: section H2 uses Georgia / Palatino through shared heading selector.
- Title color: `var(--text)`. Eyebrow color: `var(--red)`. Mobile/tablet colors match desktop.
- Body/supporting text: section cards use `var(--muted)`, line 1.45 for category/card paragraph copy.
- Dynamic heading fit: `footer.js` runs compact heading fitting for section headings/card titles outside heroes.

## 6. Gallery Cards / Media Cards

- `.media-category-card`: category cards in Featured Portfolio Galleries.
- `.media-library-card.media-photo-card`: image cards in section preview carousels.
- `.media-library-card.media-video-card`: video cards in video/Archer previews with `.media-card-kind` badge.
- `.media-album-section`: legacy/albums shell rule exists but current Gallery page does not render album sections because current preview markup uses `.media-preview-carousel` directly.

Card rules:

- Width: `width: 100%`; grid track controls card width.
- Padding: 10px base for category/library cards; mobile remains 10px.
- Radius: 20px base, 18px mobile. Shared 720px fallback also sets 22px, but later Gallery mobile polish wins for card radius.
- Background: cream gradient `linear-gradient(180deg, rgba(255, 253, 249, 0.9), rgba(255, 248, 239, 0.78)), var(--panel)`.
- Border: `1px solid var(--line)`.
- Shadow: `var(--shadow)`; hover/focus changes to `0 24px 58px rgba(52, 36, 24, 0.15)`, border `rgba(184, 135, 47, 0.24)`, transform `translateY(-3px)`.
- Frame: `.media-category-frame`, `.media-library-frame`; aspect `4 / 3`, radius 16px base, 14px mobile, overflow hidden, background `rgba(31, 27, 22, 0.1)`.
- Image/video: `width: 100%`, `height: 100%`, `object-fit: cover`. Championship category thumbnail has special position `center 62%`, scale 1.035. Awards cards force `object-position: center center`.
- Description: category paragraph uses var(--muted), line 1.45; desktop single-line ellipsis; mobile clamps to 2 lines.
- Badge/chip: `.library-type` appears inside category cards; `.media-card-kind` appears over video cards, red gradient, white text, 5px 9px padding, radius 999px, 0.72rem weight 700.
- Desktop preview carousel: outer `.media-preview-carousel` grid has 44px arrow, content, 44px arrow; inner `.media-section-grid` has 3 columns.
- Mobile <=720px: preview carousel becomes one content column with arrows absolutely positioned at bottom; inner preview track shows 1 card; category/library grid is 1 column.

## 7. Pills / Buttons / CTAs

- Hero pills use `.button.button-secondary.button-small.hero-pill` inside `.hero-pill-system`.
- Desktop hero pill layout: 3 columns x 2 rows.
- Hero pill treatment: 999px radius, warm cream gradient, `1.5px solid rgba(184, 135, 47, 0.58)`, inset highlight and warm shadow.
- Hero pill text: `.hero-pill-main` weight 800, color `var(--ink)`; active desktop size controlled by `--home-hero-pill-main-size`.
- Small desktop variables: min-height clamp(48px, 4.4vw, 58px), padding 5px 8px, main text 15.2px.
- Wide desktop variables: min-height 82px, padding 10px 16px, main text 26px.
- Non-hero buttons: `.button` inline-flex, min-height 48px; `.button-small` min-height 40px, padding 0 14px, font-size 0.9rem; `.button-secondary` color var(--text), border var(--line), background rgba(255,255,255,0.58).
- Hover/focus: shared `.button:hover, .button:focus-visible` translates Y -2px.
- Action rows: `.media-related-actions` and `.media-gallery-button-row` become 2 columns on mobile <=720px and 1 column <=360px.

## 8. Colors

| Token / use | Value |
|---|---|
| --bg | #f4efe7 |
| --panel | rgba(255, 250, 243, 0.82) |
| --panel-strong | #fff9f0 |
| --text | #1f1b16 |
| --muted | #6a5f53 |
| --line | rgba(31, 27, 22, 0.12) |
| --gold | #b8872f |
| --red | #8f2d1e |
| --blue | #244f73 |
| --green | #315c43 |
| --sand | #d7b377 |
| --ink | #2f3148 |
| --shadow | 0 20px 60px rgba(52, 36, 24, 0.12) |
| Body background | radial gold + radial blue + cream vertical gradient |
| Header background | rgba(246, 240, 229, 0.72) |
| Hero background | linear-gradient(135deg, rgba(255, 248, 237, 0.94), rgba(246, 236, 219, 0.78)) |
| Section background | rgba(255, 248, 240, 0.58) |
| Card background | cream vertical gradient over var(--panel) |
| Overlay background | rgba(15, 12, 10, 0.82) |
| Overlay panel | #1f1b16 at 0.96 alpha; awards overlay rgba(255,250,243,0.98) |
| Hero overlay link blue | #8bb8e8 |

## 9. Spacing / Layout System

- Page shell variables: `--page-gutter: 44px`, `--page-max-desktop: 1680px`, `--page-max-wide: 2240px`, `--page-shell-width: min(var(--page-max-desktop), calc(100vw - 88px))`; at 2200px+ shell becomes `min(var(--page-max-wide), calc(100vw - 320px))`.
- Header to hero: hero top y measured as header height + 24px at desktop; CSS hero margin `24px auto 32px`.
- Hero to first section: 32px measured from hero bottom to first section top at 2560/1920.
- Section top margin: `.media-library-page .media-library-section` base 18px.
- Section padding: base `22px 28px`; mobile uses `var(--mobile-section-pad)`, commonly 16px or clamp(18px, 3vw, 28px) depending breakpoint block.
- Section radius: base 28px; mobile section radius variable.
- Grid/card gap: media grids 14px base; media album stack 24px; mobile grid gap uses `var(--mobile-grid-gap)`.
- Hero pills gap: active desktop `var(--approved-hero-pill-gap, 12px)`; mobile 8px.
- Footer margin-top: 28px base; desktop chrome inner grid starts with 18px top padding and border-top.

## 10. Footer Specs

- Footer element: `.site-footer.site-chrome` inside main.
- Full-width behavior: `width: 100vw`, centered to viewport, no side borders.
- Desktop chrome: at 1025px+, footer chrome background transparent and no outer box shadow; inner `.footer-grid` and `.footer-bottom` use `var(--page-shell-width)`.
- Footer padding: base latest rule `18px 30px 12px`; desktop site-chrome sets padding-left/right 0 and inner width; mobile `14px 18px 12px`, site-chrome final `18px var(--site-chrome-gutter) 12px`.
- Desktop columns: `.footer-grid` is 4 columns, `repeat(4, minmax(0, 1fr))`, column gap clamp(42px, 7vw, 104px), row gap 16px.
- Footer accordion title: `.footer-accordion-toggle`, font size 0.76rem, weight 800, letter spacing 0.16em, uppercase, color var(--red).
- Footer links: `.footer-link-list a`, 0.92rem desktop, line 1.34, color var(--text); hover var(--red). Tablet <=1024 link size 0.88rem. Mobile <=820 link size 0.95rem, line 1.42.
- Footer bottom: desktop flex row, justify space-between, gap 18px, margin-top 14px, padding-top 10px, top border rgba(158,111,53,0.22). Mobile <=820 stacks column-reverse, centers social icons/copyright, no top border.
- Social icons: footer socials flex gap 8px; anchors 32px square, SVG 15px square.
- Footer accordions: at <=820px the footer grid becomes block, each footer group gets bottom divider, toggle min-height 46px, caret visible, link list hidden until `.is-open` from `footer.js`.

## 11. Active Breakpoints

| Viewport | Overflow | Header | Hero | Visible cards | Overlay | Behavior |
|---|---|---|---|---|---|---|
| 2560x1440 | Pass | 2560 x 44 | 2240 x 568 | 3 category / 18 media | Opens; 2 thumbs | Desktop split hero, 3 preview cards |
| 2200x1240 | Pass | 2200 x 44 | 1880 x 580 | 3 category / 18 media | Opens; 2 thumbs | Desktop split hero, 3 preview cards |
| 1920x1080 | Pass | 1920 x 44 | 1680 x 448.59 | 3 category / 18 media | Opens; 2 thumbs | Desktop split hero, 3 preview cards |
| 1600x900 | Pass | 1600 x 44 | 1512 x 429.58 | 3 category / 18 media | Opens; 2 thumbs | Desktop split hero, 3 preview cards |
| 1440x900 | Pass | 1440 x 44 | 1352 x 444.17 | 3 category / 18 media | Opens; 2 thumbs | Desktop split hero, 3 preview cards |
| 1280x800 | Pass | 1280 x 44 | 1192 x 433.69 | 3 category / 18 media | Opens; 2 thumbs | Desktop split hero, 3 preview cards |
| 1025x768 | Pass | 1025 x 44 | 937 x 433.69 | 3 category / 18 media | Opens; 2 thumbs | Desktop split hero, 3 preview cards |
| 1024x768 | Pass | 1024 x 59 | 936 x 804 | 3 category / 18 media | Opens; 2 thumbs | Tablet stacked hero, 3 preview cards |
| 820x1180 | Pass | 820 x 59 | 732 x 804 | 3 category / 18 media | Opens; 2 thumbs | Tablet stacked hero, 3 preview cards |
| 768x1024 | Pass | 768 x 59 | 680 x 804 | 3 category / 18 media | Opens; 2 thumbs | Tablet stacked hero, 3 preview cards |
| 430x932 | Pass | 430 x 57 | 342 x 686.14 | 1 category / 6 media | Opens; 2 thumbs | Mobile single-card carousel |
| 390x844 | Pass | 390 x 57 | 302 x 682.63 | 1 category / 6 media | Opens; 2 thumbs | Mobile single-card carousel |
| 375x812 | Pass | 375 x 57 | 287 x 694.73 | 1 category / 6 media | Opens; 2 thumbs | Mobile single-card carousel |

## 12. JavaScript / Interaction Specs

- Primary Gallery renderer: `renderMediaLibraryPage()` in `app.js`.
- Shared album data: `mediaAlbums`, `playingCareerAlbums`, `playingCareerAwardAlbums`, `archerMediaAlbum`, `anayaSections`.
- Shared overlay functions: `openMediaAlbum()`, `closeMediaOverlay()`, `renderMediaOverlay()`, `showMediaItem()`, `selectMediaItem()`, `scrollMediaThumbnails()`, `queueActiveMediaThumbnailScroll()`.
- Preview carousel logic: `previewCarouselMarkup()`, `visiblePreviewCards()`, per-carousel state, arrows with `data-media-carousel-direction`, swipe via `enableSwipeCarousel()`.
- Card binding: `connectMediaLibraryCards(document)`; cards/buttons carry `data-open-media-gallery`, `data-open-media-gallery-item`, `data-media-library-album`, and `data-media-library-item`.
- Keyboard overlay controls: Escape closes; ArrowLeft/ArrowRight navigate when prev/next is visible.
- Overlay click behavior: backdrop click closes; clicking image viewer advances if next button is visible and target is not video.
- Header/mobile/footer JS: `footer.js` controls header scroll-hide, mobile nav drawer, footer accordions, and compact heading fitting.

## 13. Cleanup Status

- Broken image paths in active Gallery data: none found.
- Broken static href/src paths in `media.html`: none found.
- Horizontal overflow across requested QA widths: none found.
- Duplicated/legacy hero CSS: removed in the 2026-05-15 page-hero cleanup. Active Gallery hero rules are the `.page-hero-system` selectors.
- Unused rendered class note: `.media-album-section` has active CSS but current Gallery Hub renderer does not emit it for the main page sections; keep as legacy/shared until other pages/usages are audited.
- Design changes made during this spec pass: none.
