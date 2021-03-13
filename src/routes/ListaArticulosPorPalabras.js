import React, { useState } from "react";
import { ShowArticles } from "../componentes/Articulos/ShowArticles";
import { useRemoteArticlesByWords } from "../herramientas/useRemoteArticlesByWords";

export function ListaArticulosPorPalabras(props) {
  const [articulos, setArticulo] = useRemoteArticlesByWords(props.words);

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
        />
      ))}
    </div>
  );
}
