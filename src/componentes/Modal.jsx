import React, { useContext, useState } from "react";
import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "react-bootstrap";
import { MyContext } from "../context/Context";
import { Input, Label, FormGroup } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { Put } from "../network/put";

const ModalDos = ({ item }) => {
  const { abrir, setAbrir } = useContext(MyContext);
  const [email, setEmail] = useState(item.email);
  const [nombre, setNombre] = useState(item.first_name);
  const { resultadoDos } = Put();

  const handleClick = () => {
    resultadoDos();
  };

  return (
    <Modal show={abrir}>
      <ModalHeader>Actualizar</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nombre">Nombre</Label>
          <Input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => {
            handleClick();
          }}
        >
          Actualizar
        </Button>
        <Button color="secundary" onClick={() => setAbrir(false)}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalDos;
