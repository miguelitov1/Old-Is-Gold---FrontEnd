import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import jwt_decode from "jwt-decode";

import { Categorias } from "./componentes/Categorias/Categorias";
import { Footer } from "./componentes/Header-Footer/Footer";
import { Header } from "./componentes/Header-Footer/Header";
import { sidebarCategorias } from "./componentes/Categorias/sidebarCategorias";
import { AuthContext } from "./componentes/providers/AuthProvider";

import { ChatRoom } from "./routes/ChatRoom";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import { Perfil } from "./routes/Perfil";
import { Vender } from "./routes/Vender";
import { ListaArticulos } from "./routes/ListaArticulos";
import { ArticuloPorId } from "./routes/ArticuloPorId";
import { Valoraciones } from "./routes/Valoraciones";
import { MisArticulosVentas } from "./routes/MisArticulosVentas";
import { Favoritos } from "./routes/Favoritos";
import { Compras } from "./routes/Compras";

function App() {
  const [token, setToken] = useContext(AuthContext);
  let payload = null;
  if (token) {
    payload = jwt_decode(token, process.env.JWT_SECRET);
  }

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
          <Route path="/compras" exact>
            <Compras />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/articulo/:idArticulo" exact>
            <ArticuloPorId />
          </Route>
          <Route path="/misArticulosVentas" exact>
            <MisArticulosVentas />
          </Route>
          <Route path="/valoraciones" exact>
            <Valoraciones idUsuario={payload ? payload.id : null} />
          </Route>
          <Route path="/perfil" exact>
            <Perfil idUsuario={payload ? payload.id : null} />
          </Route>
          <Route path="/favoritos" exact>
            <Favoritos titulo="Favoritos" />
          </Route>
          <Route path="/chat" exact>
            <ChatRoom fotoUsuario={payload ? payload.foto : null} />
          </Route>
          <Route path="/vender" exact>
            <Vender />
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
