import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
import data from "./Data";

window.React = React;

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    // this.handlePageChange = this.handlePageChange.bind(this);
    // this.handlePageClick = this.handlePageClick.bind(this);
    // this.handlePageData = this.handlePageData.bind(this);
    // this.handleCurrentPage = this.handleCurrentPage.bind(this);
    // this.handleCarsPerPage = this.handleCarsPerPage.bind(this);
  }
  handlePageChange(e) {
    this.props.onPageChange(e.target.value);
  }
  handlePageClick(e) {
    this.props.currentPage(e.target.value);
  }
  render() {
    
    return (
      <div>
        <ul>{renderCars}</ul>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    );
  }
}
export { Pagination };
