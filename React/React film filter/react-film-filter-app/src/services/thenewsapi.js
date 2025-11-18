const API_KEY = "CxHoGCmyNMUgRoaOcqxP5Yfvm7HHGpVYQmDo970J";
const BASE_URL = "https://api.thenewsapi.com/v1";

export const getAllNews = async () => {
  const resp = await fetch(
    `${BASE_URL}/news/top?api_token=${API_KEY}&locale=us&category=entertainment&search=movie&limit=3`
  );
  if (!resp.ok) {
    throw new Error("Ошибка при получении новостей");
  }
  const data = await resp.json();
  return data.data;
};
