import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header";
import Makes from "./components/Makes";
import Models from "./components/Models";

const App = () => {
  return (
    <div className="box">
      <Router>
        <Header />
        <nav>
          <NavLink className="navigation" to="/makes">
            Makes
          </NavLink>
          <NavLink className="navigation" to="/models">
            Models
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/makes">
            <Makes />
          </Route>
          <Route path="/models">
            <Models />
          </Route>
        </Switch>
        {/* footer */}
      </Router>
    </div>
  );
};

export default App;
