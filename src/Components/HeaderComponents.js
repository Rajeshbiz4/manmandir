import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt, FaUser, FaEnvelope, FaCartPlus } from "react-icons/fa";
// import "../styles/header.scss";
import Number from "./Number";
class HeaderComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {
          <nav className="navbar navbar-expand-sm  text-light bg-primary">
            <div className="container-fluid">
              <FaPhoneAlt className="phone"></FaPhoneAlt>
              <div className="navbar-brand">{Number.number}</div>
              <div className="collapse navbar-collapse" id="navbarNav">
                <FaEnvelope className="envelope"></FaEnvelope>&nbsp;&nbsp;
                <div className="navbar-brand">{Number.email}</div>
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    {/* <Link className="homelink" to="/">
                      HomePage
                    </Link> */}
                  </li>
                  <li className="nav-item">
                    <NavLink className="loginlink" exact to="/login">
                      Login
                    </NavLink>
                  </li>
                  <span className="seperator"> | </span>&nbsp;&nbsp;
                  <li className="nav-item">
                    <NavLink className="signup" exact to="/Signup">
                      SignUp
                    </NavLink>
                  </li>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </ul>
                <FaCartPlus className="cart"></FaCartPlus>
                <span className="addspan">0</span>
              </div>
            </div>
          </nav>
        }
      </div>
    );
  }
}
export default HeaderComponent;
