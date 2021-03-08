import { useContext } from "react";
import { AuthContext } from "../componentes/providers/AuthProvider";

export function Logout() {
  const [setToken] = useContext(AuthContext);

  const logout = () => setToken("");
  return;
}
