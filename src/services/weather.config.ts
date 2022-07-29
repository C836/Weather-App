export interface Weather_Config {
  weather: {
    description: string;
    icon: string;
  };
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
}
