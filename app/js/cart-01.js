// отслеживаем клик на странице 

const modalProduct = document.querySelector('.modal__product')

window.addEventListener('click', function (event) {

  if (event.target.hasAttribute('data-cart')) {
    //  находим карточку с товаром в нутри которой был совершен клик
    const card = event.target.closest('.reproductions-paintings__item');
    // собираем данные с этого товара и записываем их в единый объект 
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.reproductions-paintings__img').getAttribute('src'),
      p: card.querySelector('[data-p]').innerText,
      h4: card.querySelector('[data-h4]').innerText,
      i: card.querySelector('[data-i]').innerText,
      span: card.querySelector('[data-span]').innerText,
    }

    //  собираем данные подставим в шаблон для товара в корзине 
    const carItemHTML = `
          <div class="reproductions-paintings__item basket__item" data-id="${productInfo.id}">
                <img class="reproductions-paintings__img basket__img" src=${productInfo.imgSrc}>
                <div class="paintings__text text__basket">
                  <p class="text__by">${productInfo.p}</p>
                  <h4 class="text__name">${productInfo.h4}</h4>
                  <i class="text__description">${productInfo.i}</i>
                  <span class="text__price">${productInfo.span}</span>
                </div>
                <button class="paintings__btn paintings__btn-basket" data-del="btnnul" >Удалить</button>
            </div>
    `;
    // отображаем товар в корзине
    modalProduct.insertAdjacentHTML('beforeend', carItemHTML)
     // отображение статуса корзины 
    toggleCardStatus();
    calcCartPrice()
  }
  
  if(event.target.dataset.del === 'btnnul') {
    event.target.closest('.reproductions-paintings__item').remove();
    // отображение статуса корзины 
    toggleCardStatus();
  }



  
});





