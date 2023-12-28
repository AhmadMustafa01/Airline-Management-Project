import React from 'react';

const FindflightsTable = ({ flights }) => {
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
            {/* Add more columns based on your flight data */}
          </tr>
        </thead>
        <tbody>
          {/* Add a conditional check before mapping over flights */}
          {flights && flights.length > 0 ? (
            flights.map((flight) => (
              <tr key={flight.id}>
                <td>{flight.id}</td>
                <td>{flight.origin}</td>
                <td>{flight.destination}</td>
                <td>{flight.day}</td>
                {/* Add more columns based on your flight data */}
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
