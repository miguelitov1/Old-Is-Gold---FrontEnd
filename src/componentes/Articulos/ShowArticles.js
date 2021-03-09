import React from "react";
import "./ShowArticles.css";

export function ShowArticles(props) {
  return (
    <div className="ArticuloHome-container">
      <div className="ArticuloHome-divImg">
        <img src="./gamecube.jpg" alt="gamecube"></img>
      </div>

      <div className="ArticuloHome">
        <div className="ArticuloHome-container2">
          <h2 className="ArticuloHome-titulo">{props.titulo.toUpperCase()}</h2>
          <img
            className="ArticuloHome-corazon"
            src="./corazon-estrellas/corazonFav.png"
            alt="corazon"
          />
        </div>
        <p className="ArticuloHome-precio">{props.precio}€</p>
        <p className="ArticuloHome-descripcion">{props.descripcion}</p>
      </div>
    </div>
  );
}
