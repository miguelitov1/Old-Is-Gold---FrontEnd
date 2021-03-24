import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";

import { Categorias } from "./componentes/Categorias/Categorias";
import { Footer } from "./componentes/Header-Footer/Footer";
import { Header } from "./componentes/Header-Footer/Header";
import { sidebarCategorias } from "./componentes/Categorias/sidebarCategorias";

import { AllChatsRoom } from "./routes/AllChatsRoom";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import { Perfil } from "./routes/Perfil";
import { Vender } from "./routes/Vender";
import { ListaArticulos } from "./routes/ListaArticulos";
import { ArticuloPorId } from "./routes/ArticuloPorId";
import { Valoraciones } from "./routes/Valoraciones";
import { MisArticulos } from "./routes/MisArticulos";
import { Favoritos } from "./routes/Favoritos";
import { MisCompras } from "./routes/MisCompras";
import { ChatRoom } from "./routes/ChatRoom";
import { ListaArticulosPorPalabras } from "./routes/ListaArticulosPorPalabras";
import { Valorar } from "./routes/Valorar";
import { Usuario } from "./routes/Usuario";
import { CarouselItems } from "./componentes/Articulos/CarouselItems";

function App() {
  const [words, setWords] = useState([]);

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
          <Route path="/carousel" exact>
            <CarouselItems />
          </Route>
          <Route path="/registro" exact>
            <Register />
          </Route>
          <Route path="/buscarPorPalabras" exact>
            <ListaArticulosPorPalabras words={words} />
          </Route>
          <Route path="/misCompras" exact>
            <MisCompras />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/articulo/:idArticulo" exact>
            <ArticuloPorId />
          </Route>
          <Route path="/misArticulos" exact>
            <MisArticulos />
          </Route>
          <Route path="/valoraciones/:idUsuario" exact>
            <Valoraciones />
          </Route>
          <Route path="/valorar/:idArticulo" exact>
            <Valorar />
          </Route>
          <Route path="/perfil/:idUsuario" exact>
            <Usuario />
          </Route>
          <Route path="/perfil" exact>
            <Perfil />
          </Route>
          <Route path="/favoritos" exact>
            <Favoritos titulo="Favoritos" />
          </Route>
          <Route path="/chat" exact>
            <AllChatsRoom />
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
