import React from "react";
import VehicleMake from "../stores/VehicleMake";
import vehicleModel from "../stores/VehicleModel";

const Table = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Abbreviation</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Table;
