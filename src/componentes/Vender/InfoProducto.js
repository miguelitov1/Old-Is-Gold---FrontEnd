import React from "react";
import "./InfoProducto.css";

export function InfoProductos() {
  return (
    <div className="InfoProducto">
      <form>
        <label>
          Titulo:
          <input type="text" maxLength="60" required></input>
        </label>

        <label>
          Descripcion:
          <textarea required></textarea>
        </label>

        <label>
          Precio:
          <input type="number" placeholder="€" required></input>
        </label>

        <label>
          Localidad
          <input type="text" required></input>
        </label>

        <label className="InfoProducto-button">
          <button>Subir producto</button>
        </label>
      </form>
    </div>
  );
}
