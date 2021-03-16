import { useState, useEffect } from "react";

export const useRemoteVentas = (idUsuario) => {
  const [ventas, setVentas] = useState([]);
  const [, setErrorMsg] = useState("");

  useEffect(() => {
    const loadVentas = async () => {
      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/usuarios/ventas/${idUsuario}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.ok) {
        const json = await response.json();
        setVentas(json);

        setErrorMsg("");
      } else {
        const json = await response.json();
        setErrorMsg(json.error);
      }
    };
    if (idUsuario) {
      loadVentas();
    }
  }, [idUsuario]);
  return [ventas, setVentas];
};
