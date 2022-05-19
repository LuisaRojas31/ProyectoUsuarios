import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalDos from "../../componentes/Modal";

import { MyContext } from "../../context/Context";
import { Button } from "react-bootstrap";

import "./styles.scss";
import { useApi } from "../../network/useApi";

const ListUsers = () => {
  const { resultado, setAbrir, abrir, page, setPage } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [id, setId] = useState("");
  const { listaUsarios } = useApi();

  useEffect(() => {
    listaUsarios();
  }, [page]);

  return (
    <>
      <div className="encabezado">
        <h1>Bienvenid@</h1>
        <Link to={"/crear"}>
          <svg
            className="prueba"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="pinkColor"
            class="bi bi-person-plus-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path
              fill-rule="evenodd"
              d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </Link>
        <p>Crear Usuario</p>
      </div>
      <div className="botones">
        <button onClick={() => setPage(page > 1 ? page - 1 : page)}>
          Anterior
        </button>
        <button
          onClick={() =>
            setPage(page < resultado.total_pages ? page + 1 : page)
          }
        >
          Siguiente
        </button>
      </div>
      <div className="container">
        {resultado.data &&
          resultado.data.map((item) => (
            <li className="card-container">
              <div className="container">
                <img className="round" src={item.avatar} alt="" />
              </div>
              <div className="name-container">
                <span className="firstName">{item.first_name}</span>
                <span className="lastName">{item.last_name}</span>
              </div>
              <p className="email">{item.email}</p>
              <div className="principal">
                <div className="secundario">
                  <Button
                    color="black"
                    onClick={() => {
                      setEmail(item.email);
                      setNombre(item.first_name);
                      setId(item.id);
                      setAbrir(true);
                    }}
                  >
                    Actualizar
                  </Button>
                </div>
              </div>
            </li>
          ))}
        {abrir && <ModalDos item={{ first_name: nombre, email, id }} />}
      </div>
    </>
  );
};

export default ListUsers;
