'use strict';
var sidebar      = document.getElementById('sidebar');
var overlay      = document.getElementById('sidebarOverlay');
var hamburger    = document.getElementById('hamburger');
var mainWrap     = document.querySelector('.main-wrap');

function openSidebar()  {
  if (!sidebar) return;
  sidebar.classList.add('open');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  if (!sidebar) return;
  sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}
function toggleSidebar() {
  sidebar && sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
}

if (hamburger) hamburger.addEventListener('click', toggleSidebar);
if (overlay)   overlay.addEventListener('click',   closeSidebar);

// Close sidebar on nav link click (mobile)
document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
    if (window.innerWidth < 769) closeSidebar();
  });
});

// Close sidebar on resize to desktop
window.addEventListener('resize', function() {
  if (window.innerWidth >= 769) closeSidebar();
});

// ── Toast notifications ──
function showToast(msg, type) {
  type = type || 'info';
  var icons = { success: '✓', error: '✕', info: 'i' };
  var wrap = document.getElementById('toast-wrap');
  if (!wrap) return;

  var t = document.createElement('div');
  t.className = 'toast ' + type;
  t.setAttribute('role', 'alert');
  t.setAttribute('aria-live', 'polite');
  t.innerHTML = '<strong>' + (icons[type] || 'i') + '</strong> ' + msg;
  wrap.appendChild(t);

  // Auto remove after 3.5s
  setTimeout(function() {
    t.style.opacity = '0';
    t.style.transform = 'translateX(110%)';
    setTimeout(function() { if (t.parentNode) t.remove(); }, 300);
  }, 3200);
}

// ── Modal helpers ──
function openModal(id) {
  var m = document.getElementById(id);
  if (m) { m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}
function closeModal(id) {
  var m = document.getElementById(id);
  if (m) { m.style.display = 'none'; document.body.style.overflow = ''; }
}

// Close modal on backdrop click
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.style.display = 'none';
    document.body.style.overflow = '';
  }
});

// ── Keyboard accessibility ──
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeSidebar();
    var notifPanel = document.getElementById('notifPanel');
    if (notifPanel) notifPanel.classList.remove('open');
  }
});

// ── Make window functions available globally ──
window.showToast  = showToast;
window.openModal  = openModal;
window.closeModal = closeModal;