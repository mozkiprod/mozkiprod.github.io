
// ============================================
// DARK MODE
// ============================================
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');

// Restaure le thème sauvegardé
const savedTheme = localStorage.getItem('theme');
if (savedTheme) document.body.classList.add(savedTheme);

function handleThemeToggle() {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light-mode');
  } else {
    localStorage.removeItem('theme');
    document.body.removeAttribute('class');
  }
}

themeToggle.addEventListener('click', handleThemeToggle);
themeToggleMobile.addEventListener('click', handleThemeToggle);

// ============================================
// MOBILE NAV
// ============================================
const headerBtn = document.querySelector('.header__bars');
const mobileNavEl = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav__link');
let isMobileNavOpen = false;

headerBtn.addEventListener('click', () => {
  isMobileNavOpen = !isMobileNavOpen;
  mobileNavEl.style.display = isMobileNavOpen ? 'flex' : 'none';
  document.body.style.overflowY = isMobileNavOpen ? 'hidden' : 'auto';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    isMobileNavOpen = false;
    mobileNavEl.style.display = 'none';
    document.body.style.overflowY = 'auto';
  });
});
