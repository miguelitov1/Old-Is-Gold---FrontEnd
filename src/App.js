import "./App.css";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import { ListaArticulos } from "./routes/ListaArticulos";
import { Perfil } from "./routes/Perfil";
import { Categorias } from "./componentes/Categorias/Categorias";
import { ArticuloPorId } from "./routes/ArticuloPorId";
import { Vender } from "./routes/Vender";
import { Footer } from "./componentes/Header-Footer/Footer";
import { Header } from "./componentes/Header-Footer/Header";
import { sidebarCategorias } from "./componentes/Categorias/sidebarCategorias";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Logout } from "./routes/Logout";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Categorias />
        <Switch>
          <Route path="/" exact>
            <ListaArticulos path="" />
          </Route>
          <Route path="/registro" exact>
            <Register />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/articulo" exact>
            <ArticuloPorId idArticulo="4" />
          </Route>
          <Route path="/perfil" exact>
            <Perfil />
          </Route>{" "}
          <Route path="/vender" exact>
            <Vender />
            {/* <Route path="/logout" exact>
              <Logout />
            </Route> */}
          </Route>
          {sidebarCategorias.map((categoria) =>
            categoria.idCategoria === 0 ? (
              <Route key={categoria.idCategoria} path={categoria.path} exact>
                <ListaArticulos path="" />
              </Route>
            ) : (
              <Route key={categoria.idCategoria} path={categoria.path} exact>
                <ListaArticulos
                  path={`categoria/${categoria.idCategoria}`}
                  titulo={categoria.nombre}
                  key={categoria.idCategoria}
                />
              </Route>
            )
          )}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
