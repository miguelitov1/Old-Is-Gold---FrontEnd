import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useContext, useState } from "react";
import jwt_decode from "jwt-decode";

import { Categorias } from "./componentes/Categorias/Categorias";
import { Footer } from "./componentes/Header-Footer/Footer";
import { Header } from "./componentes/Header-Footer/Header";
import { sidebarCategorias } from "./componentes/Categorias/sidebarCategorias";
import { AuthContext } from "./componentes/providers/AuthProvider";

import { AllChatsRoom } from "./routes/AllChatsRoom";
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
import { ChatRoom } from "./routes/ChatRoom";
import { ListaArticulosPorPalabras } from "./routes/ListaArticulosPorPalabras";
import { UsuarioPorId } from "./routes/UsuarioPorId";

function App() {
  const [token, setToken] = useContext(AuthContext);
  const [words, setWords] = useState([]);
  let payload = null;
  if (token) {
    payload = jwt_decode(token);
  }

  return (
    <div className="App">
      <Router>
        <Header words={words} setWords={setWords} />
        <Categorias />
        <Switch>
          <Route path="/" exact>
            <div className="App-img"></div>
            <ListaArticulos path="" />
          </Route>
          <Route path="/registro" exact>
            <Register />
          </Route>
          <Route path="/buscarPorPalabras" exact>
            <ListaArticulosPorPalabras words={words} />
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
          <Route path="/usuarios/:idUsuario">
            <UsuarioPorId />
          </Route>
          <Route path="/perfil" exact>
            <Perfil idUsuario={payload ? payload.id : null} />
          </Route>
          <Route path="/favoritos" exact>
            <Favoritos titulo="Favoritos" />
          </Route>
          <Route path="/chat" exact>
            <AllChatsRoom fotoUsuario={payload ? payload.foto : null} />
          </Route>
          <Route path="/chat/:idArticulo/:idVendedor/:idComprador" exact>
            <ChatRoom />
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
        <div className="App-espacioFinal"></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
