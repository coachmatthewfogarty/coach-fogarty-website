# Coach Fogarty Website Workspace

This root folder is organized so the active website, design source, source documents, and archived history stay separate.

## Folder Map

- `01-current-website/coach-fogarty-portfolio/`: live website files and current DPAT working files.
- `02-design-source/Photoshop Website Export/`: image input/output workflow, crop manifests, export scripts, and design source material.
- `03-source-documents/`: source-only document buckets for credentials, resumes, recommendation letters, DPAT source files, report guides, and brand-kit material.
- `04-archive/`: historical copies, older direction, stale experiments, and files that should not guide current work.

## Current Website

Open or serve the site from:

```text
01-current-website/coach-fogarty-portfolio/
```

The website expects live assets under:

```text
01-current-website/coach-fogarty-portfolio/assets/
```

Keep website images, documents, videos, generated web assets, and helper JS inside that `assets/` tree unless you are intentionally changing the site code.

## DPAT Direction

Use the active DPAT guide here:

```text
01-current-website/coach-fogarty-portfolio/dpat/README.md
```

Archived DPAT history lives in `04-archive/dpat-archive-2026-05-08/` and should not be used as the current design direction.

## Image Export Direction

Use the active Photoshop export guide here:

```text
02-design-source/Photoshop Website Export/README.md
```

The current Anaya crop record is:

```text
02-design-source/Photoshop Website Export/ANAYA-BEARD-CROP-MANIFEST-2026-05-08.md
```

## PC/Mac Notes

- Avoid hardcoded absolute paths like `C:\Users\...` or `/Users/...` in current scripts and READMEs.
- Keep macOS metadata files out of the project: `.DS_Store` and `._*`.
- Keep old experiments in `04-archive/` so searches and editor indexing stay focused.
