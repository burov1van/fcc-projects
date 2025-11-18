const API_KEY = "7a4e6406b8adc6c566bea6be511cd816";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const resp = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await resp.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const resp = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );

  if (!resp.ok) {
    throw new Error("Ошибка при получении фильмов");
  }
  const data = await resp.json();
  return data.results;
};


export const getFullMovieInfo = async (id) => {
  const resp = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );

  if (!resp.ok) {
    throw new Error("Ошибка при получении информации");
  }
  const data = await resp.json();
  return data;
};