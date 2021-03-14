import React from "react";
import { useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import "./MisArticulos.css";

import { ShowArticles } from "../componentes/Articulos/ShowArticles";
import { ShowArticlesReserved } from "../componentes/Articulos/ShowArticlesReserved";
import { ShowMyArticles } from "../componentes/Articulos/ShowMyArticles";
import { AuthContext } from "../componentes/providers/AuthProvider";

import { useRemoteArticlesPublished } from "../herramientas/useRemoteArticlesPublished";
import { useRemoteArticlesSoldOut } from "../herramientas/useRemoteArticlesSoldOut";
import { useRemoteArticlesReserved } from "../herramientas/useRemoteArticlesReserved";

export function MisArticulos() {
  const [token, setToken] = useContext(AuthContext);
  let payload = null;
  if (token) {
    payload = jwt_decode(token, process.env.JWT_SECRET);
  }
  const [articulosPublicados] = useRemoteArticlesPublished(payload.id);
  const [articulosVendidos] = useRemoteArticlesSoldOut();
  const [articulosReservados] = useRemoteArticlesReserved();
  const [filtro, setFiltro] = useState("publicados");

  const stylePublicados = {
    cursor: "pointer",
    backgroundColor: filtro === "publicados" ? "white" : "transparent",
  };
  const styleVendidos = {
    cursor: "pointer",
    backgroundColor: filtro === "vendidos" ? "white" : "transparent",
  };
  const styleReservados = {
    cursor: "pointer",
    backgroundColor: filtro === "reservados" ? "white" : "transparent",
  };

  return filtro === "publicados" ? (
    <div className="Lista-articulos-body">
      <div className="MisArticulos-filtros">
        <p onClick={() => setFiltro("publicados")} style={stylePublicados}>
          Articulos publicados
        </p>
        <p onClick={() => setFiltro("reservados")} style={styleReservados}>
          Articulos reservados
        </p>
        <p onClick={() => setFiltro("vendidos")} style={styleVendidos}>
          Articulos vendidos
        </p>
      </div>
      {articulosPublicados?.map((articulo) => (
        <ShowMyArticles
          key={articulo.id}
          id={articulo.id}
          foto={articulo.foto1}
          descripcion={articulo.descripcion}
          titulo={articulo.titulo}
          precio={articulo.precio}
        />
      ))}
    </div>
  ) : filtro === "reservados" ? (
    <div className="Lista-articulos-body">
      <div className="MisArticulos-filtros">
        <p onClick={() => setFiltro("publicados")} style={stylePublicados}>
          Articulos publicados
        </p>
        <p onClick={() => setFiltro("reservados")} style={styleReservados}>
          Articulos reservados
        </p>
        <p onClick={() => setFiltro("vendidos")} style={styleVendidos}>
          Articulos vendidos
        </p>
      </div>
      {articulosReservados?.map((articulo) => (
        <ShowArticlesReserved
          key={articulo.id}
          id={articulo.id}
          foto={articulo.foto1}
          descripcion={articulo.descripcion}
          titulo={articulo.titulo}
          precio={articulo.precio}
          idComprador={articulo.id_usuario_comprador}
          idVendedor={articulo.id_usuario}
        />
      ))}
    </div>
  ) : filtro === "vendidos" ? (
    <div className="Lista-articulos-body">
      <div className="MisArticulos-filtros">
        <p onClick={() => setFiltro("publicados")} style={stylePublicados}>
          Articulos publicados
        </p>
        <p onClick={() => setFiltro("reservados")} style={styleReservados}>
          Articulos reservados
        </p>
        <p onClick={() => setFiltro("vendidos")} style={styleVendidos}>
          Articulos vendidos
        </p>
      </div>
      {articulosVendidos?.map((articulo) => (
        <ShowMyArticles
          key={articulo.id}
          id={articulo.id}
          foto={articulo.foto1}
          descripcion={articulo.descripcion}
          titulo={articulo.titulo}
          precio={articulo.precio}
        />
      ))}
    </div>
  ) : null;
}
