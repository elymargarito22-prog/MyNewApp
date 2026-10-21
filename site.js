// Mobile menu toggle and footer year.
(function () {
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.menu-toggle');

  function setOpen(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (nav && toggle) {
    toggle.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
    nav.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { setOpen(false); toggle.focus(); }
    });
    // Close the menu if the window grows past the mobile breakpoint.
    window.matchMedia('(min-width: 821px)').addEventListener('change', function (m) { if (m.matches) setOpen(false); });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
