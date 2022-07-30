export interface History_Data_Config {
  list: History_Config[];
}

export interface History_Config {
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
