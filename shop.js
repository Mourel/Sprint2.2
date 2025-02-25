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

  // Show the products in the cart
  printCart();
}

// Exercise 2
function cleanCart() {
  cart = [];

  document.getElementById("count_product").textContent = cart.length;

  // Update the total after cleaning the cart
  updateTotal();

  // Clean the content in the id modal cartModal
  printCart();
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  // Initialize total as 0
  var total = 0;

  // Iterate through the cart and add the price of each product multiplied by its quantity
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].subtotalWithDiscount) {
      total += cart[i].subtotalWithDiscount;
    } else {
      total += cart[i].price * cart[i].quantity;
    }
  }
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
      var discount = product.price * 0.2;
      product.subtotalWithDiscount =
        (product.price - discount) * product.quantity;
    } else if (product.id === 1) {
      product.subtotalWithDiscount = null; // Remove the discount if the condition is not met
    }

    // Promo instant cupcake mixture
    if (product.id === 3 && product.quantity >= 10) {
      var discount = product.price * 0.3;
      product.subtotalWithDiscount =
        (product.price - discount) * product.quantity;
    } else if (product.id === 3 && product.quantity < 10) {
      product.subtotalWithDiscount = null; // Remove the discount if the condition is not met
    }
  }

  updateTotal();
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  var cartTableBody = document.getElementById("cart_table_body");
  cartTableBody.innerHTML = ""; // Remove actual content from the table

  // Iterate over the products in the cart and create the table rows
  cart.forEach(function (product) {
    var row = document.createElement("tr");

    var productNameCell = document.createElement("td");
    productNameCell.textContent = product.name;
    row.appendChild(productNameCell);

    var priceCell = document.createElement("td");
    priceCell.textContent = "$" + product.price.toFixed(2);
    row.appendChild(priceCell);

    var quantityCell = document.createElement("td");

    // Create a button to remove one quantity of the product
    var removeButton = document.createElement("button");
    removeButton.textContent = "-";
    removeButton.className = "btn btn-danger btn-sm me-1";
    removeButton.onclick = function () {
      removeFromCart(product.id);
    };
    quantityCell.appendChild(removeButton);

    var quantityText = document.createElement("span");
    quantityText.textContent = product.quantity;
    quantityCell.appendChild(quantityText);

    row.appendChild(quantityCell);

    var totalCell = document.createElement("td");
    var total = product.subtotalWithDiscount
      ? product.subtotalWithDiscount
      : product.price * product.quantity;
    totalCell.textContent = "$" + total.toFixed(2);
    row.appendChild(totalCell);

    cartTableBody.appendChild(row);
  });

  updateTotal();
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
  // Search the product index in the shopping cart
  var productIndex = cart.findIndex((product) => product.id === id);

  // Check if the product is in the cart
  if (productIndex !== -1) {
    // Decrease the quantity of the product by one unit
    cart[productIndex].quantity--;

    // Check if the product quantity is 0
    if (cart[productIndex].quantity === 0) {
      // Remove the product from the cart if its quantity is 0
      cart.splice(productIndex, 1);
    }

    // Update the counter of products in the cart
    document.getElementById("count_product").textContent = cart.length;

    applyPromotionsCart();

    printCart();
  }
}

function open_modal() {
  printCart();
}
