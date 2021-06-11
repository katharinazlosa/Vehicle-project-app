import { makeObservable, observable, action } from "mobx";
import vehicleMake from "./Vehicles";
import vehicleModel from "./Vehicles";

export default class RootStore {
  vehicleMake: VehicleMake;
  vehicleModel: VehicleModel;

  constructor() {
    this.vehicleMake = new VehicleMake(this);
    this.vehicleModel = new VehicleModel(this);
  }
}

class VehicleMake {
  root: RootStore;
  vehicleMake: VehicleMake[] = [];
  constructor(root: RootStore) {
    this.root = root;
  }
  createMake(name: string, abbreviation: string) {
    this.vehicleMake.push(new VehicleMake(name, abbreviation));
  }
  get allMakes() {
    return this.vehicleMake.slice();
  }
}

class VehicleModel {
  root: RootStore;
  vehicleModel: VehicleModel[] = [];
  constructor(root: RootStore) {
    this.root = root;
  }
  createModel(makeId: String, modelName: String, modelAbb: String) {
    this.vehicleModel.push(new VehicleModel(makeId, modelName, modelAbb));
  }
}
