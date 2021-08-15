import { observable, action, computed, makeObservable } from "mobx";
import VehicleModelComp from "../components/VehicleModelComp";
import VehicleModel from "../stores/store/vehicleModel/model";

export class VehicleModelUI {
  model = VehicleModel;
  makeId = "";
  modelName = "";
  modelAbbrv = "";
  editMode = false;

  constructor(model: VehicleModel) {
    makeObservable(this, {
      model: observable,
      makeId: observable,
      modelName: observable,
      modelAbbrv: observable,
      editMode: observable,
    });
  }
  componentDidMount() {
    this.setMakeId(this.model.makeId);
  }

  componentDidMount() {
    this.setModelName(this.model.modelName);
  }

  componentDidMount() {
    this.setModelAbbrv(this.model.modelAbbrv);
  }
}
