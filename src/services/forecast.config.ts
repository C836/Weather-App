export interface Forecast_Data_Config {
  list: Forecast_List_Config[];
}

export interface Forecast_List_Config {
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  dt_txt: string;
}
