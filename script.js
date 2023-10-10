function initSlider() {
  new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },

}); 
}


function detectDevice() {
if(window.innerWidth < 768){
  initSlider();
} else{

}
}
  
detectDevice();


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