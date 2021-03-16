import React, { useState, useContext } from "react";
import { UploadFile } from "../componentes/Vender/UploadFile";
import { ElegirCategoria } from "../componentes/Vender/ElegirCategoria";
import { InfoProductos } from "../componentes/Vender/InfoProducto";
import { AuthContext } from "../componentes/providers/AuthProvider";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router";

import "./Vender.css";

export function Vender(props) {
  const [category, setCategory] = useState(null);
  const [files, setFiles] = useState([null, null, null, null, null]);
  const [token] = useContext(AuthContext);
  const [message, setMessage] = useState(null);

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    try {
      //creamos el payload para crear un nuevo producto
      if (!category) {
        throw new Error("Escoger una categoria");
      }
      setMessage(null);
      const data = new FormData(form);
      data.append("id_categoria", category);
      const payload = Object.fromEntries(data);

      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/articulos`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );
      const responseJson = await response.json();

      if (!response.ok) {
        const error = new Error("No se ha podido crear el articulo");
        throw error;
      }

      // recogemos el id

      const idArticulo = responseJson.id;

      //subimos las fotos
      await subirFotos(idArticulo);
      //redirigimos a otra página
      history.push("/");
    } catch (err) {
      setMessage(err.message);
    }
  }

  async function subirFotos(idArticulo) {
    let index = 1;
    for (const file of files) {
      if (file) {
        const data = new FormData();
        data.append("imagenArticulo", file);
        data.append(`slot`, index);
        await fetch(
          `http://localhost:8081/api/v1/proyecto8/fotos/subirImagen/${idArticulo}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: data,
          }
        );
      }

      index++;
    }
  }

  const setFile = (index, file) => {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  };

  return !token ? (
    <Redirect to="/login" />
  ) : (
    <div className="Vender">
      <h3>¿Qué desea vender?</h3>
      <ElegirCategoria category={category} setCategory={setCategory} />
      <UploadFile files={files} setFile={setFile} />
      {message && <p>{message}</p>}
      <InfoProductos handleSubmit={handleSubmit} />
    </div>
  );
}
