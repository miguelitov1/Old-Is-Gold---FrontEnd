import React, { useContext, useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { useRemoteChats } from "../herramientas/useRemoteChats";
import { useRemoteArticles } from "../herramientas/useRemoteArticles";
import { AuthContext } from "../componentes/providers/AuthProvider";

import "./ChatRoom.css";

export function ChatRoom() {
  const { idArticulo, idVendedor, idComprador } = useParams();
  const [articulo, setArticulo] = useRemoteArticles(idArticulo);
  const path = `${idArticulo}/${idVendedor}/${idComprador}/`;
  const [chat, setChat] = useRemoteChats(path);
  const [token, setToken] = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const final = useRef();

  let payload = null;
  if (token) {
    payload = jwt_decode(token);
  }

  useEffect(() => {
    if (chat.length && final.current) {
      final.current.scrollIntoView();
    }
  }, [chat.length]);

  if (Object.keys(payload).length === 0 || Object.keys(articulo).length === 0) {
    return <div>Loading...</div>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      mensaje: mensaje,
    };
    try {
      //creamos el payload para crear un nuevo producto

      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/mensajes/${path}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const error = new Error("No se ha enviado correctamente el mensaje");
        throw error;
      }

      const mensajeJson = await response.json();
      console.log(mensajeJson);
      setChat([...chat, mensajeJson]);
    } catch (err) {
      setErrorMessage(err.errorMessage);
    }
  }

  return Object.keys(chat).length === 0 ? (
    <div>
      <div className="ChatRoom">
        <div className="ChatRoom-producto">
          <div className="ChatRoom-imagen">
            <img
              className="ChatRoom-imagen-articulo"
              src={`http://localhost:8081/images/articulos/${articulo.foto1}`}
              alt="img-articulo"
            ></img>
          </div>
          <div className="ChatRoom-info-producto">
            <h3>{articulo.titulo}</h3>
            <p>Nombre usuario</p>
          </div>
        </div>
      </div>

      <div className="ChatRoom-mensaje">
        <form onSubmit={handleSubmit}>
          <button type="submit"></button>
          <input
            type="text"
            name="mensaje"
            maxLength="255"
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></input>
        </form>
      </div>
    </div>
  ) : (
    <div>
      <div className="ChatRoom">
        <div className="ChatRoom-producto">
          <div className="ChatRoom-imagen">
            <img
              className="ChatRoom-imagen-articulo"
              src={`http://localhost:8081/images/articulos/${articulo.foto1}`}
              alt="img-articulo"
            ></img>
          </div>
          <div className="ChatRoom-info-producto">
            <h3>{articulo.titulo}</h3>
            <p>Nombre usuario</p>
          </div>
        </div>
      </div>

      <div className="ChatRoom-mensajes">
        {chat.map((mensaje) => {
          if (Number(mensaje.id_emisor) === payload.id) {
            return (
              <div className="ChatRoom-mio" key={mensaje.id}>
                <p>{mensaje.mensaje}</p>
                <p className="ChatRoom-fecha">{mensaje.fecha}</p>
              </div>
            );
          } else {
            return (
              <div className="ChatRoom-otro" key={mensaje.id}>
                <p>{mensaje.mensaje}</p>
                <p className="ChatRoom-fecha">{mensaje.fecha}</p>
              </div>
            );
          }
        })}
        <div ref={final}></div>
      </div>

      <div className="ChatRoom-mensaje">
        <form onSubmit={handleSubmit}>
          <button type="submit"></button>
          <input
            type="text"
            name="mensaje"
            maxLength="255"
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></input>
        </form>
      </div>
    </div>
  );
}
