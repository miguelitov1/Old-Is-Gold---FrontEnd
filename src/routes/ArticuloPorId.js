import React from "react";
import { useRemoteArticles } from "../herramientas/useRemoteArticles";
import { formatearFecha } from "../herramientas/formatearFecha";
import "./ArticuloPorId.css";

export function ArticuloPorId() {
  const articulo = useRemoteArticles(4);

  return (
    <div className="ArticuloPorId">
      <div className="fechaTitulo">
        <div>
          <p>{formatearFecha(articulo.fecha)}</p>
          <h1>{articulo.titulo}</h1>
        </div>
      </div>

      <div className="ArticuloPorId-datos-usuario">
        <div className="ArticuloPorId-datos-usuario2">
          <img
            className="ArticuloPorId-user-img"
            src="https://via.placeholder.com/50x50.png"
            alt="img"
          />
          <div>
            <img
              src="./corazon-estrellas/estrella-100.png"
              alt="estrella"
            ></img>
            <img
              src="./corazon-estrellas/estrella-100.png"
              alt="estrella"
            ></img>
            <img
              src="./corazon-estrellas/estrella-100.png"
              alt="estrella"
            ></img>
            <img
              src="./corazon-estrellas/estrella-100.png"
              alt="estrella"
            ></img>
            <img src="./corazon-estrellas/estrella-50.png" alt="estrella"></img>
          </div>

          <p>12 opiniones</p>
        </div>
        <div className="ArticuloPorId-datos-usuario2">
          <img src="/iconos/visto.png" alt="visto" />
          <p>{articulo.nro_visitas}</p>
        </div>
      </div>

      <div className="contenedor">
        <img
          className="ArticuloPorId-img"
          src="https://via.placeholder.com/1220x1024.png"
        />
      </div>
      <div className="ArticuloPorId-datos">
        <p>{articulo.precio}€</p>
        <img src="./corazon-estrellas/corazon.png" alt="corazon"></img>
        <div className="ArticuloPorId-datos-usuario2">
          <img src="./iconos/localizacion.png" alt="localizacion"></img>
          <p id="ArticuloPorId-localizacion">{articulo.localizacion}</p>
        </div>
      </div>
      <div className="ArticuloPorId-buttons">
        <button className="ArticuloPorId-button-activate" type="submit">
          Comprar
        </button>
        <button
          className="ArticuloPorId-button-no-activate"
          // onClick={handleOnClick}
        >
          Chat
        </button>
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
