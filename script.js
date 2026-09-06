const navToggle = document.getElementById('navToggle');
const topnav = document.getElementById('topnav');

navToggle.addEventListener('click', () => {
  const isOpen = topnav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

topnav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    topnav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
