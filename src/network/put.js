import axios from "axios";
import { useContext, useState } from "react";
import { MyContext } from "../context/Context";

export const Put = (item) => {
  const { setResultado } = useContext(MyContext);
  const [info, setInfo] = useState({
    email: "",
    nombre: "",
  });

  const resultadoDos = async () => {
    const response = await axios.post("https://reqres.in/api/users", info);
    console.log("put", response.id);

    if (response.ok) setResultado(response);
  };

  return {
    resultadoDos,
    info,
    setInfo,
  };
};
