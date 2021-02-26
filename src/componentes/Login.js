import React from "react";
import "./register-login.css";

export function Login() {
  return (
    <div className="section-login">
      <form class="form-register">
        <p>Registrarse o iniciar sesión</p>
        <input type="email" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <div class="buttons">
          <button class="button-activate" type="submit">
            Iniciar sesión
          </button>
          <button class="button-no-activate">Registrarse</button>
        </div>
      </form>
    </div>
  );
}
