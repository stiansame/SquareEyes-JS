const url = "https://v2.api.noroff.dev/square-eyes";

const ResultsContainer = document.querySelector(".movie-carousel");

async function getMovies() {
  const response = await fetch(url);

  const results = await response.json();

  const title = results.data;

  ResultsContainer.innerHTML = "";

  for (let i = 0; i < title.length; i++) {
    console.log(title[i].title);
    console.log(title);
    ResultsContainer.innerHTML += `<div class="movie">
                                  <a href ="#"><img src="${title[i].image.url}" alt="${title[i].image.alt}"></a>
                                  </div> `;
  }
}
getMovies();
