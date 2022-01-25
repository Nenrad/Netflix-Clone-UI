const API_KEY = "api_key=b3ddb68dea766448674e07a0fd44d6a8";
const API_SEARCH_BASE_URL = "https://api.themoviedb.org/3/search/movie?";
const IMAGE_SOURCE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const DISCOVER_BASE_URL = "https://api.themoviedb.org/3/discover/movie?";
const POPULAR_BASE_URL = "https://api.themoviedb.org/3/trending/all/day?";
const QUERY = "query=Action&page=1";
const CONFIG = "&language=en-US&page=1&include_adult=false&";

//function to return data source url from search term
const generateURLFromSearch = (searchTerm) => {
  const query = "&query=" + searchTerm.replace(/ /g, "+") + "&page=1";
  return API_SEARCH_BASE_URL + API_KEY + query + CONFIG;
};

//function to return data source url given genre
const generateURLFromGenre = (category) => {
  const query = "&with_genre=" + category;
  return DISCOVER_BASE_URL + API_KEY + query + CONFIG;
};

const generateURLForPopularMovies = () => {
  return POPULAR_BASE_URL + API_KEY;
};

//function to fetch data
getData = async function (url) {
  const res = await fetch(url);
  return await res.json();
};
