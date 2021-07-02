import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import storeInstance from "./stores/Store";

export const StoreContext = React.createContext();

ReactDOM.render(
  <StoreContext.Provider value={storeInstance}>
    <App />
  </StoreContext.Provider>,
  document.getElementById("root")
);
