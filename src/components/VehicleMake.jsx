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
        {this.props.editMode ? (
          <TableRow>
            <TableCell>{this.props.make.id}</TableCell>
            <TableCell align="right">
              <input
                type="text"
                value={this.props.editMake}
                onChange={(e) => this.props.setEditMake(e.target.value)}
              />
            </TableCell>
            <TableCell align="right">
              <input
                type="text"
                value={this.props.editAbbreviation}
                onChange={(e) => this.props.setEditAbbreviation(e.target.value)}
              />
            </TableCell>
            <TableCell align="right">
              <Button
                onClick={() => {
                  this.props.setEditMode(false);
                  this.props.make.editFields(
                    this.props.editMake,
                    this.props.editAbbreviation
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
            <TableCell>{this.props.make.id}</TableCell>
            <TableCell align="right">{this.props.make.name}</TableCell>
            <TableCell align="right">{this.props.make.abbreviation}</TableCell>
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

export default VehicleMake;
