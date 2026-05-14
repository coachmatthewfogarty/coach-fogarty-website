# ChatGPT Review Prompt: Home Hero Desktop Master Lock

Use this prompt to ask ChatGPT to review the final Home Hero desktop lock.

```text
Please audit the final HOME HERO DESKTOP MASTER LOCK.

Use the latest source files and lock docs as source of truth:
- index.html
- styles.css
- docs/responsive/HOME-HERO-DESKTOP-MASTER-LOCK.md
- docs/responsive/HOME-HERO-LEFT-COLUMN-LOCK-README.md
- docs/responsive/HOME-HERO-RIGHT-COLUMN-LOCK-README.md
- docs/responsive/HOME-HERO-RESPONSIVE-SPEC.md

Focus only on the Home Hero desktop system.

Do not redesign anything.
Do not change text content.
Do not touch tablet/mobile.
Do not apply this to subpage heroes yet.

Final lock decisions to verify:

1. Left column width system
- .hero-left-system and .hero-pill-system must share the same width at every desktop size.
- At 2200px+, the stat-pill grid must no longer be capped around 1120px.
- At 2200, 2400, and 2560, .hero-pill-system should fill the same approved width as .hero-left-system.
- Body text, title, eyebrow, and stat-pill grid should stay horizontally aligned.

2. Wide-desktop stat pills
- The stat-pill grid remains 3 columns x 2 rows.
- Pill height is 82px at 2200px+.
- Main pill text is 26px at 2200px+.
- Sub-label text is 13.5px at 2200px+.
- Pill border radius, border styling, gap, and horizontal alignment should not change.
- Pills should not move left or right.
- Pill bottom should align with the right portrait/card bottom.

3. Wide-desktop body-to-pill spacing
- Confirm the final selected lift uses --home-hero-pill-lift: 0px.
- Confirm .hero-pill-system uses transform: translateY(calc(var(--home-hero-pill-lift) * -1)) at 2200px+.
- Confirm body rhythm uses margin-top: clamp(28px, calc(-166px + 8.8vw), 48px) at 2200px+.
- Confirm the body-to-pill spacing stays balanced at 2200, 2400, and 2560.
- Confirm 1280, 1440, 1600, and 1920 are unchanged.

4. Right portrait system
- Confirm the right portrait scales down only at 2200px+.
- Confirm 2200px+ portrait height uses --home-hero-image-height: clamp(500px, calc(644px - 6vw), 512px).
- Confirm image crop is still clean.
- Confirm object-fit: cover.
- Confirm object-position: 50% 0%.
- Confirm the overlay stays attached and clean.

5. Ultra-wide visual gap
- Confirm the grid column gap remains 0px at 2200px+ so the left copy/stat-pill lane does not shrink.
- Confirm the right column uses the scoped visual offset:
  --home-hero-right-visual-gap: clamp(32px, 2vw, 56px)
- Confirm this does not alter pill width or body width.

6. Rule conflict audit
Check for any rules that still fight or could override the master lock:
- .hero
- main#top > .hero
- .hero-copy
- .hero-left-system
- .hero-text
- .hero-stat-band
- .hero-pill-system
- .hero-pill
- .hero-pill-main
- .hero-pill-sub
- .hero-visual
- .hero-right-system
- .portrait-card
- .hero-portrait-card
- .portrait-card picture
- .hero-portrait-picture
- .portrait-card img
- .hero-portrait-image
- .hero-mobile-highlight
- .hero-portrait-overlay
- .proof-card
- .hero-kicker
- .hero-actions
- .stat-band
- old 2200px+ rules
- old max-width rules
- old image-height rules
- old gap rules
- tablet/mobile media queries that might accidentally affect desktop

Expected final values to verify:

At 2200px:
- .hero-left-system width: 1102px
- .hero-pill-system width: 1102px
- first pill width: 358px
- pill height: 82px
- body-to-pill gap: about 20px
- right portrait: 660px x 512px

At 2400px:
- .hero-left-system width: 1290px
- .hero-pill-system width: 1290px
- first pill width: about 420.66px
- pill height: 82px
- body-to-pill gap: about 35.2px
- right portrait: 672px x 500px

At 2560px:
- .hero-left-system width: about 1405.2px
- .hero-pill-system width: about 1405.2px
- first pill width: about 459.06px
- pill height: 82px
- body-to-pill gap: about 28.95px
- right portrait: about 716.8px x 500px

Please return:
1. Pass/fail at 2200, 2400, and 2560.
2. Confirmation that copy width and pill grid width match.
3. Confirmation that the 1120px wide-desktop pill cap is gone.
4. Confirmation that pills did not move left/right or reflow.
5. Confirmation that right portrait crop stayed clean after the 2200px+ height ramp.
6. Any remaining CSS conflicts.
7. Any docs that still contradict the final lock.
8. Final recommendation: is the HOME HERO DESKTOP MASTER LOCK safe to use as the source system for future desktop subpage heroes?
```
