import React, { useState } from "react";
import { useRemoteArticles } from "../herramientas/useRemoteArticles";
import { ShowArticles } from "../componentes/Articulos/ShowArticles";
import "../componentes/Articulos/ShowArticles.css";
import { useRemoteArticlesSales } from "../herramientas/useRemoteArticlesSales";
// import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export function MisArticulosVentas(props) {
  // const [articuloSeleccionado, setArticuloSeleccionado] = useState("");
  const articulos = useRemoteArticlesSales(props.path);
  // console.log(props.path);
  return (
    <div className="Lista-articulos-body">
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
