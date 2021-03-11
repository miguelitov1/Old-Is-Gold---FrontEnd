import React from "react";
import { ShowArticles } from "../componentes/Articulos/ShowArticles";
import "../componentes/Articulos/ShowArticles.css";

import { useRemoteArticlesAdquired } from "../herramientas/useRemoteArticlesAdquired";

export function Compras(props) {
  const [compras] = useRemoteArticlesAdquired();

  return (
    <div className="Lista-articulos-body">
      <h2>{props.titulo}</h2>
      {compras?.map((articulo) => (
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
  );
}
