const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
let cart = [];

// Function to update the cart UI
function updateCart() {
  cartItemsList.innerHTML = '';  // Clear the cart items list

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(li);
    total += item.price;
  });

  totalPriceElement.textContent = total.toFixed(2);
}

// Event listener for "Add to Cart" buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.getAttribute('data-product-id');
    const productName = button.getAttribute('data-name');
    const productPrice = parseFloat(button.getAttribute('data-price'));

    // Add product to cart
    cart.push({ id: productId, name: productName, price: productPrice });

    // Update the cart UI
    updateCart();
  });
});

// Checkout functionality (simple alert)
document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert('Proceeding to checkout...');
    // You can implement the actual checkout process here
  }
});