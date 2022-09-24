function topPlayer(name, button) {
  const cart = document.getElementById("cart");
  const li = document.createElement("li");
  li.classList.add("selected");
  li.innerHTML = `${name}`;

  const cartLeng = document.querySelectorAll(".selected");
  if (cartLeng.length < 5) {
    cart.appendChild(li);
  } else {
    alert("You can not order more than 5");
    return;
  }
  button.setAttribute("disabled", true);
}
// calculate
function calculate() {
  const perItem = document.getElementById("perItem").value;
  const cartLeng = document.querySelectorAll(".selected");
  const total = document.getElementById("total");
  total.innerHTML = `${parseFloat(perItem) * cartLeng.length}`;
}

function calculateTotal() {
  const manager = document.getElementById("manager").value || 0;
  const Coach = document.getElementById("Coach").value || 0;
  const total = document.getElementById("total").innerText || 0;
  const subtotal = document.getElementById("subtotal");

  subtotal.innerHTML = `${
    parseFloat(total) + parseFloat(manager) + parseFloat(Coach)
  }`;
}
