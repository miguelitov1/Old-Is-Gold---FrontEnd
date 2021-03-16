////////////////////////
import React, { useState, useContext } from "react";
import { pintarEstrellas } from "../../herramientas/pintarEstrellas";
import { useRemoteArticles } from "../../herramientas/useRemoteArticles";
import { AuthContext } from "../../componentes/providers/AuthProvider";
import jwt_decode from "jwt-decode";

import { Link } from "react-router-dom";

import "./Valoraciones.css";

export function Valoracion(props) {
  const [articulo] = useRemoteArticles(props.idArticulo);
  const [message, setMessage] = useState(null);
  const [token] = useContext(AuthContext);

  const estrellas = pintarEstrellas(props.valoracion);

  let payload;
  if (token) {
    payload = jwt_decode(token);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData(e.target);
      const payload = Object.fromEntries(data);

      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/ventas/respuesta/${props.idArticulo}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );
      const responseJson = await response.json();
      if (!response.ok) {
        const error = new Error(responseJson);
        throw error;
      } else {
        props.refetch();
      }
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <>
      <div className="Valoraciones-caja">
        <Link
          to={`/articulo/${props.idArticulo}`}
          style={{ textDecoration: "none" }}
        >
          <div className="Valoraciones-contenedor">
            <div className="Valoraciones-img">
              <img
                src={`http://localhost:8081/images/articulos/${articulo.foto1}`}
                alt="First slide"
              />
            </div>

            <div className="Valoracion-texto">
              <div>
                {estrellas?.map((estrella, index) => (
                  <img src={estrella} alt="estrella" key={index} />
                ))}
              </div>
              <h2>{articulo.titulo}</h2>
              <h3 className="Valoracion-texto-titulos">
                Valoracion del comprador:
              </h3>
              <p className="Valoracion-texto-comentario">
                {props.comentarioValoracion}
              </p>
            </div>
          </div>

          {message && <div>{message}</div>}
        </Link>
        {props.respuestaVendedor && (
          <div className="Valoraciones-respuesta-vendedor">
            <h3 className="Valoracion-texto-titulos">Respuesta:</h3>
            <p>{props.respuestaVendedor}</p>
          </div>
        )}
        {!props.respuestaVendedor && payload.id === articulo.id_usuario && (
          <form className="Valoraciones-form" onSubmit={handleSubmit}>
            <textarea
              name="respuesta"
              placeholder="Escriba una respuesta"
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        )}
      </div>
    </>
  );
}
//////////////////////

// import React from "react";

// export function Valoracion(props) {
//   return (
//     <>
//       <div>
//         <h2>Comentario:</h2>
//         {props.comentarioValoracion}
//         <h3>Respuesta:</h3>
//         {props.respuestaVendedor}
//       </div>
//     </>
//   );
// }
