import React from 'react'
import Navbar from './nav'
import Home from '../screens/home';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Booking from '../screens/booking';
export default function
    () {
    return (
        <Router>
            <div>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/booking" element={<Booking/>}/>

            </Routes>

            </div>

        </Router>

    )
}
