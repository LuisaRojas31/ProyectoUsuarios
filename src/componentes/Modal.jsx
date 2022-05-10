import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { MyContext } from "../context/Context";

const ModalDos = () => {
  const { abrir, setAbrir } = useContext(MyContext);

  const handleModal = () => {
    setAbrir(true);
  };
  return (
    <>
      <Button onClick={() => handleModal()}>Actualizar</Button>

      <Modal show={abrir} onHide={() => handleModal()}>
        <Modal.Header>
          <input
            type="email"
            className="fadeIn second"
            name="nombre"
            placeholder="Nombre"
          ></input>
        </Modal.Header>
        <Modal.Body>
          <input
            type="email"
            className="fadeIn second"
            name="email"
            placeholder="Email"
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setAbrir(false)}>Actualizar</Button>
          <Button onClick={() => setAbrir(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDos;
