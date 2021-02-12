import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [house, setHouse] = useState("");
  const [staff, setStaff] = useState(false);
  const [img, setImg] = useState('');
  const [history, setHistory] = useState('');
  return (
    <UserContext.Provider
      value={{
        name,
        house,
        staff,
        img,
        history,
        setName,
        setStaff,
        setHouse,
        setImg,
        setHistory,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};