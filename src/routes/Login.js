import React, { useState, useContext } from "react";
import { Redirect } from "react-router";
import "./register-login.css";
import { AuthContext } from "../componentes/providers/AuthProvider";

export function Login() {
  const [email, setEmail] = useState("");
  const [contrasenha, setContrasenha] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [redirection, setRedirection] = useState(false);
  const [token, setToken] = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email !== "" && contrasenha !== "") {
      const login = {
        email: email,
        contrasenha: contrasenha,
      };

      const res = await fetch(
        `http://localhost:8081/api/v1/proyecto8/usuarios/login`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(login),
        }
      );
      if (res.status === 200) {
        //o sino el res.status===200 para login y 201 para register
        const json = await res.json();
        setToken(json.accessToken);
        setEmail("");
        setContrasenha("");
      } else {
        const json = await res.json();
        setErrorMsg(json.error);
      }
    } else {
      setErrorMsg("Debe completar todos los campos");
    }
  };

  const handleOnClick = () => setRedirection(true);

  return token ? (
    <Redirect to="/" />
  ) : redirection ? (
    <Redirect to="/registro" />
  ) : (
    <div className="Register-section">
      <form className="form-register" onSubmit={handleSubmit}>
        <p>Registrarse o iniciar sesión</p>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={contrasenha}
          onChange={(e) => setContrasenha(e.target.value)}
        />
        <div className="buttons">
          <button className="Register-button-activate" type="submit">
            Iniciar sesión
          </button>
          <button
            className="Register-button-no-activate"
            onClick={handleOnClick}
          >
            Registrarse
          </button>
        </div>
      </form>
      <div className="Register-error">{errorMsg && <div>{errorMsg}</div>}</div>{" "}
    </div>
  );
}
