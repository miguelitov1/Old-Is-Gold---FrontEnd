import React from "react";
import { Link } from "react-router-dom";
import "./ShowArticles.css";

import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
// import { useRemoteUser } from "../../herramientas/useRemoteUser";

export function ShowArticlesReserved(props) {
  const [message, setMessage] = useState("");
  const [token] = useContext(AuthContext);
  // const [comprador] = useRemoteUser(props.idComprador);

  const aceptarCompra = async (idArticulo) => {
    try {
      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/articulos/${idArticulo}/confirmarVenta`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();
      setMessage(json);
    } catch (err) {
      setMessage(err);
    }
  };

  const cancelarReserva = async (idArticulo) => {
    try {
      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/articulos/${idArticulo}/borrarReserva`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();
      setMessage(json);
    } catch (err) {
      setMessage(err);
    }
  };

  const handleOnClick = () => {
    aceptarCompra(props.id);
  };

  const handleOnClick2 = () => {
    cancelarReserva(props.id);
  };

  return (
    <div className="ArticulosHome-todo">
      <Link to={`/articulo/${props.id}`} style={{ textDecoration: "none" }}>
        <div className="ArticuloHome-container">
          <div
            className="ArticuloHome-divImg"
            style={{
              backgroundImage: `url(
              http://localhost:8081/images/articulos/${props.foto}
            )`,
            }}
            alt="Foto articulo"
          />

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
        {/* <div
          className="Comprador-img"
          style={{
            backgroundImage: `url(
              http://localhost:8081/images/profiles/${comprador.foto}
            )`,
          }}
          alt="Foto de perfil"
        /> */}
        {message && (
          <div className="ArticuloPorId-respuesta">{message.respuesta}</div>
        )}
      </Link>
      <div className="ArticuloHome-botones">
        <p onClick={handleOnClick}>Aceptar compra</p>

        <p onClick={handleOnClick2}>Cancelar reserva</p>

        <Link
          to={`/chat/${props.id}/${props.idVendedor}/${props.idComprador}`}
          style={{ textDecoration: "none" }}
        >
          <p>Chatear con el comprador</p>
        </Link>
      </div>
    </div>
  );
}
