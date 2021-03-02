import React from "react";
import "./Footer.css";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-div">
          <h2 className="footer-neg">Old is gold</h2>
          <a href="#">Compraventa de tecnología retro</a>
          <p>Copyright 2021 OldIsGold</p>
        </div>
        <div>
          <p className="footer-neg">Proyecto8</p>
          <a href="#">¿Quienes somos?</a>
          <a href="#">Equipo</a>
        </div>
        <div>
          <p className="footer-neg">Soporte</p>
          <a href="#">¿Quienes somos?</a>
          <a href="#">Reglas de publicación</a>
          <a href="#">Consejos de seguridad</a>
        </div>
        <div>
          <p className="footer-neg">Legal</p>
          <a href="#">Condiciones de uso</a>
          <a href="#">Políticas de privacidad</a>
          <a href="#">Cookies</a>
        </div>
      </footer>
    </>
  );
}
