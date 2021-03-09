import React from "react";
import { Link } from "react-router-dom";
import { sidebarCategorias } from "./sidebarCategorias";
import "./Categorias.css";

export function Categorias() {
  return (
    <>
      <div className="Categorias-container">
        {sidebarCategorias.map((categoria) => (
          <Link
            key={categoria.idCategoria}
            to={categoria.path}
            style={{ textDecoration: "none" }}
          >
            <div>
              <img src={categoria.img} alt={categoria.nombre}></img>
              <p>{categoria.nombre}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
