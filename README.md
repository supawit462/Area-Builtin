# AREA DESIGNS — Website

Static one-page site for an interior design & built-in furniture studio (Dark & Gold luxury theme).

Files: `index.html`, `styles.css`, `script.js`, `gallery.js` — no build step. Open `index.html` in a browser, or host on GitHub Pages / Netlify.

Sections: Hero, About, Services (with starting prices), Featured Projects, Why Choose Us + Reviews, 7-step Process, Contact (form opens the visitor's email app addressed to areadesigns79@gmail.com).

To do: replace Unsplash stock photos with real project photos (cards 05-09 are marked as mock-ups), and set the Instagram / TikTok links (currently `#`).

## Project galleries

Clicking a project card opens a full-screen gallery (arrows, keyboard ← →, swipe on mobile, thumbnails, "3 / 5" counter; close with ×, Esc, or clicking outside the photo).

Photos for each project are listed at the top of `gallery.js` (`p1` … `p9`, matching `data-gallery` on the cards). Replace the Unsplash ids with your own image paths, e.g. `images/grand-rama2/01.jpg`. The "🖼 N รูป" badge updates automatically.
