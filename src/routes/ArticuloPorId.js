import React from "react";
import { useRemoteArticles } from "../herramientas/useRemoteArticles";
import { formatearFecha } from "../herramientas/formatearFecha";
import { useRemoteValoraciones } from "../herramientas/useRemoteValoraciones";
import { useRemoteUser } from "../herramientas/useRemoteUser";
import { pintarEstrellas } from "../herramientas/pintarEstrellas";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Slider from "infinite-react-carousel";
import "./ArticuloPorId.css";

export function ArticuloPorId() {
  const { idArticulo } = useParams();
  const [articulo, setArticulo] = useRemoteArticles(idArticulo);
  const [valoraciones, setValoraciones] = useRemoteValoraciones(
    articulo?.id_usuario
  );
  const [usuario, setUsuario] = useRemoteUser(articulo?.id_usuario);
  const estrellas = pintarEstrellas(valoraciones?.promedio);

  if (Object.keys(usuario).length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="ArticuloPorId">
      <div className="fechaTitulo">
        <div>
          <p>{formatearFecha(articulo.fecha)}</p>
          <h1>{articulo.titulo}</h1>
        </div>
      </div>

      <div className="ArticuloPorId-datos-usuario">
        <div className="ArticuloPorId-datos-usuario2">
          <img
            className="ArticuloPorId-user-img"
            src={`http://localhost:8081/images/profiles/${usuario.foto}`}
            alt="img"
          />
          <div>
            {estrellas?.map((estrella, index) => (
              <img src={estrella} alt="estrella" key={index} />
            ))}
          </div>

          <p>{valoraciones.nroValoraciones} valoraciones</p>
        </div>
        <div className="ArticuloPorId-datos-usuario2">
          <img src="/iconos/visto.png" alt="visto" />
          <p>{articulo.nro_visitas}</p>
        </div>
      </div>

      <div className="ArticuloPorId-contenedor">
        {/* <Slider dots>
          <img
            className="ArticuloPorId-img"
            src={`http://localhost:8081/images/articulos/${articulo.foto1}`}
            alt="First slide"
          />

          <img
            className="ArticuloPorId-img"
            src={`http://localhost:8081/images/articulos/${articulo.foto2}`}
            alt="First slide"
          />

          <img
            className="ArticuloPorId-img"
            src={`http://localhost:8081/images/articulos/${articulo.foto3}`}
            alt="First slide"
          />
        </Slider> */}
        <img
          className="ArticuloPorId-img"
          src={`http://localhost:8081/images/articulos/${articulo.foto1}`}
          alt="First slide"
        />
      </div>
      <div className="ArticuloPorId-datos">
        <p>{articulo.precio}€</p>
        <img src="../corazon-estrellas/corazon.png" alt="corazon"></img>
        <div className="ArticuloPorId-datos-usuario2">
          <img src="../iconos/localizacion.png" alt="localizacion"></img>
          <p id="ArticuloPorId-localizacion">{articulo.localizacion}</p>
        </div>
      </div>
      <div className="ArticuloPorId-buttons">
        <button className="ArticuloPorId-button-activate" type="submit">
          Comprar
        </button>
        <button
          className="ArticuloPorId-button-no-activate"
          // onClick={handleOnClick}
        >
          Chat
        </button>
      </div>
      <div className="ArticuloPorId-descripcion">
        <h2>Descripción:</h2>
        <p>{articulo.descripcion}</p>
      </div>
    </div>
  );
}

//FECHA SQL declare @Existingdate datetime
// Set @Existingdate=GETDATE()
// Select CONVERT(varchar,@Existingdate,3) as [DD/MM/YY]
