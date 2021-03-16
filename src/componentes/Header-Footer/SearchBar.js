//rfc
import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";

export const SearchBar = (props) => {
  const handleChange = async (event) => {
    event.preventDefault();
    props.setWords(event.target.value);
  };
  return (
    <div className="Header-container2">
      <Link to="buscarPorPalabras" style={{ textDecoration: "none" }}>
        <div className="Header-lupa">
          <img src="/iconos/lupa.png" alt="lupa" />
        </div>
      </Link>
      <Link to="buscarPorPalabras" style={{ textDecoration: "none" }}>
        <input
          type="text"
          placeholder="¿Que estás buscando?"
          words={props.words}
          onChange={handleChange}
        ></input>
      </Link>
    </div>
  );
};
