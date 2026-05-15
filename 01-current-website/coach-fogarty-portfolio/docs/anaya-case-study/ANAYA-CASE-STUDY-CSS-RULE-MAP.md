# Anaya Case Study CSS Rule Map

Active rule map date: 2026-05-14

This map identifies the current CSS/JS rule families that affect `anaya-case-study.html`. Because `styles.css` contains layered historical locks, the rendered page is determined mostly by late source-order rules and scoped `.page-hero-system` selectors.

| Area | Source lines / file | What it controls | Cleanup status |
| --- | --- | --- | --- |
| Page shell/chrome | styles.css:50, 8248-8358, 16356-16385 | Shared page width, full-bleed header/footer chrome, gutters, desktop/mobile shell sizing. | Shared; left untouched. |
| Header/nav | styles.css:72-164, 8101-8237, 9799-9934, footer.js | Desktop flex header, mobile burger/fixed nav, contact shortcut, scroll-hide behavior. | Shared; left untouched. |
| Base hero/subpage | styles.css:174-320, 2116-2290 | Base hero, eyebrow, H1, body, buttons, portrait-card fallback. | Shared fallback; overridden by page-hero-system on desktop. |
| Reusable page hero lock | styles.css:19907-20768 | Desktop Anaya hero grid, image/card, overlay, pills, 1025/1350/1500/1720/2200 breakpoint tokens. | Active source for Anaya desktop hero. |
| Tablet/mobile page layout | styles.css:9773-10240, 20701-20745 | Tablet/mobile header, stacked hero, card padding, one-column sections, buttons. | Active for <=1024. |
| Anaya hero local rules | styles.css:4373-4414, 12531+, 14611+ | Anaya-specific hero fallback, object-position and old hero-link/kicker fallbacks. | Some legacy selectors are inactive but entangled with shared fallback layers; not removed. |
| Anaya chips | styles.css:619-640, 4414-4456, 19358-19731 | Hero chip styling and late desktop pill locks. | Active. |
| Story/case cards | styles.css:4456-4508, 19074-19189 | Two-column case-study grids, card style, paragraph/list rhythm. | Active. |
| Production cards | styles.css:4536-4584 | Five-card production grid, card hover, stat title/body type. | Active. |
| Anaya galleries | styles.css:4586-4711, app.js renderAnayaGalleries | Preview grid, cards, frames, captions, featured Augusta layout, disabled action. | Active. |
| Shared media overlay | styles.css:1567-2114, 19195-19354, app.js open/render overlay | Lightbox panel, viewer, caption, arrows, thumbnail strip, responsive overlay locks and keyboard/click behavior. | Active. |
| Resource CTA | styles.css:4753-4760, 311-348 | Next-level button strip and shared button styling. | Active. |
| Footer | styles.css:5059-5210, 7502-7798, 8586-8609, footer.js | Footer sitemap grid, accordion toggles, social icons, mobile footer. | Shared; left untouched. |
| Typography locks | styles.css:9607-10828, 18752-19189, footer.js compact headings | Responsive type tokens, container/fit heading locks, desktop body rhythm. | Active and shared. |


## Stale/Unused Rule Audit

No CSS was removed in this pass. The audit found Anaya-adjacent legacy selectors such as `.anaya-hero .hero-kicker` and `.anaya-hero .hero-link-row` that are not present in current `anaya-case-study.html`, but they are repeated inside broader shared subpage fallback locks and the current worktree already has unrelated active edits in `styles.css`. To avoid disturbing Home hero locks, shared subpage heroes, About, Contact, or in-progress CSS edits, these rules were documented rather than deleted.

## JS Behavior Map

- `app.js` lines around the `anayaSections` definition: gallery data, image/video/poster/thumb/full variants.
- `renderAnayaGalleries()`: renders preview cards, empty states, View More actions, and card click handlers.
- `openMediaAlbum()`, `renderMediaOverlay()`, `closeMediaOverlay()`: shared lightbox state, selected item, caption, thumbnail strip, full image/video viewer.
- Overlay events: close button, previous/next buttons, thumbnail prev/next, viewer click-to-next, background click close, Escape, ArrowLeft, ArrowRight.
- `footer.js`: mobile nav toggle, outside click/Escape close, scroll hide/reveal, footer accordion toggles at <=820px.
