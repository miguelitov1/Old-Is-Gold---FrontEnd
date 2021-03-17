import React, { useContext } from "react";
import { ShowArticles } from "../componentes/Articulos/ShowArticles";
import "../componentes/Articulos/ShowArticles.css";
import { useRemoteArticlesFavourites } from "../herramientas/useRemoteArticlesFavourites";
import jwt_decode from "jwt-decode";

import { AuthContext } from "../componentes/providers/AuthProvider";
export function Favoritos(props) {
  const [favoritos] = useRemoteArticlesFavourites();
  // const [token] = useContext(AuthContext);
  // let payload = null;
  // if (token) {
  //   payload = jwt_decode(token);
  // }

  return (
    <div className="Lista-articulos-body">
      <h2>{props.titulo}</h2>
      {favoritos?.map((articulo) => (
        <ShowArticles
          key={articulo.id}
          id={articulo.id}
          foto={articulo.foto1}
          descripcion={articulo.descripcion}
          titulo={articulo.titulo}
          precio={articulo.precio}
          idUsuario={props.id}
        />
      ))}
    </div>
  );
}
