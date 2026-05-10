// Jummah Bazaar — small interactions
(function () {
  'use strict';

  // Mobile menu
  const toggle = document.querySelector('.nav-toggle');
  const close = document.querySelector('.mobile-menu-close');
  const menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.add('open');
      menu.setAttribute('aria-hidden', 'false');
    });
  }
  if (close && menu) {
    close.addEventListener('click', () => {
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
    });
  }
  if (menu) {
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        menu.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // Reveal-on-scroll (kept lightweight — CSS already shows by default)
  const els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.transition = 'opacity .6s ease, transform .6s ease';
          e.target.style.opacity = '1';
          e.target.style.transform = 'none';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    els.forEach(el => io.observe(el));
  }
})();
