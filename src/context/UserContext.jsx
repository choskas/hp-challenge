import React, { createContext, useEffect, useState } from "react";
import { isNil } from "lodash";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [house, setHouse] = useState("");
  const [staff, setStaff] = useState(false);
  const [img, setImg] = useState('');

  const getInitialData = () => {
    const getData = JSON.parse(window.sessionStorage.getItem('user'))
    if(isNil(getData) === false){
      setName(getData.name)
      setStaff(getData.staff)
      setHouse(getData.house)
      setImg(getData.img)
    }
  }

  useEffect(() => {
    getInitialData();
  },[name])
  return (
    <UserContext.Provider
      value={{
        name,
        house,
        staff,
        img,
        setName,
        setStaff,
        setHouse,
        setImg,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};