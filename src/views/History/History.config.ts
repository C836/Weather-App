import { History_List_Config } from "../../services/history.config";

export interface HistoryConfig {
  searchValue: string;
  locationHistory: History_List_Config[] | undefined;
}