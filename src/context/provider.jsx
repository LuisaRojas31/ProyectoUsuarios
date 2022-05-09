import { useState } from "react";
import { MyContext } from "./Context";

export const Provider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
    error: false,
  });
  const [resultado, setResultado] = useState("");

  return (
    <MyContext.Provider
      value={{
        usuario,
        setUsuario,
        resultado,
        setResultado,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
