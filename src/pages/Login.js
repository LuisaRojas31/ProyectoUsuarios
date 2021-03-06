import React, { useContext } from "react";
import "./styles.scss";
import logo from "../assets/logo.png";
import { MyContext } from "../context/Context";
import { useApi } from "../network/useApi";

const Login = () => {
  const { usuario, setUsuario } = useContext(MyContext);
  const { login } = useApi();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.email === "") {
      alert("email requerido");
      return;
    } else if (usuario.password === "") {
      alert("password requerido");
      return;
    }
  };

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeBotom = () => {
    login();
  };

  return (
    <React.Fragment>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src={logo} width="100px" alt="User Icon" />
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="fadeIn second"
              name="email"
              placeholder="Email"
              onChange={onChange}
            />
            <input
              type="password"
              className="fadeIn third"
              name="password"
              placeholder="Password"
              onChange={onChange}
            />
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              onClick={onChangeBotom}
            />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
