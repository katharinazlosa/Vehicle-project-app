import { makeObservable, observable, action, computed } from "mobx";

class Store {
  vehicles = [
    {
      id: "0",
      VehicleMake: "Hyundai",
      VehicleModel: "i30",
    },
    {
      id: "1",
      VehicleMake: "Volkswagen",
      VehicleModel: "Golf VIII",
    },
    {
      id: "2",
      VehicleMake: "Škoda",
      VehicleModel: "Octavia (Mk4) Combi",
    },
    {
      id: "3",
      VehicleMake: "BMW",
      VehicleModel: "M340i xDrive",
    },
    {
      id: "4",
      VehicleMake: "Mercedes",
      VehicleModel: "C63",
    },
    {
      id: "5",
      VehicleMake: "Citroen",
      VehicleModel: "C4 Picasso",
    },
    {
      id: "6",
      VehicleMake: "Hyundai",
      VehicleModel: "Tuscon",
    },
    {
      id: "7",
      VehicleMake: "Škoda",
      VehicleModel: "Superb",
    },
    {
      id: "8",
      VehicleMake: "BMW",
      VehicleModel: "M4",
    },
    {
      id: "9",
      VehicleMake: "Toyota",
      VehicleModel: "C-HR",
    },
    {
      id: "10",
      VehicleMake: "Volkswagen",
      VehicleModel: "Passat",
    },
    {
      id: "11",
      VehicleMake: "Volkswagen",
      VehicleModel: "Tiguan",
    },
    {
      id: "12",
      VehicleMake: "Škoda",
      VehicleModel: "Fabia Estate",
    },
    {
      id: "13",
      VehicleMake: "Ford",
      VehicleModel: "Mondeo",
    },
    {
      id: "14",
      VehicleMake: "Audi",
      VehicleModel: "A5 Sportback",
    },
    {
      id: "15",
      VehicleMake: "Hyundai",
      VehicleModel: "i20",
    },
    {
      id: "16",
      VehicleMake: "Audi",
      VehicleModel: "Q7",
    },
  ];
  filterText = "";
  sortDirection = 1;
  currentPage = 1;
  vehiclesPerPage = 3;
  idLastVehicle = this.currentPage * this.vehiclesPerPage;
  idFirstVehicle = this.idLastVehicle - this.vehiclesPerPage;
  constructor() {
    makeObservable(this, {
      vehicles: observable,
      filterText: observable,
      sortDirection: observable,
      currentPage: observable,
      vehiclesPerPage: observable,
      filteredVehicles: computed,
      sortedVehicles: computed,
    });
  }
  get filteredVehicles() {
    this.vehicles
      .filter((vehicle) => {
        if (this.filterText == "") {
          return vehicle;
        } else if (
          vehicle.vehicleMake
            .toLowerCase()
            .includes(this.filterText.toLowerCase())
        ) {
          return vehicle;
        }
      })
      .map((value) => {
        return (
          <div className="user" key="key">
            <p>{value.vehicleMake}</p>
          </div>
        );
      });
  }
  get sortedVehicles() {
    return this.vehicles
      .slice(0)
      .sort(
        (a, b) => (a.VehicleMake > b.VehicleMake ? 1 : -1) * this.sortDirection
      )
      .map((item) => <li>{item.VehicleMake}</li>);
  }
}

const storeInstance = new Store();

export default storeInstance;
