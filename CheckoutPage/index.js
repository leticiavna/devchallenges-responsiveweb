function calculateCartTotal() { 
  const backbagPrice = 54.99;
  const shoesPrice = 74.99;
  const shippingPrice = 19;

  const backbagQuantity = document.querySelector('#backbagQuantity').value;
  const shoesQuantity = document.querySelector('#shoesQuantity').value;

  const backbagTotal = backbagQuantity * backbagPrice;
  const shoesTotal = shoesQuantity * shoesPrice;

  console.log({ shippingPrice, backbagTotal, shoesTotal });
  const total = backbagTotal + shoesTotal + shippingPrice;

  document.querySelector('#cartTotal').innerHTML = `$${total.toFixed(2)}`;
};

function addToCart(input) {
  return parseInt(input.value) + 1;
}

function removeFromCart(input) {
  return parseInt(input.value) - 1;
}

function updateCart(input, operation) {
  let quantity = 1;
  if (operation === 'add') quantity = addToCart(input);
  else if (operation === 'remove') quantity = removeFromCart(input);
  return quantity;
}

function operateOnCart(inputName, operation) {
  const input = document.querySelector(`#${inputName}`);
  const quantity = updateCart(input, operation);
  input.value = quantity;
  input.onchange(quantity);
}

