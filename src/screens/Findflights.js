import React from 'react'
import Navbar from '../components/nav'
import Findflightstable from '../components/findflightstable'
import { useLocation } from 'react-router-dom';



export default function Findflights() {
    const location = useLocation();
    const { formData, flights, selectedDate, selectedFlightClass } = location.state || {};
    return (
        <div>
            <Navbar />
            {flights && <Findflightstable flights={flights}
          selectedDate={selectedDate}
          selectedFlightClass={selectedFlightClass} />}
        </div>
    )
}
