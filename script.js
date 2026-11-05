(function () {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const toTop = document.getElementById('toTop');

  // Navbar background + back-to-top button on scroll
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 40);
    toTop.classList.toggle('show', y > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger menu
  const setMenu = (open) => {
    navLinks.classList.toggle('open', open);
    hamburger.classList.toggle('open', open);
    nav.classList.toggle('menu-open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'ปิดเมนู' : 'เปิดเมนู');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  hamburger.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
  navLinks.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 860) setMenu(false); });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }

  // Active link highlight
  const sections = document.querySelectorAll('main section[id]');
  const linkFor = (id) => navLinks.querySelector(`a[href="#${id}"]:not(.btn)`);
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const link = linkFor(entry.target.id);
        if (link && entry.isIntersecting) {
          navLinks.querySelectorAll('a.active').forEach((a) => a.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => spy.observe(s));
  }

  // Animated stat counters
  const counters = document.querySelectorAll('.counter');
  const runCounter = (el) => {
    const target = +el.dataset.target;
    const start = performance.now();
    const dur = 1600;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { runCounter(e.target); co.unobserve(e.target); } });
    });
    counters.forEach((c) => co.observe(c));
  } else {
    counters.forEach((c) => { c.textContent = c.dataset.target; });
  }

  // Image fallback: keep layout tidy if an external image fails
  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => { img.style.visibility = 'hidden'; }, { once: true });
  });

  // Inquiry form: validate, then open the visitor's email app with the details filled in
  const form = document.getElementById('inquiryForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach((f) => {
      const ok = f.checkValidity() && f.value.trim() !== '';
      f.classList.toggle('invalid', !ok);
      if (!ok) valid = false;
    });
    if (!valid) {
      status.textContent = 'กรุณากรอกชื่อ-นามสกุล และเบอร์โทรศัพท์ให้ถูกต้อง';
      status.className = 'form__status err';
      return;
    }
    const d = Object.fromEntries(new FormData(form));
    const body = [
      `ชื่อ-นามสกุล: ${d.name}`,
      `เบอร์โทรศัพท์: ${d.phone}`,
      `ประเภทงาน: ${d.service || '-'}`,
      `โครงการ/สถานที่: ${d.project || '-'}`,
      `งบประมาณ: ${d.budget || '-'}`,
      '',
      `ข้อความ: ${d.message || '-'}`
    ].join('\n');
    const subject = `สอบถามงานออกแบบ/บิลท์อิน - ${d.name}`;
    window.location.href = `mailto:areadesigns79@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = 'ขอบคุณค่ะ ระบบได้เปิดอีเมลพร้อมรายละเอียดของคุณแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด';
    status.className = 'form__status ok';
    form.reset();
  });
  form.querySelectorAll('input, textarea').forEach((f) => f.addEventListener('input', () => f.classList.remove('invalid')));

  // Review carousel arrows
  const reviews = document.getElementById('reviews');
  document.querySelectorAll('.reviews-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = reviews.querySelector('.review');
      const step = card ? card.getBoundingClientRect().width + 24 : reviews.clientWidth;
      reviews.scrollBy({ left: step * Number(btn.dataset.dir), behavior: 'smooth' });
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
