export const API_KEY = "api_key=b3ddb68dea766448674e07a0fd44d6a8";
export const API_SEARCH_BASE_URL = "https://api.themoviedb.org/3/search/movie?";
export const IMAGE_SOURCE_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const DISCOVER_BASE_URL = "https://api.themoviedb.org/3/discover/movie?";
export const POPULAR_BASE_URL =
  "https://api.themoviedb.org/3/trending/all/week?";
export const QUERY = "query=Action&page=1";
export const CONFIG = "&language=en-US&page=1&include_adult=false&";

//function to generate endpoint given search term
export const generateURLFromSearch = (searchTerm) => {
  const query = "&query=" + searchTerm.replace(/ /g, "+") + "&page=1";
  return API_SEARCH_BASE_URL + API_KEY + query + CONFIG;
};

//function to generate endpoint given category
export const generateURLFromGenre = (category) => {
  const query = "&with_genre=" + category;
  return DISCOVER_BASE_URL + API_KEY + query + CONFIG;
};

//function to generate endpoint for popular movies of the week
export const generateURLForPopularMovies = () => {
  return POPULAR_BASE_URL + API_KEY;
};

export const getData = async function (url) {
  const res = await fetch(url);
  return await res.json();
};

export const generateImageEndpoint = (image_path) => {
  return IMAGE_SOURCE_BASE_URL + image_path;
};
