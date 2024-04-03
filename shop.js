// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  var productIndex = -1;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      productIndex = i;
      break;
    }
  }

  // If the product is already in the cart, increase its quantity
  if (productIndex !== -1) {
    cart[productIndex].quantity++;
  } else {
    // If the product is not in the cart, add to cart with quantity 1
    var productToAdd = products.find((product) => product.id === id);
    productToAdd.quantity = 1;
    cart.push(productToAdd);
  }

  // Update the counter of products in the cart
  document.getElementById("count_product").textContent = cart.length;

  // Update the total after adding a product to cart
  updateTotal();

  // Apply promotions after updating the total
  applyPromotionsCart();
}

// Exercise 2
function cleanCart() {
  cart = [];

  document.getElementById("count_product").textContent = cart.length;

  // Update the total after cleaning the cart
  updateTotal();
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  // Initialize total as 0
  var total = 0;

  // Iterate through the cart and add the price of each product multiplied by its quantity
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }

  // Return the total calculated
  return total;
}

// Define an updateTotal function to update the total shown on the page.
function updateTotal() {
  // Obtain the total calculated by calling the calculateTotal function
  var total = calculateTotal();

  // Update the HTML element displaying the total
  document.getElementById("total_price").textContent = total.toFixed(2);
}

// Exercise 4
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  for (var i = 0; i < cart.length; i++) {
    var product = cart[i];

    // Promo cooking oil
    if (product.id === 1 && product.quantity >= 3) {
      var discount = product.price * 0.2; // 20% discount
      product.subtotalWithDiscount =
        (product.price - discount) * product.quantity;
    }

    // Promo instant cupcake mixture
    if (product.id === 3 && product.quantity >= 10) {
      var discount = product.price * 0.3; // 30% discount
      product.subtotalWithDiscount =
        (product.price - discount) * product.quantity;
    }
  }

  calculateTotal();
  updateTotal();
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {}

function open_modal() {
  printCart();
}
