


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




// const tabHeader2 =  document.querySelectorAll('.navigation-btn')
// console.log(tabHeader)

// tabHeader2.forEach(function (item) {
//   item.addEventListener('click', function() {
//     console.log(this.tabHeader2)

//     const contentBox = document.querySelector('#' + this.content);
//     console.log(contentBox)

//   })
// })







