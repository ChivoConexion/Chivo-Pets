import React, { Fragment } from "react";
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai'
const CardDone = () => {
  return (
    <Fragment>
      <div className="col-md-6 col-xl-4">
        <div className="card daily-sales">
          <div className="card-block">
            <h6 className="mb-4">Consultas</h6>
            <div className="row d-flex align-items-center">
              <div className="col-9">
                <h3 className="f-w-300 d-flex align-items-center m-b-0">
                 <AiOutlineArrowUp className="text-c-green f-30 m-r-10"/>
                  $ 249.95
                </h3>
              </div>

              <div className="col-3 text-right">
                <p className="m-b-0">67%</p>
              </div>
            </div>
            <div className="progress m-t-30" style={{ height: "7px" }}>
              <div
                className="progress-bar progress-c-theme"
                role="progressbar"
                style={{ with: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-xl-4">
        <div className="card Monthly-sales">
          <div className="card-block">
            <h6 className="mb-4">Encuestas realizadas</h6>
            <div className="row d-flex align-items-center">
              <div className="col-9">
                <h3 className="f-w-300 d-flex align-items-center  m-b-0">
                <AiOutlineArrowDown className="text-c-red f-30 m-r-10"/>
                  $ 2.942.32
                </h3>
              </div>
              <div className="col-3 text-right">
                <p className="m-b-0">-36%</p>
              </div>
            </div>
            <div className="progress m-t-30" style={{ height: "7px" }}>
              <div
                className="progress-bar progress-c-theme2"
                role="progressbar"
                style={{ with: "35%" }}
                aria-valuenow="35"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 col-xl-4">
        <div className="card yearly-sales">
          <div className="card-block">
            <h6 className="mb-4">Encuestas en proceso</h6>
            <div className="row d-flex align-items-center">
              <div className="col-9">
                <h3 className="f-w-300 d-flex align-items-center  m-b-0">
                <AiOutlineArrowUp className="text-c-green f-30 m-r-10"/>
                  $ 8.638.32
                </h3>
              </div>
              <div className="col-3 text-right">
                <p className="m-b-0">80%</p>
              </div>
            </div>
            <div className="progress m-t-30" style={{ height: "7px" }}>
              <div
                className="progress-bar progress-c-theme"
                role="progressbar"
                style={{ with: "70%" }}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardDone;
