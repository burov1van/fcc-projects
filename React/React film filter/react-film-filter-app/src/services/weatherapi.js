const API_KEY = "tZA2MQ8WHFal7VwS";
const BASE_URL = "https://my.meteoblue.com/packages/";

export const getWeather = async (lat, lon) => {
  const resp = await fetch(
    `${BASE_URL}basic-1h_basic-day?lat=${lat}&lon=${lon}&apikey=${API_KEY}`,
  );
  if (!resp.ok) {
    throw new Error("Failed to fetch weather");
  }

  const data = await resp.json();
  return data;
};
