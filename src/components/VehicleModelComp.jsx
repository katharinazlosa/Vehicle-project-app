import React, { FunctionComponent, useEffect, useState } from "react";
import VehicleModel from "../stores/store/vehicleModel/model";
import { VehicleModelUI } from "../logic/VehicleModelUI";
import { TableRow, TableCell, Button } from "@material-ui/core";

class VehicleModelComp extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.editMode ? (
          <TableRow>
            <TableCell>{this.props.model.id}</TableCell>
            <TableCell align="right">
              <input
                type="text"
                value={this.props.makeId}
                onChange={(e) => this.props.setMakeId(e.target.value)}
              />
            </TableCell>
            <TableCell align="right">
              <input
                type="text"
                value={this.props.modelName}
                onChange={(e) => this.props.setModelName(e.target.value)}
              />
            </TableCell>
            <TableCell align="right">
              <input
                type="text"
                value={this.props.modelAbbrv}
                onChange={(e) => this.props.setModelAbbrv(e.target.value)}
              />
            </TableCell>
            <TableCell align="right">
              <Button
                onClick={() => {
                  this.props.setEditMode(false);
                  this.props.model.editModelFields(
                    this.props.makeId,
                    this.props.modelName,
                    this.props.modelAbbrv
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
            <TableCell>{this.props.model.id}</TableCell>
            <TableCell align="right">{this.props.model.makeId}</TableCell>
            <TableCell align="right">{this.props.model.modelName}</TableCell>
            <TableCell align="right">{this.props.model.modelAbbrv}</TableCell>
            <TableCell align="right">
              <i
                className="fa fa-pencil-square-o addHoverHand"
                aria-hidden="true"
                onClick={() => this.props.setEditMode(true)}
              ></i>
            </TableCell>
          </TableRow>
        )}
      </React.Fragment>
    );
  }
}

export default VehicleModelComp;
