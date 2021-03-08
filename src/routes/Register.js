import React, { useState, useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../componentes/providers/AuthProvider";
import { UsuarioRegistrado } from "../componentes/Usuarios/UsuarioRegistrado";
import "./register-login.css";

export function Register() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contrasenha, setContrasenha] = useState("");
  const [repetirContrasenha, setRepetirContrasenha] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [redirection, setRedirection] = useState("");
  const [token, setToken] = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      nombre !== "" &&
      apellidos !== "" &&
      email !== "" &&
      usuario !== "" &&
      contrasenha !== "" &&
      repetirContrasenha !== "" &&
      localidad !== ""
    ) {
      const newUserForServer = {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        contrasenha: contrasenha,
        repetirContrasenha: repetirContrasenha,
        nombreUsuario: usuario,
        localidad: localidad,
      };

      const res = await fetch(
        `http://localhost:8081/api/v1/proyecto8/usuarios/registro`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(newUserForServer),
        }
      );

      if (res.status === 201) {
        //o sino el res.status===200 para login y 201 para register
        setNombre("");
        setApellidos("");
        setEmail("");
        setUsuario("");
        setContrasenha("");
        setRepetirContrasenha("");
        setLocalidad("");
        setErrorMsg("");
        setRedirection("usuarioRegistrado");
      } else {
        const json = await res.json();
        setErrorMsg(json.error);
      }
    } else {
      setErrorMsg("Debe completar todos los campos");
    }
  };

  const handleOnClick = () => setRedirection("login");

  return token ? (
    <Redirect to="/" />
  ) : redirection === "login" ? (
    <Redirect to="/login" />
  ) : redirection === "usuarioRegistrado" ? (
    <UsuarioRegistrado />
  ) : (
    <div className="Register-section">
      <form className="form-register" onSubmit={handleSubmit}>
        <p>Registrarse</p>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellidos"
          name="apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Usuario"
          name="usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="contrasenha"
          value={contrasenha}
          onChange={(e) => setContrasenha(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          name="repetircontrasenha"
          value={repetirContrasenha}
          onChange={(e) => setRepetirContrasenha(e.target.value)}
        />
        <input
          type="text"
          placeholder="Localidad"
          name="localidad"
          value={localidad}
          onChange={(e) => setLocalidad(e.target.value)}
        />
        <div className="Register-buttons">
          <button className="Register-button-activate" type="submit">
            Crear cuenta
          </button>
          <button
            className="Register-button-no-activate"
            onClick={handleOnClick}
          >
            Iniciar sesión
          </button>
        </div>
      </form>
      <div className="Register-error">{errorMsg && <div>{errorMsg}</div>}</div>{" "}
    </div>
  );
}
