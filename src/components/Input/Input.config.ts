import { Properties_Config } from "../../services/search.config";

export interface Input_Config {
    location_list: Properties_Config[] | undefined;
    setList: React.Dispatch<React.SetStateAction<Properties_Config[] | undefined>>
}