//import React, { useState, useEffect } from 'react';
//import Axios from 'axios';

import CardDone from "../components/CardDone";
import CardLikes from "../components/CardLikes";
import DoctorInfo from "../components/DoctorInfo";
import TableUsers from "../components/TableUsers";

const DashboardTest = () => {
  /*   const [nombres, setNombres] = useState("");
  
    const obtenerNombres = async () => {
        let res = await Axios.get("");
        setNombres(res.data.nombre);
    }

    useEffect(() => {
        obtenerNombres();
    }, []) */

  return (
    <>
      <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
          <div className="pcoded-content">
            <div className="pcoded-inner-content">
              <div className="main-body">
                <div className="page-wrapper">
                  <div className="row">
                    <CardDone />
                    <TableUsers />
                    <CardLikes />
                    <DoctorInfo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTest;
