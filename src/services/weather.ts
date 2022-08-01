import axios from "axios";
import { WeatherConfig } from "../types";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_WEATHER_KEY;

function getWeather(weatherInfo: WeatherConfig) {
  const { weather, main } = weatherInfo;

  const result = {
    weather: [
      {
        description: weather[0].description,
        icon: weather[0].icon,
      },
    ],
    main: {
      temp: main.temp,
      temp_max: main.temp_max,
      temp_min: main.temp_min,
    },
  };

  return result;
}

export async function weatherRequest(searchParam: string, lang: string) {
  const url = BASE_URL + `?q=${searchParam}&lang=${lang}&appid=${API_KEY}`;

  const data = await axios.get(url).then((response) => {
    const weatherData = response.data;
    const result = getWeather(weatherData);
    return result;
  });

  return data;
}
