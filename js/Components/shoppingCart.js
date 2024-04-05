// SHOPPING CART

import { checkForDetails } from "./getDetails.js";

let ItemsCartHTML = document.querySelector(".cartList");
let cartIconCounter = document.querySelector("#counter");

const movieDetails = document.querySelector(".cartFunction");
const iconCart = document.querySelector("#cart");
const body = document.querySelector("body");
const closeCart = document.querySelector(".cartTab .close");
const cartBtn = document.querySelector("#PushToCart");

iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

movieDetails.addEventListener("click", cartHandler, () => {
  let positionClick = event.target;
  if (positionClick.classList.contains("PushToCart")) {
    // addToCart(mDetails);
  } else {
  }
});

const addToCart = (mDetails) => {
  localStorage.setItem("shoppingCart", JSON.stringify(mDetails));
};

function cartHandler() {
  const mDetails = checkForDetails();

  const id = mDetails.id;
  const price = mDetails.discountedPrice;
  const title = mDetails.title;
  const cover = mDetails.image.url;
  const amount = 1;

  const existingCart = checkCart();

  const itemExist = existingCart.find(function (item) {
    return item.id === id;
  });

  if (!itemExist) {
    const cartItem = {
      id: id,
      title: title,
      price: price,
      cover: cover,
      amount: amount,
    };
    existingCart.push(cartItem);
    addToCart(existingCart);
  } else {
    alert("item exists!");
  }
  addCartToHTML();
}

const addCartToHTML = () => {
  let carts = checkCart();

  ItemsCartHTML.innerHTML = "";
  let totalQuantity = 0;
  if (carts.length > 0) {
    carts.forEach((cart) => {
      totalQuantity = totalQuantity + cart.amount;
      const newCart = document.createElement("div");
      newCart.classList.add("cartItem");
      newCart.innerHTML = `<div class="movie">
                                <img src="${cart.cover}" alt="">
                                </div>
                                <div class="title">${cart.title}</div>
                                <div class="price"><b>Price:</b>Kr ${cart.price}</div>
                                `;
      ItemsCartHTML.appendChild(newCart);
    });
  }
  cartIconCounter.innerText = totalQuantity;
};

function checkCart() {
  const currentCart = localStorage.getItem("shoppingCart");
  if (!currentCart) {
    return [];
  } else {
    return JSON.parse(currentCart);
  }
}

const initApp = () => {
  let mainCart = checkCart();
  if (localStorage.getItem("shoppingCart")) {
    mainCart = JSON.parse(localStorage.getItem("shoppingCart"));
    addCartToHTML();
  }
};

initApp();
