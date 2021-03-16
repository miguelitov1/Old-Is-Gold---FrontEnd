import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../componentes/providers/AuthProvider";

export const useRemoteArticlesReserved = () => {
  const [articulos, setArticulos] = useState([]);
  const [, setErrorMsg] = useState("");
  // const [random, setRandom] = useState(Math.random());
  const [token] = useContext(AuthContext);

  // const refetch = () => {
  //   setRandom(Math.random());
  // };

  useEffect(() => {
    const loadArticles = async () => {
      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/ventas/reservados`,
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
        setArticulos(json);
        setErrorMsg("");
      } else {
        const json = await response.json();
        setErrorMsg(json.error);
      }
    };
    loadArticles();
  }, [token]);
  return [articulos, setArticulos];
};
