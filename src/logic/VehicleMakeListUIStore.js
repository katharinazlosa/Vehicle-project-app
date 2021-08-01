import { ThemeProvider } from "@material-ui/core";
import { action, makeObservable, observable } from "mobx";
import React from "react";
import MakeStore from "../stores/store/vehicleMake/makeStore";
import DataStore from "../stores/store/dataStore";
import VehicleMake from "../components/VehicleMake";
import Make from "../stores/store/vehicleMake/make";
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

class VehicleMakeListUIStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      pages: [5, 10, 25],
      rowsPerPage: this.pages[this.page],
      order: "",
      orderBy: "",
      filterFn: {
        fn: (items: Make[]) => {
          return items;
        },
      },
    };
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.stableSort = this.stableSort.bind(this);
    this.getComparator = this.getComparator.bind(this);
    this.descendingComparator = this.descendingComparator.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.makesAfterPagingAndSorting =
      this.makesAfterPagingAndSorting.bind(this);
    this.handleSortRequest = this.handleSortRequest.bind(this);
  }
  render() {
    const dataStore = this.props.dataStore;
    return <div></div>;
  }
  handleChangePage(event: unknown, newPage: number) {
    this.setState(newPage);
  }

  handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(parseInt(event.target.value, 10));
    this.setState(0);
  }

  stableSort(array: any, comparator: any) {
    const stabilizedThis = array.map((el: any, index: any) => [el, index]);
    stabilizedThis.sort((a: any, b: any) => {
      const order = comparator(a[0], b[0]);
      if (this.state.order !== 0) return this.state.order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el: [Make, number]) => el[0]);
  }

  getComparator(order: string, orderBy: string) {
    return this.state.order === "desc"
      ? (a: any, b: any) => this.descendingComparator(a, b, orderBy)
      : (a: any, b: any) => -this.descendingComparator(a, b, orderBy);
  }

  descendingComparator(a: any, b: any, orderBy: string) {
    if (b[this.state.orderBy] < a[this.state.orderBy]) {
      return -1;
    }
    if (b[this.state.orderBy] > a[this.state.orderBy]) {
      return 1;
    }
    return 0;
  }

  handleSearch(e: { target: any }) {
    let target = e.target;
    this.setFilterFn({
      fn: (items: Make[]) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.name.toLowerCase().includes(target.value)
          );
      },
    });
  }

  makesAfterPagingAndSorting() {
    return this.stableSort(
      this.state.filterFn.fn(this.props.dataStore.makeStore.allMakes),
      this.getComparator(this.state.order, this.state.orderBy)
    ).slice(
      this.state.page * this.state.rowsPerPage,
      (this.state.page + 1) * this.state.rowsPerPage
    );
  }

  handleSortRequest(cellId: string) {
    const isAsc = this.state.orderBy === cellId && this.state.order === "asc";
    this.setState(isAsc ? "desc" : "asc");
    this.setState(cellId);
  }
}
export { VehicleMakeListUIStore };
