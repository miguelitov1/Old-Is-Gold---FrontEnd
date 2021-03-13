//rfc
import { Link } from "react-router-dom";
import React from "react";
import { SearchBar } from "./SearchBar";
import "./Header.css";

export const Header = (props) => {
  return (
    <header className="Header-container">
      <Link to="/">
        <img src="./logo/logo_old-is-gold.png" alt="imgPerfil" />
      </Link>
      <form className="Header-container2">
        {/* <div className="Header-lupa">
          <img src="./iconos/lupa.png" alt="lupa" />
        </div>
        <input type="text" placeholder="¿Que estás buscando?"></input> */}
        <SearchBar words={props.words} setWords={props.setWords} />
      </form>
      <Link to="/vender" style={{ textDecoration: "none" }}>
        <p>VENDER</p>
      </Link>
    </header>
  );
};
