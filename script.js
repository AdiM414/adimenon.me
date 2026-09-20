const navToggle = document.getElementById('navToggle');
const topnav = document.getElementById('topnav');

navToggle.addEventListener('click', () => {
  const isOpen = topnav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Dropdown menus
const navItems = document.querySelectorAll('.nav-item');
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const CLOSE_DELAY = 300;

function closeItem(item) {
  item.classList.remove('open');
}

function closeAllExcept(except) {
  navItems.forEach((item) => {
    if (item !== except) closeItem(item);
  });
}

navItems.forEach((item) => {
  let closeTimer = null;

  if (canHover) {
    // Desktop: hover to open, with a short delay before closing so small
    // gaps or brief mouse-outs don't immediately kill the panel.
    item.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      closeAllExcept(item);
      item.classList.add('open');
    });

    item.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => closeItem(item), CLOSE_DELAY);
    });
  } else {
    // Touch: tap the caret to toggle; tapping the link text still navigates.
    const link = item.querySelector('a');
    const caret = item.querySelector('.caret');

    if (caret) {
      caret.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = item.classList.contains('open');
        closeAllExcept(item);
        item.classList.toggle('open', !isOpen);
      });
    }
  }
});

// Close dropdowns when clicking outside, or on Escape
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-item')) {
    closeAllExcept(null);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllExcept(null);
  }
});

// Clicking a dropdown link closes the panel (navigation proceeds normally)
document.querySelectorAll('.dropdown-card').forEach((link) => {
  link.addEventListener('click', () => {
    closeAllExcept(null);
  });
});
