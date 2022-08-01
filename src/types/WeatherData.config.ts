export interface WeatherDataConfig {
  search: string | undefined;
  locationList: LocationConfig[] | undefined;
  weather: WeatherConfig | undefined;
  forecast: ForecastConfig | undefined;
}

export interface LocationConfig {
  city: string;
  country: string;
}

export interface WeatherConfig {
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
}

export interface ForecastConfig extends WeatherConfig {
  dt_txt: string;
}
