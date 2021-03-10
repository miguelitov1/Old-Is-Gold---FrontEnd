import "./App.css";

import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import { Perfil } from "./routes/Perfil";
import { Vender } from "./routes/Vender";
import { ListaArticulos } from "./routes/ListaArticulos";
import { ArticuloPorId } from "./routes/ArticuloPorId";
import { Valoraciones } from "./routes/Valoraciones";
import { MisArticulosVentas } from "./routes/MisArticulosVentas";
import { Categorias } from "./componentes/Categorias/Categorias";
import { Footer } from "./componentes/Header-Footer/Footer";
import { Header } from "./componentes/Header-Footer/Header";
import { sidebarCategorias } from "./componentes/Categorias/sidebarCategorias";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { Logout } from "./routes/Logout";
import { Chat } from "./componentes/Chat/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Categorias />
        <Switch>
          <Route path="/" exact>
            <div className="App-img"></div>
            <ListaArticulos path="" />
          </Route>
          <Route path="/registro" exact>
            <Register />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/misArticulosVentas" exact>
            <MisArticulosVentas />
          </Route>
          <Route path="/valoraciones" exact>
            <Valoraciones idUsuario={1} />
          </Route>
          <Route path="/perfil" exact>
            <Perfil idUsuario="1" />
          </Route>
          <Route path="/chat" exact>
            <Chat />
          </Route>
          <Route path="/vender" exact>
            <Vender />
            {/* <Route path="/logout" exact>
              <Logout />
            </Route> */}
          </Route>
          {sidebarCategorias.map((categoria) =>
            categoria.idCategoria === 0 ? (
              <Route key={categoria.idCategoria} path={categoria.path} exact>
                <ListaArticulos path="" titulo="Todas las categorias" />
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
