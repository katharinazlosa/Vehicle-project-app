import React, { useContext } from "react";
import ReactDOM from "react-dom";

import { SearchBar } from "./components/SearchBar";
// import { Pagination } from "./components/Pagination";
import { ProductTable } from "./components/ProductTable";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      currentPage: 1,
      carsPerPage: 3,
    };

    this.filterTextChange = this.filterTextChange.bind(this);
    this.currentPage = this.currentPageChange.bind(this);
    this.carsPerPage = this.carsPerPageChange.bind(this);
  }
  filterTextChange(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  filterText(e) {
    this.props.filterTextChange(e.target.value);
  }
  filteredVehicles(e) {
    this.props.filteredVehiclesChange(e.target.value);
  }
  sortedVehicles(e) {
    this.props.sortedVehiclesChange(e.target.value);
  }
  render() {
    return (
      <div>
        <SearchBar filterText={this.props.filterText} />
        <ProductTable />
        {/* <Pagination
          
        /> */}
      </div>
    );
  }
}

export { App };
