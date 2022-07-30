import axios from "axios";
import { Weather_Config } from "./weather.config";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_WEATHER_KEY;

function get_weather(weather_data: Weather_Config) {
  const { weather, main } = weather_data;

  const result = {
    weather: [{
      description: weather[0].description,
      icon: weather[0].icon,
    }],
    main: {
      temp: main.temp,
      temp_max: main.temp_max,
      temp_min: main.temp_min,
    }
  };

  return result;
}

export async function weather_request(search_param: string) {
  const url = BASE_URL + `?q=${search_param}&appid=${API_KEY}`

  const data = await axios.get(url)
    .then((response) => {
      const weather_data = response.data;
      const result = get_weather(weather_data);
      return result;
  });

  return data;
}
