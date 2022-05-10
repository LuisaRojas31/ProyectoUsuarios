import { useState } from "react";
import { MyContext } from "./Context";

export const Provider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
    error: false,
  });
  const [resultado, setResultado] = useState("");
  const [abrir, setAbrir] = useState(false);
  const [page, setPage] = useState(1);
  const [onNext] = useState();
  const [onPrivious] = useState();

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
        onNext,
        onPrivious,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
