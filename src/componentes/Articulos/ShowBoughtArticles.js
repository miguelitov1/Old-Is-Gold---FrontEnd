import React from "react";
import { Link } from "react-router-dom";
import "./ShowArticles.css";

import { useState } from "react";

export function ShowBoughtReserved(props) {
  const [message] = useState("");

  return (
    <div className="ArticulosHome-todo">
      <Link to={`/articulo/${props.id}`} style={{ textDecoration: "none" }}>
        <div className="ArticuloHome-container">
          <div className="ArticuloHome-divImg">
            <img
              src={`http://localhost:8081/images/articulos/${props.foto}`}
              alt="foto"
            ></img>
          </div>

          <div className="ArticuloHome">
            <div className="ArticuloHome-container2">
              <h2 className="ArticuloHome-titulo">
                {props.titulo.toUpperCase()}
              </h2>
            </div>
            <p className="ArticuloHome-precio">{props.precio}€</p>
            <p className="ArticuloHome-descripcion">{props.descripcion}</p>
          </div>
        </div>
        {message && (
          <div className="ArticuloPorId-respuesta">{message.respuesta}</div>
        )}
      </Link>
      {!props.valoracion && (
        <Link to={`/valorar/${props.id}`} style={{ textDecoration: "none" }}>
          <div className="ArticuloHome-calificar">
            <p>Valorar vendedor</p>
          </div>
        </Link>
      )}
    </div>
  );
}
