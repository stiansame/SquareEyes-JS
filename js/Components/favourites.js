import { getExistingFavs } from "./favFunctions.js";
import { favouritesContainer } from "../script.js";

export function getFavs() {
  const favourites = getExistingFavs();

  favouritesContainer.innerHTML = "";

  favourites.forEach((favourite) => {
    favouritesContainer.innerHTML += `<div class="movie">
                                        <i class="fa fa-heart"></i>
                                        <a href ="../pages/movie_details2.html?id=${favourite.id}"><img src="${favourite.cover}" alt="${favourite.name}"></a>
                                        </div>`;
  });
}
