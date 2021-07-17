import { action, computed, makeObservable, observable } from "mobx";
import RootStore from "../../rootStore";
import VehicleModel from "./model";

export default class VehicleModelStore {
  vehicleModels: VehicleModel[] = [];
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
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
