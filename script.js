// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ── Active nav on scroll ──
const sections = document.querySelectorAll('section[id], .contact-wrapper');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (
      a.getAttribute('href') === '#' + current ||
      (current === 'contact-section' && a.getAttribute('href') === '#contact-section') ||
      (current === '' && a.getAttribute('href') === '#')
    ) {
      a.classList.add('active');
    }
  });
}, { passive: true });

// ── Stagger service & project cards ──
document.querySelectorAll('.service-card, .project-card').forEach((el, i) => {
  el.style.transitionDelay = (i * 80) + 'ms';
});
