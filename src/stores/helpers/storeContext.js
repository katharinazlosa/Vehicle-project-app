import { createContext } from "react";
import DataStore from "../store/dataStore";

export const StoreContext = createContext(DataStore);
export const StoreProvider = StoreContext.Provider;
