import React from "react";
import { useLocalStorage } from "../../herramientas/useLocalStorage";

export const AuthContext = React.createContext();
export const AuthProvider = (props) => {
  const { children } = props;
  const [token, setToken] = useLocalStorage("accessToken", "");
  return (
    <AuthContext.Provider value={[token, setToken]}>
      {children}
    </AuthContext.Provider>
  );
};
