import React from "react";

function Search(props) {
  return (
    <div className="SearchForm">
    <form>
      <label>
      <button>Search by Name</button>
        <input className="SearchBox" placeholder="Search" type="search" onChange={props.onSearch} />
      </label>
    </form>
  
  </div>
);
}

export default Search;
