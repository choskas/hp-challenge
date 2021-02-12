import React, { createContext, useState } from "react";

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