# Mac / PC Website Workflow

This is the active workflow for editing the Coach Fogarty website from either computer.

The goal is simple: one active website folder on Mac, one active website folder on PC, both connected to the same GitHub repo. Do not edit old copies, archive folders, output folders, or duplicate desktop folders.

## Active Website Folder

Use this folder inside the repo on both computers:

```text
01-current-website/coach-fogarty-portfolio/
```

## Active GitHub Repo

Both the Mac and PC active folders must point to:

```text
https://github.com/coachmatthewfogarty/coach-fogarty-website.git
```

## Before Editing On Either Computer

From the active website repo, run:

```bash
git status
git pull
```

Do not start editing until the pull is complete and the folder is confirmed to be the active repo.

## After Editing

From the active website repo, run:

```bash
git status
git add -A
git commit -m "Update website"
git push
```

Use a more specific commit message when possible, but this is the safe default.

## Before Switching Computers

Always push from the computer you were using before moving to the other computer.

```bash
git status
git push
```

If there are uncommitted changes, commit them first or intentionally discard/archive them before switching machines.

## Starting On The Other Computer

Always pull before editing:

```bash
git status
git pull
```

This keeps the Mac and PC active folders synced to the same GitHub history.

## Folder Safety Check

If there is any doubt, run:

```bash
pwd
git status
git remote -v
```

Confirm:

- `pwd` points to the active repo/folder you expect.
- `git status` works and shows the current branch.
- `git remote -v` points to `https://github.com/coachmatthewfogarty/coach-fogarty-website.git`.

## Do Not Edit

Do not make website edits in:

- old website copies
- exported output folders
- archived folders
- duplicate desktop folders
- backup folders
- Photoshop export output folders
- `docs/archive`
- `outputs/archive`
- ignored `outputs/` QA folders

Archived and output folders are for history, reference, or generated artifacts. They are not live website source.

## Asset Rule

Only final approved website assets go into the live website assets folder.

Originals, Photoshop files, crop candidates, and messy exports stay outside the live website unless they are final approved assets.

Use the live website assets folder only for assets that are ready to ship with the site.

## Cleanup Checklist

- Identify the active repo on Mac.
- Identify the active repo on PC.
- Confirm both point to the same GitHub remote.
- Rename old folders with `OLD` or `ARCHIVE`.
- Keep only one active shortcut/bookmark on each computer.

## Emergency Check

If you are unsure whether you are in the right folder, stop and run:

```bash
pwd
git status
git remote -v
```

If the folder or remote does not match this document, do not edit. Find the active repo first.
