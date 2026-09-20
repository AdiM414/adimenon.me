const navToggle = document.getElementById('navToggle');
const topnav = document.getElementById('topnav');

navToggle.addEventListener('click', () => {
  const isOpen = topnav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Dropdown menus: click to open/close, click outside or Escape to close
const navItems = document.querySelectorAll('.nav-item');

function closeAllDropdowns(except) {
  navItems.forEach((item) => {
    if (item !== except) {
      item.classList.remove('open');
      const toggle = item.querySelector('.dropdown-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

navItems.forEach((item) => {
  const toggle = item.querySelector('.dropdown-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = item.classList.contains('open');
    closeAllDropdowns(item);
    item.classList.toggle('open', !isOpen);
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-item')) {
    closeAllDropdowns();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllDropdowns();
  }
});

// Clicking a dropdown link closes the panel after navigation is triggered
document.querySelectorAll('.dropdown-card').forEach((link) => {
  link.addEventListener('click', () => {
    closeAllDropdowns();
  });
});
