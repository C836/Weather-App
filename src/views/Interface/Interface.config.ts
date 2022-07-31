import { OptionsConfig } from "../../App"

export interface InterfaceConfig {
  goBack: () => void;
  setOptions: React.Dispatch<React.SetStateAction<OptionsConfig>> 
}