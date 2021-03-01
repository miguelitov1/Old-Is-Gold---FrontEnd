import React, { useState, Redirect } from "react";
import { UsuarioRegistrado } from "../componentes/UsuarioRegistrado";
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
  const [redirection, setRedirection] = useState(false);

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

      console.log(res);

      if (res.status === 201) {
        //o sino el res.status===200 para login y 201 para register
        const json = await res.json();
        console.log(json);
        setNombre("");
        setApellidos("");
        setEmail("");
        setUsuario("");
        setContrasenha("");
        setRepetirContrasenha("");
        setLocalidad("");
        setErrorMsg("");
        setRedirection(true);
      } else {
        const json = await res.json();
        console.log(json);
        setErrorMsg(json.error);
      }
    } else {
      setErrorMsg("Debe completar todos los campos");
    }
  };

  return redirection ? (
    <UsuarioRegistrado />
  ) : (
    <div className="section-login">
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
        <div className="buttons">
          <button className="button-activate" type="submit">
            Crear cuenta
          </button>
          <button className="button-no-activate">Iniciar sesión</button>
        </div>
      </form>
      <div>{errorMsg && <div>{errorMsg}</div>}</div>{" "}
    </div>
  );
}
