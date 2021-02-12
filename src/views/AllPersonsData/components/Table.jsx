import React, { useContext, useState } from "react";
import { DetailContext } from "../../../context/DetailContext";
import { UserContext } from "../../../context/UserContext";
const Table = (props) => {
  const person = useContext(DetailContext);
  const user = useContext(UserContext);
  const { data, history, searchValue, searchType } = props;
  const mappedData = () => {
    return data.filter((value) => {
      console.log(value, searchType, 'ashjhdsa')
      if (value.name.toLowerCase().includes(searchValue.toLowerCase()) && searchType === 'Name'){
        return value;
      } else if (value.house.toLowerCase().includes(searchValue.toLowerCase()) && searchType === 'House'){
        return value;
      } else if (value.ancestry.toLowerCase().includes(searchValue.toLowerCase()) && searchType === 'Blood type'){
        return value;
      } else if (searchType === "Search type"){
        return value;
      }

    }).map((item, index) => {
      if (user.staff === false) {
        if (item.hogwartsStudent) {
          return (
            <tr
              key={index}
              className="table-item"
              onClick={() => {
                person.setName(item.name);
                person.setImage(item.image);
                person.setHouse(item.house);
                person.setBirth(item.dateOfBirth);
                person.setWand(item.wand);
                person.setPatronus(item.patronus);
                person.setBloodStatus(item.ancestry);
                person.setIsAlive(item.alive);
                history.push(`/data-base/${item.name}`);
              }}
            >
              <th scope="row">
                <img className="table-photo" src={item.image} alt="no-img" />
              </th>
              <td>{item.name}</td>
              <td>{item.house}</td>
            </tr>
          );
        }
      } else {
        return (
          <tr
            key={index}
            className="table-item"
            onClick={() => {
              person.setName(item.name);
              person.setImage(item.image);
              person.setHouse(item.house);
              person.setBirth(item.dateOfBirth);
              person.setWand(item.wand);
              person.setPatronus(item.patronus);
              person.setBloodStatus(item.ancestry);
              person.setIsAlive(item.alive);
              history.push(`/data-base/${item.name}`);
            }}
          >
            <th scope="row">
              <img className="table-photo" src={item.image} alt="no-img" />
            </th>
            <td>{item.name}</td>
            <td>{item.house}</td>
          </tr>
        );
      }
    });
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col">Name</th>
          <th scope="col">House</th>
        </tr>
      </thead>
      <tbody>
        {mappedData()}
        {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>Otto</td>
    </tr> */}
      </tbody>
    </table>
  );
};

export default Table;
