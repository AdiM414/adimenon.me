const navToggle = document.getElementById('navToggle');
const sidebar = document.getElementById('sidebar');

navToggle.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav after tapping a link
sidebar.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
