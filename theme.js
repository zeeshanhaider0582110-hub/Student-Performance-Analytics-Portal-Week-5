'use strict';

var THEME_KEY = 'edutrack_theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  var btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// Apply saved theme immediately on script load — before DOM ready
(function() {
  var saved = localStorage.getItem(THEME_KEY) || 'light';
  document.documentElement.setAttribute('data-theme', saved);
})();

// Bind button after DOM is ready
function bindThemeBtn() {
  var btn = document.getElementById('themeToggle');
  if (btn) {
    // Update icon to match current theme
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    btn.textContent = current === 'dark' ? '☀️' : '🌙';
    // Remove any existing listener to avoid duplicates
    btn.replaceWith(btn.cloneNode(true));
    // Re-select after clone
    var freshBtn = document.getElementById('themeToggle');
    if (freshBtn) freshBtn.addEventListener('click', toggleTheme);
  }
}

// Try binding immediately in case script runs after DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bindThemeBtn);
} else {
  bindThemeBtn();
}

// Expose globally
window.toggleTheme = toggleTheme;