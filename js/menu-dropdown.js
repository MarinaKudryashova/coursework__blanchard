document.addEventListener ('DOMContentLoaded', () => {
  const menuBtn = document.querySelectorAll('.menu-dropdown__btn');
  const dropList = document.querySelectorAll('.dropdown');
  const dropLink = document.querySelectorAll('.dropdown__link');

  menuBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let currentList = currentBtn.closest('.menu-dropdown__item').querySelector('.dropdown');
      let currentSimplebarContentWrapper = currentBtn.closest('.menu-dropdown__item').querySelector('.simplebar-content-wrapper');

      menuBtn.forEach(btn => {
        if(btn !== currentBtn) {
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
  // закрытие списка по клику на ссылку внути
  dropLink.forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.forEach(btn => {
          btn.classList.remove('is-open');
          btn.setAttribute('aria-label','Открыть меню');
          btn.setAttribute('aria-expanded', false);
      });
      dropList.forEach(list => {
          list.classList.remove('is-open');
      });
    });
  });
  // закрытие списка по клику вне списка и пунктов меню
  document.addEventListener('click', (el) => {
    if(!el.target.closest('.menu-dropdown')) {
      menuBtn.forEach(btn => {
        btn.classList.remove('is-open');
        btn.setAttribute('aria-label','Открыть меню');
        btn.setAttribute('aria-expanded', false);
    });
    dropList.forEach(list => {
        list.classList.remove('is-open');
    });
    };
  });
});

