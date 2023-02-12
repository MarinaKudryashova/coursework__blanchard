// открыть\закрыть бургер-меню
let burger = document.querySelector('.btn-burger');
let menu = document.querySelector('.menu');
let menuLink = document.querySelectorAll('.menu__link');
const body = document.body;

let disableScroll = function() {
  let paddingOffset = window.innerWidth - body.offsetWidth + 'px';
  let paddingTop = window.scrollY;
  body.dataset.position = paddingTop;
  body.style.paddingRight = paddingOffset;
  body.style.top = -paddingTop + 'px';
  body.classList.add('disable-scroll');
}

let enableScroll = function() {
  let paddingTop = parseInt(body.dataset.position, 10);
  body.style.paddingRight = '0px';
  body.style.top = 'auto';
  body.classList.remove('disable-scroll');
  window.scroll({top: paddingTop, left: 0});
  body.removeAttribute('data-position');
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

let menuClose = function() {
  burger.classList.remove('is-open');
  burger.setAttribute("aria-label", 'Открыть меню');
  menu.classList.remove('menu-open');
  enableScroll();
};

menuLink.forEach(function(e) {
  e.addEventListener('click', function() {
    menuClose();
  });
});
document.addEventListener('click',
function(el) {
  let target = el.target;
  if(!target.closest('.header__burger') && burger.classList.contains('is-open')) {
    menuClose();
  }
});

// menu-dropdown
document.addEventListener ('DOMContentLoaded', () => {
  const menuBtn = document.querySelectorAll('.menu-dropdown__btn');
  const dropList = document.querySelectorAll('.dropdown');
  const dropLink = document.querySelectorAll('.dropdown__link');

  let menuDropdownClose = function() {
    menuBtn.forEach(btn => {
      btn.classList.remove('is-open');
      btn.setAttribute('aria-label','Открыть меню');
      btn.setAttribute('aria-expanded', false);
    });
    dropList.forEach(list => {
        list.classList.remove('is-open');
    });
  };

  menuBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let currentList = currentBtn.closest('.menu-dropdown__item').querySelector('.dropdown');
      let currentSimplebarContentWrapper = currentBtn.closest('.menu-dropdown__item').querySelector('.simplebar-content-wrapper');

      menuBtn.forEach(btn => {
        if(btn !== currentBtn) {

          //TODO дальше много повторяется
          btn.classList.remove('is-open');
          btn.setAttribute('aria-label','Открыть меню');
          btn.setAttribute('aria-expanded', false);
        };
      });
      dropList.forEach(list => {
        if(list !== currentList) {
          list.classList.remove('is-open');
          currentSimplebarContentWrapper.setAttribute('tabindex', -1);
        }
      });

      currentBtn.classList.toggle('is-open');
      // меняем атрибуты доступности открыто\закрыто
      if(currentBtn.classList.contains('is-open')) {
        currentBtn.setAttribute('aria-label', 'Закрыть меню');
        currentBtn.setAttribute('aria-expanded', true);
      } else {
        currentBtn.setAttribute('aria-label','Открыть меню');
        currentBtn.setAttribute('aria-expanded', false);
      };
      currentList.classList.toggle('is-open');
    });
  });
  // закрытие списка по клику на ссылку внутри
  dropLink.forEach(link => {
    link.addEventListener('click', () => menuDropdownClose());
  });
  // закрытие списка по клику вне списка и пунктов меню
  document.addEventListener('click', (el) => {
    if(!el.target.closest('.menu-dropdown')) {
      menuDropdownClose();
    };
  });
});

// иницилизация SimpleBar
const dropdownList = document.querySelectorAll('.dropdown__list');

dropdownList.forEach(dropdown => {
  new SimpleBar (dropdown, {
  autoHide: false,
  scrollbarMaxSize: 28,
  });
});

// открыть\закрыть, отправить форму поиска
let btnSearchOpen = document.querySelector('.searchbar__open');
let formSearch = document.querySelector('.searchbar__form');
let input = document.querySelector('.searchbar__field');
let btnSearchClose = document.querySelector('.searchbar__close');

btnSearchOpen.addEventListener('click', function() {
  formSearch.classList.add('searchbar__form--open');
  btnSearchOpen.classList.add('searchbar__open--active');
  // btnSearchOpen.setAttribute('aria-expanded', true);
});

btnSearchClose.addEventListener('click', function() {
  formSearch.classList.remove('searchbar__form--open');
  btnSearchOpen.classList.remove('searchbar__open--active');
  // btnSearchOpen.setAttribute('aria-expanded', false);
  input.value = '';
});

// document.addEventListener('click',
// function(el) {
//   let target = el.target;
//   if(!target.closest('.header__search-bar')) {
//     formSearch.classList.remove('is-open');
//     // btnSearchOpen.setAttribute('aria-expanded', false);
//     input.value = '';
//   }

// });

// иницилизация slider-swiper
const promoSwiper = new Swiper(".promo-swiper", {
  loop: true,
  slideClass: 'promo-swiper__slide',
  wrapperClass: 'promo-swiper__wrapper',
  speed: 2000,
  autoplay: {
    delay: 2000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});
const gallerySwiper = new Swiper(".gallery-swiper", {
  slideClass: 'gallery-swiper__slide',
  wrapperClass: 'gallery-swiper__wrapper',
  navigation: {
    nextEl: '.gallery-swiper__btn-next',
    prevEl: '.gallery-swiper__btn-prev',
  },
  pagination: {
    el: '.gallery-swiper__pagination',
    type: 'fraction',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    // when window width is >= 567px
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
    // when window width is >= 768px
    // 768: {
    //   slidesPerView: 2,
    //   slidesPerGroup: 2,
    //   spaceBetween: 38,
    // },
    // when window width is >= 992px
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },
    // when window width is >= 992px
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  }
});

// иницилизация Choices
const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
  position: 'bottom',
  classNames: {
    containerOuter: 'choices gallery__choices',
  },
});

// modal-windows
const btnsModalOpen = document.querySelectorAll('.gallery__btn-open');
const modalOverlay = document.querySelector('.overlay');
const modals = document.querySelectorAll('.modal');
const btnsModalClose = document.querySelectorAll('.modal__btn-close');

btnsModalOpen.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        let path =e.currentTarget.getAttribute('data-path');
        modals.forEach(function(el) {
            el.classList.remove('modal--visible');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('overlay--visible');
        disableScroll();
    });
});

let modalClose = function() {
  modalOverlay.classList.remove('overlay--visible');
  enableScroll();
  modals.forEach(function(el) {
    el.classList.remove('modal--visible');
  });
};

// закрытие закрытие окна по close
btnsModalClose.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
  modalClose();
  });
});

// закрытие закрытие окна по click
modalOverlay.addEventListener('click', function(e) {
    if(e.target == modalOverlay) {
      modalClose();
    }
});
