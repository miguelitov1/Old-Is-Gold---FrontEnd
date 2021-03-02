import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { useLocalStorage } from "./herramientas/useLocalStorage";

export const AuthContext = React.createContext();
const AuthProvider = (props) => {
  const { children } = props;
  const [token, setToken] = useLocalStorage("accessToken", "");
  return (
    <AuthContext.Provider value={[token, setToken]}>
      {children}
    </AuthContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
