import React, { useState, useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../componentes/providers/AuthProvider";
import { useRemoteUser } from "../herramientas/useRemoteUser";
import "./Perfil.css";
export function Perfil() {
  const perfil = useRemoteUser(1);
  const [token, setToken] = useContext(AuthContext);
  const [redirection, setRedirection] = useState("");
  console.log(perfil);

  return token ? (
    <>
      <form className="perfil-form">
        <h2>Perfil</h2>
        <div className="perfil-img"></div>

        <div>
          <img src="./corazon-estrellas/estrella-100.png" alt="estrella"></img>
          <img src="./corazon-estrellas/estrella-100.png" alt="estrella"></img>
          <img src="./corazon-estrellas/estrella-100.png" alt="estrella"></img>
          <img src="./corazon-estrellas/estrella-100.png" alt="estrella"></img>
          <img src="./corazon-estrellas/estrella-50.png" alt="estrella"></img>
        </div>

        <label htmlFor="nombre" className="perfil-label">
          Nombre:
          <input type="text" name="nombre" placeholder={perfil.nombre} />
        </label>

        <label htmlFor="apellidos" className="perfil-label">
          Apellidos:
          <input type="text" name="apellidos" placeholder={perfil.apellidos} />
        </label>
        <label htmlFor="localidad" className="perfil-label">
          Localidad:
          <input type="text" name="localidad" placeholder={perfil.localidad} />
        </label>
      </form>
      <div className="Register-section">
        <form className="form-register">
          <h2>Datos de cuenta:</h2>
          <label htmlFor="nombreUsuario" className="perfil-label">
            Nombre de usuario:
            <input
              type="text"
              name="nombreUsuario"
              placeholder={perfil.nombreUsuario}
            />
          </label>

          <label htmlFor="apellidos" className="perfil-label">
            Email:
            <input type="email" name="email" placeholder={perfil.email} />
          </label>
          <label htmlFor="localidad" className="perfil-label">
            Contraseña:
            <input type="password" name="password" placeholder="********" />
          </label>
        </form>
      </div>
      <div className="Perfil-botones">
        <button>Modificar perfil</button>
        <button>Cerrar sesión</button>
      </div>
    </>
  ) : (
    <Redirect to="/registro" />
  );
}
