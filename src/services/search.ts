import axios from "axios";
import { Location_Config } from "./search.config";

const API_KEY = import.meta.env.VITE_GEOAPIFY_KEY;

function get_address(location_array: Location_Config[]){
  const result = location_array
  .map(object => ({
    street: object.properties.street, 
    city: object.properties.city, 
    country: object.properties.country})
  )

  return result
}

export async function search_request(search_param: string) {
  const config = {
    method: "get",
    url: `https://api.geoapify.com/v1/geocode/autocomplete?text=${search_param}&apiKey=${API_KEY}`,
    headers: {},
  };

  const data = await axios(config)
    .then((response) => {
      const location_array = response.data.features;
      const result = get_address(location_array)
      return result
  })

  return data;
}
