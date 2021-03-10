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
    cName: "Nav-token",
  },
  {
    tittle: "Mis artículos",
    path: "/misArticulosVentas",
    icon: <BsIcons.BsTag />,
    cName: "Nav-token",
  },
  {
    tittle: "Perfil",
    path: "/perfil",
    icon: <img src="./logo/logo_old-is-gold.png" alt="imgPerfil" />,
    cName: "Nav-token",
  },
  {
    tittle: "Mis compras",
    path: "/",
    icon: <BsIcons.BsCreditCard />,
    cName: "Nav-token",
  },
  {
    tittle: "Favoritos",
    path: "/favoritos",
    icon: <BsIcons.BsHeart />,
    cName: "Nav-token",
  },
];

export const SidebarData = [
  {
    tittle: "Registro",
    path: "/registro",
    icon: <BsIcons.BsChat />,
    cName: "Nav-no-token",
  },
  {
    tittle: "Login",
    path: "/login",
    icon: <BsIcons.BsChat />,
    cName: "Nav-no-token",
  },
];
