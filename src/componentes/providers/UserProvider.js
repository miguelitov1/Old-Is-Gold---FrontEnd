import React from "react";
import { useLocalStorage } from "../../herramientas/useLocalStorage";

export const UserContext = React.createContext();
export const UserProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useLocalStorage("selectedPerson");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
