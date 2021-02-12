import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [house, setHouse] = useState("");
  const [staff, setStaff] = useState(false);
  return (
    <UserContext.Provider
      value={{
        name,
        house,
        staff,
        setName,
        setStaff,
        setHouse,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};