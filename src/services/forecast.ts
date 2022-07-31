import axios from "axios";
import { Forecast_Data_Config } from "./forecast.config";

const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = import.meta.env.VITE_WEATHER_KEY;

function get_forecast(forecast_data: Forecast_Data_Config) {
  const result: any = [];

  for (let index = 0; index < forecast_data.list.length; index++) {
    const list = forecast_data.list[index];

    if (index % 8 === 0) {
      result.push({
        weather: [{
          description: list.weather[0].description,
          icon: list.weather[0].icon,
        }],
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

export async function forecast_request( search_param: string, lang?: string ) {

  const url = BASE_URL + `?q=${search_param}&lang=${lang}&appid=${API_KEY}`;

  const data = await axios.get(url).then((response) => {
    const forecast_data = response.data;
    const result = get_forecast(forecast_data);
    return result;
  });

  return data;
}
