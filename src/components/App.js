import React from 'react'
import Home from '../screens/home';
import {
    BrowserRouter as Router, Routes, Route, useRouteMatch, useParams
} from "react-router-dom";
import Booking from '../screens/booking';
import Login from '../screens/login';
import Createacc from '../screens/Createacc';
import Loginadminscreen from '../screens/loginadminscreen';
import Flight_ScheduleScreen from '../screens/Flight_ScheduleScreen';
import Findflights from '../screens/Findflights';
import NoResults from './Noresults';
import PassDataEnter from '../screens/PassDataEnter';
import PaymentScreen from '../screens/PaymentScreen';
import TicketScreen from '../screens/ticketScreen';
import Managescreen from '../screens/Managescreen';
import ChangeBookingscreen from '../screens/ChangeBookingscreen';
export default function
    App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/booking" element={<Booking />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Createacc />} />
                    <Route exact path="/loginadmin" element={<Loginadminscreen />} />
                    <Route exact path="/ScheduleScreen" element={<Flight_ScheduleScreen/>} />
                    <Route path="/findflights" element={<Findflights />} />
                    <Route path="/noresults" element={<NoResults />} />
                    <Route path="/passdetails" element={<PassDataEnter/>} />
                    <Route path="/payment" element={<PaymentScreen/>} />
                    <Route path="/ticket" element={<TicketScreen/>} />
                    <Route path="/manage" element={<Managescreen/>} />
                    <Route path="/changebooking" element={<ChangeBookingscreen/>} />
                </Routes>

            </div>

        </Router>

    )
}