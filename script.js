// ============================================
// MOBILE NAV
// ============================================
const headerBtn   = document.querySelector('.header__bars');
const mobileNavEl = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav__link');
let isMobileNavOpen = false;

function closeMobileNav() {
  isMobileNavOpen = false;
  mobileNavEl.style.display = 'none';
  mobileNavEl.setAttribute('aria-hidden', 'true');
  document.body.style.overflowY = 'auto';
}

headerBtn.addEventListener('click', () => {
  isMobileNavOpen = !isMobileNavOpen;
  mobileNavEl.style.display = isMobileNavOpen ? 'flex' : 'none';
  mobileNavEl.setAttribute('aria-hidden', String(!isMobileNavOpen));
  document.body.style.overflowY = isMobileNavOpen ? 'hidden' : 'auto';
});

mobileLinks.forEach(link => link.addEventListener('click', closeMobileNav));
