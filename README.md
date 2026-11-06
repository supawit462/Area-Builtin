# AREA DESIGNS — Website

Static one-page site for an interior design & built-in furniture studio (Dark & Gold luxury theme).

Pages: `index.html` (home) and `projects.html` (all projects, filterable).
Files: `styles.css`, `script.js`, `gallery.js`, `projects-data.js`, `projects-page.js` — no build step. Open `index.html` in a browser, or host on GitHub Pages / Netlify.

Sections: Hero, About, Services (with starting prices), Featured Projects, Why Choose Us + Reviews, 7-step Process, Contact (form opens the visitor's email app addressed to areadesigns79@gmail.com).

To do: replace Unsplash stock photos with real project photos (cards 05-09 are marked as mock-ups), and set the Instagram / TikTok links (currently `#`).

## Projects and galleries

All projects live in `projects-data.js`: title, category (`interior` or `renovate`), description, mock-up flag and photos (first photo = cover). Use your own paths such as `images/grand-rama2/01.jpg`, or Unsplash ids.

- `projects.html` builds its cards from this list, with filter buttons ทั้งหมด / งาน Interior / งาน Renovate. Link to a category with `projects.html?cat=interior` or `?cat=renovate`.
- The homepage shows 9 cards written in `index.html`; each card's `data-gallery="p1"` etc. must match an `id` in the list.
- Clicking any card opens the full-screen gallery (arrows, keyboard, swipe, thumbnails, counter; close with ×, Esc, or a click outside the photo).
