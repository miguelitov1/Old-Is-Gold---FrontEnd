import React from "react";
import { useContext } from "react";
import jwt_decode from "jwt-decode";
import { ShowArticles } from "../componentes/Articulos/ShowArticles";
import "../componentes/Articulos/ShowArticles.css";
import { useRemoteArticlesPublished } from "../herramientas/useRemoteArticlesPublished";
import { useRemoteArticlesSoldOut } from "../herramientas/useRemoteArticlesSoldOut";
import { useRemoteArticlesReserved } from "../herramientas/useRemoteArticlesReserved";
import { AuthContext } from "../componentes/providers/AuthProvider";

export function MisArticulosVentas() {
  const [token, setToken] = useContext(AuthContext);
  let payload = null;
  if (token) {
    payload = jwt_decode(token, process.env.JWT_SECRET);
  }
  const [articulosPublicados] = useRemoteArticlesPublished(payload.id);
  const [articulosVendidos] = useRemoteArticlesSoldOut();
  const [articulosReservados] = useRemoteArticlesReserved();

  return (
    <>
      <div className="Lista-articulos-body">
        <h2>Articulos publicados</h2>
        {articulosPublicados?.map((articulo) => (
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

      <div className="Lista-articulos-body">
        <h2>Mis articulos vendidos</h2>
        {articulosVendidos?.map((articulo) => (
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

      <div className="Lista-articulos-body">
        <h2>Mis articulos reservados</h2>
        {articulosReservados?.map((articulo) => (
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
    </>
  );
}
