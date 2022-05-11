import React, { useContext } from "react";
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

const ModalDos = () => {
  const { abrir, setAbrir } = useContext(MyContext);

  const handleModal = () => {
    setAbrir(true);
  };

  return (
    <>
      <div className="principal">
        <div className="secundario">
          <Button color="black" onClick={handleModal}>
            Actualizar
          </Button>
        </div>
      </div>

      <Modal show={abrir}>
        <ModalHeader>Actualizar</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="text" id="email" />
          </FormGroup>
          <FormGroup>
            <Label for="nombre">Nombre</Label>
            <Input type="text" id="nombre" />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Actualizar</Button>
          <Button color="secundary" onClick={() => setAbrir(false)}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalDos;
