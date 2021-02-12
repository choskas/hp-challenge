import React from "react";

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
          <div className="dropdown-item">
            Name
          </div>
        </li>
        <li
          onClick={() => {
            setSearchType("House");
          }}
        >
          <div className="dropdown-item">
            House
          </div>
        </li>
        <li
          onClick={() => {
            setSearchType("Blood type");
          }}
        >
          <div className="dropdown-item">
            Blood type
          </div>
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
