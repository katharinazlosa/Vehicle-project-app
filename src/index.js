import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "./stores/helpers/createStore";
import { StoreProvider } from "./stores/helpers/storeContext";

const dataStore = createStore();

const makes = [
  { name: "Opel", abbreviation: "Opel" },
  { name: "Audi", abbreviation: "Audi" },
  { name: "BMW", abbreviation: "BMW" },
  { name: "Mercedes-Benz", abbreviation: "MB" },
  { name: "Subaru", abbreviation: "Subaru" },
  { name: "VW", abbreviation: "VW" },
  { name: "Peugeot", abbreviation: "Peugeot" },
  { name: "Renault", abbreviation: "Renault" },
  { name: "Škoda", abbreviation: "Škoda" },
  { name: "Bugatti", abbreviation: "Bugatti" },
];

const models = [
  { makeId: "0", modelName: "Astra", modelAbbrv: "Astra" },
  { makeId: "0", modelName: "Corsa", modelAbbrv: "Corsa" },
  { makeId: "1", modelName: "A5", modelAbbrv: "A5" },
  { makeId: "2", modelName: "M3", modelAbbrv: "M3" },
  { makeId: "2", modelName: "A4", modelAbbrv: "A4" },
  { makeId: "5", modelName: "Golf", modelAbbrv: "Golf" },
  { makeId: "5", modelName: "Polo", modelAbbrv: "Polo" },
  { makeId: "5", modelName: "Scirocco", modelAbbrv: "Scirocco" },
  { makeId: "5", modelName: "Arteon", modelAbbrv: "Arteon" },
];

makes.forEach((element) => {
  dataStore.makeStore.createMake(element.name, element.abbreviation);
});

models.forEach((element) => {
  dataStore.modelStore.createModel(
    element.makeId,
    element.modelName,
    element.modelAbbrv
  );
});

export const StoreContext = React.createContext();

ReactDOM.render(
  <StoreProvider value={dataStore}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
