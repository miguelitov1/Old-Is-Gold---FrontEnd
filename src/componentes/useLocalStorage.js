import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const initial = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : initialValue;
  const [data, setData] = useState(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);
  return [data, setData];
};
