function calculateCartTotal() { 
  const backbagPrice = 54.99;
  const shoesPrice = 74.99;
  const shippingPrice = 19;

  const backbagQuantity = document.querySelector('#backbagQuantity').value;
  const shoesQuantity = document.querySelector('#shoesQuantity').value;

  const backbagTotal = backbagQuantity * backbagPrice;
  const shoesTotal = shoesQuantity * shoesPrice;

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

function validateForm() {
  const form = document.querySelector('#checkoutForm');
  const inputs = form.querySelectorAll('input');
  console.log({inputs});
  const errors = [];

  inputs.forEach(input => {
    const isInputValid = input.checkValidity();
    if (!isInputValid) {
      errors.push(input.name);
    }
  });

  return errors;
}

function showToastWithFormValidity() {
  const toast = document.querySelector('#toast');
  const toastText = document.querySelector('#toast span');
  const formHasErrors = validateForm();
  let toastClassname = '';

  if (formHasErrors.length > 0) {
    toastText.innerHTML = `Please check the following fields: ${formHasErrors.join(', ')}`;
    toastClassname = 'show-error';
  } else {
    toastText.innerHTML = 'Your order has been placed!';
    toastClassname = 'show-success';
  }

  toast.className = toastClassname;
  setTimeout(() => {
    toast.className = toast.className.replace(toastClassname, "");
  }, 3000);
}
