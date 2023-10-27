//кнопоки
const quantityControls = document.querySelectorAll('.product__quantity-control');

quantityControls.forEach(control => {
  control.addEventListener('click', () => {
    const valueElement = control.closest('.product__quantity-controls').querySelector('.product__quantity-value');

    let value = parseInt(valueElement.textContent);

    if (control.classList.contains('product__quantity-control_dec')) {
      value = Math.max(1, value - 1); 
    } else {
      value++;
    }
    
    valueElement.textContent = value;

  });
});
//корзина
const addButtons = document.querySelectorAll('.product__add');

addButtons.forEach(button => {

  button.addEventListener('click', () => {

    const product = button.closest('.product');
    const productId = product.dataset.id;
    const productImage = product.querySelector('.product__image').src;
    const quantityValue = product.querySelector('.product__quantity-value').textContent;
    
    const cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);

    if (cartProduct){
      const countElement = cartProduct.querySelector('.cart__product-count');
      let count = parseInt(countElement.textContent);
      count += parseInt(quantityValue);
      countElement.textContent = count;
    } 
    else{
      const cart = document.querySelector('.cart__products');
      const newProduct = document.createElement('div');
      newProduct.classList.add('cart__product');
      newProduct.dataset.id = productId;
      newProduct.innerHTML = `<img src="${productImage}" class="cart__product-image">
        <div class="cart__product-count">${quantityValue}</div>`;
      cart.appendChild(newProduct);
    }

  });

});
