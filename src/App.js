import React from "react";

import { observer } from "mobx-react";

import Header from "./components/Header";
import Table from "./components/Table";

const App = () => {
  return (
    <div className="box">
      <Header />
      <Table />
      {/* footer */}
    </div>
  );
};

export default App;
