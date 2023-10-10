document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 768){
      swiper = new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 0,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        680: {
          slidesPerView: 2.7,
          spaceBetween: 0,
        },
        750: {
          slidesPerView: 3.0,
          spaceBetween: 0,
          }
      } 
    });
  }
})

let clickButton = document.querySelector('.section-form__button');
let textButton = document.querySelector('.section-form__label');
let elemSectionUl = document.querySelector('.section-container-ul');

clickButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (textButton.textContent === 'Показать все') {
    textButton.textContent = 'Скрыть';
    elemSectionUl.classList.add('hidden');
  } else {
    textButton.textContent = 'Показать все';
    elemSectionUl.classList.remove('hidden');
  }  
});