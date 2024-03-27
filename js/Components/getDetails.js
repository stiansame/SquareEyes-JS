const posterContainer = document.querySelector(".poster");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const movieId = params.get("id");
console.log("ID:", movieId);

const Url = "https://v2.api.noroff.dev/square-eyes/" + movieId;

async function getDetails() {
  try {
    const response = await fetch(Url);
    const json = await response.json();
    const details = json.data;

    console.log(details);

    createPoster(details);
  } catch (error) {
    console.log("Error:", error);
    // posterContainer.innerHTML = message;
  }
}

getDetails();

function createPoster(details) {
  posterContainer.innerHTML = `<div class="posterDetails">
                                <img class="posterImg" src="${details.image.url}" alt ="${details.image.alt}">
                                </div>`;
  document.title = `${details.title} | Details`;
}
