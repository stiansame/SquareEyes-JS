//Get the movie details

//imports
import { message } from "../script.js";

const posterContainer = document.querySelector(".poster");
const descriptionContainer = document.querySelector(".description-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const movieId = params.get("id");

const Url = "https://v2.api.noroff.dev/square-eyes/" + movieId;

async function getDetails() {
  try {
    const response = await fetch(Url);
    const json = await response.json();
    const details = json.data;

    createDetails(details);
  } catch (error) {
    console.log("Error:", error);
    descriptionContainer.innerHTML = message;
    document.title = "Nope! Didn't catch that...";
  }
}

getDetails();

function createDetails(details) {
  posterContainer.innerHTML = `<div class="posterDetails">
    <i class="far fa-heart"></i>
   <img class="posterImg" src="${details.image.url}" alt ="${details.image.alt}">
   </div>`;

  document.title = `${details.title} | Details`;

  descriptionContainer.innerHTML = `<div class="heading_1">
  ${details.title}
    </div>
    <div class="meta">
    Genre: ${details.genre} | Released: ${details.released} |  Rating: ${
    details.rating
  }
    </div>
   <div class="desc">
    <p><B>Description:</b></p><p>${details.description}</p>
    </div> 
    <div class="desc">
    <p><b>Price:</b> Kr ${checkSale(details)} </p>
    </div>                                `;
}

function checkSale(details) {
  const onSale = details.onSale;
  let newPrice;

  if (!onSale) {
    newPrice = details.price;
  } else {
    newPrice = details.discountedPrice;
  }
  return newPrice;
}
