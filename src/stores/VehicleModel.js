import { observable } from "mobx";

class vehicleMake {
  @observable all = [
    { makeId: "3", modelName: "X4", modelAbrv: "X4" },
    { makeId: "3", modelName: "X6", modelAbrv: "X4" },
    { makeId: "9", modelName: "Golf", modelAbrv: "Golf" },
    { makeId: "9", modelName: "Sciroco", modelAbrv: "Sciroco" },
    { makeId: "1", modelName: "Q2", modelAbrv: "Q2" },
    { makeId: "1", modelName: "A4", modelAbrv: "A4" },
    { makeId: "2", modelName: "Astra", modelAbrv: "Astra" },
    { makeId: "2", modelName: "Corsa", modelAbrv: "Corsa" },
    { makeId: "4", modelName: "Impreza", modelAbrv: "Impreza" },
  ];
}
