import React from "react";
import ReactDOM from "react-dom";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const sortName = this.props.sortName;
    const pageChange = this.props.pageChange;

    const rows = [];
    let lastModel = null;

    this.props.vehicles.forEach((vehicle) => {
      if (vehicle.name.indexOf(filterText) === -1) {
        return;
      }

      //add sort and pagination
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Abbreviation</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

//reactdom!

export default ProductTable();
