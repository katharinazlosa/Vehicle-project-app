class RootStore {
  vehicleMake: VehicleMake;
  vehicleModel: VehicleModel;

  constructor() {
    this.vehicleMake = new VehicleMake(this);
    this.vehicleModel = new VehicleModel(this);
  }
}

class VehicleMake {
  root: RootStore;
  constructor(root: RootStore) {
    this.root = root;
  }
  // methodOne() {}
}

class VehicleModel {
  root: RootStore;
  constructor(root: RootStore) {
    this.root = root;
  }

  // getIdVehicleMake() {
  //   this.root.VehicleMake.methodOne();
  // }
}
