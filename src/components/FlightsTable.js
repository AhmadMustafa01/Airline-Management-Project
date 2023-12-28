import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlightTable = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'http://localhost/dbmsProjectDatabases/flights.php' with your actual PHP endpoint
        const response = await axios.get('http://localhost/dbmsProjectDatabases/flights.php/');
        setFlights(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Flight #</th>
            <th scope="col">Origin</th>
            <th scope="col">Destination</th>
            <th scope="col">Day</th>
            <th scope="col">Departure Time</th>
           
            <th scope="col">Arrival Time</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index}>
              <th scope="row">
                <img src="plane.png" alt="" width="30" height="24" /> {flight.flight_no}
              </th>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{flight.day}</td>
              <td>{flight.departure_time}</td>
              <td>{flight.arrival_time}</td>
             
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightTable;
