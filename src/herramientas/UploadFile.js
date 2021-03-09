import React, { useState, useContext } from "react";
import { AuthContext } from "../componentes/providers/AuthProvider";
import "./UploadFile.css";

export const UploadFile = (props) => {
  const [files, setFiles] = useState([null, null, null, null, null]);
  const [token, setToken] = useContext(AuthContext);
  const [message, setMessage] = useState(null);

  async function upload(e) {
    e.preventDefault();

    try {
      let index = 1;
      for (const file of files) {
        if (file) {
          setMessage(`Subiendo foto número: ${index}`);
          const data = new FormData();
          data.append("imagenArticulo", file);
          data.append(`slot`, index);
          await fetch(
            `http://localhost:8081/api/v1/proyecto8/fotos/subirImagen/${props.idArticulo}`,
            {
              method: "POST",
              headers: {
                // "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: data,
            }
          );
        }

        index++;
      }
    } catch (error) {
      setMessage(error.message);
    }
  }

  const setFile = (index, file) => {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  };

  return (
    <div className="App">
      {message && <p>{message}</p>}
      <form onSubmit={upload}>
        <div>
          foto1
          <input
            type="file"
            onChange={(e) => {
              setFile(0, e.target.files[0]);
            }}
          />
        </div>
        <div>
          foto2
          <input
            type="file"
            onChange={(e) => {
              setFile(1, e.target.files[0]);
            }}
          />
        </div>
        <div>
          foto3
          <input
            type="file"
            onChange={(e) => {
              setFile(2, e.target.files[0]);
            }}
          />
        </div>
        <div>
          foto4
          <input
            type="file"
            onChange={(e) => {
              setFile(3, e.target.files[0]);
            }}
          />
        </div>
        <div>
          foto5
          <input
            type="file"
            onChange={(e) => {
              setFile(4, e.target.files[0]);
            }}
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};
