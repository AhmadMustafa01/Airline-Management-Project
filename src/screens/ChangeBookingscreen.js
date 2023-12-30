import Changebookings from "../components/ChangeBooking";
import React from "react";
import Navbar from "../components/nav";
import { useLocation } from "react-router-dom";


export default function ChangeBookingscreen() {
    const location = useLocation();
  return (
    <div>
    <Navbar/>
    <Changebookings location={location} />

    </div>
  )
}
