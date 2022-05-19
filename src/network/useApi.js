import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/Context";

export const useApi = () => {
  const { usuario, setResultado, page } = useContext(MyContext);
  const [usuarioCreado, setUsuarioCreado] = useState(false);
  const [info, setInfo] = useState({
    email: "",
    nombre: "",
  });
  const [usuarioCrear, setUsuarioCrear] = useState({
    nombre: "",
    trabajo: "",
  });
  const navigate = useNavigate();

  const login = async () => {
    try {
      let json = {
        email: usuario.email,
        password: usuario.password,
      };
      const result = await axios.post("https://reqres.in/api/login", json);
      console.log(result);
      if (result.status === 200) {
        setResultado(result.data);
        navigate("list");
        localStorage.setItem("token", result.data.token);
      } 

      
    } catch (e) {
      alert("Correo no registrado")
    }
  };

  const listaUsarios = async () => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${page}`
      );
      console.log("**lista", response.data);
      setResultado(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const crearUsuario = async () => {
    const response = await axios.post(
      "https://reqres.in/api/users",
      usuarioCrear
    );

    if (response.ok) setUsuarioCreado(response);
    console.log(response)
  };

  const actualizar = async (id) => {
    const response = await axios.post(
      `https://reqres.in/api/users/${id}`,
      info
    );
    console.log(response);

    if (response.ok) setResultado(response);
  };

  return {
    login,
    listaUsarios,
    crearUsuario,
    actualizar,
    setInfo,
    setUsuarioCrear,
    setUsuarioCreado,
    usuarioCreado
    
  };
};
