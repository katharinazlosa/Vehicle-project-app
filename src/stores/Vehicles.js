import { makeObservable, observable, action } from "mobx";

export class VehicleMake {
  id: Number;
  name: string;
  abbrevation: string;

  constructor() {
    makeObservable(this, {
      id: observable,
      name: observable,
      abbrevation: observable,
    });
  }
}

export class VehicleModel {
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
