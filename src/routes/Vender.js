import React from "react";
import { UploadFile } from "../componentes/Vender/UploadFile";
import { ElegirCategoria } from "../componentes/Vender/ElegirCategoria";
import "./Vender.css";

export function Vender() {
  return (
    <>
      <h3>¿Qué desea vender?</h3>
      <ElegirCategoria />
      <UploadFile path={20} />
    </>
  );
}
