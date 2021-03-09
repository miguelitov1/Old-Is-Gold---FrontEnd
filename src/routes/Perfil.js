<<<<<<< HEAD:src/componentes/Usuarios/Perfil.js
import React, { useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import { useRemoteUser } from "../../herramientas/useRemoteUser";
// import { Logout } from "../../routes/Logout";
=======
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { AuthContext } from "../componentes/providers/AuthProvider";
import { useRemoteUser } from "../herramientas/useRemoteUser";
import { Logout } from "../routes/Logout";

>>>>>>> 2000b1dd02943fb9e26c26c828b7a2d1795b0529:src/routes/Perfil.js
import "./Perfil.css";
export function Perfil() {
  const perfil = useRemoteUser(1);
  const [token, setToken] = useContext(AuthContext);
  const handleOnClick = () => setToken("");
  return token ? (
    <>
      <form className="Perfil-form">
        <div className="Perfil-img">
          <img
            className="Perfil-foto-de-perfil"
            src="logo/logo_old-is-gold.png"
            alt="Foto de perfil"
          ></img>
        </div>

        <div className="Perfil-valoraciones">
          <Link to="/valoraciones">
            <img
              src="./corazon-estrellas/estrella-100.png"
              alt="estrella"
            ></img>
            <img
              src="./corazon-estrellas/estrella-100.png"
              alt="estrella"
            ></img>
            <img
              src="./corazon-estrellas/estrella-100.png"
              alt="estrella"
            ></img>
            <img
              src="./corazon-estrellas/estrella-100.png"
              alt="estrella"
            ></img>
            <img src="./corazon-estrellas/estrella-50.png" alt="estrella"></img>
          </Link>
          <h2 className="Perfil-info">Datos del usuario</h2>
        </div>

        <label htmlFor="nombre" className="Perfil-label">
          Nombre:
          <input type="text" name="nombre" placeholder={perfil.nombre} />
        </label>

        <label htmlFor="apellidos" className="Perfil-label">
          Apellidos:
          <input type="text" name="apellidos" placeholder={perfil.apellidos} />
        </label>

        <label htmlFor="localidad" className="Perfil-label">
          Localidad:
          <input type="text" name="localidad" placeholder={perfil.localidad} />
        </label>

        <h2 className="Perfil-info">Datos de cuenta:</h2>

        <label htmlFor="nombreUsuario" className="Perfil-label">
          Nombre de usuario:
          <input
            type="text"
            name="nombreUsuario"
            placeholder={perfil.nombreUsuario}
          />
        </label>

        <label htmlFor="apellidos" className="Perfil-label">
          Email:
          <input type="email" name="email" placeholder={perfil.email} />
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
