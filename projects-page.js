/*
  "ผลงานทั้งหมด" page: builds the project cards from projects-data.js
  and filters them by category (ทั้งหมด / งาน Interior / งาน Renovate).
  Load after projects-data.js and before script.js / gallery.js.
  Link straight to a category with projects.html?cat=interior or ?cat=renovate
*/
(function () {
  const grid = document.getElementById('allProjects');
  if (!grid) return;
  const projects = window.AREA_PROJECTS || [];
  const img = window.AREA_IMG;
  const LABELS = { all: 'ทั้งหมด', interior: 'งาน Interior', renovate: 'งาน Renovate' };

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  // Build cards (same markup as the homepage cards)
  projects.forEach((p, i) => {
    const card = el('article', 'project reveal');
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.dataset.gallery = p.id;
    card.dataset.cat = p.cat;

    const media = el('div', 'project__img');
    if (p.mock) media.appendChild(el('span', 'project__badge', 'ตัวอย่าง Mock-up'));
    const cover = el('img');
    cover.src = img(p.photos[0], 900);
    cover.alt = `${p.title} - ${p.th}`;
    cover.loading = 'lazy';
    cover.addEventListener('error', () => { cover.style.visibility = 'hidden'; }, { once: true });
    media.appendChild(cover);
    media.appendChild(el('span', 'project__cat', LABELS[p.cat]));

    const body = el('div', 'project__body');
    body.appendChild(el('span', 'project__no', p.tag));
    body.appendChild(el('h3', null, p.title));
    body.appendChild(el('p', 'project__th', p.th));
    body.appendChild(el('p', 'project__desc', p.desc));

    card.append(media, body);
    grid.appendChild(card);
  });

  // Counts on the filter buttons
  const counts = { all: projects.length };
  projects.forEach((p) => { counts[p.cat] = (counts[p.cat] || 0) + 1; });
  document.querySelectorAll('[data-count]').forEach((n) => { n.textContent = counts[n.dataset.count] || 0; });

  const buttons = document.querySelectorAll('.filter-btn');
  const status = document.getElementById('filterStatus');

  function applyFilter(cat, updateUrl) {
    if (!LABELS[cat]) cat = 'all';
    buttons.forEach((b) => {
      const on = b.dataset.filter === cat;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    let shown = 0;
    grid.querySelectorAll('.project').forEach((card) => {
      const match = cat === 'all' || card.dataset.cat === cat;
      card.hidden = !match;
      if (match) {
        shown += 1;
        card.classList.add('visible');
        // replay the fade-in
        card.classList.remove('project--in');
        void card.offsetWidth;
        card.classList.add('project--in');
      }
    });
    status.textContent = `แสดง ${shown} โปรเจกต์ · ${LABELS[cat]}`;
    if (updateUrl) {
      const u = new URL(window.location.href);
      if (cat === 'all') u.searchParams.delete('cat'); else u.searchParams.set('cat', cat);
      history.replaceState(null, '', u);
    }
  }

  buttons.forEach((b) => b.addEventListener('click', () => applyFilter(b.dataset.filter, true)));
  applyFilter(new URLSearchParams(window.location.search).get('cat') || 'all', false);
})();
