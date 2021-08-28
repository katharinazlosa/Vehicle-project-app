import MakeStore from "../stores/store/vehicleMake/makeStore";
import DataStore from "../stores/store/dataStore";
import VehicleModel from "../stores/store/vehicleModel/model";
import React from "react";
import { makeObservable, observable, action, computed } from "mobx";

export class VehicleModelListUIStore {
  page: 0;
  pages: [5, 10, 25];
  rowsPerPage: pages[page];
  order: "";
  orderBy: "";
  filterFn: fn = (items: VehicleModel[]) => {
    return items;
  };
  constructor(props) {
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
    this.setPage(0);
  }
  stableSort(array: any, comparator: any) {
    const stabilizedThis = array.map((el: any, index: any) => [el, index]);
    stabilizedThis.sort((a: any, b: any) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el: [VehicleModel, number]) => el[0]);
  }
  getComparator(order: string, orderBy: string) {
    return order === "desc"
      ? (a: any, b: any) => this.descendingComparator(a, b, orderBy)
      : (a: any, b: any) => -this.descendingComparator(a, b, orderBy);
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
  handleSearch(e: { target: any }) {
    let target = e.target;
    this.setFilterFn({
      fn: (items: VehicleModel[]) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.modelName.toLowerCase().includes(target.value)
          );
      },
    });
  }
  makesAfterPagingAndSorting() {
    return this.stableSort(
      this.filterFn.fn(this.props.dataStore.modelStore.vehicleModels),
      this.getComparator(this.props.order, this.props.orderBy)
    ).slice(page * this.props.rowsPerPage, (page + 1) * this.props.rowsPerPage);
  }
  handleSortRequest(cellId: string) {
    const isAsc = this.props.orderBy === cellId && this.props.order === "asc";
    this.props.setOrder(isAsc ? "desc" : "asc");
    this.props.setOrderBy(cellId);
  }
}
