import axios from "axios";
import { ResponseLocationConfig } from "../types/WeatherData.config";

const BASE_URL = "https://api.geoapify.com/v1/geocode/autocomplete";
const API_KEY = import.meta.env.VITE_GEOAPIFY_KEY;

function getAddress(locationList: ResponseLocationConfig[]) {
  const result = locationList.map((location) => ({
    city: location.properties.city,
    country: location.properties.country,
  }));

  return result;
}

export async function searchRequest(searchParam: string) {
  const url = { url: BASE_URL + `?text=${searchParam}&apiKey=${API_KEY}` };

  const data = await axios(url).then((response) => {
    const locationList = response.data.features;
    const result = getAddress(locationList);

    console.log(locationList)
    console.log(result)
    return result;
  });

  return data;
}
