const url = "https://v2.api.noroff.dev/square-eyes";

const ResultsContainer = document.querySelector(".movie-carousel");

async function getMovies() {
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
    ResultsContainer.innerHTML = `<div class="error">Oh NO!</div>`;
  }
}
getMovies();
