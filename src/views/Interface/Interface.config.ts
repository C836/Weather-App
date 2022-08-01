import { OptionsConfig } from "../../types";
import { WeatherDataConfig } from "../../types";

export interface InterfaceConfig {
  setData: React.Dispatch<React.SetStateAction<WeatherDataConfig>>;
  setOptions: React.Dispatch<React.SetStateAction<OptionsConfig>>;
}
