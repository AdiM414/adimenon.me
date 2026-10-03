# Adi's site - full current package

This is the complete, current state of adimenon.me. Upload everything in this
package to the root of the GitHub repo (same level as the existing CNAME file).

## Pages (upload all to repo root)
- `index.html` - Home: brief intro, Resume button, and year-by-year cards (2022-2026)
- `story.html` - My Story: the full narrative (origin story through personal strengths)
- `academics.html` - Coursework, GPA, SAT, skills
- `projects.html` - STEM Projects: 5 independent projects with photos/video on the 2026 entry
- `robotics.html` - MATE ROV role progression, results, and the "how I started" intro
- `awards.html` - Awards & Honors, grouped by year, with submission links
- `press.html` - Real news coverage with links
- `community.html` - Volunteering + hobbies
- `contact.html` - Email, phone, resume download
- `year-2022.html` through `year-2026.html` - Combined year-in-review pages linked from Home

## Supporting files (upload to repo root)
- `styles.css` - all site styling
- `script.js` - mobile menu + dropdown behavior + scroll-spy for page sidebars

## Assets (upload into the `assets/` folder)
- `adi-resume.pdf` - current resume, linked from Home and Contact
- `wildfire-robot-1.jpg` through `wildfire-robot-4.jpg` - wildfire robot photos (Projects page)
- `wildfire-robot-demo.mp4` - wildfire robot demo video (Projects page)
- `project-placeholder.svg` - placeholder graphic for projects without real photos yet
- `photo-placeholder.svg` - fallback placeholder, not currently used on any live page

**Not included here:** `assets/adi_profile_headshot.jpeg` - this was uploaded directly
to GitHub earlier and should already be sitting in your repo's `assets/` folder. No
need to re-upload it.

## Current nav order
Home -> Academics -> STEM Projects -> Robotics -> Awards -> Press -> Community ->
My Story -> Contact

## Notes
- The top nav uses click-to-open dropdowns (not hover) for sections with multiple
  anchors on the same page.
- Most content pages have a sticky "On this page" sidebar for quick jumping between
  sections, with the current section auto-highlighting as you scroll.
- Em-dashes have been removed site-wide in favor of plain hyphens.
