import React, { useState } from "react";
import "../componentes/Articulos/ShowArticles.css";
import "./MisArticulos.css";

import { ShowArticles } from "../componentes/Articulos/ShowArticles";
import { ShowBoughtReserved } from "../componentes/Articulos/ShowBoughtArticles";

import { useRemoteArticlesAdquired } from "../herramientas/useRemoteArticlesAdquired";
import { useRemoteArticlesMyReserved } from "../herramientas/useRemoteArticlesMyReserved";

export function MisCompras(props) {
  const [compras] = useRemoteArticlesAdquired();
  const [misReservas] = useRemoteArticlesMyReserved();
  const [filtro, setFiltro] = useState("reservados");

  const styleReservados = {
    cursor: "pointer",
    backgroundColor: filtro === "reservados" ? "white" : "transparent",
  };
  const styleComprados = {
    cursor: "pointer",
    backgroundColor: filtro === "comprados" ? "white" : "transparent",
  };

  return filtro === "reservados" ? (
    <div className="Lista-articulos-body">
      <div className="MisArticulos-filtros">
        <p onClick={() => setFiltro("reservados")} style={styleReservados}>
          Articulos reservados
        </p>
        <p onClick={() => setFiltro("comprados")} style={styleComprados}>
          Articulos comprados
        </p>
      </div>
      {misReservas?.map((articulo) => (
        <ShowArticles
          key={articulo.id}
          id={articulo.id}
          foto={articulo.foto1}
          descripcion={articulo.descripcion}
          titulo={articulo.titulo}
          precio={articulo.precio}
        />
      ))}
    </div>
  ) : filtro === "comprados" ? (
    <div className="Lista-articulos-body">
      <div className="MisArticulos-filtros">
        <p onClick={() => setFiltro("reservados")} style={styleReservados}>
          Articulos reservados
        </p>
        <p onClick={() => setFiltro("comprados")} style={styleComprados}>
          Articulos comprados
        </p>
      </div>
      {compras?.map((articulo) => (
        <ShowBoughtReserved
          key={articulo.id}
          id={articulo.id}
          foto={articulo.foto1}
          descripcion={articulo.descripcion}
          titulo={articulo.titulo}
          precio={articulo.precio}
          idComprador={articulo.id_usuario_comprador}
          idVendedor={articulo.id_usuario}
          valoracion={articulo.valoracionSiNo}
        />
      ))}
    </div>
  ) : null;
}
