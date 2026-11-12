const root = document.documentElement;
const THEME_KEY = 'marchy-theme';
const themes = ['tokyo-night', 'catppuccin', 'gruvbox', 'nord', 'everforest', 'rose-pine', 'light'];

function applyTheme(theme) {
  if (!themes.includes(theme)) theme = 'tokyo-night';

  root.dataset.theme = theme;

  document.querySelectorAll('.theme-dot').forEach((button) => {
    const active = button.dataset.theme === theme;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    const bg = getComputedStyle(root).getPropertyValue('--bg').trim();
    if (bg) meta.setAttribute('content', bg);
  }
}

applyTheme(localStorage.getItem(THEME_KEY) || 'tokyo-night');

document.querySelectorAll('.theme-dot').forEach((button) => {
  button.addEventListener('click', () => {
    const theme = button.dataset.theme;
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
  });
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.section, .card, .upstream-grid a').forEach((element) => {
    observer.observe(element);
  });
} else {
  document.querySelectorAll('.section, .card, .upstream-grid a').forEach((element) => {
    element.classList.add('visible');
  });
}
