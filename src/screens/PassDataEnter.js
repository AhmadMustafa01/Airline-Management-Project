import React from "react";
import Passdetails from "../components/Passdetails";
import Navbar from "../components/nav";
import Footer from "../components/Footer";
import { useLocation } from 'react-router-dom';

export default function PassDataEnter() {
    const location = useLocation();
  const { bookingReference } = location.state || {};
  return (
    <div>
<Navbar/>
<Passdetails bookingReference={bookingReference}/>
<Footer/>
    </div>
  )
}
