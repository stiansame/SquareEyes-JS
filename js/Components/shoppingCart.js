// SHOPPING CART

import { mDetails, resultsContainer } from "./getDetails.js";

// console.log(mDetails);

const detailArray = mDetails;
console.log(detailArray);

const iconCart = document.querySelector("#cart");
const body = document.querySelector("body");
const closeCart = document.querySelector(".cartTab .close");

iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

resultsContainer.addEventListener("click", () => {
  let positionClick = event.target;
  if (positionClick.classList.contains("addToCart")) {
    alert("1");
  }
});
