import React, { useEffect } from "react";

import * as BiIcons from "react-icons/bi";
import "../Vender/UploadFile.css";

const Photo = ({ data }) => {
  return (
    <img
      src={window.URL.createObjectURL(data)}
      style={{ width: "50px", height: "50px", objectFit: "cover" }}
      alt="img-foto"
    />
  );
};

export const UploadFileProfile = ({ fotoNueva, setFotoNueva }) => {
  //console.log("fotoNueva: " + fotoNueva[0].name);
  return (
    <>
      <div className="UploadFileFile">
        <div>
          <label>
            {fotoNueva ? <Photo data={fotoNueva} /> : null} <BiIcons.BiCamera />
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
      <p>*Acepta sólo imagenes jpeg, jpg y png</p>
    </>
  );
};

//http://localhost:8081/images/articulos/20_f62fdeda-c323-418f-aa5c-d4b21ed3d2f9.jpg
