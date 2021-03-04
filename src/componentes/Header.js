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

      <div className="Header-container2">
        <a href="#">VENDER</a>
        <img src="./iconos/menu.png" alt="menu" />
      </div>
    </header>
  );
};
