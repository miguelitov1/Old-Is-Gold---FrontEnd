import React, { useContext } from "react";
import { ShowArticles } from "../componentes/Articulos/ShowArticles";
import { useRemoteArticlesByWords } from "../herramientas/useRemoteArticlesByWords";
import jwt_decode from "jwt-decode";

import { AuthContext } from "../componentes/providers/AuthProvider";

export function ListaArticulosPorPalabras(props) {
  const [articulos] = useRemoteArticlesByWords(props.words);
  // const [token] = useContext(AuthContext);

  // let payload = null;
  // if (token) {
  //   payload = jwt_decode(token);
  // }

  return (
    <div className="Lista-articulos-body">
      <h2>{props.words}</h2>
      {articulos.map((articulo) => (
        <ShowArticles
          key={articulo.id}
          id={articulo.id}
          descripcion={articulo.descripcion}
          titulo={articulo.titulo}
          precio={articulo.precio}
          foto={articulo.foto1}
          idUsuario={props.idUsuario}
        />
      ))}
    </div>
  );
}
