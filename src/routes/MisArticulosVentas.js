import React from "react";
import { useContext } from "react";
import jwt_decode from "jwt-decode";
import { ShowArticles } from "../componentes/Articulos/ShowArticles";
import "../componentes/Articulos/ShowArticles.css";
import { useRemoteArticlesPublished } from "../herramientas/useRemoteArticlesPublished";
import { useRemoteArticlesSoldOut } from "../herramientas/useRemoteArticlesSoldOut";
import { AuthContext } from "../componentes/providers/AuthProvider";

// import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export function MisArticulosVentas() {
  const [token, setToken] = useContext(AuthContext);
  let payload = null;
  if (token) {
    payload = jwt_decode(token, process.env.JWT_SECRET);
  }
  const [articulosPublicados] = useRemoteArticlesPublished(payload.id);
  const [articulosVendidos] = useRemoteArticlesSoldOut();

  return (
    <>
      <div className="Lista-articulos-body">
        <h2>Todos mis articulos</h2>
        {articulosPublicados?.map((articulo) => (
          <ShowArticles
            key={articulo.id}
            id={articulo.id}
            foto={articulo.foto1}
            descripcion={articulo.descripcion}
            titulo={articulo.titulo}
            precio={articulo.precio}
          />
        ))}
      </div>
      <div className="Lista-articulos-body">
        <h2>Mis articulos vendidos</h2>
        {articulosVendidos?.map((articulo) => (
          <ShowArticles
            key={articulo.id}
            id={articulo.id}
            foto={articulo.foto1}
            descripcion={articulo.descripcion}
            titulo={articulo.titulo}
            precio={articulo.precio}
          />
        ))}
      </div>
    </>
  );
}
