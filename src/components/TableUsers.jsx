import React, { Fragment } from "react";

const TableUsers = () => {
  return (
    <Fragment>
      <div className="col-xl-12 col-md-6">
        <div className="card Recent-Users">
          <div className="card-header">
            <h3>Control de calidad</h3>
          </div>
          
          <div className="card-block px-0 py-3">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Teléfono</th>
                    <th>Nombres</th>
                    <th>Médico Veterinario</th>
                    <th>Estado</th>
                    <th>Servicios</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="unread">
                    <td>+503 7722-3322</td>
                    <td>
                      <h6 className="mb-1">Julieta Alvarenga</h6>
                    </td>
                    <td>
                      <h6 className="text-muted">
                        <i className="fas fa-circle text-c-green f-10 m-r-15"></i>
                        Juan Cortez
                      </h6>
                    </td>
                    <td>
                      <a href="#!" className="label theme-bg2 text-white f-12 text-decoration-none">
                        En proceso
                      </a>
                      <a href="#!" className="label theme-bg text-white f-12 text-decoration-none">
                        Realizada
                      </a>
                    </td>
                    <td>
                      <h6 className="text-muted">
                        <i className="fas fa-circle text-c-green f-10 m-r-15"></i>
                        Emergencia
                      </h6>
                    </td>
                  </tr>
                  <tr className="unread">
                    <td>+503 7722-3322</td>
                    <td>
                      <h6 className="mb-1">Mathilde Andersen</h6>
                    </td>
                    <td>
                      <h6 className="text-muted">
                        <i className="fas fa-circle text-c-red f-10 m-r-15"></i>
                        David Juan
                      </h6>
                    </td>
                    <td>
                      <a href="#!" className="label theme-bg2 text-white f-12 text-decoration-none">
                        En proceso
                      </a>
                      <a href="#!" className="label theme-bg text-white f-12 text-decoration-none">
                        Realizada
                      </a>
                    </td>
                    <td>
                      <h6 className="text-muted">
                        <i className="fas fa-circle text-c-green f-10 m-r-15"></i>
                        Cirugía
                      </h6>
                    </td>
                  </tr>
                  <tr className="unread">
                    <td>+503 7722-3322</td>
                    <td>
                      <h6 className="mb-1">Karla Sorensen</h6>
                    </td>
                    <td>
                      <h6 className="text-muted">
                        <i className="fas fa-circle text-c-green f-10 m-r-15"></i>
                        Jose Perez
                      </h6>
                    </td>
                    <td>
                      <a href="#!" className="label theme-bg2 text-white f-12 text-decoration-none">
                        En proceso
                      </a>
                      <a href="#!" className="label theme-bg text-white f-12 text-decoration-none">
                        Realizada
                      </a>
                    </td>
                    <td>
                      <h6 className="text-muted">
                        <i className="fas fa-circle text-c-green f-10 m-r-15"></i>
                        Peluqueria
                      </h6>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TableUsers;
