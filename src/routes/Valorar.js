import React, { useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import { useRemoteArticles } from "../herramientas/useRemoteArticles";
import { useRemoteUser } from "../herramientas/useRemoteUser";
import { AuthContext } from "../componentes/providers/AuthProvider";

import "./Valorar.css";

export function Valorar() {
  const { idArticulo } = useParams();
  const [articulo] = useRemoteArticles(idArticulo);
  const [vendedor] = useRemoteUser(articulo.id_usuario);
  const [message, setMessage] = useState("");
  const [token] = useContext(AuthContext);

  const [puntuacion, setPuntuacion] = useState(0);
  const [comentario, setComentario] = useState("");

  const history = useHistory();
  if (
    Object.keys(vendedor).length === 0 ||
    Object.keys(articulo).length === 0
  ) {
    return <div>Loading...</div>;
  }

  const handleOnClick = (e) => {
    const value = e.target.value;
    setPuntuacion(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      const newValuation = {
        valoracion: puntuacion,
        comentarioValoracion: comentario,
      };

      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/ventas/valoracion/${idArticulo}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newValuation),
        }
      );

      const responseJson = await response.json();

      if (!response.ok) {
        const error = responseJson;
        throw error;
      }
      history.push(`/valoraciones/${vendedor.id}`);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="Valorar">
      <div className="Valorar-perfil-img">
        <div
          className="Perfil-img"
          style={{
            backgroundImage: `url(
              http://localhost:8081/images/profiles/${vendedor.foto}
            )`,
          }}
          alt="Foto de perfil"
        ></div>
        <p>{vendedor.nombreUsuario}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="Valorar-contenedor-estrellas">
          <div className={puntuacion >= 1 ? "active" : ""}>
            <input type="button" value={1} onClick={handleOnClick}></input>
          </div>
          <div className={puntuacion >= 2 ? "active" : ""}>
            <input type="button" value={2} onClick={handleOnClick}></input>
          </div>
          <div className={puntuacion >= 3 ? "active" : ""}>
            <input type="button" value={3} onClick={handleOnClick}></input>
          </div>
          <div className={puntuacion >= 4 ? "active" : ""}>
            <input type="button" value={4} onClick={handleOnClick}></input>
          </div>
          <div className={puntuacion >= 5 ? "active" : ""}>
            <input type="button" value={5} onClick={handleOnClick}></input>
          </div>
        </div>
        {message && <p className="mensaje-error">{message}</p>}
        <textarea
          placeholder="Escriba su valoracion"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          required
        ></textarea>
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
}
