import React, { useContext, useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "smit",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};
