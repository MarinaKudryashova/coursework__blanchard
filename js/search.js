// открыть\закрыть, отправить форму поиска
let btnOpen = document.querySelector('.searchbar__open');
let formSearch = document.querySelector('.searchbar__form');
let input = document.querySelector('.searchbar__field');
let btnClose = document.querySelector('.searchbar__close');

btnOpen.addEventListener('click', function() {
  formSearch.classList.add('searchbar__form--open');
  btnOpen.classList.add('searchbar__open--active');
  // btnOpen.setAttribute('aria-expanded', true);
});

btnClose.addEventListener('click', function() {
  formSearch.classList.remove('searchbar__form--open');
  btnOpen.classList.remove('searchbar__open--active');
  // btnOpen.setAttribute('aria-expanded', false);
  input.value = '';
});

// document.addEventListener('click',
// function(el) {
//   let target = el.target;
//   if(!target.closest('.header__search-bar')) {
//     formSearch.classList.remove('is-open');
//     // btnOpen.setAttribute('aria-expanded', false);
//     input.value = '';
//   }

// });
