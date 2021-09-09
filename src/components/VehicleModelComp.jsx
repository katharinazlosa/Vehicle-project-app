import React, { FunctionComponent, useEffect, useState } from "react";
import VehicleModel from "../stores/store/vehicleModel/model";
import { VehicleModelUI } from "../logic/VehicleModelUI";
import { TableRow, TableCell, Button } from "@material-ui/core";

class VehicleModelComp extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.editMode ? (
          <TableRow>
            <TableCell>{this.model.id}</TableCell>
            <TableCell align="right">
              <input
                type="text"
                value={this.makeId}
                onChange={(e) => this.setMakeId(e.target.value)}
              />
            </TableCell>
            <TableCell align="right">
              <input
                type="text"
                value={this.modelName}
                onChange={(e) => this.setModelName(e.target.value)}
              />
            </TableCell>
            <TableCell align="right">
              <input
                type="text"
                value={this.modelAbbrv}
                onChange={(e) => this.setModelAbbrv(e.target.value)}
              />
            </TableCell>
            <TableCell align="right">
              <Button
                onClick={() => {
                  this.setEditMode(false);
                  this.model.editModelFields(
                    this.makeId,
                    this.modelName,
                    this.modelAbbrv
                  );
                }}
                variant="outlined"
              >
                Save
              </Button>
            </TableCell>
          </TableRow>
        ) : (
          <TableRow>
            <TableCell>{this.model.id}</TableCell>
            <TableCell align="right">{this.model.makeId}</TableCell>
            <TableCell align="right">{this.model.modelName}</TableCell>
            <TableCell align="right">{this.model.modelAbbrv}</TableCell>
            <TableCell align="right">
              <i
                className="fa fa-pencil-square-o addHoverHand"
                aria-hidden="true"
                onClick={() => this.setEditMode(true)}
              ></i>
            </TableCell>
          </TableRow>
        )}
      </React.Fragment>
    );
  }
}

export default VehicleModelComp;
