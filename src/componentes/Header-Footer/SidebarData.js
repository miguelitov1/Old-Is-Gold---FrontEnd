import React from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

export const SidebarDataToken = [
  {
    tittle: "Chat",
    path: "/chat",
    icon: <BsIcons.BsChat />,
    cName: "nav-text",
  },
  {
    tittle: "Mis artículos",
    path: "/",
    icon: <BsIcons.BsTag />,
    cName: "nav-text",
  },
  {
    tittle: "Perfil",
    path: "/perfil",
    icon: <img src="./logo/logo_old-is-gold.png" alt="imgPerfil" />,
    cName: "nav-text",
  },
  {
    tittle: "Mis compras",
    path: "/",
    icon: <BsIcons.BsCreditCard />,
    cName: "nav-text",
  },
  {
    tittle: "Favoritos",
    path: "/favoritos",
    icon: <BsIcons.BsHeart />,
    cName: "nav-text",
  },
];

export const SidebarData = [
  {
    tittle: "Registro",
    path: "/registro",
    icon: <BsIcons.BsChat />,
    cName: "nav-no-token",
  },
  {
    tittle: "Login",
    path: "/login",
    icon: <BsIcons.BsChat />,
    cName: "nav-no-token",
  },
];
