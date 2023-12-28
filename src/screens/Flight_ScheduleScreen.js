import React from "react";

import FlightTable from "../components/FlightsTable";
import Navbar   from "../components/nav";
import Footer from "../components/Footer";

export default  function Flight_ScheduleScreen
() {
  return (
    <div>
 <Navbar/>
 <FlightTable/>
 <Footer/>
    </div>
  )
}
