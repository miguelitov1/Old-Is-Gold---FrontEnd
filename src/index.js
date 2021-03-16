import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./componentes/providers/AuthProvider";
// import { UserProvider } from "./componentes/providers/UserProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
