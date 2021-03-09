import React, { useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../componentes/providers/AuthProvider";
import { Valoracion } from "../componentes/Valoraciones/Valoracion";
import { useRemoteValoraciones } from "../herramientas/useRemoteValoraciones";

export function Valoraciones() {
  const valoraciones = useRemoteValoraciones();
  const [token, setToken] = useContext(AuthContext);
  const arrayValoracion = valoraciones.valoraciones;

  return !token ? (
    <Redirect to="/registro" />
  ) : arrayValoracion ? (
    <>
      <h1>Promedio:{valoraciones.promedio}</h1>
      <h2>Nro. valoraciones:{valoraciones.nroValoraciones}</h2>
      {console.log("promedio :  " + valoraciones.promedio)}

      {arrayValoracion.map((valoracion) => {
        return (
          <Valoracion
            comentarioValoracion={valoracion.comentarioValoracion}
            respuestaVendedor={valoracion.respuestaVendedor}
          />
        );
      })}
    </>
  ) : (
    <></>
  );
}
