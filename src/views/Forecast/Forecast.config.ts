import { Forecast_List_Config } from "../../services/forecast.config";

export interface ForecastConfig {
  searchValue: string | undefined;
  locationForecast: Forecast_List_Config[] | undefined;
}