import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../componentes/providers/AuthProvider";

import { useRemoteArticlesFavourites } from "../../herramientas/useRemoteArticlesFavourites";

import "./ShowArticles.css";

export function ShowArticles(props) {
  const [favoritos, , refetch] = useRemoteArticlesFavourites(props.idUsuario);
  const [token] = useContext(AuthContext);
  const [, setMessage] = useState("");

  const handleOnClick = async (e) => {
    e.preventDefault();

    if (favoritos.find((favorito) => favorito.id === props.id)) {
      try {
        const response = await fetch(
          `http://localhost:8081/api/v1/proyecto8/articulosFav/${props.id}`,
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
          `http://localhost:8081/api/v1/proyecto8/articulos/${props.id}`,
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
    <Link to={`/articulo/${props.id}`} style={{ textDecoration: "none" }}>
      <div className="ArticuloHome-container">
        <div className="ArticuloHome-divImg">
          <img
            src={`http://localhost:8081/images/articulos/${props.foto}`}
            alt="foto"
          ></img>
        </div>

        <div className="ArticuloHome">
          <div className="ArticuloHome-container2">
            <h2 className="ArticuloHome-titulo">
              {props.titulo.toUpperCase()}
            </h2>
            {token && (
              <img
                className="ArticuloHome-corazon"
                src={
                  favoritos.find((favorito) => favorito.id === props.id)
                    ? "/corazon-estrellas/corazonFav.png"
                    : "/corazon-estrellas/corazon.png"
                }
                alt="corazon"
                onClick={handleOnClick}
              />
            )}
          </div>
          <p className="ArticuloHome-precio">{props.precio}€</p>
          <p className="ArticuloHome-descripcion">{props.descripcion}</p>
        </div>
      </div>
    </Link>
  );
}
