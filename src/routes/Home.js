import React from "react";
import { useRemoteArticle } from "../herramientas/useRemoteArticles";
import { ArticuloHome } from "../componentes/ArticuloHome";

export function Home() {
  const articulos = useRemoteArticle();
  return articulos.map((articulo) => {
    return (
      <ArticuloHome
        key={articulo.id}
        descripcion={articulo.descripcion}
        titulo={articulo.titulo}
        precio={articulo.precio}
      />
    );
  });
}
