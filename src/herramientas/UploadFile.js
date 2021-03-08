import React, { useState, useContext } from "react";
import { AuthContext } from "../componentes/providers/AuthProvider";
import "./UploadFile.css";

export const UploadFile = (props) => {
  const [files, setFiles] = useState([]);
  const [token, setToken] = useContext(AuthContext);

  function upload() {
    let data = new FormData();
    // data.append("userid", 1231);
    data.append("image", files);
    fetch(
      `http://localhost:8081/api/v1/proyecto8/fotos/subirImagen/${props.idArticulo}`,
      {
        method: "POST",
        headers: {
          // "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }
    )
      .then((response) => response.json())
      .then((success) => {
        // Do something with the successful response
      })
      .catch((error) => console.log(error));
  }
  const onFileChange = (event) => {
    const f = event.target.files[0];
    setFiles(f);
  };

  return (
    <div className="App">
      <form onSubmit={upload}>
        <div>
          <input type="file" onChange={onFileChange} />
        </div>
        <div>
          <input type="file" onChange={onFileChange} />
        </div>
        <div>
          <input type="file" onChange={onFileChange} />
        </div>
        <div>
          <input type="file" onChange={onFileChange} />
        </div>
        <div>
          <input type="file" onChange={onFileChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};
