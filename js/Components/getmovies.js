//Imports to make the API-cal work
import { ResultsContainer } from "../script.js";
import { message } from "../script.js";
import { url } from "../script.js";

//Call the API to get all the movies
export async function getMovies() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    ResultsContainer.innerHTML = "";

    const movies = json.data;
    console.log(movies);

    movies.forEach(function (movie) {
      ResultsContainer.innerHTML += `<div class="movie">
                                        <a href ="../pages/movie_details2.html?id=${movie.id}"><img src="${movie.image.url}" alt="${movie.image.alt}"></a>
                                        </div> `;
    });
  } catch (error) {
    console.log("Error:", error);
    ResultsContainer.innerHTML = message;
  }
}
