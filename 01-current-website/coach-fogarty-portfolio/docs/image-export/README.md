# Image Export System

This is the active source of truth for public website image exports, crop naming, and asset selection. It should not conflict with the locked image system in `styles.css`.

## Locked Rules

- Do not modify approved image sizes, crops, object-position values, or right-column hero image framing unless specifically requested.
- Keep final asset names traceable to the crop decision.
- Keep `q98` and crop labels in final website filenames where that pattern is already used.
- Use the smallest approved crop that fits the rendered slot, then step up for larger desktop/detail slots.
- Do not stretch a `600x400` thumbnail into a desktop detail slot when a larger approved crop exists.
- Protect faces, bodies, document text, basketball action, and logos before decorative composition.
- Do not solve image ratio problems with black bars, blurred fill, transparent padding, or fake borders.

## Crop Ladder

| Crop label | Size | Format | Use |
|---|---:|---|---|
| `overlay-thumb` | `600x400` | WebP | Overlay thumbnails, compact preview tiles, and light mobile thumbnail use |
| `media-card` | `1200x900` | AVIF | Default responsive card crop for Home cards, media cards, system previews, and most gallery cards |
| `portrait` | `1800x2400` | AVIF | Tall portrait slots and detail views where vertical framing is intentional |
| `landscape` | `2400x1800` | AVIF | Largest crop for desktop detail views, large media, and hero-style placements |

## Right-Column Hero Images

- Right-column hero images are layout-locked.
- Do not change image size, crop, export, object-fit, or object-position while adjusting left-column copy, body text, or pills.
- Overlay boxes are attached to the image frame and should not drive the image size.
- Home, Systems, Featured, Gallery, Anaya, and Archer right-column image rules should remain stable unless the request is specifically about the image.

## Gallery And Card Images

- Gallery cards use stable media frames and approved crops.
- The default gallery/media-card rhythm is `4 / 3` unless a page-specific approved slot says otherwise.
- Use `object-fit: cover` for photographic cards.
- Use `object-fit: contain` only for document previews or graphics that must remain fully visible.
- Keep mobile/tablet crops subject-safe and color-consistent with desktop.

## System Preview Images

System preview images live here:

```text
assets/documents/system-previews/
```

When adding a system document:

- Add the PDF under `assets/documents/`.
- Add the approved preview image under `assets/documents/system-previews/`.
- Link both from `systems.html`.

Systems page card slots:

- Core systems library cards use `media-card` style `1200x900` crops where possible.
- Document carousel previews use `system-previews` crops and fill a `4 / 3` frame.
- Overlay/thumb exports remain `600x400` WebP when a compact preview is needed.
- The Archer logo/card art may use the approved The Archer featured/logo asset and must not be stretched or padded.
- DPAT and recruiting dashboard previews should use the approved Q98 exports already in `Ready - Q98`.

The Archer page slots:

- Hero/social preview uses a strong product/training visual from `assets/the-archer/photos/`.
- Product diagram may remain PNG when graphic clarity matters.
- Photo gallery cards use the current `4 / 3` card frame; future approved exports should move to `media-card` `1200x900` AVIF crops.
- Video cards should include poster images from the Archer photo set.
- Do not replace the live JPG/PNG originals with new Ready assets until those crops are approved.

## Asset Locations

Common public website image locations:

```text
assets/media/
assets/documents/system-previews/
assets/the-archer/
anaya/
```

Keep DPAT report build/source images inside `dpat/` unless they are final public website assets.
