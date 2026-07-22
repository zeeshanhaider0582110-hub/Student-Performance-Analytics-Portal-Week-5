'use strict';

const cForm = document.getElementById('cForm');
if (cForm) {
  cForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    ['cName','cEmail','cSubject','cMsg'].forEach(id => {
      const el  = document.getElementById(id);
      const err = document.getElementById(id + 'Err');
      if (!el || !err) return;
      if (!el.value.trim()) {
        el.classList.add('error'); err.classList.add('show'); valid = false;
      } else {
        el.classList.remove('error'); err.classList.remove('show');
      }
    });
    if (valid) { showToast('Message sent. We will respond within one business day.', 'success'); cForm.reset(); }
    else { showToast('Please fill in all required fields.', 'error'); }
  });
  cForm.querySelectorAll('.form-control').forEach(el => {
    el.addEventListener('input', () => {
      el.classList.remove('error');
      const err = document.getElementById(el.id + 'Err');
      if (err) err.classList.remove('show');
    });
  });
}