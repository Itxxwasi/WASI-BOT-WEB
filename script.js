const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

window.addEventListener('scroll', () => {
  if (!header) return;
  if (window.scrollY > 16) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
    const icon = navToggle.querySelector('i');
    if (!icon) return;
    icon.className = navList.classList.contains('show') ? 'ri-close-line' : 'ri-menu-3-line';
  });

  document.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('show');
      const icon = navToggle.querySelector('i');
      if (icon) icon.className = 'ri-menu-3-line';
    });
  });
}

const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__link').forEach((link) => {
  const href = link.getAttribute('href');
  if (href === path) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
