# Coach Fogarty Website Codex Workflow

This repository's GitHub Pages live website publishes from the repo root.

For human Mac/PC setup, start with:

- `START-HERE.md`
- `WORKFLOW-MAC-PC.md`

## Live Website Source

The active live website source is the repo root:

- `index.html`
- `styles.css`
- `app.js`
- `assets/`
- `docs/`

GitHub Pages publishes from:

- Branch: `main`
- Folder: `/root`

## Editing Scope

Do not edit only the nested folder unless explicitly asked:

- `01-current-website/coach-fogarty-portfolio/`

If future work needs both copies updated, ask first or clearly state that root and nested will be synced.

Do not change website layout or design unless the task explicitly allows it.

## Git Safety

Do not stage or commit:

- `tmp/`
- temp files
- cache files
- system files
- generated scratch files

Do not use `git add -A` unless explicitly approved.

Before edits, run:

- `git status --short`
- Confirm the active path is the repo root.

After edits, report:

- Changed files
- Whether changes were root-only or synced to nested
- Recommended commit message
