//Imports Here!
import { createMessage } from "./Components/Message.js";
import { getMovies } from "./Components/getmovies.js";

//URL for API-call
export const url = "https://v2.api.noroff.dev/square-eyes";

//Define DIV to display API-call results
export const ResultsContainer = document.querySelector(".movie-carousel");

//Display message
export const message = createMessage();

getMovies();
