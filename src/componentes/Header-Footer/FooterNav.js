import "./Footer.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { footerBar } from "./footerNavData";
import { AuthContext } from "../providers/AuthProvider";
import { UserContext } from "../providers/UserProvider";

export function FooterNav() {
  const [token] = useContext(AuthContext);
  const [usuario] = useContext(UserContext);

  const menu = footerBar(usuario);

  return (
    <>
      <nav className="Footer-nav">
        <ul className=" Footer-ul">
          {token
            ? menu.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    {item.tittle === "Perfil" ? (
                      <Link to={item.path}>
                        <div
                          className="FooterNav-imagen"
                          style={{
                            backgroundImage: `url(${item.icon})`,
                          }}
                        ></div>
                      </Link>
                    ) : (
                      <Link to={item.path}>
                        {item.icon}
                        <span className={`Footer-${item.tittle}`}>
                          {item.tittle}
                        </span>
                      </Link>
                    )}
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
