import React, { useEffect } from "react";
import { getWeather } from "../services/weatherapi";

export default function WeatherTest() {
  useEffect(() => {
    const loadWeather = async () => {
      const data = await getWeather();
      console.log("WEATHER:", data);
    };

    loadWeather();
  }, []);

  return <h2>Check console for weather</h2>;
}
