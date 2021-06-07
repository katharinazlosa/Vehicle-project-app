import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// import { Provider } from "mobx-react";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import RootStore from "./stores/RootStore";
import VehicleMake from "./stores/VehicleMake";
// import VehicleModel from "./stores/VehicleModel";

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

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider
      vehicleMake={stores.vehicleMake}
      vehicleModel={stores.vehicleModel}
    >
      <Router routes={routes} history={browserHistory} /> */}
    <App />
    {/* </Provider> , document.getElementById("app")*/}
  </React.StrictMode>,
  document.getElementById("root")
);
