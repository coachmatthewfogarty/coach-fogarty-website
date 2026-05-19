# Mac / PC Website Workflow

This is the active workflow for editing the Coach Fogarty website from either computer.

The goal is simple: one active repo folder on Mac, one active repo folder on PC, both connected to the same GitHub repo, with the live website source at the repo root.

## Active Website Folder

Use the repo root on both computers:

```text
Coach Fogarty Website/
```

Do not work from this old nested folder unless a task explicitly asks for it:

```text
01-current-website/coach-fogarty-portfolio/
```

## Active GitHub Repo

Both computers must point to:

```text
https://github.com/coachmatthewfogarty/coach-fogarty-website.git
```

## Start On Either Computer

From the repo root:

```bash
pwd
git status
git remote -v
git pull
```

Confirm:

- `pwd` points to the repo root.
- `git status` works and shows the current branch.
- `git remote -v` points to `https://github.com/coachmatthewfogarty/coach-fogarty-website.git`.
- `git pull` completes before editing.

## Preview The Website

Mac:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Windows PowerShell:

```powershell
py -m http.server 8000 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8000/
```

If port `8000` is already busy, use another port such as `8001`.

## After Editing

From the repo root:

```bash
git status
git diff -- filename-you-changed
git add filename-you-changed another-file-you-changed
git commit -m "Describe the website update"
git push
```

Use a specific commit message when possible.

Do not use `git add -A` unless explicitly approved. Stage only the files intentionally changed for the task.

## Before Switching Computers

Always push from the computer you were using before moving to the other computer:

```bash
git status
git push
```

If there are uncommitted changes, commit and push them first, or intentionally leave a clear note that the other computer will not have those local changes yet.

## Starting On The Other Computer

Always pull before editing:

```bash
git status
git pull
```

This keeps the Mac and PC synced to the same GitHub history.

## Do Not Edit

Do not make current website edits in:

- `01-current-website/coach-fogarty-portfolio/`
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

Only final approved website assets go into the live website asset folders under the repo root.

Originals, Photoshop files, crop candidates, and messy exports stay outside the live website unless they are final approved assets.

## Emergency Check

If you are unsure whether you are in the right folder, stop and run:

```bash
pwd
git status
git remote -v
```

If the folder or remote does not match this document, do not edit. Find the active repo root first.
