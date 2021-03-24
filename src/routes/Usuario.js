import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { pintarEstrellas } from "../herramientas/pintarEstrellas";
import { useRemoteValoraciones } from "../herramientas/useRemoteValoraciones";
import { useRemoteUser } from "../herramientas/useRemoteUser";
import { useRemoteVentas } from "../herramientas/useRemoteVentas";
import { useRemoteCompras } from "../herramientas/useRemoteCompras";

import "./Usuario.css";

export function Usuario() {
  const { idUsuario } = useParams();
  const [usuario] = useRemoteUser(idUsuario);
  const [valoraciones] = useRemoteValoraciones(idUsuario);
  const [ventas] = useRemoteVentas(idUsuario);
  const [compras] = useRemoteCompras(idUsuario);
  const estrellas = pintarEstrellas(valoraciones?.promedio);

  if (
    Object.keys(usuario).length === 0 ||
    Object.keys(valoraciones).length === 0 ||
    Object.keys(ventas).length === 0 ||
    Object.keys(compras).length === 0
  )
    <div>Loading...</div>;

  return (
    <div>
      <div
        className="Perfil-img"
        style={{
          backgroundImage: `url(
              http://localhost:8081/images/profiles/${usuario.foto}
            )`,
        }}
        alt="Foto de perfil"
      ></div>

      <div className="Perfil-valoraciones">
        <h2 className="Perfil-info">{usuario.nombreUsuario}</h2>
        <Link
          to={`/valoraciones/${usuario.id}`}
          style={{ textDecoration: "none" }}
        >
          {estrellas?.map((estrella, index) => (
            <img src={estrella} alt="estrella" key={index} />
          ))}
          <p>{valoraciones.nroValoraciones} valoraciones</p>
        </Link>
      </div>
      <div className="Usuario-datos">
        <p>
          {ventas.length !== 0
            ? `Ventas: ${ventas[0].cantidad_ventas}`
            : `Ventas: 0`}
        </p>
        <p>
          {compras.length !== 0
            ? `Compras: ${compras[0].cantidad_compras}`
            : `Compras: 0`}
        </p>
      </div>
    </div>
  );
}
