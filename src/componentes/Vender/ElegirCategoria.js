import React from "react";
import "./ElegirCategoria.css";
import { sidebarCategorias } from "../Categorias/sidebarCategorias";

export function ElegirCategoria({ category, setCategory }) {
  return (
    <>
      <div className="ElejirCategoria-container">
        {sidebarCategorias.map((categoria) => (
          <div
            key={categoria.idCategoria}
            onClick={() => setCategory(categoria.idCategoria)}
            style={{
              cursor: "pointer",
              backgroundColor:
                category === categoria.idCategoria
                  ? "lightblue"
                  : "transparent",
            }}
          >
            <img src={categoria.img} alt={categoria.nombre}></img>
            <p>{categoria.nombre}</p>
          </div>
        ))}
      </div>
    </>
  );
}
