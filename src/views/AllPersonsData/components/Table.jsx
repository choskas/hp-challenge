/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { DetailContext } from "../../../context/DetailContext";
import { UserContext } from "../../../context/UserContext";
const Table = (props) => {
  const person = useContext(DetailContext);
  const user = useContext(UserContext);
  const { data, history, searchValue, searchType } = props;
  const mappedData = () => {
    return data.filter((value) => {
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
                const {name, image, house, dateOfBirth, wand, patronus, ancestry, alive} = item;
                person.setName(name);
                person.setImage(image);
                person.setHouse(house);
                person.setBirth(dateOfBirth);
                person.setWand(wand);
                person.setPatronus(patronus);
                person.setBloodStatus(ancestry);
                person.setIsAlive(alive);
                window.sessionStorage.setItem('detail', JSON.stringify({name, image, house, dateOfBirth, wand, patronus, ancestry, alive}))
                history.push(`/data-base/${name}`);
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
              const {name, image, house, dateOfBirth, wand, patronus, ancestry, alive} = item;
              person.setName(item.name);
              person.setImage(item.image);
              person.setHouse(item.house);
              person.setBirth(item.dateOfBirth);
              person.setWand(item.wand);
              person.setPatronus(item.patronus);
              person.setBloodStatus(item.ancestry);
              person.setIsAlive(item.alive);
              window.sessionStorage.setItem('detail', JSON.stringify({name, image, house, dateOfBirth, wand, patronus, ancestry, alive}))
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
      </tbody>
    </table>
  );
};

export default Table;
