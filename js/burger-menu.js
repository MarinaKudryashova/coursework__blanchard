// открыть\закрыть бургер-меню
let burger = document.querySelector('.btn-burger');
let menu = document.querySelector('.menu');
let menuLink = document.querySelectorAll('.menu__link');
const body = document.body;

let disableScroll = function() {
  // let paddingOffset = window.innerWidth - body.offsetWidth + 'px';
  // body.style.paddingRight = paddingOffset;
  body.classList.add('disable-scroll');
}

let enableScroll = function() {
  // body.style.paddingRight = '0px';
  body.classList.remove('disable-scroll');
}

burger.addEventListener('click', function() {
  burger.classList.toggle('is-open');
  menu.classList.toggle('menu-open');
  if (burger.getAttribute('aria-label') === 'Открыть меню') {
    burger.setAttribute("aria-label", 'Закрыть меню');
    disableScroll();
  } else {
    burger.setAttribute("aria-label", 'Открыть меню');
    enableScroll();
  }
});
menuLink.forEach(function(e) {
  e.addEventListener('click', function() {
    burger.classList.remove('is-open');
    burger.setAttribute("aria-label", 'Открыть меню');
    menu.classList.remove('menu-open');
    enableScroll();
  });
});
document.addEventListener('click',
function(el) {
  let target = el.target;
  if(!target.closest('.header__burger') && burger.classList.contains('is-open')) {
    burger.classList.remove('is-open');
    burger.setAttribute("aria-label", 'Открыть меню');
    menu.classList.remove('menu-open');
    enableScroll();
  }
});
