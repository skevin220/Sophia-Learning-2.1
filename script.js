
function subscribeAlert() {
  alert("Thank you for subscribing.");
}

function addToCartAlert(itemName) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  cart.push(itemName);
  sessionStorage.setItem("cart", JSON.stringify(cart));

  alert("Item added to the cart.");
}

function viewCart() {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  alert("Items in your cart:\n\n" + cart.join("\n"));
}

function clearCartAlert() {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Your cart is already empty.");
    return;
  }

  sessionStorage.removeItem("cart");
  alert("Cart cleared.");
}


function processOrderAlert() {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  sessionStorage.removeItem("cart");
  alert("Thank you for your order.");
}

function messageAlert(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("request").value;

  localStorage.setItem("customerName", name);
  localStorage.setItem("customerEmail", email);
  localStorage.setItem("customerMessage", message);

  alert("Thank you for your message.");
}
