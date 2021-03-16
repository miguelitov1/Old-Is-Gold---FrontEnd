import { useState, useEffect } from "react";

export const useRemoteCompras = (idUsuario) => {
  const [compras, setCompras] = useState([]);
  const [, setErrorMsg] = useState("");

  useEffect(() => {
    const loadCompras = async () => {
      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/usuarios/compras/${idUsuario}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.ok) {
        const json = await response.json();
        setCompras(json);

        setErrorMsg("");
      } else {
        const json = await response.json();
        setErrorMsg(json.error);
      }
    };
    if (idUsuario) {
      loadCompras();
    }
  }, [idUsuario]);
  return [compras, setCompras];
};
