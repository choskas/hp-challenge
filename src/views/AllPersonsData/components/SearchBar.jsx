import React, { useState } from "react";

const SearchBar = (props) => {
  const {setSearchValue, searchValue, searchType, setSearchType} = props;
  return (
    <div className="search-container">
      <h4>Search</h4>
    <div className="input-group mb-3 col-md-6" id="searchbar-container">
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {searchType ? searchType : "Search Type"}
      </button>
      <ul className="dropdown-menu">
        <li
          onClick={() => {
            setSearchType("Name");
          }}
        >
          <a className="dropdown-item">
            Name
          </a>
        </li>
        <li
          onClick={() => {
            setSearchType("House");
          }}
        >
          <a className="dropdown-item">
            House
          </a>
        </li>
        <li
          onClick={() => {
            setSearchType("Blood type");
          }}
        >
          <a className="dropdown-item">
            Blood type
          </a>
        </li>
      </ul>
      <input
        type="text"
        disabled={searchType !== 'Search type' ? false : true}
        className="form-control"
        aria-label="Text input with dropdown button"
        value={searchValue}
        onChange={(e)=>{
            const {value} = e.target
            setSearchValue(value)
        }}
      />
    </div>
    </div>
  );
};

export default SearchBar;
