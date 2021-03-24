import React from "react";

import "./UploadFileProfile.css";

const Photo = ({ data }) => {
  return (
    <img
      src={window.URL.createObjectURL(data)}
      style={{ width: "50px", height: "50px", objectFit: "cover" }}
      alt="img-foto"
    />
  );
};

export const UploadFileProfile = ({ fotoNueva, setFotoNueva, foto }) => {
  //console.log("fotoNueva: " + fotoNueva[0].name);
  return (
    <>
      <div className="UploadFileProfile">
        <div>
          <label>
            {fotoNueva ? (
              <Photo data={fotoNueva} />
            ) : (
              <div
                className="Perfil-img"
                style={{
                  backgroundImage: `url(
              http://localhost:8081/images/profiles/${foto}
            )`,
                }}
                alt="Foto de perfil"
              />
            )}
            <input
              type="file"
              onChange={(e) => {
                setFotoNueva(e.target.files[0]);
              }}
              accept=".png,.jpg,.jpeg"
            />
          </label>
        </div>
      </div>
      <p>*Acepta sólo imagenes jpg, jpeg y png</p>
    </>
  );
};

//http://localhost:8081/images/articulos/20_f62fdeda-c323-418f-aa5c-d4b21ed3d2f9.jpg
