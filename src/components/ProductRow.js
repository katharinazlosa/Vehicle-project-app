import React from "react";

class ProductRow extends React.Component {
  render() {
    const vehicle = this.props.vehicle;
    const name = vehicles.name;

    return (
      <tr>
        <td>{name}</td>
        <td>{vehicle.modelName}</td>
        <td>{vehicle.abbreviation}</td>
      </tr>
    );
  }
}

export { ProductRow };
