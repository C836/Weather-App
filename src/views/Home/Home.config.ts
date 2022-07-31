import { Properties_Config } from "../../services/search.config";
import { Weather_Config } from "../../services/weather.config";

export interface HomeConfig {
  locationList: Properties_Config[] | undefined;
  locationData: { search: string; data: Weather_Config | undefined };
  setList: React.Dispatch<
    React.SetStateAction<Properties_Config[] | undefined>
  >;
  setLocation: React.Dispatch<
    React.SetStateAction<{
      search: string;
      data: Weather_Config | undefined;
    }>
  >;
}
