import { useState, useEffect } from "react";

export const useRemoteArticlesByWords = (words) => {
  const [articulos, setArticulos] = useState([]);
  const [, setErrorMsg] = useState("");

  useEffect(() => {
    const palabrasClaves = { palabrasClaves: words };
    const loadArticle = async () => {
      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/articulos/resultado/busqueda`,
        {
          method: "POST",
          body: JSON.stringify(palabrasClaves),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const json = await response.json();
        setArticulos(json);
        setErrorMsg("");
      } else {
        const json = await response.json();
        setErrorMsg(json.error);
      }
    };
    loadArticle();
  }, [words]);

  return [articulos, setArticulos];
};
