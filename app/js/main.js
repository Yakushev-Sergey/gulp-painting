


const tabHeader =  document.querySelectorAll('[data-tab]');
const content = document.querySelectorAll('[data-tab-content]');


tabHeader.forEach(function (item) {
  item.addEventListener('click', function () {

    // скрыть все боксы
    content.forEach(function (item) {
      item.classList.add('hidden');
    });

    const contentBox = document.querySelector('#' + this.dataset.tab);
    contentBox.classList.remove('hidden');

  })
})


// меню телефон 

const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuBtn.addEventListener('click', ()=> {
  menuMobile.classList.toggle('active-menu')
  menuBtn.classList.toggle('active-menu')
  body.classList.toggle('active-menu')
});



const basket = document.querySelector('.heder__basket');
const basketModal = document.querySelector('.basket-modal__wrapper');
const modalClose = document.querySelector('.modal-close');
const basketMobile = document.querySelector('.basket-mobile');

basket.addEventListener('click', () => {
  basketModal.classList.add('open')

  modalClose.addEventListener('click', () => {
    basketModal.classList.remove('open')
  });
});

// basketMobile.addEventListener('click', () => {
//   basketModal.classList.add('open')

//   modalClose.addEventListener('click', () => {
//     basketModal.classList.remove('open')
//   });
// });








