/*
  Project gallery viewer.

  To change a project's photos, edit its list below. Keys match data-gallery="p1".."p9"
  on the project cards in index.html. Each entry can be a full image URL (e.g. "images/grand-rama2/01.jpg")
  or an Unsplash photo id. The first photo should be the same as the card's cover.
*/
(function () {
  const GALLERIES = {
    p1: ['photo-1600210492486-724fe5c67fb0', 'photo-1600585154340-be6161a56a0c', 'photo-1600566753190-17f0baa2a6c3', 'photo-1616486338812-3dadae4b4ace', 'photo-1600607687939-ce8a6c25118c'],
    p2: ['photo-1618221195710-dd6b41faaea6', 'photo-1616594039964-ae9021a400a0', 'photo-1600121848594-d8644e57abab', 'photo-1631679706909-1844bbd07221', 'photo-1615529182904-14819c35db37'],
    p3: ['photo-1600607687939-ce8a6c25118c', 'photo-1556912173-3bb406ef7e77', 'photo-1505693416388-ac5ce068fe85', 'photo-1617806118233-18e1de247200', 'photo-1484154218962-a197022b5858'],
    p4: ['photo-1586023492125-27b2c045efd7', 'photo-1615529182904-14819c35db37', 'photo-1616486338812-3dadae4b4ace', 'photo-1505693416388-ac5ce068fe85', 'photo-1600566752355-35792bedcfea'],
    p5: ['photo-1600566753190-17f0baa2a6c3', 'photo-1556912173-3bb406ef7e77', 'photo-1484154218962-a197022b5858', 'photo-1600573472550-8090b5e0745e', 'photo-1600607687939-ce8a6c25118c'],
    p6: ['photo-1631679706909-1844bbd07221', 'photo-1505693416388-ac5ce068fe85', 'photo-1616594039964-ae9021a400a0', 'photo-1600121848594-d8644e57abab', 'photo-1618221195710-dd6b41faaea6'],
    p7: ['photo-1617806118233-18e1de247200', 'photo-1586023492125-27b2c045efd7', 'photo-1600566752355-35792bedcfea', 'photo-1615529182904-14819c35db37', 'photo-1600047509807-ba8f99d2cdde'],
    p8: ['photo-1600585154526-990dced4db0d', 'photo-1600585154340-be6161a56a0c', 'photo-1600047509807-ba8f99d2cdde', 'photo-1600573472550-8090b5e0745e', 'photo-1600566752355-35792bedcfea'],
    p9: ['photo-1558904541-efa843a96f01', 'photo-1600585154340-be6161a56a0c', 'photo-1600047509807-ba8f99d2cdde', 'photo-1600585154526-990dced4db0d', 'photo-1600573472550-8090b5e0745e']
  };

  const url = (src, w) => (/^(https?:|\/|\.|images\/)/.test(src)
    ? src
    : `https://images.unsplash.com/${src}?auto=format&fit=crop&w=${w}&q=80`);

  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const track = document.getElementById('lbTrack');
  const thumbs = document.getElementById('lbThumbs');
  const counter = document.getElementById('lbCounter');
  const titleEl = document.getElementById('lbTitle');
  const subEl = document.getElementById('lbSub');
  const btnPrev = document.getElementById('lbPrev');
  const btnNext = document.getElementById('lbNext');
  const btnClose = document.getElementById('lbClose');
  const stage = document.getElementById('lbStage');

  let photos = [];
  let index = 0;
  let lastFocus = null;
  let closeTimer = null;

  // Photo-count badge on each card cover
  document.querySelectorAll('.project[data-gallery]').forEach((card) => {
    const list = GALLERIES[card.dataset.gallery] || [];
    const name = card.querySelector('h3')?.textContent || '';
    card.setAttribute('aria-label', `ดูรูปทั้งหมดของ ${name} (${list.length} รูป)`);
    if (list.length > 1) {
      const badge = document.createElement('span');
      badge.className = 'project__count';
      badge.textContent = `🖼 ${list.length} รูป`;
      card.querySelector('.project__img').appendChild(badge);
    }
    const open = () => openGallery(card);
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });

  function openGallery(card) {
    clearTimeout(closeTimer);
    photos = GALLERIES[card.dataset.gallery] || [card.querySelector('img').src];
    const name = card.querySelector('h3')?.textContent || '';
    titleEl.textContent = name;
    subEl.textContent = card.querySelector('.project__th')?.textContent || '';

    track.replaceChildren();
    thumbs.replaceChildren();
    photos.forEach((p, i) => {
      const fig = document.createElement('figure');
      fig.className = 'lightbox__slide';
      const img = document.createElement('img');
      img.dataset.src = url(p, 1800);
      img.alt = `${name} – รูปที่ ${i + 1}`;
      img.draggable = false;
      hideOnError(img);
      fig.appendChild(img);
      track.appendChild(fig);

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lightbox__thumb';
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-label', `รูปที่ ${i + 1}`);
      const timg = document.createElement('img');
      timg.src = url(p, 240);
      timg.alt = '';
      timg.loading = 'lazy';
      timg.draggable = false;
      hideOnError(timg);
      btn.appendChild(timg);
      btn.addEventListener('click', () => go(i));
      thumbs.appendChild(btn);
    });

    lastFocus = document.activeElement;
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => lb.classList.add('open'));
    go(0, false);
    btnClose.focus();
  }

  function closeGallery() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    closeTimer = setTimeout(() => { lb.hidden = true; track.replaceChildren(); thumbs.replaceChildren(); }, 300);
    if (lastFocus) lastFocus.focus();
  }

  function hideOnError(img) {
    img.addEventListener('error', () => { img.style.visibility = 'hidden'; }, { once: true });
  }

  // Load the current photo and its neighbours only
  function loadAround(i) {
    [i - 1, i, i + 1].forEach((n) => {
      const img = track.children[n]?.querySelector('img');
      if (img && !img.src) img.src = img.dataset.src;
    });
  }

  function go(i, animate = true) {
    const total = photos.length;
    index = (i + total) % total; // wrap around
    track.style.transition = animate ? '' : 'none';
    track.style.transform = `translateX(${-index * 100}%)`;
    counter.textContent = `${index + 1} / ${total}`;
    [...track.children].forEach((s, n) => s.setAttribute('aria-hidden', String(n !== index)));
    thumbs.querySelectorAll('.lightbox__thumb').forEach((t, n) => {
      const active = n === index;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', String(active));
      if (active) t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: animate ? 'smooth' : 'auto' });
    });
    const single = total < 2;
    btnPrev.hidden = single;
    btnNext.hidden = single;
    thumbs.hidden = single;
    loadAround(index);
  }

  btnPrev.addEventListener('click', (e) => { e.stopPropagation(); go(index - 1); });
  btnNext.addEventListener('click', (e) => { e.stopPropagation(); go(index + 1); });
  btnClose.addEventListener('click', closeGallery);

  // Close when clicking the empty area around the photo
  lb.addEventListener('click', (e) => {
    if (dragged) return;
    const t = e.target;
    // The photo ignores pointer events (for smooth dragging), so check its bounds by hand
    const img = track.children[index]?.querySelector('img');
    if (img) {
      const r = img.getBoundingClientRect();
      if (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom) return;
    }
    if (t === lb || t === stage || t.classList.contains('lightbox__slide') ||
        t.classList.contains('lightbox__viewport') || t.classList.contains('lightbox__top') ||
        t.classList.contains('lightbox__thumbs')) {
      closeGallery();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeGallery();
    else if (e.key === 'ArrowLeft') go(index - 1);
    else if (e.key === 'ArrowRight') go(index + 1);
    else if (e.key === 'Tab') {
      // keep focus inside the viewer
      const items = [...lb.querySelectorAll('button:not([hidden])')].filter((b) => !b.closest('[hidden]'));
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Swipe left / right (touch and mouse drag)
  const viewport = lb.querySelector('.lightbox__viewport');
  let startX = 0, startY = 0, dx = 0, dragging = false, dragged = false;

  viewport.addEventListener('pointerdown', (e) => {
    if (photos.length < 2) return;
    dragging = true; dragged = false;
    startX = e.clientX; startY = e.clientY; dx = 0;
    track.style.transition = 'none';
  });
  window.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    dx = e.clientX - startX;
    if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(e.clientY - startY)) dragged = true;
    if (dragged) track.style.transform = `translateX(calc(${-index * 100}% + ${dx}px))`;
  });
  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    track.style.transition = '';
    const threshold = Math.min(80, viewport.clientWidth * 0.15);
    if (dragged && dx < -threshold) go(index + 1);
    else if (dragged && dx > threshold) go(index - 1);
    else go(index);
    setTimeout(() => { dragged = false; }, 0); // don't treat the drag as a click
  };
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);
})();
