# Start Here

Use this file when switching between Mac and PC.

## The One Rule

Work from the repo root:

```text
Coach Fogarty Website/
```

The live website files are at the repo root:

```text
index.html
styles.css
app.js
assets/
docs/
```

Do not work from:

```text
01-current-website/coach-fogarty-portfolio/
```

That is an old nested website/output area, not the current live website source.

## Mac Quick Start

```bash
cd ~/Desktop/Coach\ Fogarty\ Website
pwd
git status
git remote -v
git pull
python3 -m http.server 8000 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:8000/
```

## PC Quick Start

In PowerShell, go to wherever the repo is cloned, then run:

```powershell
cd "PATH\TO\Coach Fogarty Website"
pwd
git status
git remote -v
git pull
py -m http.server 8000 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:8000/
```

## Before Editing

Always do this first:

```bash
git status
git pull
```

## After Editing

Check exactly what changed:

```bash
git status
git diff
```

Stage only the files you intentionally changed:

```bash
git add path/to/file-you-changed another-file-you-changed
```

Commit and push:

```bash
git commit -m "Describe the website update"
git push
```

Use a more specific commit message for future work.

## If Something Feels Weird

Run:

```bash
pwd
git status
git remote -v
```

You want:

- `pwd` to show the repo root.
- `git status` to work.
- `git remote -v` to show `https://github.com/coachmatthewfogarty/coach-fogarty-website.git`.
