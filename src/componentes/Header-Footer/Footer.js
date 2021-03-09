import React from "react";
import "./Footer.css";
import { FooterNav } from "./FooterNav";

export function Footer() {
  return (
    <>
      <footer className="Footer">
        <div className="Footer-menu">
          <FooterNav />
        </div>
        <div className="Footer-footer">
          <div className="Footer-div">
            <img
              src="./logo/logo_old-is-gold.png"
              className="Footer-logo"
              alt="logo"
            ></img>
            <p>Compraventa de tecnología retro</p>
            <p>Copyright 2021 OldIsGold</p>
          </div>
          <div>
            <p className="Footer-neg">Proyecto8</p>
            <p>¿Quienes somos?</p>
            <p>Equipo</p>
          </div>
          <div>
            <p className="Footer-neg">Soporte</p>
            <p>¿Quienes somos?</p>
            <p>Reglas de publicación</p>
            <p>Consejos de seguridad</p>
          </div>
          <div>
            <p className="Footer-neg">Legal</p>
            <p>Condiciones de uso</p>
            <p>Políticas de privacidad</p>
            <p>Cookies</p>
          </div>
        </div>
      </footer>
    </>
  );
}
