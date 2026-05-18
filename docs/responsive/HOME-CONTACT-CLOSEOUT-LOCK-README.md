# FINAL LOCKED — Home Portfolio Materials + Contact

Official reusable source for the Home page two-card closeout section as of May 14, 2026.

Targets:

- Section: `main#top > #contact.contact-section`
- Grid: `.contact-closeout-grid`
- Left card: `.document-card`
- Left actions: `.document-actions .button`
- Right card: `.contact-form-card`
- Form: `.contact-form`, `.contact-name-row`, `.select-field`

Do not redesign this section. Preserve the current cream card treatment, red eyebrow labels, stacked document pills, compact form rhythm, and the `2fr / 3fr` desktop card relationship.

## Section, Shell, And Layout

- Section width: `100%` of `.page-shell`.
- Page shell: active shared shell. Current measured targets are `calc(100% - mobile/tablet gutters)`, `1680px` cap at normal desktop, `2240px` cap at wide desktop.
- Section styling: transparent shell; no section padding, border, background, or shadow.
- Section top spacing: inherited section rhythm from previous Home section.
- Grid: `display: grid; width: 100%; gap: 28px; align-items: stretch`.
- Mobile/tablet: `1` column through `1024px`; Portfolio Materials stacks above Contact.
- Desktop: `2` columns from `1025px`; `minmax(0, 2fr) minmax(0, 3fr)`.
- Card alignment: desktop card tops and bottoms align; tablet/mobile cards are stacked and full-width.
- Section walls: measured against layout viewport/client width; even at every audited breakpoint.

## Card Specs

- Card width: fills assigned grid track.
- Card min-width: `0`.
- Card height: `100%` for equal desktop stretch.
- Padding: `34px clamp(36px, 2.4vw, 58px)`.
- Mobile/tablet computed padding: `34px 36px`.
- Desktop wide computed padding: `34px 38.4px` at `1600`, `34px 46.08px` at `1920`, `34px 52.8px` at `2200`, `34px 57.6px` at `2400`, `34px 58px` at `2560`.
- Border radius: `clamp(24px, 2.4vw, 30px)`.
- Border: `1px solid rgba(31, 27, 22, 0.1)`.
- Background: `linear-gradient(180deg, rgba(255, 253, 248, 0.9), rgba(252, 243, 230, 0.74)), rgba(255, 250, 243, 0.8)`.
- Shadow: `0 18px 42px rgba(52, 36, 24, 0.1)`.
- Internal heading-to-content gap: `16px` through `1024px`; `var(--section-title-to-content-gap, 24px)` from `1025px`.

## Eyebrow Specs

Applies to `DOCUMENTS & REFERENCES` and `CONTACT`.

- Font family: `"Trebuchet MS", "Gill Sans", sans-serif`.
- Font weight: `700`.
- Text transform: `uppercase`.
- Color: `#8f2d1e`.
- White-space: `nowrap`.
- `<=767px`: `10.88px / 13.056px`; spacing below `4px` through `430px`, `12px` from `431-767px`.
- `768-1024px`: `clamp(11.2px, calc(8.32px + 0.375vw), 12.16px)` with `1.15` line-height; spacing below `12px`.
- `1025px+`: `12px / 15px`; letter spacing `0.15em`; spacing below `10px`.
- Letter spacing below desktop uses the approved responsive clamp, resolving from about `0.08em` on small mobile to the desktop lock.

## Title Specs

Applies to `Portfolio Materials` and `Coach Matthew Fogarty`.

- Color: `#1f1b16`.
- Font weight: `700`.
- Letter spacing: `normal` through tablet; `0` on desktop.
- `<=430px`: `"Trebuchet MS", "Gill Sans", sans-serif`; `22.5px / normal`.
- `431-1024px`: `"Trebuchet MS", "Gill Sans", sans-serif`; `24px / normal`.
- `1025px+`: `Georgia, "Palatino Linotype", serif`; `clamp(36px, 2.1vw, 42px) / 1.05`.
- Measured desktop title sizes: `36px` from `1025-1600`, `40.32px` at `1920`, `42px` from `2200+`.
- Spacing below title: controlled by the card internal heading-to-content gap.

## Portfolio Materials Buttons

Applies to Resume, Degrees, Licenses, Certifications, Memberships, References, and Full Portfolio.

- Container mobile/tablet: `repeat(2, minmax(0, 1fr))`; rows `repeat(3, minmax(44px, auto)) auto`; `10px` gap; Full Portfolio spans both columns.
- Container desktop: `1` column; rows `repeat(7, minmax(44px, 1fr))`; `12px` gap.
- Button width: `100%`.
- Button min-height: `44px`.
- Measured desktop button height: `44.83px` at `1025`, `50.22px` from `1200+`.
- Padding: `0 12px` through `1024px`; `0 16px` from `1025px`.
- Border radius: `999px`.
- Secondary border: `1px solid rgba(31, 27, 22, 0.12)`.
- Secondary fill: `rgba(255, 255, 255, 0.58)`.
- Primary fill: `linear-gradient(135deg, #8f2d1e, #c4542c)`.
- Text font: `"Trebuchet MS", "Gill Sans", sans-serif`.
- Text size: inherited through tablet; `15px` from `1025px`.
- Text weight: `700`.
- Text color: secondary `#1f1b16`; primary `#fffaf1`.
- Hover/focus: shared `.button` transform `translateY(-2px)`.

## Contact Form Specs

Fields: First Name, Last Name, Email, Phone Number, School / Organization, Reason for Contact, Message, Send Message.

- Form layout through `820px`: `1` column, `7px` gap.
- Form layout from `821px`: `repeat(2, minmax(0, 1fr))`, `12px` row gap, `16px` column gap. This is a scoped contact-form micro-breakpoint, not a global responsive or footer breakpoint.
- Name row from `821px`: spans both form columns and uses two equal columns with `16px` gap.
- Textarea label and submit button span both columns from `821px`.
- Label font: `"Trebuchet MS", "Gill Sans", sans-serif`; `11.84px`; `700`; `normal` line-height; `0.13em`; uppercase; `#8f2d1e`.
- Label-to-control gap: `5px`.
- Input/select height: measured `41.2px`; min-height `39px`.
- Input/select/textarea padding: `10px 14px`.
- Input border radius: `17px`.
- Input border: `1px solid rgba(158, 111, 53, 0.26)`.
- Input background: `rgba(255, 255, 252, 0.9)`.
- Input text: `"Trebuchet MS", "Gill Sans", sans-serif`; `16px`; `700`; `19.2px`; `#1f1b16`.
- Placeholder: no placeholder text is used.
- Select: native appearance removed; `padding-right: 52px`; no background image.
- Select arrow: pseudo-element, `8px x 8px`, right `18px`, bottom `15px`, red `2px` right/bottom borders, rotated `45deg`.
- Textarea: `132px` fixed/min-height, vertical resize.
- Submit button: width `100%`; min-height `44px`; border `1px solid rgba(170, 62, 35, 0.32)`; radius `999px`; gradient `#8f2d1e -> #c4542c`; text `#fffaf1`; shadow `0 12px 24px rgba(170, 62, 35, 0.16)`.
- Submit text: `Arial, sans-serif`; `13.44px / 14.784px` through `430px`; `14px / normal` above.
- Focus state: border `rgba(170, 62, 35, 0.74)`, background `#fffefa`, ring `0 0 0 4px rgba(194, 138, 53, 0.14)`.

## Color Specs

- Page background root: `#f4efe7`; body gradient stops `#f6f0e5`, `#f3ede4`, `#efe6da`.
- Card background gradient: `rgba(255, 253, 248, 0.9)` to `rgba(252, 243, 230, 0.74)` over `rgba(255, 250, 243, 0.8)`.
- Title text: `#1f1b16`.
- Eyebrow/label/select arrow: `#8f2d1e`.
- Muted/shared text token: `#6a5f53`.
- Card border: `rgba(31, 27, 22, 0.1)`.
- Pill border: `rgba(31, 27, 22, 0.12)`.
- Pill fill: `rgba(255, 255, 255, 0.58)`.
- Input border: `rgba(158, 111, 53, 0.26)`.
- Input background: `rgba(255, 255, 252, 0.9)`.
- Primary button gradient: `#8f2d1e` to `#c4542c`.
- Primary button text: `#fffaf1`.
- Card shadow: `rgba(52, 36, 24, 0.1)`.
- Submit shadow: `rgba(170, 62, 35, 0.16)`.
- Focus ring: `rgba(194, 138, 53, 0.14)`.

## Typography

- Mobile/tablet card titles: `"Trebuchet MS", "Gill Sans", sans-serif`.
- Desktop card titles: `Georgia, "Palatino Linotype", serif`.
- Eyebrows: `"Trebuchet MS", "Gill Sans", sans-serif`.
- Form labels: `"Trebuchet MS", "Gill Sans", sans-serif`.
- Document pill links: `"Trebuchet MS", "Gill Sans", sans-serif`.
- Inputs/select/textarea: `"Trebuchet MS", "Gill Sans", sans-serif`.
- Send Message button: `Arial, sans-serif`.

## Breakpoint Audit

Measured after lock in Chrome using `outputs/home-contact-closeout-spec-lock-2026-05-14/home-contact-measurements-after.json`.

| Viewport | Client | Shell | Walls | Columns | Gap | Card widths | Padding | Title | Form columns | Pill | Input/Textarea | QA |
|---:|---:|---:|---:|---:|---:|---|---|---|---|---:|---|---|
| `375` | `360` | `351` | `4.5/4.5` | `1` | `28px` | `351/351` | `34px 36px` | `22.5px/normal` | `277px` | `44px` | `41.2/132` | Pass |
| `390` | `375` | `366` | `4.5/4.5` | `1` | `28px` | `366/366` | `34px 36px` | `22.5px/normal` | `292px` | `44px` | `41.2/132` | Pass |
| `430` | `415` | `406` | `4.5/4.5` | `1` | `28px` | `406/406` | `34px 36px` | `22.5px/normal` | `332px` | `44px` | `41.2/132` | Pass |
| `720` | `705` | `681` | `12/12` | `1` | `28px` | `681/681` | `34px 36px` | `24px/normal` | `607px` | `44px` | `41.2/132` | Pass |
| `768` | `753` | `706.91` | `23.05/23.05` | `1` | `28px` | `706.91/706.91` | `34px 36px` | `24px/normal` | `632.906px` | `44px` | `41.2/132` | Pass |
| `820` | `805` | `755.8` | `24.59/24.61` | `1` | `28px` | `755.8/755.8` | `34px 36px` | `24px/normal` | `681.797px` | `44px` | `41.2/132` | Pass |
| `1024` | `1009` | `953` | `28/28` | `1` | `28px` | `953/953` | `34px 36px` | `24px/normal` | `431.5px + 431.5px` | `44px` | `41.2/132` | Pass |
| `1025` | `1010` | `937` | `36.5/36.5` | `2` | `28px` | `363.59/545.41` | `34px 36px` | `36px/37.8px` | `227.703px + 227.703px` | `44.83px` | `41.2/132` | Pass |
| `1200` | `1185` | `1112` | `36.5/36.5` | `2` | `28px` | `433.59/650.41` | `34px 36px` | `36px/37.8px` | `280.203px + 280.203px` | `50.22px` | `41.2/132` | Pass |
| `1280` | `1265` | `1192` | `36.5/36.5` | `2` | `28px` | `465.59/698.41` | `34px 36px` | `36px/37.8px` | `304.203px + 304.203px` | `50.22px` | `41.2/132` | Pass |
| `1350` | `1335` | `1262` | `36.5/36.5` | `2` | `28px` | `493.59/740.41` | `34px 36px` | `36px/37.8px` | `325.203px + 325.203px` | `50.22px` | `41.2/132` | Pass |
| `1440` | `1425` | `1352` | `36.5/36.5` | `2` | `28px` | `529.59/794.39` | `34px 36px` | `36px/37.8px` | `352.188px + 352.203px` | `50.22px` | `41.2/132` | Pass |
| `1500` | `1485` | `1412` | `36.5/36.5` | `2` | `28px` | `553.59/830.39` | `34px 36px` | `36px/37.8px` | `370.188px + 370.203px` | `50.22px` | `41.2/132` | Pass |
| `1600` | `1585` | `1512` | `36.5/36.5` | `2` | `28px` | `593.59/890.39` | `34px 38.4px` | `36px/37.8px` | `397.797px + 397.812px` | `50.22px` | `41.2/132` | Pass |
| `1920` | `1905` | `1680` | `112.5/112.5` | `2` | `28px` | `660.8/991.19` | `34px 46.08px` | `40.32px/42.336px` | `440.516px + 440.516px` | `50.22px` | `41.2/132` | Pass |
| `2200` | `2185` | `1880` | `152.5/152.5` | `2` | `28px` | `740.8/1111.2` | `34px 52.8px` | `42px/44.1px` | `493.797px + 493.812px` | `50.22px` | `41.2/132` | Pass |
| `2400` | `2385` | `2080` | `152.5/152.5` | `2` | `28px` | `820.8/1231.2` | `34px 57.6px` | `42px/44.1px` | `549px + 549.016px` | `50.22px` | `41.2/132` | Pass |
| `2560` | `2545` | `2240` | `152.5/152.5` | `2` | `28px` | `884.8/1327.2` | `34px 58px` | `42px/44.1px` | `596.594px + 596.609px` | `50.22px` | `41.2/132` | Pass |

QA pass means: no visible overflow inside this section, correct card layout, balanced section walls, aligned pills/buttons, clean form fields, and correct text scaling.

Known global note: the full page still reports horizontal scrollWidth from the Playing Career carousel track outside this section. The Home closeout section itself has no visible or measured section overflow at the audited breakpoints.
