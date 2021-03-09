import React, { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import * as BiIcons from "react-icons/bi";
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
            `http://localhost:8081/api/v1/proyecto8/fotos/subirImagen/${props.path}`,
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
    <>
      {message && <p>{message}</p>}
      <div className="UploadFile">
        <form onSubmit={upload}>
          <div>
            <label>
              <BiIcons.BiCamera />
              <input
                type="file"
                onChange={(e) => {
                  setFile(0, e.target.files[0]);
                }}
              />
            </label>
          </div>

          <div>
            <label>
              <BiIcons.BiCamera />
              <input
                type="file"
                onChange={(e) => {
                  setFile(1, e.target.files[0]);
                }}
              />
            </label>
          </div>

          <div>
            <label>
              <BiIcons.BiCamera />
              <input
                type="file"
                onChange={(e) => {
                  setFile(2, e.target.files[0]);
                }}
              />
            </label>
          </div>

          <div>
            <label>
              <BiIcons.BiCamera />
              <input
                type="file"
                onChange={(e) => {
                  setFile(3, e.target.files[0]);
                }}
              />
            </label>
          </div>

          <div>
            <label>
              <BiIcons.BiCamera />
              <input
                type="file"
                onChange={(e) => {
                  setFile(4, e.target.files[0]);
                }}
              />
            </label>
          </div>

          <button type="submit">Upload</button>
        </form>
      </div>
    </>
  );
};

//http://localhost:8081/images/articulos/20_f62fdeda-c323-418f-aa5c-d4b21ed3d2f9.jpg
