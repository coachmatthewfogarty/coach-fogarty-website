# Home Featured Panels Lock

Lock date: 2026-05-19

## 1. Current HTML Structure

The homepage Featured wrapper is `#featured-work`. It contains two reusable feature panels:

```html
<section class="section innovation-section featured-card featured-card--anaya">
  <div class="innovation-panel">
    <a class="innovation-thumbnail" href="anaya-case-study.html">...</a>
    <div class="innovation-card-copy">...</div>
  </div>
</section>

<section class="section innovation-section featured-card featured-card--archer">
  <div class="innovation-panel">
    <a class="innovation-thumbnail" href="archer-visuals.html">...</a>
    <div class="innovation-card-copy">...</div>
  </div>
</section>
```

Both panels share `.featured-card`. Card-specific behavior uses explicit modifiers:

- `.featured-card--anaya`
- `.featured-card--archer`

Button links and labels remain unchanged.

## 2. Featured Alignment Source Of Truth

Featured Anaya and Archer panels should use a shared Apple-style centered section rhythm:

`eyebrow -> title -> support line -> centered CTA row -> centered media/logo`

This is an alignment and rhythm rule only. It does not copy Apple color, typography, imagery, or product styling.

Rules:

- Center the text block and CTA row as one visual group.
- Keep the CTA/proof row compact, centered, and directly under the support line.
- Center the media/logo under the CTA row.
- Let Anaya's image and The Archer logo act as the visual anchor for each panel.
- Preserve the Coach Fogarty cream/red/gold direction and approved orange/red pill/button style.
- Do not stretch the Anaya image or The Archer logo.
- Do not add fake padding, black bars, blurred fills, or transparent padding around media.
- Keep the homepage media wall at `calc(100vw - 16px)` with 8px side gutters.
- Keep the 13px white spacer rhythm between Featured panels and from Featured to the following media section.

## 3. Active CSS Selectors

The active homepage Featured lock lives in `styles.css` under `/* Homepage Featured: Apple-style vertical feature panels. */` and the later homepage wall/spacing locks:

```css
main#top #featured-work
main#top #featured-work .featured-card
main#top #featured-work .innovation-panel
main#top #featured-work .innovation-card-copy
main#top #featured-work .featured-card .section-heading
main#top #featured-work .featured-card .section-heading > .eyebrow
main#top #featured-work .featured-card .section-heading h2
main#top #featured-work .innovation-card-copy > p
main#top #featured-work .featured-pill-row
main#top #featured-work .innovation-proof-chips
main#top #featured-work .innovation-panel .button
main#top #featured-work .innovation-thumbnail
main#top #featured-work .innovation-thumbnail img
main#top #featured-work .featured-card--anaya .innovation-thumbnail
main#top #featured-work .featured-card--archer .innovation-thumbnail
main#top #featured-work .featured-card--archer .innovation-thumbnail img
body .page-shell main#top > #featured-work
body .page-shell main#top > #featured-work > .featured-card + .featured-card
body .page-shell main#top > #featured-work + #media.section
```

Shared sitewide typography locks may still set the headline font system. Featured-specific rhythm, wall width, panel layout, CTA row, and media anchoring are controlled by the scoped Featured selectors above.

## 4. Layout Rules

Section and wall:

- `#featured-work` is a one-column grid.
- The Featured wrapper uses the canonical homepage media wall: `min(var(--home-section-wall-width, 2560px), calc(100vw - 16px))`.
- Featured panels have no side-bleed hack and no separate ultra-wide cap.
- The standalone `Featured` section heading bar is hidden; each panel carries its own centered heading.
- The Anaya-to-Archer gap is 13px.
- The Featured-to-Program Media join is 13px.

Panel rhythm:

- `.innovation-panel` is a centered vertical flex stack.
- `.innovation-card-copy` is a centered vertical text group.
- `.featured-pill-row` is the centered CTA/proof row.
- `.innovation-thumbnail` is centered below the CTA/proof row.
- Anaya and Archer share the same text-to-action and action-to-media rhythm variables.

Media:

- Anaya uses a real image container with `object-fit: cover`; desktop uses the approved wide visual anchor, mobile returns to the safer 4:3 fit.
- The Archer uses a transparent logo container with `object-fit: contain`; no CSS padding is used to create fake whitespace.
- Media sizing is controlled through max-widths, aspect ratio, and logo frame height.

## 5. Retired Rule

The old homepage Featured row-card lock is retired in `styles.css` around the former `/* Homepage Featured cards lock: two reusable full-width cards with explicit modifiers. */` block.

That old rule made Featured behave as a side-by-side media/copy card system with copy-column CTA alignment. It is no longer active because it conflicts with the current centered Apple-style rhythm.

## 6. Lock Risks

- The Featured cards still inherit sitewide heading typography locks. Keep Featured alignment scoped so global typography edits do not move the CTA/media rhythm.
- Do not reintroduce a separate Featured width cap, side-bleed overrun, or media offset.
- If The Archer logo asset changes, revisit logo frame width/height instead of adding padding.
- If the Anaya asset changes, preserve face/body crop by adjusting `object-position` or max-widths, not by stretching the image.
