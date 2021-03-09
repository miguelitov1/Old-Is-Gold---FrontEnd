import React from "react";
import { UploadFile } from "../componentes/Vender/UploadFile";
import { ElegirCategoria } from "../componentes/Vender/ElegirCategoria";
import { InfoProductos } from "../componentes/Vender/InfoProducto";
import "./Vender.css";

export function Vender() {
  return (
    <div className="Vender">
      <h3>¿Qué desea vender?</h3>
      <ElegirCategoria />
      <UploadFile path={20} />
      <InfoProductos />
    </div>
  );
}
