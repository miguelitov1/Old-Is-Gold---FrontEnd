import React from "react";
import { useRemoteArticle } from "../herramientas/useRemoteArticles";
import "./Articulos.css";

export function Articulos() {
  const articulo = useRemoteArticle(2);

  return (
    <>
      <p>{articulo.fecha}</p>
      <div>
        <h1>{articulo.titulo}</h1>
      </div>
      <div className="Articulo-datos-usuario">
        <img
          class="Articulo-user-img"
          src="https://via.placeholder.com/50x50.png"
        />
        <p>Valoraciones</p>
        <p>opiniones</p>

        <p>{articulo.nro_visitas}</p>
      </div>
      <div className="contenedor">
        <img
          class="Articulo-img"
          src="https://via.placeholder.com/1220x1024.png"
        />
      </div>
      <div className="Articulo-datos">
        <p>{articulo.precio}€</p>
        <img src="./Corazon.png"></img>
        <p>{articulo.localizacion}</p>
      </div>
      <div className="Articulo-buttons">
        <button className="Articulo-button-activate" type="submit">
          Comprar
        </button>
        <button
          className="Articulo-button-no-activate"
          // onClick={handleOnClick}
        >
          Chat
        </button>
      </div>
      <div className="Articulo-descripcion">
        <h2>DESCRIPCION PRODUCTO</h2>
        <p>{articulo.descripcion}</p>
      </div>
    </>
  );
}

//FECHA SQL declare @Existingdate datetime
// Set @Existingdate=GETDATE()
// Select CONVERT(varchar,@Existingdate,3) as [DD/MM/YY]
