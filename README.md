# Adi's site

Plain HTML/CSS/JS, no build step needed — works straight on GitHub Pages.

## Files
- `index.html` — page content and structure
- `styles.css` — all styling
- `script.js` — mobile menu toggle
- `assets/photo-placeholder.svg` — swap this out for a real photo

## To customize
1. Replace placeholder text in `index.html` (bio, "right now" list, section entries, project names/links).
2. Replace `assets/photo-placeholder.svg` with a real photo — a square-ish JPG/PNG works, and update the `src` in `index.html`'s `.hero-photo`.
3. Update the resume link (`href="#"` on the Resume button) to a real PDF link (e.g. a Google Drive share link or a PDF you add to the repo).
4. Update the contact email in the Contact section.

## To publish on adimenon.me via GitHub Pages
1. Push these files to the root of the GitHub repo connected to adimenon.me (or to a `docs/` folder / `gh-pages` branch, depending on how it's set up).
2. In the repo's Settings → Pages, make sure the source points to wherever you put these files.
3. Confirm there's a `CNAME` file in the repo containing `adimenon.me` (GitHub Pages needs this for the custom domain to keep working) — if one already exists from before, don't remove it.
4. Wait a minute or two for GitHub Pages to rebuild, then check adimenon.me.
