import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div>
  <nav className="navbar navbar-expand-lg  customnavbar">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img  src={process.env.PUBLIC_URL + '/plane.png'} alt="plane" width="30" height="24" className="d-inline-block align-text-top me-1"/>
          AAA Flights

      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item  mx-2">
            <Link className="nav-link nav-link-underline" aria-current="page" to="/booking">Booking</Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link nav-link-underline" to="#">Contact</Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link nav-link-underline" to="flights.html">Flights</Link>
          </li>


        </ul>
      </div>
      <div className="dropstart">
        <ul className="navbar-nav">
          <li className="nav-item dropdown  ">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
          <img src={process.env.PUBLIC_URL + '/user.png'} alt="User" width="30" height="24" 
                className="d-inline-block align-text-top me-1"/>
            </Link>
            <ul className="dropdown-menu ">
              <li><Link className="dropdown-item" to="login.html">Login</Link></li>
              <li><Link className="dropdown-item" to="createaccount.html">Create Account</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><Link className="dropdown-item" to="admin.html">Login as Admin</Link></li>
            </ul>
          </li>

        </ul>

      </div>
    </div>
  </nav>

</div>
    )
}
export default Navbar;