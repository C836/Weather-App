import axios from "axios";
import { LocationConfig } from "../types";

const BASE_URL = "https://api.geoapify.com/v1/geocode/autocomplete";
const API_KEY = import.meta.env.VITE_GEOAPIFY_KEY;

function getAddress(locationList: LocationConfig[]) {
  const result = locationList.map((location) => ({
    city: location.city,
    country: location.country,
  }));

  return result;
}

export async function searchRequest(searchParam: string) {
  const url = { url: BASE_URL + `?text=${searchParam}&apiKey=${API_KEY}` };

  const data = await axios(url).then((response) => {
    const locationList = response.data.features;
    const result = getAddress(locationList);
    return result;
  });

  return data;
}
