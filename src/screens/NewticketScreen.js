import React from 'react'
import Navbar from '../components/nav'

import Footer from '../components/Footer'
import Newticket from '../components/Newticket'
import { useLocation } from 'react-router-dom';
export default function NewticketScreen() {
    const location = useLocation();
    const {bookingReference } = location.state || {};
  return (
    <div>
<Navbar/>
<Newticket bookingReference={bookingReference}/>
<Footer/>


    </div>
  )
}
