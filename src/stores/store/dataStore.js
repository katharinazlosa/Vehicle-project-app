import MakeStore from "./vehicleMake/makeStore";
import VehicleModelStore from "./vehicleModel/modelStore";

export default class DataStore {
  makeStore: MakeStore;
  modelStore: VehicleModelStore;

  constructor(props) {
    this.makeStore = new MakeStore(this);
    this.modelStore = new VehicleModelStore(this);
  }
}
