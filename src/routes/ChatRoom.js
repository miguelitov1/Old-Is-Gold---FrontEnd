import React, { useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../componentes/providers/AuthProvider";
import { Chat } from "../componentes/Chat/Chat";
import { useRemoteChats } from "../herramientas/useRemoteChats";

import "./ChatRoom.css";

export function ChatRoom({ fotoUsuario }) {
  const [token] = useContext(AuthContext);
  const [chats, setChats] = useRemoteChats([]);

  return !token ? (
    <Redirect to="/login" />
  ) : !chats ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className="ChatRoom-cabecera">
        <img
          className="ChatRoom-imagen-perfil"
          src={`http://localhost:8081/images/profiles/${fotoUsuario}`}
          alt="imagen-perfil"
        ></img>
        <h2 className="ChatRoom-h2">Chats</h2>
      </div>
      <div className="ChatRoom-chats">
        {chats.map((chat, index) => {
          return (
            <Chat
              key={index}
              titulo={chat.titulo}
              foto={chat.foto1}
              usuario={chat.id_usuario}
            />
          );
        })}
      </div>
    </>
  );
}
