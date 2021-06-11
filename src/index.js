import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "mobx-react";
import RootStore from "./stores/RootStore";
import VehicleMake from "./stores/Vehicles";
import VehicleModel from "./stores/Vehicles";

const createStore = () => {
  return new RootStore();
};

const rootStore = createStore();

const makes = [
  { id: "1", name: "Audi", abbreviation: "Audi" },
  { id: "2", name: "Opel", abbreviation: "Opel" },
  { id: "3", name: "BMW", abbreviation: "BMW" },
  { id: "4", name: "Subaru", abbreviation: "Subaru" },
  { id: "5", name: "Mercedes-Benz", abbreviation: "MB" },
  { id: "6", name: "Suzuki", abbreviation: "Suzuki" },
  { id: "7", name: "Fiat", abbreviation: "Fiat" },
  { id: "8", name: "Ford", abbreviation: "Ford" },
  { id: "9", name: "Volkswagen", abbreviation: "VW" },
  { id: "10", name: "Alfa Romeo", abbreviation: "AR" },
];

const models = [
  { makeId: "3", modelName: "X4", modelAbb: "X4" },
  { makeId: "3", modelName: "X6", modelAbb: "X4" },
  { makeId: "9", modelName: "Golf", modelAbb: "Golf" },
  { makeId: "9", modelName: "Sciroco", modelAbb: "Sciroco" },
  { makeId: "1", modelName: "Q2", modelAbb: "Q2" },
  { makeId: "1", modelName: "A4", modelAbb: "A4" },
  { makeId: "2", modelName: "Astra", modelAbb: "Astra" },
  { makeId: "2", modelName: "Corsa", modelAbb: "Corsa" },
  { makeId: "4", modelName: "Impreza", modelAbb: "Impreza" },
];

makes.forEach((element) => {
  rootStore.vehicleMake.createMake(element.name, element.abbreviation);
});

models.forEach((element) => {
  rootStore.vehicleModel.createModel(
    element.makeId,
    element.modelName,
    element.modelAbb
  );
});

ReactDOM.render(
  <React.StrictMode>
    <Provider value={rootStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
