import { History_List_Config } from "../../services/history.config";
import { Weather_Config } from "../../services/weather.config";

export interface WeatherConfig {
  locationData: {
    search: string;
    data: Weather_Config | undefined;
  };
  locationHistory: History_List_Config[] | undefined;
  setHistory: React.Dispatch<
    React.SetStateAction<History_List_Config[] | undefined>
  >;
}
