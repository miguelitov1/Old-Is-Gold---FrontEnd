import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../componentes/providers/AuthProvider";

export const useRemoteUser = (idUsuario) => {
  const [usuario, setUsuario] = useState({});
  const [, setErrorMsg] = useState("");
  const [token] = useContext(AuthContext);
  const [random, setRandom] = useState(Math.random());

  const refetch = () => {
    setRandom(Math.random());
  };

  const requestUser = async (idUsuario) => {
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

  useEffect(() => {
    let response;
    if (token) {
      if (idUsuario) {
        requestUser(idUsuario);
      }
    } else {
      const loadUser = async () => {
        response = await fetch(
          `http://localhost:8081/api/v1/proyecto8/usuarios/usuarioSinRegistro/${idUsuario}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
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
    }
  }, [idUsuario, token, random]);
  return [usuario, setUsuario, refetch];
};
