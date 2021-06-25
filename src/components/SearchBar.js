import React from "react";
import "./SearchBar.css";
import data from "./Data";

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
  handleSortButton = (event) => {
    switch (event) {
      case "asc":
        return data({ data: this.state.data.sort((a, b) => a - b) });

      case "desc":
        return data({ data: this.state.data.sort((a, b) => b - a) });
    }
  };

  render() {
    return (
      <div className="box">
        <div className="SearchBarBox">
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
          {data
            .filter((value) => {
              if (this.props.filterText == "") {
                return value;
              } else if (
                value.name
                  .toLowerCase()
                  .includes(this.props.filterText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((value, key) => {
              return (
                <div className="user" key="key">
                  <p>{value.name}</p>
                </div>
              );
            })}
        </div>
        <div className="SortBox">
          <button
            type="button"
            value={this.props.sortName}
            onChange={this.handleSortNameChange}
            onClick={this.handleSortButton}
          >
            Sort By Asc
          </button>
        </div>
      </div>
    );
  }
}
export { SearchBar };
