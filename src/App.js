import "./App.css";
import { Header } from "./componentes/Header";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import { Home } from "./routes/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Articulos } from "./routes/Articulos";
import { Footer } from "./componentes/Footer";

function App() {
  return (
    <>
      <Header />
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
                <Link to="/articulos">Articulos</Link>
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
          <Route path="/articulos" exact>
            <Articulos />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
