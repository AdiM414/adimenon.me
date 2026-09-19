# Adi's site — multi-page version

This replaces the single long-scrolling page with 8 separate pages, linked from
a top-left menu bar on every page.

## Pages
- `index.html` — Home. Just a brief intro from Adi, nothing else.
- `story.html` — My Story (the full narrative arc)
- `academics.html` — Coursework, GPA, SAT, skills
- `awards.html` — Awards & Honors, grouped by year
- `robotics.html` — MATE ROV role progression and results
- `projects.html` — Independent engineering projects, technical detail
- `press.html` — Real news coverage with links
- `community.html` — Volunteering + hobbies
- `contact.html` — Email, phone, resume download

## Files to upload
Upload ALL of these to the repo root (same level as CNAME):
- All 9 `.html` files above
- `styles.css` (replaces the old one)
- `script.js` (replaces the old one — simpler now, just handles mobile menu)
- `assets/adi-resume.pdf` — Adi's resume, wired up to the Contact page download button
- `assets/photo-placeholder.svg` — kept as a fallback; the real headshot
  (`assets/adi_profile_headshot.jpeg`) should already be in the repo from
  before, so no need to re-upload it

## What to do with the OLD index.html
The old `index.html` was a single long page. This new `index.html` completely
replaces it — just overwrite it like normal.

## Note on navigation
Every page's top-left menu is hand-written into that page (no shared template
— this is plain HTML with no build step), so if you ever want to add/rename a
menu item, you'll need to update the `<nav class="topnav">` block in all 9
files to keep them in sync. Let me know if you want help with a batch change
like that in the future.
