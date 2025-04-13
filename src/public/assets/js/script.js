(function ($) {
  document.getElementsByTagName('body')[0].addEventListener('mousemove', function (n) {
    (t.style.left = n.clientX + 'px'), (t.style.top = n.clientY + 'px'), (e.style.left = n.clientX + 'px'), (e.style.top = n.clientY + 'px'), (i.style.left = n.clientX + 'px'), (i.style.top = n.clientY + 'px');
  });
  var t = document.getElementById('c1'),
    e = document.getElementById('c2'),
    i = document.getElementById('c3');
  function n(t) {
    e.classList.add('hover'), i.classList.add('hover');
  }
  function s(t) {
    e.classList.remove('hover'), i.classList.remove('hover');
  }
  s();
  for (var r = document.querySelectorAll('.hover'), a = r.length - 1; a >= 0; a--) {
    o(r[a]);
  }
  function o(t) {
    t.addEventListener('mouseover', n), t.addEventListener('mouseout', s);
  }

  (function () {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector('body');
      menu = document.querySelector('.mi');
      menuItems = document.querySelectorAll('.nav-li');
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener('click', function () {
        toggleClass(body, 'n-ac');
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
      else element.classList.add(stringClass);
    };
    init();
  })();

  $(document).ready(function () {
    var music = document.getElementById('hau');

    $('li.nav-li a').hover(function () {
      $(this).after(function () {
        music.play();
        music.volume = 1;
      });
    });
  });
})(jQuery);

$(document).ready(function () {
  const btntheme = document.getElementById('theme');

  const currentTheme = localStorage.getItem('theme');
  if (!currentTheme) {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    if (currentTheme == 'dark') {
      document.body.classList.toggle('dark');
    } else if (currentTheme == 'light') {
      document.body.classList.toggle('light');
    }
  }

  btntheme.addEventListener('click', function () {
    document.body.classList.toggle('light');
    var theme = document.body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
  });
});
