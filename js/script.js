//Imports Here!
import { createMessage } from "./Components/Message.js";
import { getMovies } from "./Components/getmovies.js";
import { getExistingFavs } from "./Components/favFunctions.js";
import { getFavs } from "./Components/favourites.js";

//URL for API-call
export const url = "https://v2.api.noroff.dev/square-eyes";

//Define DIV to display API-call results
export const resultsContainer = document.querySelector(".movie-carousel");
export const favouritesContainer = document.querySelector(".favourites");

//Display message
export const message = createMessage();

getMovies();
