import React, { useContext } from "react";
import { ShowArticles } from "../componentes/Articulos/ShowArticles";
import { useRemoteArticlesByWords } from "../herramientas/useRemoteArticlesByWords";

import { UserContext } from "../componentes/providers/UserProvider";

export function ListaArticulosPorPalabras(props) {
  const [articulos] = useRemoteArticlesByWords(props.words);
  const [usuario] = useContext(UserContext);

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
          idUsuario={usuario.id}
        />
      ))}
    </div>
  );
}
