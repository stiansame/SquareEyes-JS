// SHOPPING CART

import { resultsContainer } from "./getDetails.js";
import { checkForDetails } from "./getDetails.js";

let carts = [];

const iconCart = document.querySelector("#cart");
const body = document.querySelector("body");
const closeCart = document.querySelector(".cartTab .close");
const cartBtn = document.querySelector("#addToCart");

iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

resultsContainer.addEventListener("click", () => {
  let positionClick = event.target;
  if (positionClick.classList.contains("addToCart")) {
    const mDetails = checkForDetails();
    const movie_id = mDetails.id;
    console.log("movie_id: ", movie_id);
    addToCart(movie_id);
  }
});

const addToCart = (movie_id) => {};
