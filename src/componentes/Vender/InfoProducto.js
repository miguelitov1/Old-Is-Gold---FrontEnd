import React from "react";
import "./InfoProducto.css";

export function InfoProductos({ handleSubmit }) {
  return (
    <div className="InfoProducto">
      <form onSubmit={handleSubmit}>
        <label>
          Titulo:
          <input name="titulo" type="text" maxLength="60" required></input>
        </label>

        <label>
          Descripcion:
          <textarea name="descripcion" required></textarea>
        </label>

        <label>
          Precio:
          <input name="precio" type="number" placeholder="€" required></input>
        </label>

        <label>
          Localidad
          <input name="localizacion" type="text" required></input>
        </label>

        <label className="InfoProducto-button">
          <button>Subir producto</button>
        </label>
      </form>
    </div>
  );
}
