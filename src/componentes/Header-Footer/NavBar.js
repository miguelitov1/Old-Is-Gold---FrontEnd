import "./NavBar.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData, SidebarDataToken } from "./SidebarData";
import { AuthContext } from "../providers/AuthProvider";
// import { Link } from "react-router-dom";

export function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [token] = useContext(AuthContext);
  // return (token? (<></>):(<></>))
  return (
    <>
      <div className="navbar">
        {/* <p>Menu</p> */}
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu activate" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link ti="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>

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
                      {item.icon}
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