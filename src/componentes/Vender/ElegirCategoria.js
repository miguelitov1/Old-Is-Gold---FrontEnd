import React from "react";
import "./ElegirCategoria.css";
import { sidebarCategorias } from "../Categorias/sidebarCategorias";

export function ElegirCategoria() {
  return (
    <div className="ElejirCategoria-container">
      {sidebarCategorias.map((categoria) => (
        <div>
          <img src={categoria.img} alt={categoria.nombre}></img>
          <p>{categoria.nombre}</p>
        </div>
      ))}
    </div>
  );
}
