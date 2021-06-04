import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "mobx-react";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import stores from "./stores";

ReactDOM.render(
  <React.StrictMode>
    <Provider
      vehicleMake={stores.vehicleMake}
      vehicleModel={stores.vehicleModel}
    >
      <Router routes={routes} history={browserHistory} />
      <App />
    </Provider>
    , document.getElementById("app")
  </React.StrictMode>,
  document.getElementById("root")
);

render();
