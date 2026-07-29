/**
 * Feature Cards Animation
 * Makes feature cards appear with a fade-in animation on page load
 * Only activates on the index page
 */

document.addEventListener('DOMContentLoaded', () => {
  // Only run on index page (not on features.html or other pages)
  if (!window.location.pathname.includes('features.html')) {
    // Select all feature cards
    const featureCards = document.querySelectorAll('.feature-card');

    // Add initial styles (hidden)
    featureCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

      // Stagger the appearance of each card
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 300 + (index * 200)); // 300ms base delay, then 200ms between each card
    });
  }

  // Dark mode toggle — shared across all pages
  initDarkMode();
});

/**
 * Dark Mode
 * Reads the saved preference from localStorage on load, and toggles
 * the `data-theme="dark"` attribute on <html> when the button is clicked.
 */
function initDarkMode() {
  const toggle = document.querySelector('[data-dark-mode-toggle]');
  if (!toggle) return;

  // Apply saved preference immediately to avoid flash
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggle.textContent = '☀️';
  }

  // Toggle on click — use event delegation via the button itself
  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      toggle.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggle.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    }
  });
}