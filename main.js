import {
  generateURLFromSearch,
  generateURLFromGenre,
  generateURLForPopularMovies,
  generateImageEndpoint,
  getData,
  getGenres,
  genres,
} from "./FetchData.js";

const setHTML = (genre) => {
  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add("carouselContainer");
  carouselContainer.setAttribute(
    "id",
    `${genre.replace(/' '/g, "-")}-carouselContainer`
  );
  console.log(genre.replace(/' '/g, "-"));
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
    console.log(data.results);
    for (let el in data.results) {
      const card = document.createElement("img");
      const track = genreRow.querySelector(".track");
      card.src = generateImageEndpoint(data.results[el].poster_path);
      track.appendChild(card);
    }
  });
};

const renderContent = (genre) => {
  const genreRow = document.querySelector(
    `#${genre.name.replace(/ /g, "-")}-carouselContainer`
  );
  const url = generateURLFromGenre(genre.id);
  addImages(url, genreRow);
};

for (let i = 0; i < genres.length; i++) {
  setHTML(genres[i].name);
  renderContent(genres[i]);
}
