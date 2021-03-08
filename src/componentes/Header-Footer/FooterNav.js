import "./Footer.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarData, SidebarDataToken } from "./SidebarData";
import { AuthContext } from "../providers/AuthProvider";

export function FooterNav() {
  const [token] = useContext(AuthContext);
  return (
    <>
      <nav className="Footer-nav">
        <ul className=" Footer-ul">
          {token
            ? SidebarDataToken.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.tittle}</span>
                    </Link>
                  </li>
                );
              })
            : SidebarData.map((item, index) => {
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
