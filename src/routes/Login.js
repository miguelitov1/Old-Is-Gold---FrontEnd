import React from "react";
import "./register-login.css";

export function Login() {
  return (
    <div className="section-login">
      <form className="form-register">
        <p>Registrarse o iniciar sesión</p>
        <input type="email" placeholder="Usuario/email" />
        <input type="password" placeholder="Contraseña" />
        <div className="buttons">
          <button className="button-activate" type="submit">
            Iniciar sesión
          </button>
          <button className="button-no-activate">Registrarse</button>
        </div>
      </form>
    </div>
  );
}
