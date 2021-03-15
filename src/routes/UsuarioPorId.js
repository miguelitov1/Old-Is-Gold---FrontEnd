import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useRemoteValoraciones } from "../herramientas/useRemoteValoraciones";
import { useRemoteUser } from "../herramientas/useRemoteUser";
import { pintarEstrellas } from "../herramientas/pintarEstrellas";

import "./UsuarioPorId.css";
import { Valoraciones } from "./Valoraciones";
import { Valoracion } from "../componentes/Valoraciones/Valoracion";

export function UsuarioPorId() {
  const { idUsuario } = useParams();

  const [usuario] = useRemoteUser(idUsuario);
  const [valoraciones] = useRemoteValoraciones(usuario.id);
  const arrayValoracion = valoraciones.valoraciones;

  const estrellas = pintarEstrellas(valoraciones.promedio);

  return (
    <>
      <div className="Perfil-img">
        <img
          className="Perfil-foto-de-perfil"
          src={`http://localhost:8081/images/profiles/${usuario.foto}`}
          alt="Foto de perfil"
        ></img>
      </div>

      <div className="Perfil-valoraciones">
        <Link to="/valoraciones">
          {estrellas?.map((estrella, index) => (
            <img src={estrella} alt="estrella" key={index} />
          ))}
        </Link>
        <h2 className="Perfil-info">Datos del usuario</h2>
      </div>

      <div className="Perfil-info-caja">
        <p className="Perfil-usuario-info">Nombre del usuario:</p>
        <p className="Perfil-usuario-info-1">{usuario.nombreUsuario}</p>
        <p className="Perfil-usuario-info">Localidad:</p>
        <p className="Perfil-usuario-info-1">{usuario.localidad}</p>
      </div>

      <div>
        <h2 className="Perfil-info">Valoraciones</h2>

        <>
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
      </div>
    </>
  );
}
