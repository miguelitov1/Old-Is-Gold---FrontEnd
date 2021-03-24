import React, { useContext, useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { useRemoteChats } from "../herramientas/useRemoteChats";
import { useRemoteArticles } from "../herramientas/useRemoteArticles";
import { AuthContext } from "../componentes/providers/AuthProvider";
import { UserContext } from "../componentes/providers/UserProvider";

import "./ChatRoom.css";

export function ChatRoom() {
  const { idArticulo, idVendedor, idComprador } = useParams();
  const [articulo] = useRemoteArticles(idArticulo);
  const [usuario] = useContext(UserContext);
  const path = `${idArticulo}/${idVendedor}/${idComprador}/`;
  const [chat, , refetch] = useRemoteChats(path);
  const [token] = useContext(AuthContext);
  const [, setErrorMessage] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const final = useRef();

  useEffect(() => {
    if (chat.length && final.current) {
      final.current.scrollIntoView();
    }
  }, [chat.length, usuario, articulo]);

  if (Object.keys(usuario).length === 0 || Object.keys(articulo).length === 0) {
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
      setMensaje("");
      refetch();
    } catch (err) {
      setErrorMessage(err.errorMessage);
    }
  }

  return Object.keys(chat).length === 0 ? (
    <div>
      <Link to={`/articulo/${articulo.id}`} style={{ textDecoration: "none" }}>
        <div className="ChatRoom">
          <div className="ChatRoom-producto">
            <div
              className="ChatRoom-imagen"
              style={{
                backgroundImage: `url(
              http://localhost:8081/images/articulos/${articulo.foto1}
            )`,
              }}
              alt="Foto de perfil"
            />

            <div className="ChatRoom-info-producto">
              <h3>{articulo.titulo}</h3>
            </div>
          </div>
        </div>
      </Link>

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
  ) : Object.keys(usuario).length === 0 ||
    Object.keys(articulo).length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Link to={`/articulo/${articulo.id}`} style={{ textDecoration: "none" }}>
        <div className="ChatRoom">
          <div className="ChatRoom-producto">
            <div
              className="ChatRoom-imagen"
              style={{
                backgroundImage: `url(
              http://localhost:8081/images/articulos/${articulo.foto1}
            )`,
              }}
              alt="Foto de perfil"
            />
            <div className="ChatRoom-info-producto">
              <h3>{articulo.titulo}</h3>
            </div>
          </div>
        </div>
      </Link>

      <div className="ChatRoom-mensajes">
        {chat.map((mensaje) => {
          if (Number(mensaje.id_emisor) === usuario.id) {
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
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></input>
        </form>
      </div>
    </div>
  );
}
