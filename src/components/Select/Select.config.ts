import { Properties_Config } from "../../services/search.config";

export interface Select_Config {
  location_list: Properties_Config[] | undefined;
  setList: React.Dispatch<React.SetStateAction<Properties_Config[] | undefined>>;
  location_data: location_data;
  setLocation: React.Dispatch<React.SetStateAction<location_data>>;
}

interface location_data {
  search: string;
  data: any;
}
