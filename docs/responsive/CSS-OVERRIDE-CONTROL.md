# CSS OVERRIDE CONTROL / IMPORTANT RULES

This is the active control document for remaining `!important` declarations and locked override systems in `styles.css`.

As of the May 15, 2026 override-control pass, the stylesheet still contains many `!important` declarations. They should not be removed blindly. Most are currently acting as measured late-source-order locks for approved systems, not as random quick fixes.

The long-term goal is to reduce the count by improving source order, selector clarity, and shared tokens. Until that cleanup happens, this document defines which override systems are intentional and how future `!important` usage is controlled.

## Why `!important` Still Exists

The current stylesheet has layered historical systems plus newer locked systems. In several places, approved late-source-order rules use `!important` to hold measured layouts against older base rules that still exist earlier in the file.

These locks are mainly protecting:

- measured desktop/tablet/mobile fit,
- approved card and media proportions,
- title and eyebrow fit,
- overlay behavior,
- page-specific locked systems,
- the shared `.page-hero-system`.

That does not make every `!important` permanent. It means each one must be treated as either:

- an intentional measured lock,
- a temporary bridge until older CSS is consolidated,
- or a cleanup candidate attached to stale or dead selectors.

## Concentration Map

Most `!important` rules are concentrated in these systems:

| System | Main selectors / area | Current status |
|---|---|---|
| Gallery / Media overlays | `.media-overlay`, `.media-overlay-nav`, `.media-overlay-thumb-nav`, `main#top #media`, `.gallery-grid`, `.gallery-card` | Allowed measured lock. Protects overlay controls, gallery card grids, caption fit, and mobile overlay behavior. |
| Compact heading fit | `.section-heading`, `.about-letter-heading`, `.featured-pillar-copy`, `.system-detail-copy`, `.credential-section-copy`, `.media-final-cta`, `.contact-info-copy`, related JS custom properties from `footer.js` | Allowed measured lock. Protects headings and card titles from overflow while older heading rules still exist. |
| Section heading/body locks | `.section-heading`, `.section-heading + *`, global type custom properties, body rhythm rules | Allowed measured lock for now. Future cleanup should move more of this into clean tokens and reduce selector layering. |
| Systems page locks | `.systems-page`, `main#top #systems`, `.system-card`, `.system-detail-section`, `.system-document-carousel` | Allowed measured lock. Protects the approved Systems page library, detail rows, carousel, images, and buttons. |
| Featured page locks | `.featured-page`, `main#top #featured-work`, `.featured-pillar-*`, `.featured-card`, `.innovation-panel` | Allowed measured lock. Protects the approved Featured Work page and shared hero/card rhythm. |
| Contact closeout/page locks | `.contact-section`, `.contact-form`, `.contact-info-copy`, `main.contact-page`, `main#top .contact-*` | Allowed measured lock. Includes the documented scoped `820px/821px` form-field micro-breakpoint. |
| About layout lock | `.about-cover-page`, `.about-story-page`, `.about-letter-section`, `.about-foundation-strip` | Allowed measured lock. About is a documented exception to the reusable hero system and starts full two-column layout at `1440px`. |
| Archer/page hero locks | `main.archer-page`, `.archer-*`, page hero image/card/pill rules | Allowed measured lock. Protects product case study layout and asset fit. |
| Canonical `.page-hero-system` | `.page-shell :is(main:not(.about-story-page):not(.about-cover-page):not(.contact-page)) > .page-hero-system.page-hero-system`, `.hero-left-system`, `.hero-right-system`, `.hero-portrait-card`, `.hero-portrait-overlay`, `.hero-pill-system` | Active source of truth for reusable page heroes except About and Contact. Allowed to keep measured override locks until older fallback hero CSS is further consolidated. |

## Future Use Policy

- Do not add new `!important` rules unless absolutely necessary.
- Prefer fixing source order, selector specificity, or shared tokens first.
- Any new `!important` must include a short nearby comment explaining why it exists.
- Never use `!important` as a quick fix for page-specific visual tuning.
- If a visual issue requires `!important`, document which older rule it is overriding.
- Do not create a new locked override system until existing shared systems have been checked.
- Do not use `!important` to hide overflow, clipping, or spacing problems that should be fixed in layout.

## Locked Systems Allowed To Keep Measured Overrides

These systems are allowed to keep measured override locks for now:

- `.page-hero-system`
- shared media overlay
- About locked layout
- Contact closeout
- Systems page
- Featured Work page
- Archer page
- Gallery / Media page

Changes inside these systems should still avoid adding new `!important` unless there is a specific older rule being defeated and the reason is documented.

## Cleanup Candidates

These items should be reviewed in a future CSS consolidation pass:

- Legacy Portfolio Matters / credentials-card CSS: `.portfolio-matters-grid`, `.portfolio-matters-card`, `.credentials-card`, `.credential-document-heading`, and `.credential-link-grid` are not present in active HTML or JS. One clearly dead `display: none !important` rule was removed during this pass. Remaining non-rendered legacy selectors should be removed in a dedicated dead-CSS pass rather than mixed into visual design work.
- `.media-overlay-nav::before`, `.media-overlay-nav::after`, `.media-overlay-thumb-nav::before`, and `.media-overlay-thumb-nav::after` use `content: none !important` to suppress inherited pseudo-element decoration. This is currently harmless and active, but it should be revisited after overlay button styles are consolidated.
- Compact heading fit rules use `!important` together with JS-written CSS custom properties. This is intentional for now, but it should eventually become a cleaner CSS-only token system if source order is simplified.
- Section heading/body rhythm locks use broad selectors and `!important`. They are active and protecting approved spacing, but they are good candidates for consolidation into shared base rules once older heading styles are retired.
- Empty or historical responsive blocks near locked page systems should be removed during a future dead-CSS pass if they no longer contain rules.

Do not remove these candidates during page-by-page visual fixes unless the selector is proven dead or the visual impact is checked.

## Required Review Before Adding Overrides

Before adding a new `!important`:

1. Identify the older rule that is winning.
2. Try moving the intended rule later in source order.
3. Try using the existing shared token or creating a shared token if the behavior is reusable.
4. Try a scoped selector that follows the current page/system hook.
5. If `!important` is still required, add a short comment and update this document if the rule creates a new lock family.

## Current Confirmation

- Existing `!important` rules are treated as governed locks or cleanup candidates, not as a preferred style.
- New layout work should reduce reliance on `!important`, not increase it.
- Page-specific visual tuning should happen through the approved page/system hooks, fluid values, and shared responsive ranges.
