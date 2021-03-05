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

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [token, setToken] = useContext(AuthContext);

  const handleOnClick = () => {
    setToken("");
  };

  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <Categorias />
      <Router>
        <div className="App-links">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/registro">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <p onClick={handleOnClick}>Logout</p>
              </li>
              <li>
                <Link to="/articulo">Articulo</Link>
              </li>
              <li>
                <Link to="/perfil">Perfil</Link>
              </li>
            </ul>
          </nav>
        </div>

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
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
