import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../componentes/providers/AuthProvider";

export const useRemoteArticlesAdquired = (path) => {
  const [articulos, setArticulos] = useState([]);
  const [, setErrorMsg] = useState("");
  const [token, setToken] = useContext(AuthContext);

  useEffect(() => {
    const loadArticle = async () => {
      console.log(1);
      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/ventas/compras`,
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
  }, [path]);
  return [articulos, setArticulos];
};
