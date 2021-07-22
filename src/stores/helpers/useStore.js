import { useContext } from "react";
import DataStore from "../store/dataStore";
import { StoreContext } from "./storeContext";

export const useStores = () => {
  return useContext(StoreContext);
};
