import React from 'react'
import Navbar from '../components/nav'
import Footer from '../components/Footer'
import Ticket from '../components/ticket'
import { useLocation } from 'react-router-dom';

export default function TicketScreen() {
  const location = useLocation();
  const {bookingReference } = location.state || {};
  return (
    <div>
        <Navbar/>
        <Ticket  bookingReference={bookingReference}/>

        <Footer/>

    </div>
  )
}
