import "./App.css";
import { useContext } from "react";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import { Home } from "./routes/Home";
import { Perfil } from "./routes/Perfil";
import { Header } from "./componentes/Header";
import { Footer } from "./componentes/Footer";
import { Categorias } from "./componentes/Categorias";
import { AuthContext } from "./componentes/providers/AuthProvider";
import { ArticuloPorId } from "./routes/ArticuloPorId";
import { NavBar } from "./componentes/NavBar";
import { Logout } from "./routes/Logout";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FooterNav } from "./componentes/FooterNav";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
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
            <ArticuloPorId />
          </Route>
          <Route path="/perfil" exact>
            <Perfil />
            <Route path="/logout" exact>
              <Logout />
            </Route>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
