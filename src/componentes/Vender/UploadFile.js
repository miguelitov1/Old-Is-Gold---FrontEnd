import React from "react";

import * as BiIcons from "react-icons/bi";
import "./UploadFile.css";

const Photo = ({ data }) => {
  if (!data) return <BiIcons.BiCamera />;

  return (
    <img
      src={window.URL.createObjectURL(data)}
      style={{ width: "50px", height: "50px", objectFit: "cover" }}
      alt="img-foto"
    />
  );
};

export const UploadFile = ({ files, setFile }) => {
  return (
    <>
      <div className="UploadFile">
        <form>
          <div>
            <label>
              <Photo data={files[0]} />
              <input
                type="file"
                onChange={(e) => {
                  setFile(0, e.target.files[0]);
                }}
                accept=".png,.jpg,.jpeg"
              />
            </label>
          </div>

          <div>
            <label>
              <Photo data={files[1]} />

              <input
                type="file"
                onChange={(e) => {
                  setFile(1, e.target.files[0]);
                }}
                accept=".png,.jpg,.jpeg"
              />
            </label>
          </div>

          <div>
            <label>
              <Photo data={files[2]} />

              <input
                type="file"
                onChange={(e) => {
                  setFile(2, e.target.files[0]);
                }}
                accept=".png,.jpg,.jpeg"
              />
            </label>
          </div>

          <div>
            <label>
              <Photo data={files[3]} />

              <input
                type="file"
                onChange={(e) => {
                  setFile(3, e.target.files[0]);
                }}
                accept=".png,.jpg,.jpeg"
              />
            </label>
          </div>

          <div>
            <label>
              <Photo data={files[4]} />

              <input
                type="file"
                onChange={(e) => {
                  setFile(4, e.target.files[0]);
                }}
                accept=".png,.jpg,.jpeg"
              />
            </label>
          </div>
        </form>
      </div>
      <p>*Acepta sólo imagenes jpeg, jpg y png</p>
    </>
  );
};

//http://localhost:8081/images/articulos/20_f62fdeda-c323-418f-aa5c-d4b21ed3d2f9.jpg
