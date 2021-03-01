//rfc

import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="Header-container">
      <img src="logo.jpg" alt="imgPerfil" />

      <form className="Header-container2">
        <img className="Header-lupa" src="lupa.png" alt="lupa" />
        <input type="text" placeholder="¿Que estás buscando?"></input>
      </form>

      <div className="Header-container2">
        <a href="#">Vender</a>
        <img src="menu.png" alt="menu" />
      </div>
    </header>
  );
};
