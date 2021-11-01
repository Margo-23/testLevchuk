window.onload = function() {
  let hamburger = document.querySelector('.header__menu-box');
let menu = document.querySelector('.menu');
let main = document.querySelector('main');


hamburger.addEventListener('click', function(e) {
  e.stopPropagation();
  menu.classList.toggle('menu--active');
  main.style.filter = 'blur(2px)';
});

document.addEventListener('click', function (e) {
  var target = e.target;
  var its_menu = target == menu || menu.contains(target);
  var its_hamburger = target == hamburger;
  var menu_is_active = menu.classList.contains('menu--active');

  if (!its_menu && !its_hamburger && menu_is_active) {
    menu.classList.toggle('menu--active');
    main.style.filter = '';
  }
});
};
