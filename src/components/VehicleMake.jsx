import React, { FunctionComponent } from "react";

import { VehicleMakeUI } from "../logic/VehicleMakeUI";
import "./VehicleMake.css";
import { TableRow, TableCell, Button } from "@material-ui/core";

import classes from "./VehicleMake.css";

import { makeStyles } from "@material-ui/core/styles";

class VehicleMake extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {this.editMode ? (
          <TableRow>
            <TableCell>{this.make.id}</TableCell>
            <TableCell align="right">
              <input
                type="text"
                value={this.editMake}
                onChange={(e) => this.setEditMake(e.target.value)}
              />
            </TableCell>
            <TableCell align="right">
              <input
                type="text"
                value={this.editAbbreviation}
                onChange={(e) => this.setEditAbbreviation(e.target.value)}
              />
            </TableCell>
            <TableCell align="right">
              <Button
                onClick={() => {
                  this.setEditMode(false);
                  this.make.editFields(this.editMake, this.editAbbreviation);
                }}
                variant="outlined"
              >
                Save
              </Button>
            </TableCell>
          </TableRow>
        ) : (
          <TableRow>
            <TableCell>{this.make.id}</TableCell>
            <TableCell align="right">{this.make.name}</TableCell>
            <TableCell align="right">{this.make.abbreviation}</TableCell>
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

export default VehicleMake;
