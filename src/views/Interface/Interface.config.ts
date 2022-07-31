import { OptionsConfig } from "../../App"

export interface InterfaceConfig {
  searchValue: string | undefined;
  goBack: () => void;
  setOptions: React.Dispatch<React.SetStateAction<OptionsConfig>> 
}