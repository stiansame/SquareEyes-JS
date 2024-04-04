//Select html element

const moviesContainer = document.querySelector(".feature");
const finalMovies = checkSessionStorage();
console.log("f:", finalMovies);

//Get Movies from API
import { url } from "../script.js";

async function apiCall() {
  const apiResponse = await fetch(url);
  const apiJSON = await apiResponse.json();
  const apiMovies = apiJSON.data;

  storeMovies(apiMovies);
}

apiCall();

//Set movieList to SessionStorage
function storeMovies(sessionMovies) {
  sessionStorage.setItem("movieList", JSON.stringify(sessionMovies));
}

//Check SessionStoreage
function checkSessionStorage() {
  const sessionMovies = sessionStorage.getItem("movieList");
  if (!sessionMovies) {
    return [];
  } else {
    return JSON.parse(sessionMovies);
  }
}

//Render out list of movies

function renderMovies() {
  finalMovies.forEach((movie) => {
    moviesContainer.innerHTML += `
    <div class="movie">
    <i class="far fa-heart"></i>
   <img class="posterImg" src="${movie.image.url}" alt ="${movie.title}">
   </div>`;
  });
}

renderMovies();
