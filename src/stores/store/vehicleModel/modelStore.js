import { action, computed, makeObservable, observable } from "mobx";
import DataStore from "../dataStore";
import VehicleModel from "./model";

export default class VehicleModelStore {
  vehicleModels: VehicleModel[] = [];
  dataStore: DataStore;

  constructor(dataStore: DataStore) {
    makeObservable(this, {
      vehicleModels: observable,
      allMakes: computed,
      createModel: action,
    });
  }

  get allMakes() {
    return this.vehicleModels.slice();
  }

  createModel(makeId: string, modelName: string, modelAbbrv: string) {
    this.vehicleModels.push(new VehicleModel(makeId, modelName, modelAbbrv));
  }
}
