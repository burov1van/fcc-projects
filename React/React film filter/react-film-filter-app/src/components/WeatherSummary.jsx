import "../css/WeatherSummary.css";

export default function WeatherSummary({ weatherData }) {
  if (!weatherData) {
    return <div className="weather-widget">Weather is loading...</div>;
  }

  const tempArray = weatherData.data_1h.temperature;
  const windArray = weatherData.data_1h.windspeed;
  const daylightArray = weatherData.data_1h.isdaylight;
  const todayDate = weatherData.data_day.time[0];
  const todayPictocode = weatherData.data_day.pictocode[0];
  const dateObj = new Date(todayDate);

  const hourTimes = weatherData.data_1h.time;
  const hourTemps = weatherData.data_1h.temperature;
  console.log(`"hourTimes" ${hourTimes}`);
  console.log(`"hourTemps" ${hourTemps}`);

  const nextSixTimes = hourTimes.slice(0, 24);
  console.log(`"nextSixTimes" ${nextSixTimes}`);

  function splitDateTime(dateTimeString) {
    const [datePart, timePart] = dateTimeString.split(" ");
    return { datePart, timePart };
  }

  function formatDay(dateString) {
    const d = new Date(dateString);
    const weekdaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthsShort = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const weekday = weekdaysShort[d.getDay()];
    const day = d.getDate();
    const month = monthsShort[d.getMonth()];

    return `${weekday}, ${day} ${month}`;
  }

  const weekdayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const weekday = weekdayNames[dateObj.getDay()];
  const day = dateObj.getDate();
  const month = monthNames[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  const formattedDate = `${weekday}, ${day} ${month}, ${year}`;

  const pictocodeToStatus = {
    1: "sunny",
    2: "mostly sunny",
    3: "partly cloudy",
    4: "cloudy",
    5: "very cloudy",
    20: "cloudy with sunny spells",
    6: "overcast",
    7: "foggy",
    8: "misty",
    9: "hazy",
    10: "light rain",
    11: "rainy",
    12: "heavy rain",
    13: "rain showers",
    14: "drizzle",
    15: "freezing rain",
    43: "thundery showers",
    16: "thunderstorm",
    17: "severe thunderstorm",
    44: "lightning possible",
    18: "light snow",
    19: "snowy",
    21: "heavy snow",
    22: "snow showers",
    23: "sleet",
    24: "snow-rain mix",
    25: "blizzard",
    30: "windy",
    31: "very windy",
    32: "stormy",
    40: "dusty",
    41: "sandstorm",
    42: "smoky",
  };

  const todayStatus = pictocodeToStatus[todayPictocode] || "unknown weather";

  const currentIndex = 0;

  const currentTemp = Math.round(tempArray[currentIndex]);
  const currentWind = windArray[currentIndex];
  const isDay = daylightArray[currentIndex] === 1;
  const daytimeIcon = isDay ? "☀️" : "🌙";

  return (
    <div className="weather-widget">
      <div className="weather-widget__header">
        <p className="weather-widget__status">Today is {todayStatus}</p>
        <p className="weather-widget__date">{formattedDate}</p>
      </div>

      <div className="weather-widget__info">
        <div className="weather-widget__temp">{currentTemp}°C</div>
        <div className="weather-widget__wind">
          Wind: {currentWind.toFixed(1)}
        </div>
        <div className="weather-widget__daytime-icon">{daytimeIcon}</div>
      </div>

      <div className="weather-widget__hours">
        <h3 className="weather-widget__section-title">Weather by hours</h3>
        <ul className="weather-widget__hours-list">
          {nextSixTimes.map((timestamp, index) => {
            const { timePart } = splitDateTime(timestamp);
            const temp = Math.round(hourTemps[index]);

            return (
              <li className="weather-widget__hour-item" key={index}>
                <div className="weather-widget__hour-time">{timePart}</div>
                <div className="weather-widget__hour-temp">{temp}°C</div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="weather-widget__days">
        <h3 className="weather-widget__section-title">Weather by days</h3>
        <ul className="weather-widget__days-list">
          {weatherData.data_day.time.map((date, index) => (
            <li className="weather-widget__day-item" key={index}>
              <div className="weather-widget__day-name">{formatDay(date)}</div>
              <div className="weather-widget__day-temp">
                {weatherData.data_day.temperature_min[index]} /{" "}
                {weatherData.data_day.temperature_max[index]}°C
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
