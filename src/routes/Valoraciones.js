import React, { useContext } from "react";
import { Redirect } from "react-router";
import { useParams } from "react-router-dom";
import { AuthContext } from "../componentes/providers/AuthProvider";
import { Valoracion } from "../componentes/Valoraciones/Valoracion";
import { useRemoteValoraciones } from "../herramientas/useRemoteValoraciones";

////////////////////////////////////
import { useRemoteUser } from "../herramientas/useRemoteUser";
import { pintarEstrellas } from "../herramientas/pintarEstrellas";
////////////////////////////////////

export function Valoraciones() {
  const { idUsuario } = useParams();
  const [valoraciones, , refetch] = useRemoteValoraciones(idUsuario);
  const [token] = useContext(AuthContext);
  const arrayValoracion = valoraciones.valoraciones;

  ////////////////////////////////
  const estrellas = pintarEstrellas(valoraciones.promedio);
  const [usuario] = useRemoteUser(idUsuario);
  //////////////////////////////

  ////////////////////////////////////
  return !token ? (
    <Redirect to="/login" />
  ) : arrayValoracion ? (
    <>
      <div className="Perfil-img">
        <img
          className="Perfil-foto-de-perfil"
          src={`http://localhost:8081/images/profiles/${usuario.foto}`}
          alt="Foto de perfil"
        ></img>
      </div>

      <div className="Perfil-valoraciones">
        {estrellas?.map((estrella, index) => (
          <img src={estrella} alt="estrella" key={index} />
        ))}
        <p>{valoraciones.nroValoraciones} valoraciones</p>
      </div>
      <div className="Valoraciones-separador">
        {arrayValoracion?.map((valoracion) => {
          return (
            <Valoracion
              key={valoracion.id_articulo}
              idArticulo={valoracion.id_articulo}
              comentarioValoracion={valoracion.comentarioValoracion}
              respuestaVendedor={valoracion.respuestaVendedor}
              valoracion={valoracion.valoracion}
              refetch={refetch}
            />
          );
        })}
      </div>
    </>
  ) : (
    <></>
  );
}
///////////////////////////////////////////////

//   return !token ? (
//     <Redirect to="/registro" />
//   ) : arrayValoracion ? (
//     <>
//       <h1>Promedio:{valoraciones.promedio}</h1>
//       <h2>Nro. valoraciones:{valoraciones.nroValoraciones}</h2>

//       {arrayValoracion?.map((valoracion) => {
//         return (
//           <Valoracion
//             key={valoracion.id_articulo}
//             comentarioValoracion={valoracion.comentarioValoracion}
//             respuestaVendedor={valoracion.respuestaVendedor}
//           />
//         );
//       })}
//     </>
//   ) : (
//     <></>
//   );
// }
