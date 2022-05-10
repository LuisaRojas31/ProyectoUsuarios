import { useContext } from "react";
import ModalDos from "../../componentes/Modal";

import { MyContext } from "../../context/Context";
import { List } from "../../network/list";

import "./styles.scss";

const ListUsers = () => {
  const { resultado } = useContext(MyContext);

  List();

  return (
    <>
      <div className="encabezado">
        <h1>Bienvenid@</h1>
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
              <ModalDos />
            </li>
          ))}
      </div>
    </>
  );
};

export default ListUsers;
