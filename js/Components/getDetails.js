//Get the movie details

//imports
import { createMessage } from "../Components/Message.js";

const posterContainer = document.querySelector(".poster");
export const resultsContainer = document.querySelector(
  ".description-container"
);
const message = createMessage();

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const movieId = params.get("id");

const Url2 = "https://v2.api.noroff.dev/square-eyes/" + movieId;

export async function getDetails() {
  try {
    const response = await fetch(Url2);
    const json = await response.json();
    const details = json.data;

    createDetails(details);
    checkForDetails(details);
    storeDetail(details);
  } catch (error) {
    resultsContainer.innerHTML = message;
    document.title = "Nope! Didn't catch that...";
  }
}

getDetails();

function createDetails(details) {
  posterContainer.innerHTML = `<div class="posterDetails">
   <img class="posterImg" src="${details.image.url}" alt ="${details.image.alt}">
   </div>`;

  document.title = `${details.title} | Details`;

  resultsContainer.innerHTML = `<div class="heading_1"> ${details.title}
   </div>
    <div class="meta">
    Genre: ${details.genre} | Released: ${details.released}
     |  Rating: ${details.rating}
    </div>
   <div class="desc">
    <p><B>Description:</b></p><p>${details.description}</p>
    </div> 
    <div class="desc">
    <p><b>Price:</b> Kr ${price(details)} ${onSale(details)}</p></div>
    <div class="desc" data-id="${details.id}">
    <div class="cta_button PushToCart">
    Add to cart</div>
    </div>`;
}

function price(details) {
  const onSale = details.onSale;
  let newPrice;
  if (!onSale) {
    newPrice = details.price;
  } else {
    newPrice = details.discountedPrice;
  }
  return newPrice;
}

function onSale(details) {
  const onDiscount = details.onSale;

  let discount;
  if (!onDiscount) {
    discount = "";
  } else {
    discount =
      "<span class='discount'>On Sale!</span>" +
      "<span class='regPrice'> Ord. price: Kr " +
      details.price;
  }
  return discount;
}

//Set details to SessionStorage
function storeDetail(sessionDetails) {
  sessionStorage.setItem("movieDetails", JSON.stringify(sessionDetails));
}

//Check SessionStoreage
export function checkForDetails() {
  const sessionDetails = sessionStorage.getItem("movieDetails");
  if (!sessionDetails) {
    return [];
  } else {
    return JSON.parse(sessionDetails);
  }
}
