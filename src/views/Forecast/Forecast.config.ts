import { Forecast_List_Config } from "../../services/forecast.config";

export interface ForecastConfig {
  searchValue: string;
  locationForecast: Forecast_List_Config[] | undefined;
}