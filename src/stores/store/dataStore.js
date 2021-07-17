import RootStore from "../rootStore";
import MakeStore from "./vehicleMake/makeStore";
import VehicleModelStore from "./vehicleModel/modelStore";

export default class DataStore {
  makeStore: MakeStore;
  modelStore: ModelStore;

  constructor(rootStore: RootStore) {
    this.makeStore = new MakeStore(rootStore);
    this.modelStore = new ModelStore(rootStore);
  }
}
