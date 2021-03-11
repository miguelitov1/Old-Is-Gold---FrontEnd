import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { AuthContext } from "../componentes/providers/AuthProvider";
import { useRemoteUser } from "../herramientas/useRemoteUser";
import { useRemoteValoraciones } from "../herramientas/useRemoteValoraciones";
import { pintarEstrellas } from "../herramientas/pintarEstrellas";

import "./Perfil.css";

export function Perfil({ idUsuario }) {
  const [usuario, setUsuario] = useRemoteUser(idUsuario);
  const [token, setToken] = useContext(AuthContext);
  const [valoraciones, setValoraciones] = useRemoteValoraciones(usuario.id);
  const estrellas = pintarEstrellas(valoraciones.promedio);

  const handleOnClick = () => setToken("");

  return token ? (
    <>
      <form className="Perfil-form">
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

        <label htmlFor="nombre" className="Perfil-label">
          Nombre:
          <input type="text" name="nombre" placeholder={usuario.nombre} />
        </label>

        <label htmlFor="apellidos" className="Perfil-label">
          Apellidos:
          <input type="text" name="apellidos" placeholder={usuario.apellidos} />
        </label>

        <label htmlFor="localidad" className="Perfil-label">
          Localidad:
          <input type="text" name="localidad" placeholder={usuario.localidad} />
        </label>

        <h2 className="Perfil-info">Datos de cuenta:</h2>

        <label htmlFor="nombreUsuario" className="Perfil-label">
          Nombre de usuario:
          <input
            type="text"
            name="nombreUsuario"
            placeholder={usuario.nombreUsuario}
          />
        </label>

        <label htmlFor="apellidos" className="Perfil-label">
          Email:
          <input type="email" name="email" placeholder={usuario.email} />
        </label>

        <label htmlFor="localidad" className="Perfil-label">
          Contraseña:
          <input type="password" name="password" placeholder="********" />
        </label>
        <div className="Perfil-botones">
          <button>Modificar perfil</button>
          <button onClick={handleOnClick}>Cerrar sesión</button>
        </div>
      </form>
    </>
  ) : (
    <Redirect to="/" />
  );
}
