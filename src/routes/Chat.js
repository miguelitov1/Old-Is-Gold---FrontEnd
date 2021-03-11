import React, { useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../componentes/providers/AuthProvider";

import "./Chat.css";
export function Chat() {
  const [token] = useContext(AuthContext);
  return token ? (
    <div className="Chats-div">
      <div className="Chat-cabecera">
        <img
          className="Chat-imagen-perfil"
          src="./logo/logo_gold.png"
          alt="imagen-perfil"
        ></img>
        <h2 className="Chat-h2">Chats</h2>
      </div>
      <div className="Chat">
        <div className="Chat-img">
          <img
            className="Chat-imagen-articulo"
            src="./logo/logo_gold.png"
            alt="img-articulo"
          ></img>
        </div>
        <div className="Chat-info">
          <p className="Chat-p-usuario">Usuario</p>
          <p className="Chat-p-titulo-anuncio">Titulo anuncio</p>
          <p className="Chat-p-ultimo-chat">Ultimo chat</p>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
}
