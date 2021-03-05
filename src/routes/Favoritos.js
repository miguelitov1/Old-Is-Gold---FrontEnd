import React from "react";
import { ArticuloHome } from "../componentes/ArticuloHome";
import { useRemoteArticlesFavourites } from "../herramientas/useRemoteArticlesFavourites";
import "./Articulos.css";

export function Favoritos() {
  const favoritos = useRemoteArticlesFavourites();
  return favoritos.map((articulo) => {
    return (
      <>
        <ArticuloHome
          key={articulo.id}
          descripcion={articulo.descripcion}
          titulo={articulo.titulo}
          precio={articulo.precio}
        />
      </>
    );
  });
}

//FECHA SQL declare @Existingdate datetime
// Set @Existingdate=GETDATE()
// Select CONVERT(varchar,@Existingdate,3) as [DD/MM/YY]
