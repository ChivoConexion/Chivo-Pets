import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo512.png";
const SideBar = () => {
  return (
    <Fragment>
      <nav className="sidebar close">
        <header>
          <div className="image-text">
            <span className="image">
              <img src={Logo} alt="" />
            </span>

            <div className="text logo-text">
              <span className="name">Chivo Pets</span>
            </div>
          </div>

          <i className="bx bx-chevron-right toggle"></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li>

            <ul className="menu-links">
              <li className="nav-link">
                <Link to="/SignIn">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Dashboard</span>
                </Link>
              </li>

              <li className="nav-link">
                <a href="https://facebook.com">
                  <i className="bx bx-bar-chart-alt-2 icon"></i>
                  <span className="text nav-text">Revenue</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="https://facebook.com">
                  <i className="bx bx-bell icon"></i>
                  <span className="text nav-text">Notifications</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="https://facebook.com">
                  <i className="bx bx-pie-chart-alt icon"></i>
                  <span className="text nav-text">Analytics</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="https://facebook.com">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">Wallets</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a href="https://facebook.com">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>

            <li className="mode">
              <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">Dark mode</span>

              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default SideBar;
