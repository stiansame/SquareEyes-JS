import { url } from "../script.js";

console.log("url:", url);

const featuredContainer = document.querySelector(".featured_content");
const comFav = document.querySelector(".comFav");

async function getAllMovies() {
  const response = await fetch(url);
  const json = await response.json();
  const movies = json.data;

  getFeatured(movies);
  //   getLatest(movies);
  getApiFav(movies);
}

getAllMovies();

export function getFeatured(movies) {
  //   Fisher-Yates Sorting Algorithm
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  featuredContainer.innerHTML = "";

  const myArray = movies;
  const shuffledArray = shuffle(myArray);

  //   for (let i = 0; i < shuffledArray.length; i++) {
  //     if (i === 2) {
  //       break;
  //     }
  //     console.log("Random Featured:", shuffledArray[i].title);
  //   }

  for (let i = 0; i < shuffledArray.length; i++) {
    featuredContainer.innerHTML += `<div class="feature" style="background-image:url(${shuffledArray[i].image.url})">
                                        
                                        <div class="feature-content">
                                        <div class="heading_1">${shuffledArray[i].title}</div>
                                        <div class="rating"> Rating: ${shuffledArray[i].rating}</div>
                                        <div class="desc"><p> ${shuffledArray[i].description}</p></div>
                                        <div class="cta_button">
                                        <a href="/pages/movie_details2.html?id=${shuffledArray[i].id}"> Read More!</a>
                                        </div>
                                        </div>
                                        </div>`;

    if (i === 1) {
      break;
    }
  }
}

//Display by API favourite
function getApiFav(movies) {
  for (let i = 0; i < movies.length; i++) {
    if (!movies[i].favorite) {
      continue;
    }
    // console.log("favs:", movies[i].title);
  }
}
