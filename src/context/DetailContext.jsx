import { isNil } from "lodash";
import React, { createContext, useEffect, useState } from "react";

export const DetailContext = createContext();

export const DetailProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [house, setHouse] = useState("");
  const [birth, setBirth] = useState("");
  const [wand, setWand] = useState({});
  const [patronus, setPatronus] = useState("");
  const [bloodStatus, setBloodStatus] = useState("");
  const [isAlive, setIsAlive] = useState(true);

  const getInitialData = () => {
    const getData = JSON.parse(window.sessionStorage.getItem('detail'))
    if(isNil(getData) === false){
      setName(getData.name)
      setImage(getData.image)
      setHouse(getData.house)
      setBirth(getData.dateOfBirth)
      setWand(getData.wand)
      setPatronus(getData.patronus)
      setBloodStatus(getData.ancestry)
      setIsAlive(getData.alive)
    }
  }
  
  useEffect(() => {
    getInitialData();
  },[name])

  return (
    <DetailContext.Provider
      value={{
        name,
        house,
        image,
        birth,
        wand,
        patronus,
        bloodStatus,
        isAlive,
        setName,
        setImage,
        setHouse,
        setBirth,
        setWand,
        setPatronus,
        setBloodStatus,
        setIsAlive,
      }}
    >
      {children}
    </DetailContext.Provider>
  );
};