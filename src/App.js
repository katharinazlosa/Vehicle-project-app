import React from "react";
import ReactDOM from "react-dom";

// import SearchBar from "./components/SearchBar";
// import Pagination from "./components/Pagination";
import ProductTable from "./components/ProductTable";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      sortName: "",
      pageChange: "",
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSortNameChange = this.handleSortNameChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  handleSortNameChange(sortName) {
    this.setState({
      sortName: sortName,
    });
  }
  handlePageChange(pageChange) {
    this.setState({
      pageChange: pageChange,
    });
  }

  render() {
    return (
      <div>
        {/* <SearchBar
          filterText={this.state.filterText}
          sortName={this.state.sortName}
          onFilterTextChange={this.handleFilterTextChange}
          onSortNameChange={this.handleSortNameChange}
        /> */}
        <ProductTable
          // vehicles={this.prop.vehicles}
          filterText={this.state.filterText}
          sortName={this.state.sortName}
          pageChange={this.state.pageChange}
          onPageChange={this.handlePageChange}
          pageChange={this.state.pageChange}
        />
        {/* <Pagination
          pageChange={this.state.pageChange}
          onPageChange={this.handlePageChange}
          pageChange={this.state.pageChange}
        /> */}
      </div>
    );
  }
}

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

export default App();
