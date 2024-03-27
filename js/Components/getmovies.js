//Imports to make the API-cal wotk
import { ResultsContainer } from "../script.js";
import { message } from "../script.js";
import { url } from "../script.js";

//Call the API to get all the movies
export async function getMovies() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    const title = results.data;

    ResultsContainer.innerHTML = "";

    for (let i = 0; i < title.length; i++) {
      console.log("Success!");
      ResultsContainer.innerHTML += `<div class="movie">
                                  <a href ="../pages/movie_details.html"><img src="${title[i].image.url}" alt="${title[i].image.alt}"></a>
                                  </div> `;
    }
  } catch (error) {
    console.log("Error:", error);
    ResultsContainer.innerHTML = message;
  }
}
