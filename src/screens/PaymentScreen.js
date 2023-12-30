import React from "react";
import Navbar from "../components/nav";
import Footer from "../components/Footer";
import CreditCard from "../components/CreditCard";
import { useLocation } from 'react-router-dom';

export default function PaymentScreen() {
  const location = useLocation();
  const { bookingReference } = location.state || {};
  return (
    <div>
        <Navbar/>
        <CreditCard bookingReference={bookingReference} />
    <Footer/>
    </div>
  )
}
