import React from "react";
import { Link } from "react-router-dom";
import "./Chat.css";

export function Chat({
  usuario,
  foto,
  titulo,
  ultimoMensaje,
  idVendedor,
  idComprador,
  idArticulo,
}) {
  return (
    <Link
      to={`/chat/${idArticulo}/${idVendedor}/${idComprador}`}
      style={{ textDecoration: "none" }}
    >
      <div className="Chat">
        <div className="Chat-img">
          <img
            className="Chat-imagen-articulo"
            src={`http://localhost:8081/images/articulos/${foto}`}
            alt="img-articulo"
          ></img>
        </div>
        <div className="Chat-info">
          <p className="Chat-p-usuario">Nombre de usuario</p>
          <h3 className="Chat-p-titulo-anuncio">{titulo}</h3>
          <p className="Chat-p-ultimo-chat">{ultimoMensaje}</p>
        </div>
      </div>
    </Link>
  );
}
