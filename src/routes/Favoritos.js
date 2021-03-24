import React, { useContext } from "react";
import { ShowArticles } from "../componentes/Articulos/ShowArticles";
import "../componentes/Articulos/ShowArticles.css";
import { useRemoteArticlesFavourites } from "../herramientas/useRemoteArticlesFavourites";

import { UserContext } from "../componentes/providers/UserProvider";

export function Favoritos(props) {
  const [favoritos] = useRemoteArticlesFavourites();
  const [usuario] = useContext(UserContext);

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
          idUsuario={usuario.id}
        />
      ))}
    </div>
  );
}
