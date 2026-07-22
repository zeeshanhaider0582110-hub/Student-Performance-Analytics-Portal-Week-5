'use strict';

/* ── Animated counter for stat cards ── */
function animateCounter(el, target, duration = 1200) {
  const start    = performance.now();
  const isFloat  = target % 1 !== 0;
  const decimals = isFloat ? 1 : 0;

  function step(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const value    = ease * target;
    el.textContent = isFloat ? value.toFixed(decimals) : Math.floor(value).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = isFloat ? target.toFixed(decimals) : target.toLocaleString();
  }
  requestAnimationFrame(step);
}

/* ── Animate trend bars ── */
function animateTrendBars() {
  document.querySelectorAll('.trend-fill[data-w]').forEach(bar => {
    bar.style.width = '0%';
    setTimeout(() => { bar.style.width = bar.dataset.w + '%'; }, 200);
  });
}

/* ── Animate progress bars ── */
function animateProgressBars() {
  document.querySelectorAll('.prog-fill[data-w]').forEach(bar => {
    bar.style.width = '0%';
    setTimeout(() => { bar.style.width = bar.dataset.w + '%'; }, 200);
  });
}

/* ── Run on page load ── */
window.addEventListener('load', () => {
  // Counter animate all [data-count] elements
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    animateCounter(el, target);
  });

  animateTrendBars();
  animateProgressBars();
});