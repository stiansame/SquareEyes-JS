//Imports to make the API-call work
import { ResultsContainer } from "../script.js";
import { favouritesContainer } from "../script.js";
import { message } from "../script.js";
import { url } from "../script.js";

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
                                      <i class="far fa-heart" data-id="${movie.id}" data-name="${movie.title}"></i>
                                        <a href ="../pages/movie_details2.html?id=${movie.id}"><img src="${movie.image.url}" alt="${movie.image.alt}"></a>
                                        </div> `;
    });
    const favButtons = document.querySelectorAll(".movie i");

    favButtons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });

    function handleClick() {
      this.classList.toggle("far");
      this.classList.toggle("fa");

      const id = this.dataset.id;
      const name = this.dataset.name;

      const currentFavs = getExistingFavs();

      const favItemExists = currentFavs.find(function (fav) {
        return fav.id === id;
      });

      if (!favItemExists) {
        const favItem = { id: id, name: name };
        currentFavs.push(favItem);
        saveFavs(currentFavs);
      } else {
        const newFavs = currentFavs.filter((fav) => fav.id !== id);
        saveFavs(newFavs);
      }
    }

    for (let i = 0; i < movies.length; i++) {
      if (!movies[i].favorite) {
        continue;
      }

      favouritesContainer.innerHTML += `<div class="movie">
                                        <a href ="../pages/movie_details2.html?id=${movies[i].id}"><img src="${movies[i].image.url}" alt="${movies[i].image.alt}"></a>
                                        </div> `;
    }
  } catch (error) {
    console.log("Error:", error);
    ResultsContainer.innerHTML = message;
  }
}

function getExistingFavs() {
  const favs = localStorage.getItem("favourites");

  if (!favs) {
    return [];
  } else {
    return JSON.parse(favs);
  }
}

function saveFavs(favs) {
  localStorage.setItem("favourites", JSON.stringify(favs));
}
