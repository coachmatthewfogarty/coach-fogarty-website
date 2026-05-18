# Responsive Design System

This is the global source of truth for the public Coach Fogarty portfolio website responsive and layout system. Use it before changing typography, spacing, page heroes, body text, pills, cards, overlays, or breakpoint behavior.

Companion active specs:

- `docs/responsive/HOME-HERO-RESPONSIVE-SPEC.md`: measured Home hero desktop system.
- `docs/responsive/HOME-CONTACT-CLOSEOUT-LOCK-README.md`: measured Home Portfolio Materials + Contact closeout system.
- `docs/responsive/SYSTEMS-PAGE-LOCK-README.md`: locked Systems page hero, library, details, image, button and QA rules.
- `docs/responsive/FEATURED-WORK-PAGE-LOCK-README.md`: locked Featured Work detailed section page rules.
- `docs/responsive/ARCHER-PAGE-LOCK-README.md`: locked The Archer product case study page rules.
- `docs/responsive/ABOUT-PAGE-LOCKED-SPEC.md`: locked About letter/gallery page exception to the reusable hero system.
- `docs/responsive/CSS-OVERRIDE-CONTROL.md`: active CSS override and `!important` control policy.
- `docs/gallery/GALLERY-PAGE-FINAL-SPEC.md`: locked Gallery / Media page spec, image inventory, interaction spec, cleanup log, and responsive QA packet.
- `docs/image-export/README.md`: locked image export, crop, naming, and asset rules.

Implementation lives primarily in:

```text
styles.css
footer.js
```

## Breakpoints

Use many test sizes, but only a few clean code ranges. The site should resize smoothly between tested sizes.

| Range | Size | Primary behavior |
|---|---|---|
| Mobile | `0-767px` | stacked mobile layout |
| Tablet | `768px-1024px` | stacked tablet layout |
| Compact Desktop | `1025px-1199px` | desktop layout; tightest desktop range |
| Standard Desktop | `1200px-1599px` | standard desktop layout |
| Large Desktop | `1600px-2199px` | large desktop rhythm |
| Ultra-Wide Desktop | `2200px+` | wide shell rhythm |

Global switch: `1024px` and below is mobile/tablet stacked layout. `1025px` and above is desktop layout. Do not bring back older `1000px`, `720px`, `820px`, or device-specific global switches.

Responsive coding rule: solve layout with `clamp()`, `min()`, `max()`, `minmax()`, flexible grids, fluid spacing, and max-widths. One-off breakpoint rules are allowed only when a component truly cannot be fixed cleanly inside its master range, and the exception must be documented.

## Documented Scoped Exceptions

These are allowed exceptions, not alternate global breakpoint systems:

- About page full two-column story/gallery layout starts at `1440px`; About remains stacked from `1025px` through `1439px` because its letter copy needs a wider readable lane before the gallery sits beside it.
- Contact form fields use a scoped `820px/821px` micro-breakpoint for internal form field arrangement only. This must not be reused for footer, header, hero, page shell, or global layout behavior.
- Small mobile fit rules such as `430px`, `399px`, `360px`, `359px`, and `340px` may remain only for text, button, title, or compact-control fitting. They must not define page structure.
- Image crop and overlay polish rules may use asset-specific or height-specific guards when protecting faces, document previews, video overlays, or short landscape viewports.
- Locked hero/card fit-protection ranges may remain where documented measured locks protect the reusable `.page-hero-system`, Home hero, Gallery, Systems, Featured, Contact, About, or Archer pages. These ranges tune typography, image balance, and card fit inside the master desktop bands; they must not change the global mobile/tablet/desktop switch.

## Page Shell

Use the shared shell for major sections, page heroes, cards, contact modules, systems grids, and media previews.

```css
--page-gutter: 44px;
--page-max-desktop: 1680px;
--page-max-wide: 2240px;
--page-shell-width: min(var(--page-max-desktop), calc(100vw - 88px));

@media (min-width: 2200px) {
  --page-shell-width: min(var(--page-max-wide), calc(100vw - 320px));
}
```

Target shell widths:

| Viewport | Target shell |
|---|---:|
| `1025x768` | compact desktop shell with `44px` base gutter when possible |
| `1280x800` | `1192px` |
| `1440x900` | `1352px` |
| `1600x900` | `1512px` |
| `1920x1080` | `1680px` |
| `2560x1440` | `2240px` |

## Shared Footer

Footer behavior is shared across all pages through `.site-footer.site-chrome`.

- Keep footer markup identical across pages: `.footer-grid` followed by `.footer-bottom`.
- Keep `.site-footer.site-chrome` full-bleed, but do not give it desktop horizontal padding when `.footer-grid` and `.footer-bottom` are already fixed to `--page-shell-width`.
- The single top divider above the footer columns is `.site-footer .footer-grid { border-top: 1px solid rgba(31, 27, 22, 0.14); }`.
- Do not add a second divider on `.site-footer.site-chrome`; its `border-top` stays `0`.
- Footer accordions are active at `1024px` and below. The expanded desktop footer begins at `1025px`.
- Desktop footer content uses `width: var(--page-shell-width); margin-inline: auto;` so the divider, columns, copyright row and social icons align to the page shell walls.
- Shared bottom padding comes from `.site-footer.site-chrome`; do not add page-specific footer spacing overrides.

## Home Hero Desktop System

The Home hero is the approved desktop reference and the source for the reusable `.page-hero-system`.

- Desktop starts at `1025px`.
- Use a two-column grid with left copy/stats and right portrait.
- Left column holds eyebrow, H1, body text, and six stat pills.
- Right column holds the portrait image only.
- Do not let the left-column pills run under the right image.
- Body text uses `max-width: 100%` and fills the left copy lane.
- Body typography changes by breakpoint to keep the lane balanced.
- Six stat pills use the approved `3 x 2` grid and approved sizing.
- Wide desktop pills fill the safe left grid track; do not reintroduce old narrow pill caps.
- Do not cap the whole hero to a narrow centered lane.

Use `docs/responsive/HOME-HERO-RESPONSIVE-SPEC.md` for measured Home hero values.

Current reusable page-hero coverage:

- Systems: `systems.html`
- Featured: `featured-work.html`
- Gallery/Media: `media.html`
- Anaya Beard Case Study: `anaya-case-study.html`
- The Archer: `archer-visuals.html`

About and Contact are excluded from the reusable page-hero lock.

## About Page Exception

About is intentionally different from the global hero/page system.

- About is excluded from the reusable `.page-hero-system`.
- About uses a special locked letter/gallery layout, not a reusable hero.
- About is story/copy-heavy and includes a 12-image gallery.
- About does not start its two-column layout at the global `1025px` desktop start.
- About stays stacked/tablet-style from `1025px` through `1439px`.
- About full desktop two-column layout starts at `1440px`.
- About `1440px+` uses copy/signature on the left and a 12-image `3 x 4` gallery on the right.
- About `1025px-1439px` uses full-width copy, signature below copy, and a `3 x 4` gallery below the signature.
- About `620px` and below uses a `2 x 6` gallery.

Use `docs/responsive/ABOUT-PAGE-LOCKED-SPEC.md` as the source of truth before changing About responsive behavior. Future passes should not assume About follows the normal `1025px` two-column hero start.

## Locked Featured Work Page

Featured Work is locked as a detailed section-based Featured Work page.

- Page target: `featured-work.html`.
- Main target: `main.featured-page`.
- Hero target: `.featured-hero.page-hero-system`.
- Hero stats target: `.featured-hero-actions.hero-pill-system`.
- Featured Work uses the shared page hero system with the Homepage-style 6 stat-pill grid, while the page body preserves the original detailed Featured Work section layout.
- Do not replace the body with a simplified 4-card grid.
- Required body sections: Impact Summary, Pacific Academy program turnaround, Santa Ana College collegiate impact, Anaya Beard case study, The Archer innovation, Complete Coaching Profile strategy panel, and Explore the Work CTA.
- Hero pills: `20+ / Years Coaching Experience`, `338-43 / Head Coaching Record`, `26 / Championships`, `College / Player Development`, `Staff / Recruiting Systems`, `Program / Operations`.
- Desktop: hero pills use the approved `3 x 2` Homepage-style stat-pill grid from `1025px`.
- Tablet/mobile: hero pills follow the shared responsive `.hero-pill-system` behavior without horizontal overflow.
- Use approved cream background, navy/dark ink type, red accents, warm card panels, soft borders, soft shadows, image crops, pills/buttons, and footer/header systems.
- Featured Work uses the shared approved Home/Page Hero image overlay treatment: `page-highlight-bar hero-portrait-overlay`.
- Do not reintroduce Featured-only hero overlay card selectors or local overlay overrides for position, size, padding, radius, typography, background, or shadow.
- Cleanup note: the simplified 4-card rebuild was removed/reverted.
- Cleanup note: the wrong Featured-only white hero caption card rules were removed.
- Use `docs/responsive/FEATURED-WORK-PAGE-LOCK-README.md` for final page-specific QA.

## Locked The Archer Page

The Archer page is locked as a product case study inside the coaching portfolio, not a standalone sales page.

- Page target: `archer-visuals.html`.
- Main target: `main.archer-page`.
- Hero target: `.page-hero-system`.
- Final scoped CSS block: `Archer Page Final Lock`.
- Sections: hero, product overview, how-it-works cards, player development connection, photo gallery cards, video cards, innovation value, and CTA.
- The page uses the shared shell, section rhythm, cards, buttons, pills, overlay treatment, typography, colors, shadows, and radii.
- Product diagram imagery may use `object-fit: contain` inside the approved image frame so the tool graphic stays readable.
- No Archer-specific JavaScript overlay is required; the Gallery page keeps the site-wide media overlay experience.
- Use `docs/responsive/ARCHER-PAGE-LOCK-README.md` for final page-specific QA and image roles.

## Locked Homepage Systems Section

The Home page Systems section is visually approved and locked as of May 14, 2026.

- Section target: `#systems.section.library-section`.
- Grid target: `#libraryGrid.library-grid`.
- Card target: `.library-card.system-card`.
- Image target: `.library-card-media`.
- Button target: `.library-actions`.
- Desktop: `3` columns at `>=1025px`.
- Tablet: `2` columns from `768px` through `1024px`.
- Mobile: `1` column through `767px`.
- Media ratio: `4 / 3`.
- Image fit: `cover`.
- Desktop card title: `26px / 28px`.
- Keep the approved content, cream background, red card titles, rounded cards, image-forward rhythm, and pill button structure unless fixing a true bug.

## Final Locked Systems Page

The Systems page is FINAL LOCKED as of May 14, 2026. It is visually approved through the shared internal page hero, six-card library and detail section system. Do not continue redesigning it unless a future bug appears.

- Page target: `systems.html`.
- Main target: `main.systems-detail-page`.
- Hero target: `.page-hero-system`.
- Library target: `#systems-library.systems-core-library`.
- Card target: `.systems-core-card.system-card`.
- Detail target: `.system-detail-section`.
- Carousel target: `.system-document-carousel`.
- Desktop: hero and library start at `1025px`; library uses `3` columns.
- Tablet: library uses `2` columns from `768px` through `1024px`.
- Mobile: library stacks to `1` column through `767px`.
- Six core library cards are Player Development Systems, Scouting & Recruiting, DPAT, Program Support, Coaching Philosophy and The Archer.
- DPAT text must include Defensive Performance Accountability Tracker.
- Detail sections may keep Scouting and Recruiting separated for staff workflow clarity, while the top library treats them as one core system group.
- The Archer is included as a Systems detail section and links to the existing Archer page, gallery and feature proof.
- Use `docs/responsive/SYSTEMS-PAGE-LOCK-README.md` for final page-specific QA.
- Keep the current shared internal hero, Staff Systems eyebrow/title/body spacing, desktop `3 x 2` hero pill layout, right image/card crop and Page Highlight overlay.
- Keep the current desktop shell behavior at `1280`, `1440`, `1600`, `1920` and `2560`.
- Keep the current `3 / 2 / 1` Systems library behavior across desktop/tablet/mobile.
- Only keep `1025px` on the watch list for future regressions because it is the tightest desktop breakpoint. Do not redesign it unless there is actual overflow, ugly wrapping or button/image collision.
- No further Systems-specific cleanup is needed unless a future bug appears.

## Locked Homepage Contact Closeout

The Home page Portfolio Materials + Contact closeout is visually approved and locked as of May 14, 2026.

- Section target: `main#top > #contact.contact-section`.
- Grid target: `.contact-closeout-grid`.
- Left card: `.document-card`.
- Right card: `.contact-form-card`.
- Desktop: `2` columns from `1025px`, using `minmax(0, 2fr) minmax(0, 3fr)`.
- Tablet/mobile: `1` stacked column through `1024px`.
- Gap between cards: `28px`.
- Card treatment: cream gradient card, `1px` warm ink border, `clamp(24px, 2.4vw, 30px)` radius, and `0 18px 42px rgba(52, 36, 24, 0.1)` shadow.
- Document pills: two-column stack through `1024px`, single-column stack from `1025px`.
- Form field arrangement keeps a scoped component micro-breakpoint: one column through `820px`, two columns from `821px`; textarea and submit span full width. This is not a global layout or footer breakpoint.
- Use `docs/responsive/HOME-CONTACT-CLOSEOUT-LOCK-README.md` for measured values, colors, typography, and breakpoint QA.

## Page Hero Left Column

Systems, Featured, Gallery/Media, Anaya Beard Case Study, and The Archer inherit the approved Home hero desktop system through `.page-hero-system`. Credentials keeps the older shared fallback. About and Contact are excluded.

Left-column rules:

- Use `.hero-left-system` for the copy lane.
- Use `.hero-pill-system`, `.hero-pill`, `.hero-pill-main`, and `.hero-pill-sub` for stat/action pills.
- Copy container is `width: 100%`, `max-width: 100%`, and `min-width: 0`.
- Body text is `width: 100%` and `max-width: 100%`.
- Body text uses the approved Home hero rhythm by breakpoint.
- Pill/action rows use the Home hero pill sizing and `3` desktop columns.
- Six-pill stat groups must form `3 x 2`.
- Pills stay inside the left column and never slide under the right media column.

Protected areas:

- Do not rely on `#impact`, `main#top`, or old page-specific hero hacks for reusable page heroes.
- Do not change eyebrow, title, right image, right-column image crop, or overlay styling when the request is only left-column formatting.
- About and Contact are excluded from broad hero-left/body changes where the page already has approved custom rules.

## Eyebrows

Use one consistent eyebrow system across desktop pages.

- Color: `var(--red)`.
- Transform: uppercase.
- Letter spacing: use the approved desktop system value; current desktop section system uses `0.15em`.
- Font weight: `700`.
- Desktop size/line: current section system uses `12px / 15px`.
- Keep eyebrow-to-title spacing consistent; current desktop section system uses `10px`.
- Mobile/tablet may adjust spacing and size, but should keep the same color family and should not drift into a separate palette.

## Titles And Headers

Use one consistent section-title system across desktop pages.

- Desktop section titles use Georgia/Palatino serif styling.
- Current desktop section title size: `clamp(36px, 2.1vw, 42px)`.
- Current desktop line-height: `1.05`.
- Keep title line-height tight and premium.
- Keep spacing between eyebrow and title consistent.
- Keep spacing from title to body/content consistent.
- Hero H1 rules are separate from section H2 rules and follow the hero system.

Heading fit rules:

- Eyebrows try to stay on one line.
- Section titles and card titles try to stay one line, then wrap at readable floors.
- Do not force headings into tiny type to avoid wrapping.

Readable floors:

| Element | Mobile | Tablet | Desktop |
|---|---:|---:|---:|
| Section title | `18px` | `20px` | `25px` |
| Card title | `18px` | `20px` | `22px` |
| Eyebrow | `8px` | `8px` | `8px` |

## Body Text

Use the approved Home hero body rhythm where applicable.

- Body copy should be long enough to feel balanced in its lane.
- Avoid orphan one-word lines through copy editing first, then layout tuning.
- Do not cap hero body max-width unless a page has its own approved exception.
- Home hero body stays `max-width: 100%`.
- Page hero left-column body text should fill the left copy lane.
- About and Contact are excluded where existing approved page rules say not to touch them.

Desktop body rhythm for inherited page heroes:

| Range | Body size | Line-height |
|---|---:|---:|
| `1025-1199px` | `16px` | `24.32px` |
| `1200-1499px` | `17.5px` | `32px` |
| `1500-1599px` | `17.25px` | `28px` |
| `1600-1719px` | about `17.5px` | `30px` |
| `1720-2199px` | about `17.5px` | `27.5px` |
| `2200px+` | `22px` | `46px` |

## Pills

Hero stat/action pills use the Home hero system.

- Use `3` columns on desktop for hero pill rows.
- Six hero pills must be `3` columns x `2` rows.
- Pills stay inside the left column.
- Wide desktop hero pills fill the safe left grid track through `.hero-pill-system`.
- Do not reintroduce old narrow pill caps or the old active `364px / 72px` wide-pill sizing.
- Any old narrow pill cap values are legacy/shared only, not the active Home or reusable page-hero rule.
- Pill colors, border radius, padding, font sizes, and gaps should match the Home hero system.
- Use `minmax(0, ...)` grid tracks so labels can stay inside the pill.

Current desktop pill rhythm:

| Range | Active width behavior | Pill height | Main text | Sub-label |
|---|---|---:|---:|---:|
| `1025-1349px` | fills the safe left lane | Home-scaled compact desktop | Home-scaled | Home-scaled |
| `1350-1499px` | fills the safe left lane | Home-scaled desktop | Home-scaled | Home-scaled |
| `1500-1719px` | fills the safe left lane | Home-scaled desktop | Home-scaled | Home-scaled |
| `1720-2199px` | fills the safe left lane | Home-scaled large desktop | Home-scaled | Home-scaled |
| `2200px+` | fills the safe left grid track | `82px` | `26px` | `13.5px` |

## Featured Cards

Featured cards and panels should feel like part of the website design system, not separate landing-page components.

- Keep card rhythm compact, readable, and aligned to the shared shell.
- Avoid nesting cards inside cards.
- Use stable media dimensions and `minmax(0, 1fr)` grid tracks.
- Keep button groups aligned and equal-height when presented as a group.
- Preserve approved proof chips/stat card sizing unless a specific card task asks for a change.

## Gallery Cards

Gallery cards use the locked image/card pattern.

- Media frame uses a stable `4 / 3` aspect ratio unless a page-specific approved slot says otherwise.
- Images use approved crops and object-position rules from the image/export system.
- Captions stay readable and should not push the card wider than its grid track.
- Card title rows may truncate only where the current gallery pattern already approves it.
- Mobile/tablet card color should match desktop card color; do not introduce a separate mobile palette.

## Images And Right Columns

Do not modify right-column image sizes, crops, object-position, or export assets unless specifically requested.

- Right-column hero images stay in the right column.
- The image frame is not resized to solve left-column copy or pill issues.
- Overlay boxes should not drive image sizing.
- Use the locked crop ladder and naming rules in `docs/image-export/README.md`.
- Protect faces, bodies, document text, basketball action, and logos before decorative composition.

## Overlay Boxes

Overlay boxes keep their approved right-column formatting.

- Keep overlays attached to the image/right column.
- Wide desktop overlay pills/cards should not stretch too far.
- Keep overlay text on one line where approved.
- Do not alter overlay text or right-column overlay styling when updating left-column hero rules.
- Overlay link rows should use distributed spacing at desktop/wide desktop instead of fixed gaps that create uneven rows.

## Tablet And Mobile Color Consistency

Tablet/mobile may change spacing, stack order, and size, but they should keep the approved color system.

- Eyebrows stay in the same red color family.
- Cards keep the same warm panel system.
- Buttons and pill accents stay consistent with desktop.
- Mobile/tablet structure stays stacked through `1024px` unless a component has a tested exception.

## Verification Standard

For hero, page shell, body rhythm, pill, overlay, footer, and image-column work, test the full master list:

```text
Mobile Portrait:
360x780
375x812
390x844
430x932

Mobile Landscape:
780x360
812x375
844x390
932x430

Tablet Portrait:
600x960
720x960
768x1024
820x1180
1024x1366
1032x1376

Tablet Landscape:
1024x768
1180x820
1366x1024
1376x1032

Desktop:
1025x768
1280x800
1440x900
1600x900
1920x1080
2560x1440
```

Check for:

- desktop begins at `1025px`,
- no horizontal overflow,
- tablet/mobile colors match the approved desktop palette,
- hero body text fills the left lane without unwanted max-width caps,
- stat pills stay inside the left column,
- wide desktop pills/cards/overlays do not stretch into long bars,
- right-column images and overlays remain unchanged unless requested,
- About and Contact exclusions remain respected.
