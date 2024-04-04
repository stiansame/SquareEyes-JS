// SHOPPING CART

import { mDetails, resultsContainer } from "./getDetails.js";
import { checkForDetails } from "./getDetails.js";

// console.log(mDetails);

checkForDetails();
const detailArray = mDetails;
console.log("array: ", detailArray);

const iconCart = document.querySelector("#cart");
const body = document.querySelector("body");
const closeCart = document.querySelector(".cartTab .close");

iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

resultsContainer.addEventListener("click", (event) => {
  const positionClick = event.target;
  if (positionClick.classList.contains("addToCart")) {
    const p_id = detailArray.id;
    alert(p_id);
  }
});
