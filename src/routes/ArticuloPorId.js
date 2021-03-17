import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

// import Carousel from "react-bootstrap/Carousel";
// import Slider from "infinite-react-carousel";

import { useRemoteArticles } from "../herramientas/useRemoteArticles";
import { useRemoteValoraciones } from "../herramientas/useRemoteValoraciones";
import { useRemoteUser } from "../herramientas/useRemoteUser";
import { pintarEstrellas } from "../herramientas/pintarEstrellas";
import { useRemoteArticlesFavourites } from "../herramientas/useRemoteArticlesFavourites";

import { AuthContext } from "../componentes/providers/AuthProvider";
import "./ArticuloPorId.css";

export function ArticuloPorId() {
  const { idArticulo } = useParams();
  const [token] = useContext(AuthContext);
  const [articulo] = useRemoteArticles(idArticulo);
  const [valoraciones] = useRemoteValoraciones(articulo?.id_usuario);
  const [usuario] = useRemoteUser(articulo?.id_usuario);
  const [message, setMessage] = useState("");
  const estrellas = pintarEstrellas(valoraciones?.promedio);
  const [favoritos, , refetch] = useRemoteArticlesFavourites(usuario?.id);

  let payload;
  let activarBotonChat = true;
  if (token) {
    payload = jwt_decode(token);
  }

  if (Object.keys(usuario).length === 0) {
    return <div>Loading...</div>;
  }
  if (!payload || payload.id === usuario.id) {
    activarBotonChat = false;
  }

  const reservarArticulo = async (idArticulo) => {
    try {
      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/articulos/${idArticulo}/reservarArticulo`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();
      setMessage(json);
    } catch (err) {
      setMessage(err);
    }
  };

  const handleOnClick = () => {
    reservarArticulo(articulo.id);
  };

  const handleOnClick2 = async (e) => {
    e.preventDefault();

    if (favoritos.find((favorito) => favorito.id === articulo.id)) {
      try {
        const response = await fetch(
          `http://localhost:8081/api/v1/proyecto8/articulosFav/${articulo.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const error = new Error("No se ha podido quitar de favoritos");
          throw error;
        }
        refetch();
      } catch (err) {
        setMessage(err.message);
      }
    } else {
      try {
        const response = await fetch(
          `http://localhost:8081/api/v1/proyecto8/articulos/${articulo.id}`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const error = new Error("No se ha podido agregar a favoritos");
          throw error;
        }
        refetch();
      } catch (err) {
        setMessage(err.message);
      }
    }
  };

  return (
    <div className="ArticuloPorId">
      <div className="fechaTitulo">
        <div>
          <p>{articulo.fecha}</p>
          <h1>{articulo.titulo}</h1>
        </div>
      </div>

      <Link to={`/perfil/${usuario.id}`} style={{ textDecoration: "none" }}>
        <div className="ArticuloPorId-datos-usuario">
          <div className="ArticuloPorId-datos-usuario2">
            <img
              className="ArticuloPorId-user-img"
              src={`http://localhost:8081/images/profiles/${usuario.foto}`}
              alt="img"
            />
            <div>
              {estrellas?.map((estrella, index) => (
                <img src={estrella} alt="estrella" key={index} />
              ))}
            </div>

            <p>{valoraciones.nroValoraciones} valoraciones</p>
          </div>
          <div className="ArticuloPorId-datos-usuario2">
            <img src="/iconos/visto.png" alt="visto" />
            <p>{articulo.nro_visitas}</p>
          </div>
        </div>
      </Link>

      <div className="ArticuloPorId-contenedor">
        {/* <Slider dots>
          <img
            className="ArticuloPorId-img"
            src={`http://localhost:8081/images/articulos/${articulo.foto1}`}
            alt="First slide"
          />

          <img
            className="ArticuloPorId-img"
            src={`http://localhost:8081/images/articulos/${articulo.foto2}`}
            alt="First slide"
          />

          <img
            className="ArticuloPorId-img"
            src={`http://localhost:8081/images/articulos/${articulo.foto3}`}
            alt="First slide"
          />
        </Slider> */}
        <img
          className="ArticuloPorId-img"
          src={`http://localhost:8081/images/articulos/${articulo.foto1}`}
          alt="First slide"
        />
      </div>
      <div className="ArticuloPorId-datos">
        <p>{articulo.precio}€</p>
        {activarBotonChat && (
          <img
            src={
              favoritos.find((favorito) => favorito.id === articulo.id)
                ? "/corazon-estrellas/corazonFav.png"
                : "/corazon-estrellas/corazon.png"
            }
            alt="corazon"
            onClick={handleOnClick2}
          />
        )}
        <div className="ArticuloPorId-datos-usuario2">
          <img src="../iconos/localizacion.png" alt="localizacion"></img>
          <p id="ArticuloPorId-localizacion">{articulo.localizacion}</p>
        </div>
      </div>
      {message && (
        <div className="ArticuloPorId-respuesta">{message.respuesta}</div>
      )}
      <div className="ArticuloPorId-buttons">
        {activarBotonChat && articulo.id_usuario_comprador === null && (
          <button
            className="ArticuloPorId-button-activate"
            type="submit"
            onClick={handleOnClick}
          >
            Reservar
          </button>
        )}
        {activarBotonChat && (
          <Link
            to={`../chat/${idArticulo}/${usuario.id}/${payload?.id}/`}
            style={{ textDecoration: "none" }}
          >
            <button className="ArticuloPorId-button-no-activate">Chat</button>
          </Link>
        )}
      </div>
      <div className="ArticuloPorId-descripcion">
        <h2>Descripción:</h2>
        <p>{articulo.descripcion}</p>
      </div>
    </div>
  );
}

//FECHA SQL declare @Existingdate datetime
// Set @Existingdate=GETDATE()
// Select CONVERT(varchar,@Existingdate,3) as [DD/MM/YY]
