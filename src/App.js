import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
import VehicleMakeList from "./components/VehicleMakeList";
import VehicleModelList from "./components/VehicleModelList";

const App = () => {
  return (
    <div className="App">
      <Router>
        <nav className="navigation">
          <NavLink className="navigationLink" to="/makes">
            Makes
          </NavLink>
          <NavLink className="navigationLink" to="/models">
            Models
          </NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <Redirect to="/makes" />
          </Route>
          <Route path="/makes">
            <VehicleMakeList />
          </Route>
          <Route path="/models">
            <VehicleModelList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export { App };
