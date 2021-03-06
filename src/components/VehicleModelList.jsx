import React, { useState } from "react";
import { useObserver } from "mobx-react";
import { useStores } from "../stores/helpers/useStore";
import VehicleModelStore from "../stores/store/vehicleModel/model";
import VehicleModelComp from "./VehicleModelComp";
import classes from "./VehicleModelListClasses.css";
import VehicleModelListUIStore from "../logic/VehicleModelListUIStore";

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

interface HeadCell {
  id: string;
  label: string;
  disableSorting: boolean;
}

const headCells: HeadCell[] = [
  { id: "id", label: "Id", disableSorting: false },
  { id: "makeId", label: "Make Id", disableSorting: false },
  { id: "modelName", label: "Model name", disableSorting: false },
  { id: "modelAbbrv", label: "Model abbreviation", disableSorting: false },
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
// const dataStore = useStores();
const classesMUI = makeStyles();

class VehicleModelList extends React.Component {
  render() {
    return (
      <div className={classes.tableContainer}>
        <Paper className={classesMUI.pageContent}>
          <Toolbar>
            <TextField
              label="Search models"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              onChange={this.handleSearch}
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
                        this.orderBy === element.id ? this.order : false
                      }
                      align={element.id === "id" ? "left" : "right"}
                    >
                      {element.disableSorting ? (
                        element.label
                      ) : (
                        <TableSortLabel
                          active={this.orderBy === element.id}
                          // @ts-ignore
                          direction={
                            this.orderBy === element.id ? this.order : "asc"
                          }
                          onClick={() => this.handleSortRequest(element.id)}
                        >
                          {element.label}
                        </TableSortLabel>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.makesAfterPagingAndSorting &&
                  this.makesAfterPagingAndSorting().map(
                    (vehicleModel: VehicleModel) => (
                      <VehicleModelComp
                        model={vehicleModel}
                        key={vehicleModel.id}
                      />
                    )
                  )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={this.pages}
            page={this.page}
            component="div"
            rowsPerPage={this.rowsPerPage}
            count={
              this.dataStore && this.dataStore.modelStore.vehicleModels.length
            }
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    );
  }
}

export default VehicleModelList;
