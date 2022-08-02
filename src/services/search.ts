import axios from "axios";
import { ResponseLocationConfig } from "../types/WeatherData.config";

const BASE_URL = "https://api.geoapify.com/v1/geocode/autocomplete";

function getAddress(locationList: ResponseLocationConfig[]) {
  const result = locationList.map((location) => ({
    city: location.properties.city,
    country: location.properties.country,
  }));

  return result;
}

export async function searchRequest(searchParam: string, apiKey: string) {
  const url = { url: BASE_URL + `?text=${searchParam}&apiKey=${apiKey}` };

  const data = await axios(url).then((response) => {
    const locationList = response.data.features;
    const result = getAddress(locationList);

    console.log(locationList)
    console.log(result)
    return result;
  });

  return data;
}
