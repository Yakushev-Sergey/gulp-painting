
const productContainer = document.querySelector('.reproductions-paintings');
getProducts()

async function getProducts() {
  const response = await fetch('./js/products.json');

  const productArray = await response.json();

  renderProducts(productArray);
}

function renderProducts(productArray) {
  productArray.forEach(function (item) {
    const productHtml = `
    <div class="reproductions-paintings__item" data-id="${item.id}">
    <img class="reproductions-paintings__img" src="./images/${item.imgSrc}" alt="">
    <div class="paintings__text">
      <p data-p>${item.p}</p>
      <h4 data-h4>${item.h4}</h4>
      <i data-i>${item.i}</i>
      <span data-span>${item.span}</span>
    </div>
    <button class="paintings__btn" data-cart="plus">В корзину</button>
  </div> `;
    productContainer.insertAdjacentHTML('beforeend', productHtml);

  });
};

// с использованием json не работают табы товары есть но когда переключаешься между табами они пробадаю. еще не знаю как это фиксить 
