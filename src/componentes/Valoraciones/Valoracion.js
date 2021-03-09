import React from "react";

export function Valoracion(props) {
  return (
    <>
      <div>
        <h2>Comentario:</h2>
        {props.comentarioValoracion}
        <h3>Respuesta:</h3>
        {props.respuestaVendedor}
      </div>
    </>
  );
}
