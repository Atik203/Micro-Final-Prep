// Shared navbar functionality for all pages
// Include this inline or as a module

// Global function for accordions (used in ex_4.html)
function toggleAcc(el) {
  const item = el.closest('.accordion-item');
  if (item) {
    item.classList.toggle('open');
  }
}

// Global function for checklist items (used in hardware.html)
function toggleCheck(el) {
  el.classList.toggle('checked');
  const checkMark = el.querySelector('.check');
  if (checkMark) {
    checkMark.textContent = el.classList.contains('checked') ? '✓' : '';
  }
}

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

  // Automatically initialize Lightbox on page load
  initLightbox();
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
    if (!btn.hasAttribute('onclick')) {
      btn.addEventListener('click', () => btn.closest('.accordion-item').classList.toggle('open'));
    }
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

function initLightbox() {
  if (document.getElementById('lightboxModal')) return;

  const lightbox = document.createElement('div');
  lightbox.id = 'lightboxModal';
  lightbox.className = 'lightbox-modal';
  lightbox.innerHTML = `
    <button class="lightbox-close" id="lightboxCloseBtn" aria-label="Close image">✕</button>
    <img class="lightbox-content" id="lightboxImg" src="" alt="">
    <div class="lightbox-caption" id="lightboxCaption"></div>
  `;
  document.body.appendChild(lightbox);

  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxCloseBtn');

  function closeLightbox() {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }

  closeBtn.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target === modalImg) {
      closeLightbox();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeLightbox();
    }
  });

  document.querySelectorAll('.diagram-img-wrap img').forEach(img => {
    img.addEventListener('click', function() {
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      caption.textContent = this.nextElementSibling ? this.nextElementSibling.textContent : (this.alt || 'Diagram');
      modal.style.display = 'flex';
      // force repaint
      modal.offsetHeight;
      modal.classList.add('show');
    });
  });
}

