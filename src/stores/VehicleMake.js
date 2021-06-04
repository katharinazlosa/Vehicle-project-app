import { observable } from "mobx";

class vehicleMake {
  @observable all = [
    { id: "1", name: "Audi", abreviation: "Audi" },
    { id: "2", name: "Opel", abreviation: "Opel" },
    { id: "3", name: "BMW", abreviation: "BMW" },
    { id: "4", name: "Subaru", abreviation: "Subaru" },
    { id: "5", name: "Mercedes-Benz", abreviation: "MB" },
    { id: "6", name: "Suzuki", abreviation: "Suzuki" },
    { id: "7", name: "Fiat", abreviation: "Fiat" },
    { id: "8", name: "Ford", abreviation: "Ford" },
    { id: "9", name: "Volkswagen", abreviation: "VW" },
    { id: "10", name: "Alfa Romeo", abreviation: "AR" },
  ];
}

export default new vehicleMake();
