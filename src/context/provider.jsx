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
  const [abrirDos, setAbrirDos] = useState(false);
  const [page, setPage] = useState(1);
  const [onNext] = useState();
  const [onPrivious] = useState();
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [crearUsuario, setCrearUsuario] = useState("");
  const [losDos, setLosDos] = useState({
    name: "",
    job: "",
  });

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
        name,
        setName,
        job,
        setJob,
        losDos,
        setLosDos,
        crearUsuario,
        setCrearUsuario,
        abrirDos,
        setAbrirDos,
        error,
        setError,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
