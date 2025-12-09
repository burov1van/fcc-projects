const weatherBtn = document.getElementById("get-weather-btn");
const select = document.getElementById("weather-form-select");

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

const safe = (value) => (value === undefined ? "N/A" : value);

async function showWeather(city) {
  if (!city) return;

  const data = await getWeather(city);

 if (!data || !data.main || !data.weather) {
  alert("Something went wrong, please try again later");
  return;
}

  document.getElementById("location").textContent = safe(data.name);
  document.getElementById("weather-main").textContent = safe(
    data.weather?.[0]?.main
  );
  document.getElementById("weather-icon").src = safe(data.weather?.[0]?.icon);

  document.getElementById("main-temperature").textContent = safe(
    data.main?.temp
  );
  document.getElementById("feels-like").textContent = safe(
    data.main?.feels_like
  );
  document.getElementById("humidity").textContent = safe(data.main?.humidity);
  document.getElementById("wind").textContent = safe(data.wind?.speed);
  document.getElementById("wind-gust").textContent = safe(data.wind?.gust);
}

weatherBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const city = select.value;
  showWeather(city);
});
