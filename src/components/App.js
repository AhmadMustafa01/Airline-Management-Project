import React from 'react'
import Navbar from './nav'
import Home from '../screens/home';
import {
    BrowserRouter as Router, Routes, Route, useRouteMatch, useParams
} from "react-router-dom";
import Booking from '../screens/booking';
import Login from '../screens/login';
import Createacc from '../screens/Createacc';
import Loginadminscreen from '../screens/loginadminscreen';
import Flight_ScheduleScreen from '../screens/Flight_ScheduleScreen';
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
                </Routes>

            </div>

        </Router>

    )
}
