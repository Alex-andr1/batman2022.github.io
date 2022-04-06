//скопировано с https://swiperjs.com/get-started из раздела Initialize Swiper нажимаем Core
const swiper = new Swiper('.main-slider', {
  slidesPerView: 2, //сколько слайдов видно
  spaceBetween: 30, 
    loop: true,
    navigation: {
      nextEl: '.main-slider__arrow',
      //prevEl: '.swiper-button-prev',
    },
    breakpoints:{
      320: { //кол-во пикселей (лучше 425px)
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      }
    }
  });

//открыть/закрыть меню справа
let burger = document.querySelector('.menu-burger'); //ссылаемся на меню бургер
let closeMenu = document.querySelector('.header__menu-close'); //ссылаемся на крестик
let menuMobile = document.querySelector('.header');

burger.addEventListener('click', () => { // прослушиватель событий
  menuMobile.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  menuMobile.style.display = 'none';
});

//модальное окно с трейлером
const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main__button-play');

buttonModal.addEventListener('click', (e) => {
  modalWindow.classList.add('active');
});

// закрыть по клику в любом месте
modalWindow.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal__inner');

  if (!isModal){
    modalWindow.classList.remove('active');
  }
});