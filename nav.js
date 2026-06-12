// Shared navbar functionality for all pages
// Include this inline or as a module

function initNav(activePage) {
  // Set active link in desktop nav
  document.querySelectorAll('.nav-links a, .drawer-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === activePage);
  });

  const hamburger = document.getElementById('navHamburger');
  const drawer = document.getElementById('navDrawer');
  const overlay = document.getElementById('navOverlay');
  const drawerClose = document.getElementById('drawerClose');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('show');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('show');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', openDrawer);
  drawerClose?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);
  document.querySelectorAll('.drawer-links a').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
}

function initProgress() {
  window.addEventListener('scroll', () => {
    const bar = document.getElementById('progressBar');
    if (!bar) return;
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    bar.style.width = height > 0 ? ((winScroll / height) * 100) + '%' : '0%';
  });
}

function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.accordion-item').classList.toggle('open'));
  });
}

function initQuiz() {
  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', function () {
      const card = this.closest('.quiz-card');
      if (card.querySelector('.correct, .wrong')) return;
      const isCorrect = this.dataset.correct === 'true';
      this.classList.add(isCorrect ? 'correct' : 'wrong');
      const result = card.querySelector('.quiz-result');
      result.classList.add('show', isCorrect ? 'correct-msg' : 'wrong-msg');
      if (!isCorrect) {
        card.querySelectorAll('.quiz-option').forEach(o => {
          if (o !== this) o.style.opacity = '0.5';
        });
      }
    });
  });
}
