import React from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

export function footerBar(user) {
  console.log(user);
  let footerBar;
  if (user && user.foto) {
    return (footerBar = [
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
        icon: (
          <img
            src={`http://localhost:8081/images/profiles/${user.foto}`}
            alt="foto perfil"
          />
        ),
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
    ]);
  } else {
    return (footerBar = [
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
    ]);
  }
}
