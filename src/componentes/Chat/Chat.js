import React from "react";
import "./Chat.css";

export function Chat({ usuario, foto, titulo }) {
  return (
    <div className="Chat">
      <div className="Chat-img">
        <img
          className="Chat-imagen-articulo"
          src={`http://localhost:8081/images/articulos/${foto}`}
          alt="img-articulo"
        ></img>
      </div>
      <div className="Chat-info">
        <p className="Chat-p-usuario">{usuario}</p>
        <p className="Chat-p-titulo-anuncio">{titulo}</p>
        <p className="Chat-p-ultimo-chat">Ultimo chat</p>
      </div>
    </div>
  );
}
