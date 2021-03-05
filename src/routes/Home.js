import React from "react";
import { useRemoteArticles } from "../herramientas/useRemoteArticles";
import { ShowArticles } from "../componentes/ShowArticles";

export function Home() {
  const articulos = useRemoteArticles("");
  return articulos.map((articulo) => {
    return (
      <ShowArticles
        key={articulo.id}
        descripcion={articulo.descripcion}
        titulo={articulo.titulo}
        precio={articulo.precio}
      />
    );
  });
}
