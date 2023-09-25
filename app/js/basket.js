

function toggleCardStatus() {

  const modalProduct = document.querySelector('.modal__product');
  const basketNumber = document.querySelector('.basket-number');
  const counter = document.querySelector('.coll');

  if (modalProduct.children.length >= 0) { 
    basketNumber.classList.add('basket--activ')
    basketNumber.innerHTML = modalProduct.children.length;
    // передаем количество в корзине и отображаем 
    counter.innerText = modalProduct.children.length;
    
  } else {
    basketNumber.classList.remove('basket--activ')
  }
  if (modalProduct.children.length == 0) {
    basketNumber.classList.remove('basket--activ')
  }
  calcCartPrice()
}


