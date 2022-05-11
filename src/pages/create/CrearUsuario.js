import { useContext } from "react";
import { MyContext } from "../../context/Context";
import "./styles.scss";

const CrearUsuario = () => {
  const { name, setName, job, setJob } = useContext(MyContext);

  const handleClick = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Nombre requerido");
    } else if (job === "") {
      alert("Trabajo requerido");
      return;
    }
  };

  return (
    <>
      <div className="create__container">
        <form className="create__form">
          <h1 className="create__title" data-testid="create__title">
            Crear usuario
          </h1>
          <label>
            Nombre
            <span className="required">*</span>
          </label>
          <input
            data-testid="create__name"
            className="create__input"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <label>
            Trabajo
            <span className="required">*</span>
          </label>
          <input
            data-testid="create__job"
            className="create__input"
            type="text"
            onChange={(e) => setJob(e.target.value)}
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
            onClick={handleClick}
            data-testid="create__btn"
          >
            Crear Usuario
          </button>
        </form>
      </div>
    </>
  );
};

export default CrearUsuario;
