import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const DashboardTest = () => {

    const [nombres, setNombres] = useState("");
  
    const obtenerNombres = async () => {
        let res = await Axios.get("");
        setNombres(res.data.nombre);
    }

    useEffect(() => {
        obtenerNombres();
    }, [])

    return (
        <>
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">


                            <div className="main-body">
                                <div className="page-wrapper">

                                    <div className="row">

                                        <div className="col-md-6 col-xl-4">
                                            <div className="card daily-sales">
                                                <div className="card-block">
                                                    <h6 className="mb-4">Daily Sales</h6>
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-9">
                                                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i>$ 249.95</h3>
                                                        </div>

                                                        <div className="col-3 text-right">
                                                            <p className="m-b-0">67%</p>
                                                        </div>
                                                    </div>
                                                    <div className="progress m-t-30" style={{ height: "7px" }}>
                                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{ with: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-xl-4">
                                            <div className="card Monthly-sales">
                                                <div className="card-block">
                                                    <h6 className="mb-4">Monthly Sales</h6>
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-9">
                                                            <h3 className="f-w-300 d-flex align-items-center  m-b-0"><i className="feather icon-arrow-down text-c-red f-30 m-r-10"></i>$ 2.942.32</h3>
                                                        </div>
                                                        <div className="col-3 text-right">
                                                            <p className="m-b-0">36%</p>
                                                        </div>
                                                    </div>
                                                    <div className="progress m-t-30" style={{ height: "7px" }}>
                                                        <div className="progress-bar progress-c-theme2" role="progressbar" style={{ with: "35%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-xl-4">
                                            <div className="card yearly-sales">
                                                <div className="card-block">
                                                    <h6 className="mb-4">Yearly Sales</h6>
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-9">
                                                            <h3 className="f-w-300 d-flex align-items-center  m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i>$ 8.638.32</h3>
                                                        </div>
                                                        <div className="col-3 text-right">
                                                            <p className="m-b-0">80%</p>
                                                        </div>
                                                    </div>
                                                    <div className="progress m-t-30" style={{ height: "7px" }}>
                                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{ with: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-md-6 col-sm-3">
                                            <div className="card Recent-Users">
                                                <div className="card-header">
                                                    <h5>Recent Users</h5>
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
                                                                            <h6 className="mb-1">Isabella Christensen</h6>
                                                                        </td>
                                                                    <td>
                                                                        <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Juan Cortez</h6>
                                                                    </td>
                                                                    <td><a href="#!" className="label theme-bg2 text-white f-12">En proceso</a><a href="#!" className="label theme-bg text-white f-12">Realizada</a></td>
                                                                    <td>
                                                                        <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Emergencia</h6>
                                                                    </td>
                                                                </tr>
                                                                <tr className="unread">
                                                                    <td>+503 7722-3322</td>
                                                                    <td>
                                                                        <h6 className="mb-1">Mathilde Andersen</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6 className="text-muted"><i className="fas fa-circle text-c-red f-10 m-r-15"></i>David Juan</h6>
                                                                    </td>
                                                                    <td><a href="#!" className="label theme-bg2 text-white f-12">En proceso</a><a href="#!" className="label theme-bg text-white f-12">Realizada</a></td>
                                                                    <td>
                                                                        <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Cirugía</h6>
                                                                    </td>
                                                                </tr>
                                                                <tr className="unread">
                                                                    <td>+503 7722-3322</td>
                                                                    <td>
                                                                        <h6 className="mb-1">Karla Sorensen</h6>
                                                                    </td>
                                                                    <td>
                                                                        <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Jose Perez</h6>
                                                                    </td>
                                                                    <td><a href="#!" className="label theme-bg2 text-white f-12">En proceso</a><a href="#!" className="label theme-bg text-white f-12">Realizada</a></td>
                                                                    <td>
                                                                        <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Peluqueria</h6>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/*    <div className="col-xl-4 col-md-6">
                                            <div className="card card-event">
                                                <div className="card-block">
                                                    <div className="row align-items-center justify-content-center">
                                                        <div className="col">
                                                            <h5 className="m-0">Upcoming Event</h5>
                                                        </div>
                                                        <div className="col-auto">
                                                            <label className="label theme-bg2 text-white f-14 f-w-400 float-right">34%</label>
                                                        </div>
                                                    </div>
                                                    <h2 className="mt-3 f-w-300">45<sub className="text-muted f-14">Competitors</sub></h2>
                                                    <h6 className="text-muted mt-4 mb-0">You can participate in event </h6>
                                                    <i className="fab fa-angellist text-c-purple f-50"></i>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-block border-bottom">
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-auto">
                                                            <i className="feather icon-zap f-30 text-c-green"></i>
                                                        </div>
                                                        <div className="col">
                                                            <h3 className="f-w-300">235</h3>
                                                            <span className="d-block text-uppercase">TOTAL IDEAS</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-block">
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-auto">
                                                            <i className="feather icon-map-pin f-30 text-c-blue"></i>
                                                        </div>
                                                        <div className="col">
                                                            <h3 className="f-w-300">26</h3>
                                                            <span className="d-block text-uppercase">TOTAL LOCATIONS</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        <div className="col-md-12 col-xl-4">
                                            <div className="card card-social">
                                                <div className="card-block border-bottom">
                                                    <div className="row align-items-center justify-content-center">
                                                        <div className="col-auto">
                                                            <i className="fab fa-facebook-f text-primary f-36"></i>
                                                        </div>
                                                        <div className="col text-right">
                                                            <h3>12,281</h3>
                                                            <h5 className="text-c-green mb-0">+7.2% <span className="text-muted">Total Likes</span></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-block">
                                                    <div className="row align-items-center justify-content-center card-active">
                                                        <div className="col-6">
                                                            <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Target:</span>35,098</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar progress-c-theme" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Duration:</span>3,539</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar progress-c-theme2" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-4">
                                            <div className="card card-social">
                                                <div className="card-block border-bottom">
                                                    <div className="row align-items-center justify-content-center">
                                                        <div className="col-auto">
                                                            <i className="fab fa-twitter text-c-blue f-36"></i>
                                                        </div>
                                                        <div className="col text-right">
                                                            <h3>11,200</h3>
                                                            <h5 className="text-c-purple mb-0">+6.2% <span className="text-muted">Total Likes</span></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-block">
                                                    <div className="row align-items-center justify-content-center card-active">
                                                        <div className="col-6">
                                                            <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Target:</span>34,185</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar progress-c-green" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Duration:</span>4,567</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar progress-c-blue" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-4">
                                            <div className="card card-social">
                                                <div className="card-block border-bottom">
                                                    <div className="row align-items-center justify-content-center">
                                                        <div className="col-auto">
                                                            <i className="fab fa-google-plus-g text-c-red f-36"></i>
                                                        </div>
                                                        <div className="col text-right">
                                                            <h3>10,500</h3>
                                                            <h5 className="text-c-blue mb-0">+5.9% <span className="text-muted">Total Likes</span></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-block">
                                                    <div className="row align-items-center justify-content-center card-active">
                                                        <div className="col-6">
                                                            <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Target:</span>25,998</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar progress-c-theme" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Duration:</span>7,753</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar progress-c-theme2" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-md-12 m-b-30">
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Today</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link active show" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">This Week</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">All</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    <table className="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>User</th>
                                                                <th>Activity</th>
                                                                <th>Time</th>
                                                                <th>Status</th>
                                                                <th className="text-right"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle m-r-10" style={{ with: "35%" }} src="assets/images/user/avatar-1.jpg" alt="activity-user" />Ida Jorgensen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">The quick brown fox</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">3:28 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0 text-c-green">Done</h6>
                                                                </td>
                                                                <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ with: "35%" }} src="assets/images/user/avatar-2.jpg" alt="activity-user" />Albert Andersen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">Jumps over the lazy</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">2:37 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0 text-c-red">Missed</h6>
                                                                </td>
                                                                <td className="text-right"><i className="fas fa-circle text-c-red f-10"></i></td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ with: "35%" }} src="assets/images/user/avatar-3.jpg" alt="activity-user" />Silje Larsen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">Dog the quick brown</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">10:23 AM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0 text-c-purple">Delayed</h6>
                                                                </td>
                                                                <td className="text-right"><i className="fas fa-circle text-c-purple f-10"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ with: "35%" }} src="assets/images/user/avatar-1.jpg" alt="activity-user" />Ida Jorgensen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">The quick brown fox</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">4:28 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0 text-c-green">Done</h6>
                                                                </td>
                                                                <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </div>
                                                <div className="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                    <table className="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>User</th>
                                                                <th>Activity</th>
                                                                <th>Time</th>
                                                                <th>Status</th>
                                                                <th className="text-right"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ with: "35%" }} src="assets/images/user/avatar-2.jpg" alt="activity-user" />Albert Andersen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">Jumps over the lazy</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">2:37 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0 text-c-red">Missed</h6>
                                                                </td>
                                                                <td className="text-right"><i className="fas fa-circle text-c-red f-10"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle m-r-10" style={{ with: "35%" }} src="assets/images/user/avatar-1.jpg" alt="activity-user" />Ida Jorgensen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">The quick brown fox</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">3:28 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0 text-c-green">Done</h6>
                                                                </td>
                                                                <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ with: "35%" }} src="assets/images/user/avatar-1.jpg" alt="activity-user" />Ida Jorgensen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">The quick brown fox</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">4:28 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0 text-c-green">Done</h6>
                                                                </td>
                                                                <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ with: "35%" }} src="assets/images/user/avatar-3.jpg" alt="activity-user" />Silje Larsen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">Dog the quick brown</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">10:23 AM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0 text-c-purple">Delayed</h6>
                                                                </td>
                                                                <td className="text-right"><i className="fas fa-circle text-c-purple f-10"></i></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </div>
                                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                                    <table className="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>User</th>
                                                                <th>Activity</th>
                                                                <th>Time</th>
                                                                <th>Status</th>
                                                                <th className="text-right"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ with: "35%" }} src="assets/images/user/avatar-3.jpg" alt="activity-user" />Silje Larsen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">Dog the quick brown</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">10:23 AM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0 text-c-purple">Delayed</h6>
                                                                </td>
                                                                <td className="text-right"><i className="fas fa-circle text-c-purple f-10"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle m-r-10" style={{ with: "35%" }} src="assets/images/user/avatar-1.jpg" alt="activity-user" />Ida Jorgensen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">The quick brown fox</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">3:28 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0 text-c-green">Done</h6>
                                                                </td>
                                                                <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ with: "35%" }} src="assets/images/user/avatar-2.jpg" alt="activity-user" />Albert Andersen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">Jumps over the lazy</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">2:37 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0 text-c-red">Missed</h6>
                                                                </td>
                                                                <td className="text-right"><i className="fas fa-circle text-c-red f-10"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="m-0"><img className="rounded-circle  m-r-10" style={{ with: "35%" }} src="assets/images/user/avatar-1.jpg" alt="activity-user" />Ida Jorgensen</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">The quick brown fox</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0">4:28 PM</h6>
                                                                </td>
                                                                <td>
                                                                    <h6 className="m-0 text-c-green">Done</h6>
                                                                </td>
                                                                <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardTest