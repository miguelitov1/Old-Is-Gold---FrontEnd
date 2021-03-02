import React, { useState } from "react";
import "./Articulo.css";

export const Profile = (props) => {
  const [file, setFile] = useState();

  function uploadFile() {
    let data = new FormData();
    // data.append("userid", 1231);
    data.append("image", file);
    fetch(
      `http://localhost:8081/api/v1/proyecto8/fotos/subirImagen/${props.idArticulo}`,
      {
        method: "POST",
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
    setFile(f);
  };

  return (
    <div className="App">
      <form onSubmit={uploadFile}>
        <div>
          <label>Select file to upload</label>
          <input type="file" onChange={onFileChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};
