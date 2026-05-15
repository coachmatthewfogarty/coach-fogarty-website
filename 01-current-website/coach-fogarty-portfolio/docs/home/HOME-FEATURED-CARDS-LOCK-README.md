# Home Featured Cards Lock

Lock date: 2026-05-14

## 1. Current HTML Structure

The homepage Featured wrapper is `#featured-work`. It contains two reusable card shells:

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

Both cards share `.featured-card`. Card-specific behavior uses explicit modifiers:

- `.featured-card--anaya`
- `.featured-card--archer`

The old order-dependent Anaya selector has been removed. The Archer card no longer uses the unclear `id="player-development"` anchor. Button links remain unchanged.

## 2. Current CSS Selectors

The active homepage Featured lock lives in `styles.css` under:

```css
main#top #featured-work
main#top #featured-work .featured-card
main#top #featured-work .featured-card::before
main#top #featured-work .innovation-panel
main#top #featured-work .innovation-thumbnail
main#top #featured-work .featured-card--anaya .innovation-thumbnail
main#top #featured-work .innovation-thumbnail img
main#top #featured-work .featured-card--anaya .innovation-thumbnail img
main#top #featured-work .innovation-card-copy
main#top #featured-work .innovation-proof-chips
main#top #featured-work .innovation-proof-chips span
main#top #featured-work .featured-card .section-heading
main#top #featured-work .featured-card .eyebrow
main#top #featured-work .featured-card .section-heading h2
main#top #featured-work .innovation-card-copy > p
main#top #featured-work .innovation-panel .button
```

Shared sitewide typography locks still affect homepage headings and body copy at desktop. The Featured lock scopes card structure, media, chips, and CTA behavior.

## 3. Breakpoint Measurements

| Viewport | Layout | Card width | Card height | Media size | CTA width | Notes |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| 375px | stacked | about 351px | about 527px | about 311.5 x 233.6 | full width | Mobile image above copy |
| 720px | stacked | about 681px | about 807.7px | about 621.4 x 466 | full width | Last stacked range |
| 760px | side-by-side | about 699px | about 288px | about 300 x 225 | about 360px | Tablet side-by-side begins |
| 1024px | side-by-side | about 953px | about 310px | about 301 x 225.8 | about 360px | Tablet side-by-side preserved |
| 1025px | desktop | about 937px | about 396.8px | about 360 x 270 | about 360px | Desktop lock begins |
| 1180px | desktop bridge | about 1092px | about 371.7px | about 333.2 x 249.9 | about 360px | Smoothed bridge before 1181 |
| 1181px | desktop | about 1093px | visually stable | about 330 x 247.5 | about 360px | No old 360-to-330 media cliff |
| 1280px | desktop | about 1192px | about 359.3px | about 330 x 247.5 | 380px | Desktop baseline |
| 1440px | desktop | about 1352px | about 362.2px | about 344 x 258 | 380px | Media begins expanding |
| 1600px | desktop | about 1512px | about 364.3px | about 387 x 290.2 | 380px | Wide desktop |
| 1920px | desktop | about 1680px | about 386.5px | about 430 x 322.5 | 380px | Media reaches max |
| 2200px | desktop | about 1880px | about 386.5px | 430 x 322.5 | 380px | Fixed max media |
| 2560px | desktop | about 2240px | about 386.5px | 430 x 322.5 | 380px | Extra right-side room intentional |

Spacing:

- Systems section to Featured wrapper: 28px at desktop.
- Featured card gap: fluid, maxing at 30px on larger desktop.
- Featured bottom to next section: 28px at desktop.
- Mobile/tablet uses the existing responsive rhythm.

## 4. Final Reusable Design Rules

Section and shell:

- `#featured-work` is a one-column grid.
- `.featured-card` is a full-width row card.
- Background: `#fbf1e2`.
- Border: `1px solid rgba(152, 105, 31, 0.62)`.
- Border radius: `30px` desktop, fluidly smaller on mobile/tablet.
- Shadow: inset gold top line plus `0 10px 24px rgba(52, 36, 24, 0.08)`.
- Pseudo-border remains active for the current layered gold edge.

Layout:

- Below 760px: one-column stack, media above copy.
- 760px-1024px: side-by-side tablet grid.
- 1025px+: desktop grid.
- Desktop columns are media plus flexible copy.
- Media aspect ratio: 4 / 3.
- Copy max width: `820px`.
- Body max width: `680px`.
- Extra right-side space at wide desktop is intentional.

Media:

- Anaya uses the shared 4:3 media container with `object-fit: cover`.
- Anaya crop is locked with `.featured-card--anaya`.
- Archer uses the same 4:3 white media container.
- Archer logo inset is baked into the asset; no CSS padding is added.

Typography:

- Eyebrow: Trebuchet MS / Gill Sans fallback stack, 12px desktop, 15px line-height, 700, `0.15em`, red.
- Title: Georgia / Palatino fallback stack, 36px normal desktop, about 40.32px near 1920px, 42px at 2200px+, line-height about 1.05.
- Body: Trebuchet MS / Gill Sans fallback stack, 17.5px desktop, 29.75px line-height, 500, `rgb(106, 95, 83)`.
- Eyebrow to title gap: 10px.
- Title to body gap: 24px.
- Body to pills gap: 52px.

Pills:

- Display: flex row.
- Desktop wrap: no wrap.
- Gap: 10px.
- Height: 30px.
- Padding: `6px 13px`.
- Radius: `999px`.
- Border: `1px solid rgba(152, 105, 31, 0.24)`.
- Background: `rgba(255, 252, 247, 0.72)`.
- Font: Trebuchet MS / Gill Sans fallback stack, 800, about 13.12px-14.08px depending breakpoint.
- Color: `rgb(36, 79, 115)`.
- Width: content-based.

CTA:

- Anaya text: `View Case Study`.
- Archer text: `View The Archer`.
- Desktop width: `360px` through the 1025-1199 bridge, `380px` from 1200px up.
- Height: `44px` desktop.
- Padding: `0 24px`.
- Radius: `999px`.
- Background: `linear-gradient(135deg, #8f2d1e, #c4542c)`.
- Hover/focus movement remains `translateY(-2px)`.
- CTA aligns with the copy column.

## 5. Cleanup Completed

- Added `.featured-card`, `.featured-card--anaya`, and `.featured-card--archer`.
- Removed the fragile Anaya `:first-child` dependency.
- Removed Archer's unclear `id="player-development"`.
- Removed stale `#player-development` scroll-margin references.
- Removed duplicate Featured card rule blocks that were overridden later.
- Removed homepage-unused `.innovation-panel h3` styling and selector references.
- Consolidated active card shell, media, copy, pills, and CTA rules into one scoped Featured block.
- Promoted repeated card values into Featured CSS variables.

## 6. Known Intentional Design Choices

- `.innovation-section`, `.innovation-panel`, and `.innovation-card-copy` remain in the markup for compatibility with existing shared page structure.
- `.featured-card` is now the lock class for the homepage reusable system.
- The pseudo-border is intentionally retained because it contributes to the current gold edge.
- Wide desktop keeps extra empty space to the right of the copy instead of rebalancing the card.
- Desktop-only rules are scoped at `1025px+` and should not affect the mobile/tablet stack.

## 7. Lock Risks

- The Featured cards still inherit sitewide desktop typography locks. This is intentional today, but future global heading/body changes can affect these cards.
- The 1181px media cliff has been smoothed; avoid reintroducing a separate 1025-1180-only media width without a bridge.
- If the Archer asset changes to remove its baked-in white inset, revisit whether the media container needs padding.
