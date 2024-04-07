//Imports Here!
import { createMessage } from "./Components/Message.js";
import { initialize } from "./Components/app.js";

//URL for API-call
export const url = "https://v2.api.noroff.dev/square-eyes";

//Define DIV to display API-call results
export const resultsContainer = document.querySelector(".movie-carousel");
export const favouritesContainer = document.querySelector(".favourites");

//Display message
export const message = createMessage();

initialize();
