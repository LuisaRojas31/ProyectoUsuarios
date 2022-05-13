import { useEffect, useState } from "react";
import { Post } from "../../network/post";
import "./styles.scss";

const CrearUsuario = () => {
  const [usuarioCreado, setUsuarioCreado] = useState(false);
  const [alert, setAlert] = useState("");
  const { peticionPost, usuarioCrear, setUsuarioCrear } = Post();

  const handleClick = (e) => {
    e.preventDefault();
    setAlert("");
    if (usuarioCrear.nombre === "") {
      setAlert("Nombre requerido");
      return;
    } else if (usuarioCrear.trabajo === "") {
      setAlert("Trabajo requerido");
      return;
    }

    peticionPost(setUsuarioCreado(true));
  };

  useEffect(() => {
    if (usuarioCreado) setAlert("Usuario creado");
  }, [usuarioCreado]);

  const onChange = (e) => {
    setUsuarioCrear({
      ...usuarioCrear,
      [e.target.name]: e.target.value,
    });
    console.log(usuarioCrear);
  };

  return (
    <>
      <div className="create__container">
        <form onSubmit={handleClick} className="create__form">
          <h1 className="create__title" data-testid="create__title">
            Crear usuario
          </h1>
          <label>
            Nombre
            <span className="required">*</span>
          </label>
          <input
            className="create__input"
            type="text"
            name="nombre"
            value={usuarioCrear.nombre}
            placeholder="nombre"
            onChange={onChange}
          />
          <label>
            Trabajo
            <span className="required">*</span>
          </label>
          <input
            name="trabajo"
            value={usuarioCrear.trabajo}
            placeholder="trabajo"
            className="create__input"
            type="text"
            onChange={onChange}
          />
          <div>
            <p>
              Sus datos personales se utilizarán para respaldar su experiencia
              en este sitio web, para administrar el acceso a su cuenta y para
              otros fines descritos en nuestros Terminos y Condiciones
            </p>
          </div>
          <button
            className="create__btn"
            onClick={() => handleClick()}
            data-testid="create__btn"
          >
            Crear Usuario
          </button>
          <span>{alert}</span>
        </form>
      </div>
    </>
  );
};

export default CrearUsuario;
