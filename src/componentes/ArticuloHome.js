import React from "react";
import "./ArticuloHome.css";

export function ArticuloHome(props) {
  return (
    <div className="ArticuloHome-conteiner">
      <div className="ArticuloHome-divImg">
        <img src="./gamecube.jpg"></img>
      </div>

      <div className="ArticuloHome">
        <div className="ArticuloHome-conteiner2">
          <h2>{props.titulo.toUpperCase()}</h2>
          <img
            className="ArticuloHome-corazon"
            src="./corazon-estrellas/corazonFav.png"
          />
        </div>
        <p className="ArticuloHome-precio">{props.precio}€</p>
        <p>{props.descripcion}</p>
      </div>
    </div>
  );
}
