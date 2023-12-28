import React from 'react'
import Navbar from '../components/nav'
import Findflightstable from '../components/findflightstable'
import { useLocation } from 'react-router-dom';



export default function Findflights() {
    const location = useLocation();
    const { formData, flights } = location.state || {};
    return (
        <div>
            <Navbar />
            {flights && <Findflightstable flights={flights} />}
        </div>
    )
}
