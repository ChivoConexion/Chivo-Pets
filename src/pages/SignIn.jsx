import React from "react";
import logo from "../assets/img/chivo-pest.png";

const SignIn = () => {
  /* const [userName, setUserName] = useState(); */

  return (
    <div className="auth-wrapper">
      <div className="auth-content">
        <div className="auth-bg">
          <span className="r"></span>
          <span className="r s"></span>
          <span className="r s"></span>
          <span className="r"></span>
        </div>

        <div className="card fondo">
          <div className="card-body text-center fondo">
            <div className="card-header mx-auto fondo">
              <img src={logo} className="w-75 h-25 d-inline-block" alt="Logo" />
            </div>
            <h3 className="mb-4 color1">Acceso</h3>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="input-group mb-4">
              <input
                type="password"
                className="form-control"
                placeholder="contraseña"
              />
            </div>
            <div className="form-group text-left">
              <div className="checkbox checkbox-fill d-inline">
                <input
                  type="checkbox"
                  name="checkbox-fill-1"
                  id="checkbox-fill-a1"
                  checked=""
                />
              </div>
            </div>
            <button className="btn btn-primary shadow-2 mb-4">Inicio de Sesion</button>
   
            <p className="mb-2 text-muted color1">
              ¿Se te olvidó tu contraseña?{" "}
              {/* <a href="auth-reset-password.html"> */}Reset{/* </a> */}
            </p>
            <p className="mb-0 text-muted">
              ¿No tienes una cuenta? {/* <a href="auth-signup.html"> */}Signup
              {/* </a> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
