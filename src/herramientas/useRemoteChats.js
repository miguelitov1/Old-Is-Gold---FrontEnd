import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../componentes/providers/AuthProvider";

export const useRemoteChats = () => {
  const [chats, setChats] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [token, setToken] = useContext(AuthContext);

  useEffect(() => {
    const loadChats = async () => {
      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/mensajes`,
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
  }, [token]);
  return [chats, setChats];
};
