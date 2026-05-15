# Systems Page Final Lock

FINAL LOCKED as of May 14, 2026. This is the source of truth for `systems.html` responsive behavior.

The current screenshot-approved Systems page setup is final. Do not continue redesigning this page. Future Systems-specific changes should be limited to true bug fixes, content updates, broken links/assets, or documented regressions.

## Locked Current Setup

Keep:

- Current shared internal hero layout.
- Current Staff Systems title, eyebrow and body spacing.
- Current `3 x 2` hero pill layout on desktop.
- Current right image/card size, crop, overlay and Page Highlight box.
- Current desktop shell behavior at `1280`, `1440`, `1600`, `1920` and `2560`.
- Current `3`-column desktop Systems library, `2`-column tablet and `1`-column mobile behavior.
- Current card, button, image, footer and documentation rules.

The only future watch-list breakpoint is `1025px`, because it is the tightest desktop breakpoint. Do not redesign `1025px` unless there is actual horizontal overflow, ugly wrapping, button collision or image collision.

## Structure

- Shared header.
- Reusable internal `.page-hero-system` hero.
- `#systems-library` six-card core systems library.
- Detail sections for Player Development, Scouting, Recruiting, DPAT, Program Support, Coaching Philosophy and The Archer.
- Shared footer.

## Hero

- Desktop starts at `1025px`.
- The hero inherits the approved internal `.page-hero-system` used by Featured, Gallery, Anaya and Archer.
- Left column uses `.hero-left-system` for eyebrow, title and body.
- Right column uses `.hero-right-system` with `.hero-portrait-card`, the approved image frame, and overlay.
- Six hero pills use `.hero-pill-system` and stay in a `3 x 2` desktop grid.
- Tablet and mobile stack copy, pills and image cleanly through `1024px`.

## Section Headers

- Major sections use the shared `.section-heading` or `.system-detail-copy` eyebrow/title/body system.
- Eyebrows use uppercase red, `0.15em` tracking and the shared desktop `12px / 15px` rhythm.
- Titles use the shared Georgia/Palatino section title scale and `1.05` line-height.
- Body copy uses `var(--muted)`, readable line-height and capped text width inside the approved page shell.

## Core Systems Library

The six locked library cards are:

1. Player Development Systems.
2. Scouting & Recruiting.
3. DPAT.
4. Program Support.
5. Coaching Philosophy.
6. The Archer.

Rules:

- Desktop: `3` columns from `1025px`.
- Tablet: `2` columns from `721px` through `1024px`.
- Mobile: `1` column through `720px`.
- Card media uses `4 / 3`, `object-fit: cover`, approved crops and no black bars.
- Card titles, body copy and CTA rows use the existing `.system-card`, `.library-card-media`, `.library-actions` and `.button` language.
- Button rows are two-up on desktop/tablet where space allows and single-column on mobile.

## Detail Sections

- Each detail block uses `.system-detail-section`.
- Document groups use `.system-document-carousel` where there are multiple PDFs, with drag scroll and arrow controls from `systems.js`.
- The Archer uses a static three-card resource grid because it links to site pages and media rather than PDF packets.
- DPAT must include the full name: Defensive Performance Accountability Tracker.

## Images

- System card images use `media-card` style crops where available.
- The Archer logo uses PNG/AVIF transparent/logo-safe handling from the existing approved asset.
- Document previews stay in `assets/documents/system-previews/`.
- No padded exports, black bars, stretched logos or unapproved crop candidates.

## Responsive QA Checklist

Test:

```text
1025
1280
1440
1600
1920
2560
1024
820
768
430
390
375
```

Confirm:

- No horizontal overflow.
- Header and footer remain full width while content stays in the approved shell.
- Hero title, body, image and overlay align with the approved internal page hero.
- Six hero pills do not overflow.
- Core systems library is `3 / 2 / 1` columns by desktop/tablet/mobile.
- Document carousel cards keep stable `4 / 3` media frames.
- Buttons remain readable and inside their tracks.
- Images fill frames without black bars or stretching.
- Footer Systems links include The Archer.

No further Systems-specific cleanup is needed unless a future bug appears.
