import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return (
        <div >
  <nav className="navbar navbar-expand-lg  navbar-dark bg-dark customnavbar" style={{height:"70px"}}>
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
        <li className="nav-item">
                    <Link className="nav-link nav-link-underline" to="/">Home</Link>
                </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Book
          </a>
          <ul className="dropdown-menu">
            <li>
            <Link className="dropdown-item " aria-current="page" to="/booking">Booking</Link>
            </li>
            <li><Link className="dropdown-item" href="#">Manage Bookings</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">My bookings</Link> </li>
          </ul>
        </li>
          <li className="nav-item px-2">
            <Link className="nav-link nav-link-underline" to="#">Contact Us</Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link nav-link-underline" to="/ScheduleScreen">Flights</Link>
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
              <li><Link className="dropdown-item" to="/login">Login</Link></li>
              <li><Link className="dropdown-item" to="/signup">Create Account</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><Link className="dropdown-item" to="/loginadmin">Login as Admin</Link></li>
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