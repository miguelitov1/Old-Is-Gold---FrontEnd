////////////////////////
import React from "react";
import { pintarEstrellas } from "../../herramientas/pintarEstrellas";
import { useRemoteArticles } from "../../herramientas/useRemoteArticles";
import { Link } from "react-router-dom";

import "./Valoraciones.css";

export function Valoracion(props) {
  const [articulo] = useRemoteArticles(props.idArticulo);
  const estrellas = pintarEstrellas(props.valoracion);

  return (
    <>
      <Link
        to={`/articulo/${props.idArticulo}`}
        style={{ textDecoration: "none" }}
      >
        <div className="Valoraciones-caja">
          <div className="Valoraciones-respuesta-comprador">
            <div className="Valoraciones-contenedor">
              <img
                className="Valoraciones-img"
                src={`http://localhost:8081/images/articulos/${articulo.foto1}`}
                alt="First slide"
              />
            </div>
            <div className="Valoracion-texto">
              {estrellas?.map((estrella, index) => (
                <img src={estrella} alt="estrella" key={index} />
              ))}
              <h2>{articulo.titulo}</h2>
              <h3 className="Valoracion-texto-titulos">
                Comentario del comprador:
              </h3>
              <p className="Valoracion-texto-comentario">
                <p>{props.comentarioValoracion}</p>
              </p>
            </div>
          </div>
          {props.respuestaVendedor && (
            <div className="Valoraciones-respuesta-vendedor">
              <h3 className="Valoracion-texto-titulos">Respuesta:</h3>
              <p>{props.respuestaVendedor}</p>
            </div>
          )}
        </div>
      </Link>
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
