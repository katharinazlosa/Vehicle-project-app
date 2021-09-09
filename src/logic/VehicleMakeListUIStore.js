import { action, makeObservable, observable, computed } from "mobx";
import React from "react";
import MakeStore from "../stores/store/vehicleMake/makeStore";
import DataStore from "../stores/store/dataStore";

export class VehicleMakeListUIStore {
  page: 0;
  pages: [5, 10, 25];
  rowsPerPage: pages[page];
  order: "";
  orderBy: "";
  // filterFn: "";
  //  fn = (items: Make[]) => {
  //   return items;
  // };
  cellId: [];
  constructor() {
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.stableSort = this.stableSort.bind(this);
    this.getComparator = this.getComparator.bind(this);
    this.descendingComparator = this.descendingComparator.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.makesAfterPagingAndSorting =
      this.makesAfterPagingAndSorting.bind(this);
    this.handleSortRequest = this.handleSortRequest.bind(this);

    makeObservable(this, {
      page: observable,
      pages: observable,
      rowsPerPage: observable,
      order: observable,
      orderBy: observable,
      filterFn: observable,
      handleChangePage: action,
      handleChangeRowsPerPage: action,
      stableSort: action,
      getComparator: action,
      descendingComparator: action,
      handleSearch: action,
      makesAfterPagingAndSorting: action,
      handleSortRequest: action,
    });
  }
  handleChangePage(event: unknown, newPage: number) {
    this.page = newPage;
  }

  handleChangeRowsPerPage(event) {
    this.rowsPerPage = parseInt(event.target.value, 10);
  }

  stableSort(array: any, comparator: any) {
    const stabilizedThis = array.map((el: any, index: any) => [el, index]);
    stabilizedThis.sort((a: any, b: any) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el: [Make, number]) => el[0]);
  }

  descendingComparator(a: any, b: any, orderBy: string) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  getComparator(order: string, orderBy: string) {
    return order === "desc"
      ? (a: any, b: any) => this.descendingComparator(a, b, orderBy)
      : (a: any, b: any) => -this.descendingComparator(a, b, orderBy);
  }

  handleSearch(e: { target: any }) {
    let target = e.target;
    this.filterFn({
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
      this.filterFn.fn(this.dataStore.makeStore.allMakes),
      this.getComparator(this.order, this.orderBy)
    ).slice(this.page * this.rowsPerPage, (this.page + 1) * this.rowsPerPage);
  }

  handleSortRequest(cellId: string) {
    const isAsc = this.orderBy === this.cellId && this.order === "asc";
    this.order(isAsc ? "desc" : "asc");
    this.orderBy(cellId);
  }
}
