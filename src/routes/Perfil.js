import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { AuthContext } from "../componentes/providers/AuthProvider";
import { UserContext } from "../componentes/providers/UserProvider";

import { useRemoteValoraciones } from "../herramientas/useRemoteValoraciones";
import { pintarEstrellas } from "../herramientas/pintarEstrellas";
import "./Perfil.css";

import "../componentes/Vender/UploadFile.css";
import { UploadFileProfile } from "../componentes/Usuarios/UploadFileProfile";
import { useHistory } from "react-router-dom";

export function Perfil() {
  const [token, setToken] = useContext(AuthContext);
  const [user, setUser] = useContext(UserContext);
  const [valoraciones] = useRemoteValoraciones(user.id);
  const estrellas = pintarEstrellas(valoraciones.promedio);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [, setFoto] = useState("");
  const [fotoNueva, setFotoNueva] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [mostrarBoton, setMostrarBoton] = useState(false);
  const [contrasenha, setContrasenha] = useState("");
  const [repetirContrasenha, setRepetirContrasenha] = useState("");
  const [mostrarRepetirContrasenha, setMostrarRepetirContrasenha] = useState(
    false
  );
  let history = useHistory();
  useEffect(() => {
    if (user) {
      setNombre(user.nombre);
      setApellidos(user.apellidos);
      setEmail(user.email);
      setUsuario(user.nombreUsuario);
      setLocalidad(user.localidad);
      setFoto(user.foto);
    }
  }, [user]);

  const handleOnClick = () => {
    setToken("");
    setUser("");
    history.push("/");
  };
  const handleMostrarBoton = (e) => {
    e.preventDefault();
    if (mostrarBoton) {
      setMostrarBoton(false);
      setMostrarRepetirContrasenha(false);
    } else {
      setMostrarBoton(true);
      setMostrarRepetirContrasenha(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      nombre !== "" &&
      apellidos !== "" &&
      email !== "" &&
      usuario !== "" &&
      localidad !== "" &&
      contrasenha !== "" &&
      repetirContrasenha !== ""
    ) {
      const payload = new FormData();
      payload.append("nombre", nombre);
      payload.append("apellidos", apellidos);
      payload.append("email", email);
      payload.append("nombreUsuario", usuario);
      payload.append("localidad", localidad);
      payload.append("contrasenha", contrasenha);
      payload.append("repetirContrasenha", repetirContrasenha);
      if (fotoNueva) {
        payload.append("foto", fotoNueva);
      }
      const res = await fetch(
        `http://localhost:8081/api/v1/proyecto8/usuarios/actualizar`,
        {
          method: "PUT",
          headers: {
            //"Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: payload,
        }
      );

      if (res.status === 200) {
        const jsonUser = await res.json();
        setErrorMsg("Perfil actualizado");
        setMostrarRepetirContrasenha(false);
        setMostrarBoton(false);
        setUser(jsonUser);
      } else {
        const json = await res.json();
        setErrorMsg(json.error);
      }
    } else {
      setErrorMsg("Debe completar todos los campos");
    }
  };

  if (!user) return <div>Loading...</div>;
  return token ? (
    <>
      <form className="Perfil-form" onSubmit={handleSubmit}>
        {!mostrarBoton && (
          <div
            className="Perfil-img"
            style={{
              backgroundImage: `url(
              http://localhost:8081/images/profiles/${user.foto}
            )`,
            }}
            alt="Foto de perfil"
          />
        )}
        <div>
          <label>
            {mostrarBoton && (
              <UploadFileProfile
                fotoNueva={fotoNueva}
                setFotoNueva={setFotoNueva}
                foto={user.foto}
              />
            )}
          </label>
        </div>
        <div className="Perfil-valoraciones">
          <Link to={`/valoraciones/${user.id}`}>
            {estrellas?.map((estrella, index) => (
              <img src={estrella} alt="estrella" key={index} />
            ))}
          </Link>
          <h2 className="Perfil-info">Datos del usuario</h2>
        </div>
        <label htmlFor="nombre" className="Perfil-label">
          Nombre:
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label htmlFor="apellidos" className="Perfil-label">
          Apellidos:
          <input
            type="text"
            name="apellidos"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
          />
        </label>
        <label htmlFor="localidad" className="Perfil-label">
          Localidad:
          <input
            type="text"
            name="localidad"
            value={localidad}
            onChange={(e) => setLocalidad(e.target.value)}
          />
        </label>
        <h2 className="Perfil-info">Datos de cuenta:</h2>
        <label htmlFor="usuario" className="Perfil-label">
          Nombre de usuario:
          <input
            type="text"
            name="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </label>
        <label htmlFor="email" className="Perfil-label">
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {mostrarRepetirContrasenha && (
          <>
            <label htmlFor="contrasenha" className="Perfil-label">
              Contraseña:
              <input
                type="password"
                name="contrasenha"
                onChange={(e) => setContrasenha(e.target.value)}
              />
            </label>
            <label htmlFor="repetirContrasenha" className="Perfil-label">
              Repetir contraseña:
              <input
                type="password"
                name="repetirContrasenha"
                onChange={(e) => setRepetirContrasenha(e.target.value)}
              />
            </label>
          </>
        )}
        <div className="Register-error">
          {errorMsg && <div>{errorMsg}</div>}
        </div>{" "}
        <div className="Perfil-botones">
          {!mostrarBoton && (
            <button onClick={handleMostrarBoton}>Editar perfil</button>
          )}
          {mostrarBoton && <button type="submit">Actualizar perfil</button>}
          <button onClick={handleOnClick}>Cerrar sesión</button>
        </div>
      </form>
    </>
  ) : (
    <Redirect to="/" />
  );
}
