import React from "react";

class ProductCategoryRow extends React.Component {
  render() {
    const categoryMake = this.props.name;
    return (
      <tr>
        <th colSpan="2">{categoryMake}</th>
      </tr>
    );
  }
}
export { ProductCategoryRow };
