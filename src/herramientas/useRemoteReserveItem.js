const loadArticle = async () => {
  const response = await fetch(
    `http://localhost:8081/api/v1/proyecto8/articulos/${17}/reservarArticulo`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    const json = await response.json();
    setErrorMsg(json.error);
  }
};
