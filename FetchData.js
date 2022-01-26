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
  console.log(category);
  const query = "&with_genres=" + category;
  console.log(DISCOVER_BASE_URL + API_KEY + CONFIG + query);
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

// https://api.themoviedb.org/3/genre/movie/list?api_key=b3ddb68dea766448674e07a0fd44d6a8&language=en-US

//function to fetch genres
export const getGenres = async function () {
  const url =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=b3ddb68dea766448674e07a0fd44d6a8&language=en-US";
  const res = await fetch(url);
  return await res.json();
};

const getGenreArray = () => {
  getGenres().then((data) => {
    return data.genres;
  });
};

export const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];
