import DataStore from "./store/dataStore";

export default class RootStore {
  dataStore: DataStore;

  constructor(dataStore: DataStore) {
    this.dataStore = new DataStore(this);
  }
}
