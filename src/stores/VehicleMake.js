import { makeObservable, observable, action } from "mobx";

class VehicleMake {
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
