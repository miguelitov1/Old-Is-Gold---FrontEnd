import "./App.css";
import { useContext } from "react";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import { Home } from "./routes/Home";
import { Perfil } from "./routes/Perfil";
import { Header } from "./componentes/Header";
import { Categorias } from "./componentes/Categorias";
import { AuthContext } from "./componentes/providers/AuthProvider";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Articulos } from "./routes/Articulos";
import { Footer } from "./componentes/Footer";
import { NavBar } from "./componentes/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <Categorias />
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/registro" exact>
            <Register />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/articulo" exact>
            <Articulos />
          </Route>
          <Route path="/perfil" exact>
            <Perfil />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
