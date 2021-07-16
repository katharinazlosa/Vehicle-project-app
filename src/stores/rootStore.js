import DataStore from "./store/dataStore";

export default class RootStore {
  dataStores: DataStore;

  constructor() {
    this.dataStores = new DataStore(this);
  }
}
