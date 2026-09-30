// Nexora — minimal shared JS. No framework, no build step.
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.primary');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // Mark current page's nav link as active
  var here = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.primary a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
