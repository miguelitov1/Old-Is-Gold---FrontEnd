import React from "react";
import { useRemoteArticle } from "../herramientas/useRemoteArticle";

export function Home() {
  const articulo = useRemoteArticle(4);
  console.log("Home", articulo);
  return <h1>HOME</h1>;
}
