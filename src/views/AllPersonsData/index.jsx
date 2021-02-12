import React, { useEffect, useState } from "react";
import { onGetAllHogwartsData } from "../../api/apiFunctions";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";

const AllPersonsData = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("Search type");
  const [hogwartsData, setHogwartsData] = useState([]);
  const getHogwartsData = async () => {
    const data = await onGetAllHogwartsData();
    setHogwartsData(data);
  };
  useEffect(() => {
    getHogwartsData();
  }, []);
  useEffect(() => {}, [searchValue]);
  return (
    <div className="table-container">
      <h3>Hogwarts Database</h3>
      <SearchBar
        searchType={searchType}
        setSearchType={setSearchType}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Table
        searchType={searchType}
        searchValue={searchValue}
        history={props.history}
        data={hogwartsData}
      />
    </div>
  );
};

export default AllPersonsData;
