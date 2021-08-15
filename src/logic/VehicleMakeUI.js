import { action, makeObservable, observable } from "mobx";
import Make from "../stores/store/vehicleMake/make";

export class VehicleMakeUI {
  make = Make;
  editMake = "";
  editAbbreviation = "";
  editMode = false;

  constructor(make: Make) {
    makeObservable(this, {
      make: observable,
      editMake: observable,
      editAbbreviation: observable,
      editMode: observable,
      setEditMake: action,
      setEditAbbreviation: action,
    });
  }

  componentDidMount() {
    this.setEditMake(this.make.name);
  }

  componentDidMount() {
    this.setEditAbbreviation(this.make.abbreviation);
  }
}
