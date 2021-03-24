import React, { useContext } from "react";
import { useRemoteArticles } from "../herramientas/useRemoteArticles";
import { ShowArticles } from "../componentes/Articulos/ShowArticles";

import { UserContext } from "../componentes/providers/UserProvider";

import "../componentes/Articulos/ShowArticles.css";

export function ListaArticulos(props) {
  const [articulos] = useRemoteArticles(props.path);
  const [usuario] = useContext(UserContext);

  return (
    <div className="Lista-articulos-body">
      <h2>{props.titulo}</h2>
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
