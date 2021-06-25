import React from "react";
import ReactDOM from "react-dom";

import { SearchBar } from "./components/SearchBar";
// import { Pagination } from "./components/Pagination";
import { ProductTable } from "./components/ProductTable";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      sortName: "asc",
      pageChange: "",
      pageData: "",
      currentPage: 1,
      carsPerPage: 3,
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSortNameChange = this.handleSortNameChange.bind(this);
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
  handlePageData(pageData) {
    this.setState({
      pageData: pageData,
    });
  }
  handleCurrentPage(currentPage) {
    this.setState({
      currentPage: currentPage,
    });
  }
  handleCarsPerPage(carsPerPage) {
    this.setState({
      carsPerPage: carsPerPage,
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
          sortName={this.state.sortName}
          onSortNameChange={this.handleSortNameChange}
        />
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
          pageData={this.state.pageData}
          currentPage={this.state.currentPage}
          carsPerPage={this.state.carsPerPage}
        /> */}
      </div>
    );
  }
}

export { SearchBar, ProductTable };

//, Pagination
