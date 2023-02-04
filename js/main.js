// иницилизация SimpleBar
const dropdownList = document.querySelectorAll('.dropdown__list');

dropdownList.forEach(dropdown => {
  new SimpleBar (dropdown, {
  autoHide: false,
  scrollbarMaxSize: 28,
  });
});

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
