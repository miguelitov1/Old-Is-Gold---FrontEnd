import "./Footer.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { footerBar } from "./footerNavData";
import { AuthContext } from "../providers/AuthProvider";
import jwt_decode from "jwt-decode";

export function FooterNav() {
  const [token] = useContext(AuthContext);
  let payload = "";
  if (token) {
    payload = jwt_decode(token);
  }
  const menu = footerBar(payload);

  return (
    <>
      <nav className="Footer-nav">
        <ul className=" Footer-ul">
          {token
            ? menu.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span className={`Footer-${item.tittle}`}>
                        {item.tittle}
                      </span>
                    </Link>
                  </li>
                );
              })
            : menu.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      <span>{item.tittle}</span>
                    </Link>
                  </li>
                );
              })}
        </ul>
      </nav>
    </>
  );
}
