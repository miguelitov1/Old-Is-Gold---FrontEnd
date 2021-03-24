import React from "react";
import * as BsIcons from "react-icons/bs";

export function footerBar(usuario) {
  if (usuario && usuario.foto) {
    return [
      {
        tittle: "Chat",
        path: "/chat",
        icon: <BsIcons.BsChat />,
        cName: "Nav-token",
      },
      {
        tittle: "Mis artículos",
        path: "/misArticulos",
        icon: <BsIcons.BsTag />,
        cName: "Nav-token",
      },
      {
        tittle: "Perfil",
        path: "/perfil",
        icon: `http://localhost:8081/images/profiles/${usuario.foto}`,
        cName: "Nav-token",
      },
      {
        tittle: "Mis compras",
        path: "/misCompras",
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
  } else {
    return [
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
  }
}
