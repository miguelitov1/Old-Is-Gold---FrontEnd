import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../componentes/providers/AuthProvider";

export const useRemoteArticles = (path) => {
  const [articulos, setArticulos] = useState([]);
  const [, setErrorMsg] = useState("");
  const [token] = useContext(AuthContext);

  // const [random, setRandom] = useState(Math.random());

  // const refetch = () => {
  //   setRandom(Math.random());
  // };

  useEffect(() => {
    const loadArticle = async () => {
      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/articulos/${path}`,
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
    loadArticle();
  }, [path, token]);
  return articulos;
};
