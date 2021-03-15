import React from "react";
import { pintarEstrellas } from "../../herramientas/pintarEstrellas";

export function Valoracion(props) {
  const estrellas = pintarEstrellas(props.valoracion);

  return (
    <>
      <div className="Valoraciones-caja">
        <div>
          <div className="Valoraciones-respuesta-comprador">
            <img
              className="Valoracion-imagen-articulo"
              src={"https://via.placeholder.com/100x100.png"}
              alt="Imagen Articulo"
            />
            <div className="Valoracion-texto">
              <p className="Valoraciones-estrellas">
                {estrellas?.map((estrella, index) => (
                  <img src={estrella} alt="estrella" key={index} />
                ))}
              </p>
              <h3 className="Valoracion-texto-titulos">
                Comentario del comprador:
              </h3>
              <p className="Valoracion-texto-comentario">
                <p>{props.comentarioValoracion}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Valoraciones-respuesta-vendedor">
        <h3 className="Valoracion-texto-titulos">Respuesta:</h3>
        <p>{props.respuestaVendedor}</p>
      </div>
    </>
  );
}
