(function () {
  'use strict';

  /* Close the mobile menu after choosing a link */
  var nav = document.getElementById('mainNav');
  if (nav && window.bootstrap) {
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (nav.classList.contains('show')) {
          window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
        }
      });
    });
  }

  /* "Show all" works like an accordion: it reveals extra project cards
     (class .is-extra) on this page. With no extra projects it stays disabled. */
  var btn = document.getElementById('showAll');
  if (!btn) return;

  var label = btn.querySelector('.show-all-label');
  var extras = document.querySelectorAll('#projectGrid .is-extra');

  if (!extras.length) {
    btn.disabled = true;
    btn.setAttribute('aria-disabled', 'true');
    return;
  }

  btn.disabled = false;
  btn.removeAttribute('aria-disabled');
  btn.removeAttribute('title');

  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    extras.forEach(function (el) { el.classList.toggle('is-open', !open); });
    btn.setAttribute('aria-expanded', String(!open));
    label.textContent = open ? 'Show all' : 'Show less';
  });
})();
