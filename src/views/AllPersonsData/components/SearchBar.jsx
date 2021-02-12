import React, { useState } from "react";

const SearchBar = (props) => {
  const {setSearchValue, searchValue} = props;
  const [searchType, setSearchType ] = useState("Search type");
  return (
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
            props.searchType("Name")
          }}
        >
          <a className="dropdown-item" href="#">
            Name
          </a>
        </li>
        <li
          onClick={() => {
            setSearchType("House");
            props.searchType("House")
          }}
        >
          <a className="dropdown-item" href="#">
            House
          </a>
        </li>
        <li
          onClick={() => {
            setSearchType("Blood type");
            props.searchType("Blood type")
          }}
        >
          <a className="dropdown-item" href="#">
            Blood type
          </a>
        </li>
      </ul>
      <input
        type="text"
        className="form-control"
        aria-label="Text input with dropdown button"
        value={searchValue}
        onChange={(e)=>{
            const {value} = e.target
            setSearchValue(value)
        }}
      />
    </div>
  );
};

export default SearchBar;
