// import { message } from "../script.js";

async function getAllMovies() {
  try {
    const favourites = getExistingFavs();

    const response = await fetch(url);
    const json = await response.json();

    resultsContainer.innerHTML = "";
    favouritesContainer.innerHTML = "";

    const movies = json.data;

    movies.forEach(function (movie) {
      let cssClass = "far";

      const doesObjectExist = favourites.find(function (fav) {
        return fav.id === movie.id;
      });

      if (doesObjectExist) {
        cssClass = "fa";
      }

      resultsContainer.innerHTML += `<div class="movie">
                                      <i class="${cssClass} fa-heart" data-id="${movie.id}" data-name="${movie.title}" data-cover="${movie.image.url}"></i>
                                        <a href ="../pages/movie_details2.html?id=${movie.id}"><img src="${movie.image.url}" alt="${movie.image.alt}"></a>
                                        </div> `;
    });
  } catch (error) {
    resultsContainer.innerHTML = message;
  }
}
