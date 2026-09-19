const navToggle = document.getElementById('navToggle');
const topnav = document.getElementById('topnav');

navToggle.addEventListener('click', () => {
  const isOpen = topnav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
