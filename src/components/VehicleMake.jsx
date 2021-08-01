import React, { FunctionComponent, useEffect, useState } from "react";
import Make from "../stores/store/vehicleMake/make";
import VehicleMakeUI from ./
import "./VehicleMake.css";
import { TableRow, TableCell, Button } from "@material-ui/core";

interface Props {
  make: Make;
}

class VehicleMake extends React.Component {
  render() {
    return (
      <React.Fragment>
        {editMode ? (
          <TableRow>
            <TableCell>{make.id}</TableCell>
            <TableCell align="right">
              <input
                type="text"
                value={editMake}
                onChange={(e) => setEditMake(e.target.value)}
              />
            </TableCell>
            <TableCell align="right">
              <input
                type="text"
                value={editAbbreviation}
                onChange={(e) => setEditAbbreviation(e.target.value)}
              />
            </TableCell>
            <TableCell align="right">
              <Button
                onClick={() => {
                  setEditMode(false);
                  make.editFields(editMake, editAbbreviation);
                }}
                variant="outlined"
              >
                Save
              </Button>
            </TableCell>
          </TableRow>
        ) : (
          <TableRow>
            <TableCell>{make.id}</TableCell>
            <TableCell align="right">{make.name}</TableCell>
            <TableCell align="right">{make.abbreviation}</TableCell>
            <TableCell align="right">
              <i
                className="fa fa-pencil-square-o addHoverHand"
                aria-hidden="true"
                onClick={() => setEditMode(true)}
              ></i>
            </TableCell>
          </TableRow>
        )}
      </React.Fragment>
    );
  }
}

export default VehicleMake;
