import {
  generateURLFromSearch,
  generateURLFromGenre,
  generateURLForPopularMovies,
  generateImageEndpoint,
  getData,
} from "./FetchData.js";

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science-Fiction",
  "TV-Movie",
  "Thriller",
  "War",
  "Western",
];

const setHTML = (genre) => {
  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add("carouselContainer");
  carouselContainer.setAttribute("id", `${genre}-carouselContainer`);
  const main = document.querySelector("#main");
  main.appendChild(carouselContainer);

  const genreHeading = document.createElement("h1");
  genreHeading.innerText = genre;
  const track = document.createElement("div");
  track.classList.add("track");

  carouselContainer.appendChild(genreHeading);
  carouselContainer.classList.add("carouselContainer__track");
  carouselContainer.appendChild(track);
};

// function to add images and sources
const addImages = (url, genreRow) => {
  getData(url).then((data) => {
    for (let el in data.results) {
      const card = document.createElement("img");
      const track = genreRow.querySelector(".track");
      card.src = generateImageEndpoint(data.results[el].poster_path);
      track.appendChild(card);
    }
  });
};

const renderContent = (genre) => {
  const genreRow = document.querySelector(`#${genre}-carouselContainer`);
  const url = generateURLFromGenre(genre);
  addImages(url, genreRow);
};

for (let i = 0; i < genres.length; i++) {
  setHTML(genres[i]);
  renderContent(genres[i]);
}
