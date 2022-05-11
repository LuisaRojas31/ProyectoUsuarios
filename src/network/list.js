import axios from "axios";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";

export const List = () => {
  const { setResultado, page } = useContext(MyContext);

  useEffect(() => {
    const instru = async () => {
      try {
        const response = await axios.get(
          `https://reqres.in/api/users?page=${page}`
        );
        setResultado(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    instru();
  }, [setResultado, page]);

  return;
};
