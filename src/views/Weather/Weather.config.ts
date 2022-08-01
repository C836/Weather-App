import { WeatherDataConfig } from "../../types";

export interface WeatherConfig {
  setData: React.Dispatch<React.SetStateAction<WeatherDataConfig>>;
}
