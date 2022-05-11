import axios from "axios";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";

export const Post = () => {
  const { setCrearUsuario } = useContext(MyContext);

  useEffect(() => {
    const Crear = async () => {
      try {
        const responseDos = await axios.put("https://reqres.in/api/users");
        console.log("hola put", responseDos);
        const { data, status } = responseDos;
        if (status === 200) setCrearUsuario(data);
      } catch (e) {
        console.log(e);
      }
    };

    Crear();
  }, [setCrearUsuario]);

  return;
};
