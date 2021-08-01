import MakeStore from "../stores/store/vehicleMake/makeStore";
import DataStore from "../stores/store/dataStore";
import VehicleModel from "../stores/store/vehicleModel/model";
import React from "react";

class VehicleModelListUIStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      pages: [5, 10, 25],
      rowsPerPage: this.pages[this.page],
      order: "",
      orderBy: "",
      filterFn: {
        fn: (items: VehicleModel[]) => {
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
  handleChangePage(event: unknown, newPage: number) {
    this.setPage(newPage);
  }
  handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
    this.setRowsPerPage(parseInt(event.target.value, 10));
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
    setFilterFn({
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
    return stableSort(
      filterFn.fn(dataStore.modelStore.vehicleModels),
      getComparator(order, orderBy)
    ).slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  }
  handleSortRequest(cellId: string) {
    const isAsc = orderBy === cellId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(cellId);
  }
}
