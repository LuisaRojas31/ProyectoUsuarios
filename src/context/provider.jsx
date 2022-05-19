import { useState } from "react";
import { MyContext } from "./Context";

export const Provider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });
  const [resultado, setResultado] = useState("");
  const [error, setError] = useState("");
  const [abrir, setAbrir] = useState(false);
  const [page, setPage] = useState(1);
  const [crearUsuario, setCrearUsuario] = useState("");

  return (
    <MyContext.Provider
      value={{
        usuario,
        setUsuario,
        resultado,
        setResultado,
        abrir,
        setAbrir,
        page,
        setPage,
        crearUsuario,
        setCrearUsuario,
        error,
        setError,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
