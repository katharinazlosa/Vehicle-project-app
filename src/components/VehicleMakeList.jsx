import React, { useState } from "react";
import VehicleMake from "./VehicleMake";
import Make from "../stores/store/vehicleMake/make";
import classes from "./VehicleMakeListClasses.css";
import { VehicleMakeListUIStore } from "../logic/VehicleMakeListUIStore";

import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TextField,
  Toolbar,
  TableSortLabel,
  Paper,
  InputAdornment,
  TableCell,
  TableContainer,
  TableBody,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { render } from "@testing-library/react";

interface HeadCell {
  id: string;
  label: string;
  disableSorting: boolean;
}

const headCells: HeadCell[] = [
  { id: "id", label: "Id", disableSorting: false },
  { id: "name", label: "Name", disableSorting: false },
  { id: "abbreviation", label: "Abbrv", disableSorting: false },
  { id: "actions", label: "Actions", disableSorting: true },
];

makeStyles({
  pageContent: {
    padding: "25px 0px",
  },
  head: {
    fontWeight: "bold",
  },
});

const classesMUI = makeStyles();
class VehicleMakeList extends React.Component {
  render() {
    return (
      <div className={classes.tableContainer}>
        <Paper className={classesMUI.pageContent}>
          <Toolbar>
            <TextField
              label="Search makes"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              onChange={this.props.handleSearch}
            />
          </Toolbar>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {headCells.map((element) => (
                    <TableCell
                      key={element.id}
                      className={classesMUI.head}
                      // @ts-ignore
                      sortDirection={
                        this.props.orderBy === element.id
                          ? this.props.order
                          : false
                      }
                      align={element.id === "id" ? "left" : "right"}
                    >
                      {element.disableSorting ? (
                        element.label
                      ) : (
                        <TableSortLabel
                          active={this.props.orderBy === element.id}
                          // @ts-ignore
                          direction={
                            this.props.orderBy === element.id
                              ? this.props.order
                              : "asc"
                          }
                          onClick={() =>
                            this.props.handleSortRequest(element.id)
                          }
                        >
                          {element.label}
                        </TableSortLabel>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.makesAfterPagingAndSorting().map((make: Make) => (
                  <VehicleMake make={make} key={make.id} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={this.props.pages}
            page={this.props.page}
            component="div"
            rowsPerPage={this.props.rowsPerPage}
            count={this.props.dataStore.makeStore.allMakes.length}
            onChangePage={this.props.handleChangePage}
            onChangeRowsPerPage={this.props.handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    );
  }
}
export default { VehicleMakeList };
