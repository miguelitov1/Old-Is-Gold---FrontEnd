//rfc

import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="Header-container">
      <img src="./logo/logo_old-is-gold.png" alt="imgPerfil" />

      <form className="Header-container2">
        <div className="Header-lupa">
          <img src="./iconos/lupa.png" alt="lupa" />
        </div>
        <input type="text" placeholder="¿Que estás buscando?"></input>
      </form>

      <a href="#">VENDER</a>
    </header>
  );
};
