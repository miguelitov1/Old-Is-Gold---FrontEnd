import React from "react";
import { Link } from "react-router-dom";

import { useRemoteUser } from "../../herramientas/useRemoteUser";

import "./Chat.css";

export function Chat({
  idUsuario,
  foto,
  titulo,
  ultimoMensaje,
  idVendedor,
  idComprador,
  idArticulo,
}) {
  const [usuario] = useRemoteUser(idUsuario);

  return (
    <Link
      to={`/chat/${idArticulo}/${idVendedor}/${idComprador}`}
      style={{ textDecoration: "none" }}
    >
      <div className="Chat">
        <div
          className="Chat-img"
          style={{
            backgroundImage: `url(
              http://localhost:8081/images/articulos/${foto}
            )`,
          }}
          alt="Foto articulo"
        />

        <div className="Chat-info">
          <p className="Chat-usuario">{usuario.nombreUsuario}</p>
          <h3>{titulo}</h3>
          <p>{ultimoMensaje}</p>
        </div>
      </div>
    </Link>
  );
}
