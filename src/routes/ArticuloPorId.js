import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { useRemoteArticles } from "../herramientas/useRemoteArticles";
import { useRemoteValoraciones } from "../herramientas/useRemoteValoraciones";
import { useRemoteUser } from "../herramientas/useRemoteUser";
import { pintarEstrellas } from "../herramientas/pintarEstrellas";
import { useRemoteArticlesFavourites } from "../herramientas/useRemoteArticlesFavourites";

import { AuthContext } from "../componentes/providers/AuthProvider";
import { UserContext } from "../componentes/providers/UserProvider";
import { CarouselItems } from "../componentes/Articulos/CarouselItems";

import "./ArticuloPorId.css";

export function ArticuloPorId() {
  const { idArticulo } = useParams();
  const [token] = useContext(AuthContext);
  const [usuario] = useContext(UserContext);

  const [articulo] = useRemoteArticles(idArticulo);
  const [valoraciones] = useRemoteValoraciones(articulo?.id_usuario);
  const [usuarioArticulo] = useRemoteUser(articulo?.id_usuario);
  const estrellas = pintarEstrellas(valoraciones?.promedio);

  const [message, setMessage] = useState("");
  const [favoritos, , refetch] = useRemoteArticlesFavourites(usuario?.id);

  let activarBotonChat = true;

  if (Object.keys(usuarioArticulo).length === 0) {
    return <div>Loading...</div>;
  }
  if (usuario.id === usuarioArticulo.id || !usuario) {
    activarBotonChat = false;
  }

  const urlFotos = [
    articulo.foto1,
    articulo.foto2,
    articulo.foto3,
    articulo.foto4,
    articulo.foto5,
  ];
  const fotos = urlFotos.reduce((acumulador, foto, index) => {
    if (foto) {
      acumulador.push({
        url: `http://localhost:8081/images/articulos/${foto}`,
        key: index,
      });
    }
    return acumulador;
  }, []);

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

      <Link
        to={`/perfil/${usuarioArticulo.id}`}
        style={{ textDecoration: "none" }}
      >
        <div className="ArticuloPorId-datos-usuario">
          <div className="ArticuloPorId-datos-usuario2">
            <img
              className="ArticuloPorId-user-img"
              src={`http://localhost:8081/images/profiles/${usuarioArticulo.foto}`}
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

      <CarouselItems fotos={fotos} />

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
            to={`../chat/${idArticulo}/${usuarioArticulo.id}/${usuario.id}/`}
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
