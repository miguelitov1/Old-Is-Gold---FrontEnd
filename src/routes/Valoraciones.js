import React, { useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../componentes/providers/AuthProvider";
import { Valoracion } from "../componentes/Valoraciones/Valoracion";
import { pintarEstrellas } from "../herramientas/pintarEstrellas";
import { useRemoteUser } from "../herramientas/useRemoteUser";
import { useRemoteValoraciones } from "../herramientas/useRemoteValoraciones";
import "./Valoraciones.css";

export function Valoraciones({ idUsuario }) {
  const [valoraciones] = useRemoteValoraciones(idUsuario);
  const [token] = useContext(AuthContext);
  const arrayValoracion = valoraciones.valoraciones;
  const estrellas = pintarEstrellas(valoraciones.promedio);
  const usuario = useRemoteUser(idUsuario);

  return !token ? (
    <Redirect to="/login" />
  ) : arrayValoracion ? (
    <>
      <div className="Valoraciones-cabecera">
        <div className="Perfil-img">
          <img
            className="Valoraciones-foto-de-perfil"
            src={`http://localhost:8081/images/profiles/${usuario.foto}`}
            alt="Foto de perfil"
          ></img>
        </div>
        <p>
          {estrellas?.map((estrella, index) => (
            <img src={estrella} alt="estrella" key={index} />
          ))}
        </p>
        <p>{valoraciones.nroValoraciones} valoraciones</p>
      </div>

      {arrayValoracion?.map((valoracion) => {
        return (
          <Valoracion
            key={valoracion.id_articulo}
            id_articulo={valoracion.id_articulo}
            comentarioValoracion={valoracion.comentarioValoracion}
            respuestaVendedor={valoracion.respuestaVendedor}
            valoracion={valoracion.valoracion}
          />
        );
      })}
    </>
  ) : (
    <></>
  );
}
