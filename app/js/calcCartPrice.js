

function calcCartPrice() {

  const itemCard = document.querySelectorAll('.basket__item');
  // находим итог 
  const result = document.querySelector('.result');

  let totalPrice = 0;
  itemCard.forEach(function (item) {
    const priceEl = item.querySelector('.text__price');
  
    totalPrice += parseInt(priceEl.innerText);
    
  })
  result.innerText = totalPrice;

}
