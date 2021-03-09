//rfc
import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="Header-container">
      <Link to="/">
        <img src="./logo/logo_old-is-gold.png" alt="imgPerfil" />
      </Link>
      <form className="Header-container2">
        <div className="Header-lupa">
          <img src="./iconos/lupa.png" alt="lupa" />
        </div>
        <input type="text" placeholder="¿Que estás buscando?"></input>
      </form>
      <Link to="/vender">
        <p>VENDER</p>
      </Link>
    </header>
  );
};
