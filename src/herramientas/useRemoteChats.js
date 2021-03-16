import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../componentes/providers/AuthProvider";

export const useRemoteChats = (path) => {
  const [chats, setChats] = useState([]);
  const [, setErrorMsg] = useState("");
  const [random, setRandom] = useState(Math.random());
  const [token] = useContext(AuthContext);

  const refetch = () => {
    setRandom(Math.random());
  };

  useEffect(() => {
    const loadChats = async () => {
      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/mensajes/${path}`,
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
        setChats(json);
        setErrorMsg("");
      } else {
        const json = await response.json();
        setErrorMsg(json.error);
      }
    };

    loadChats();
  }, [path, token, random]);
  return [chats, setChats, refetch];
};
