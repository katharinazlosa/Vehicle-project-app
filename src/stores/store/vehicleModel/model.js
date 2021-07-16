import { action, makeObservable, observable } from "mobx";

let continuousId = 0;

export default class VehicleModel {
  id: number;
  makeId: string;
  modelName: string;
  modelAbbrv: string;

  constructor(makeId, modelName, modelAbbrv) {
    makeObservable(this, {
      editModelFields: action,
    });
    this.id = continuousId++;
    this.makeId = makeId;
    this.modelName = modelName;
    this.modelAbbrv = modelAbbrv;
  }

  editModelFields(makeId: string, modelName: string, modelAbbrv: string) {
    this.makeId = makeId;
    this.modelName = modelName;
    this.modelAbbrv = modelAbbrv;
  }
}
