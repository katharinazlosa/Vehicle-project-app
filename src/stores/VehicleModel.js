import { makeObservable, observable, action } from "mobx";

class VehicleModel {
  id: Number;
  makeId: string;
  modelName: string;
  modelAbb: string;

  constructor() {
    makeObservable(this, {
      id: observable,
      makeId: observable,
      modelName: observable,
      modelAbb: observable,
    });
  }
}
