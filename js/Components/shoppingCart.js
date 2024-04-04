// SHOPPING CART

const iconCart = document.querySelector("#cart");
const body = document.querySelector("body");
const closeCart = document.querySelector(".cartTab .close");

iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
