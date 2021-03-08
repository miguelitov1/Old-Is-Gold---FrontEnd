import { useState, useRef } from "react";
import { useRemoteURL } from "../hooks/remoteHooks";
export const ImagePage = () => {
  const [files, , refetch] = useRemoteURL("http://localhost:8081/files");
  const [file, setFile] = useState(null);
  const inputRef = useRef();

  const onFileChange = (event) => {
    const f = event.target.files[0];
    setFile(f);
  };

  function uploadFile(e) {
    //Podemos obtener file del state, donde la metimos usando onFileChange
    //O podemos obtener file de inputRef.current. Lo dejo aquí para que tengáis las 2 opciones
    // const file2 = inputRef.current.files[0];

    e.preventDefault();
    let data = new FormData();
    data.append("image", file);

    fetch("http://localhost:3050/files", {
      // content-type header should not be specified!
      method: "POST",
      // body: file, // not supported by multer in mock-json-server example
      body: data,
    })
      .then((response) => response.json())
      .then((success) => {
        console.log("success", success);
        refetch();
        // Do something with the successful response
      })
      .catch((error) => console.log(error));
  }

  const deleteImage = (id) => (event) => {
    return fetch("http://localhost:3050/files/" + id, {
      // content-type header should not be specified!
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((success) => {
        console.log("success", success);
        refetch();
        // Do something with the successful response
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Lista de imágenes</h2>
      <p>
        Aquí puedes subir un fichero siempre que el servidor esté operativo y
        actualizado. Hacer click en una imagen subida la borrará del servidor.
        <br />
      </p>
      <div>
        {files.map((file) => (
          <button
            className="link-button"
            onClick={deleteImage(file.id)}
            key={file.filename}
          >
            <img
              style={{ maxWidth: 200, marginRight: 5 }}
              src={`http://localhost:3050${file.filename}`}
              alt="Imag"
            />
          </button>
        ))}
      </div>
      <form onSubmit={uploadFile}>
        <p>
          Selecciona un archivo y dale click a subir. Si subes algo que no sea
          una imagen la lías.
        </p>
        <div>
          <input type="file" ref={inputRef} onChange={onFileChange} />
        </div>
        <div>
          <button type="submit">Subir</button>
        </div>
      </form>
      <hr />
      <Help />
    </div>
  );
};
