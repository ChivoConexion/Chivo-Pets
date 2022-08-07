import React from "react";
import logo from "../assets/img/chivo-pest.png";

const SignUp = () => {
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
            <h3 className="mb-4 color1">Inscribirse</h3>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre de usuario"
              />
            </div>
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
                placeholder="clave"
              />
            </div>

            <button className="btn btn-primary shadow-2 mb-4">Inscribirse</button>
            <p className="mb-0 text-muted">
            ¿Ya tienes una cuenta?<a href="auth-signin.html"> Iniciar sesión</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;