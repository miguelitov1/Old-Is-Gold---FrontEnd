import React, { useState, useContext } from "react";
import { useRemoteUser } from "../herramientas/useRemoteUser";

export function Perfil() {
  const perfil = useRemoteUser(1);
  console.log("hola", perfil);

  return (
    <>
      <div></div>
    </>
  );
}
