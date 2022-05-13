import axios from "axios";
import { useState } from "react";

export const Post = (setUsuarioCreado) => {
  const [usuarioCrear,setUsuarioCrear] = useState({
    nombre: "",
    trabajo: "",
  });

  const peticionPost = async () => {
    const response = await axios.post(
      "https://reqres.in/api/users",
      usuarioCrear
    );

    if (response.ok) setUsuarioCreado(response);
    console.log(response);
  };

  

  return {
    peticionPost,
    usuarioCrear,
    setUsuarioCrear
  };
};
