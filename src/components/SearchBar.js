import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSortNameChange = this.handleSortNameChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  handleSortNameChange(e) {
    this.props.onSortNameChange(e.target.value);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="button"
            //add sort button
          />
        </p>
      </form>
    );
  }
}

export default SearchBar();
