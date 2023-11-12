import React from "react";

function Navbar(){
    return (
        <div>
  <nav class="navbar navbar-expand-lg  customnavbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">
        <img  src={process.env.PUBLIC_URL + '/plane.png'} alt="plane" width="30" height="24" class="d-inline-block align-text-top me-1"/>
          AAA Flights

      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item  mx-2">
            <a class="nav-link nav-link-underline" aria-current="page" href="booking.js">Booking</a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link nav-link-underline" href="#">Contact</a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link nav-link-underline" href="flights.html">Flights</a>
          </li>


        </ul>
      </div>
      <div class="dropstart">
        <ul class="navbar-nav">
          <li class="nav-item dropdown  ">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
          <img src={process.env.PUBLIC_URL + '/user.png'} alt="User" width="30" height="24" 
                class="d-inline-block align-text-top me-1"/>
            </a>
            <ul class="dropdown-menu ">
              <li><a class="dropdown-item" href="login.html">Login</a></li>
              <li><a class="dropdown-item" href="createaccount.html">Create Account</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="admin.html">Login as Admin</a></li>
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