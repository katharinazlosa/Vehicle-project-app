import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { App } from "./App";
// import data from "./components/Data";
import reportWebVitals from "./reportWebVitals";

// import { Provider } from "mobx-react";
// import { RootStore, VehiclesRoot } from "./stores/RootStore";

// const createStore = () => {
//   return new RootStore();
// };

// const rootStore = createStore();

// data.forEach((element) => {
//   rootStore.vehicleMake.createMake(
//     element.name,
//     element.abbreviation,
//     element.modelName
//   );
// });

ReactDOM.render(<App />, document.getElementById("root"));

// value={rootStore}
