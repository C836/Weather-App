import axios from "axios";
import { ForecastConfig } from "../types";

const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = import.meta.env.VITE_WEATHER_KEY;

function getForecast(forecast: ForecastConfig[]) {
  const result: any = [];

  for (let index = 0; index < forecast.length; index++) {
    const list = forecast[index];

    if (index % 8 === 0) {
      result.push({
        weather: [
          {
            description: list.weather[0].description,
            icon: list.weather[0].icon,
          },
        ],
        main: {
          temp: list.main.temp,
          temp_max: list.main.temp_max,
          temp_min: list.main.temp_min,
        },
        dt_txt: list.dt_txt,
      });
    }
  }

  return result;
}

export async function forecastRequest(searchParam: string, lang: string) {
  const url = BASE_URL + `?q=${searchParam}&lang=${lang}&appid=${API_KEY}`;

  const data = await axios.get(url).then((response) => {
    const forecastData = response.data.list;
    const result = getForecast(forecastData);
    return result;
  });

  return data;
}
