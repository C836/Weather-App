import { Forecast_List_Config } from "../../services/forecast.config";
import { Weather_Config } from "../../services/weather.config";

export interface WeatherConfig {
  locationData: {
    search: string | undefined;
    data: Weather_Config | undefined;
  };
  locationForecast: Forecast_List_Config[] | undefined;
  setForecast: React.Dispatch<
    React.SetStateAction<Forecast_List_Config[] | undefined>
  >;
}
