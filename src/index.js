import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";

import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "mobx-react";
// import { RootStore, VehiclesRoot } from "./stores/RootStore";

// const createStore = () => {
//   return new RootStore();
// };

// const rootStore = createStore();

const vehicles = [
  { id: "1", name: "Audi", abbreviation: "Audi", modelName: "A3" },
  { id: "2", name: "Opel", abbreviation: "Opel", modelName: "Astra" },
  { id: "3", name: "BMW", abbreviation: "BMW", modelName: "E36" },
  { id: "4", name: "Subaru", abbreviation: "Subaru", modelName: "Impreza" },
  { id: "5", name: "Mercedes-Benz", abbreviation: "MB", modelName: "Vito" },
  { id: "6", name: "Suzuki", abbreviation: "Suzuki", modelName: "Swift" },
  { id: "7", name: "Fiat", abbreviation: "Fiat", modelName: "Punto" },
  { id: "8", name: "Ford", abbreviation: "Ford", modelName: "Mondeo" },
  { id: "9", name: "Volkswagen", abbreviation: "VW", modelName: "Sciroco" },
  { id: "10", name: "Alfa Romeo", abbreviation: "AR", modelName: "Giulia" },
];

// vehicles.forEach((element) => {
//   rootStore.vehicleMake.createMake(
//     element.name,
//     element.abbreviation,
//     element.modelName
//   );
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />,
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// value={rootStore}
