import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../componentes/providers/AuthProvider";

export const useRemoteValoraciones = (idUsuario) => {
  const [valoraciones, setValoraciones] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [token, setToken] = useContext(AuthContext);
  useEffect(() => {
    const loadArticle = async () => {
      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/ventas/verValoraciones/${idUsuario}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const json = await response.json();

        setValoraciones(json);

        setErrorMsg("");
      } else {
        const json = await response.json();
        setErrorMsg(json.error);
      }
    };
    if (idUsuario) {
      loadArticle();
    }
  }, [idUsuario, token]);
  return [valoraciones, setValoraciones];
};
