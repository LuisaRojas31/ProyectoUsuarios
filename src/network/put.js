import axios from "axios";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";

export const Put = () => {
  const { setResultado} = useContext(MyContext);

  useEffect(() => {
    const instruDos = async () => {
      try {
        const responseDos = await axios.put("https://reqres.in/api/users/2");
        console.log("hola put",responseDos);
        const { data, status } = responseDos;
        if (status === 200) setResultado(data);
      } catch (e) {
        console.log(e);
      }
    };

    instruDos();
  }, [setResultado]);

  return;
};