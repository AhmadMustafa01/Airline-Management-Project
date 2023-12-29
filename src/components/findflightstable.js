import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const FindflightsTable = ({ flights, selectedDate, selectedFlightClass }) => {
  const navigate = useNavigate();
  const handleBookClick = async (flight) => {
        console.log('Booking flight:', flight);
        try {
          // Make a POST request to book the flight
          const response = await axios.post('http://localhost/dbmsProjectDatabases/Bookingtable.php', {  flightId: flight.flight_no,
          selectedDate: selectedDate,
          selectedFlightClass: selectedFlightClass });
    
          // Check the response and show a message
          if (response.data.message === 'Booking successful') {
            alert(`Booking successful! Your booking reference is ${response.data.bookingReference}`);
            const bookingReference = response.data.bookingReference;

            // Navigate to "/passdetails" and pass booking reference to the state
            navigate('/passdetails', { state: { bookingReference } });
          } else {
            alert('Booking failed. Please try again.');
          }
        } catch (error) {
          console.error('Error booking flight:', error);
        }
      };
  return (
    <div className="container mt-4">
      <h2>Available Flights</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Flight ID</th>
            <th scope="col">Origin</th>
            <th scope="col">Destination</th>
            <th scope="col">Day</th>
            <th scope="col">Departure Time</th>
            <th scope="col">Arrival Time</th>
            <th scope="col">Book</th>
            {/* Add more columns based on your flight data */}
          </tr>
        </thead>
        <tbody>
          {/* Add a conditional check before mapping over flights */}
          {flights && flights.length > 0 ? (
            flights.map((flight) => (
              <tr key={flight.flight_no}>
                <td>{flight.flight_no}</td>
                <td>{flight.origin}</td>
                <td>{flight.destination}</td>
                <td>{flight.day}</td>
                <td>{flight.departure_time}</td>
                <td>{flight.arrival_time}</td>
                <button
                    className="btn btn-primary"
                    onClick={() => handleBookClick(flight)}
                  >
                    Book
                  </button>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No flights found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FindflightsTable;
