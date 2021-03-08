import React, { useState } from "react";
import { useRemoteArticles } from "../herramientas/useRemoteArticles";
import { ShowArticles } from "../componentes/Articulos/ShowArticles";
// import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export function ListaArticulos(props) {
  // const [articuloSeleccionado, setArticuloSeleccionado] = useState("");
  const articulos = useRemoteArticles(props.path);

  return (
    <div>
      <h2>{props.titulo}</h2>
      {articulos.map((articulo) => (
        <ShowArticles
          key={articulo.id}
          descripcion={articulo.descripcion}
          titulo={articulo.titulo}
          precio={articulo.precio}
        />
      ))}
    </div>
  );
}
