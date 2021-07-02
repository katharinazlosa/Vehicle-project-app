import React, { useContext } from "react";
import "./SearchBar.css";
import storeInstance from "../stores/Store";
import { StoreContext } from "../index";

export default function SearchBar(props) {
  const store = useContext(StoreContext);

  return (
    <div className="box">
      <div className="SearchBarBox">
        <input
          type="text"
          placeholder="Search..."
          value={props.filterText}
          onChange={props.filteredVehicles}
        />
        {store.filteredVehicles}
      </div>
      <div className="SortBox">
        <button onClick={() => (store.sortDirection *= -1)}>
          {store.sortDirection === 1 ? "A - Z" : "Z - A"}
        </button>{" "}
        <ul>{store.sortedVehicles}</ul>
      </div>
    </div>
  );
}

export { SearchBar };
