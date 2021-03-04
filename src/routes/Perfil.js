import React, { useState, useContext } from "react";
import { useRemoteUser } from "../herramientas/useRemoteUser";

export function Perfil() {
  const perfil = useRemoteUser(1);

  return (
    <>
      <div>NOMBRE:{perfil.nombre}</div>
    </>
  );
}
