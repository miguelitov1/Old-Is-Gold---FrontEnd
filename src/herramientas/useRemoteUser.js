import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../componentes/providers/AuthProvider";

export const useRemoteUser = (idUsuario) => {
  const [usuario, setUsuario] = useState({});
  const [, setErrorMsg] = useState("");
  const [token] = useContext(AuthContext);
  // const [random, setRandom] = useState(Math.random());
  // const [token, setToken] = useContext(AuthContext);

  // const refetch = () => {
  //   setRandom(Math.random());
  // };

  useEffect(() => {
    const loadUser = async () => {
      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/usuarios/${idUsuario}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const json = await response.json();
        setUsuario(json);
        setErrorMsg("");
      } else {
        const json = await response.json();
        setErrorMsg(json.error);
      }
    };
    if (idUsuario) {
      loadUser();
    }
  }, [idUsuario, token]);
  return [usuario, setUsuario];
};
