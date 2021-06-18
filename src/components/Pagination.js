import React from "react";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(e) {
    this.props.onPageChange(e.target.value);
  }

  render() {
    const pageChange = this.props.pageChange;
    return <div>{/* add pagination */}</div>;
  }
}

export default Pagination();
