//Imports to make the API-call work
import { ResultsContainer } from "../script.js";
import { favouritesContainer } from "../script.js";
import { message } from "../script.js";
import { url } from "../script.js";
import { getExistingFavs } from "./favFunctions.js";
import { handleClick } from "./favFunctions.js";
import { getFavs } from "./favourites.js";

//Call the API to get all the movies
export async function getMovies() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    ResultsContainer.innerHTML = "";
    favouritesContainer.innerHTML = "";

    const movies = json.data;

    movies.forEach(function (movie) {
      ResultsContainer.innerHTML += `<div class="movie">
                                      <i class="far fa-heart" data-id="${movie.id}" data-name="${movie.title}" data-cover="${movie.image.url}"></i>
                                        <a href ="../pages/movie_details2.html?id=${movie.id}"><img src="${movie.image.url}" alt="${movie.image.alt}"></a>
                                        </div> `;
    });
    const favButtons = document.querySelectorAll(".movie i");

    favButtons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });
  } catch (error) {
    console.log("Error:", error);
    ResultsContainer.innerHTML = message;
  }

  getFavs();
}
