import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Ticket = ({ bookingReference }) => {
  console.log(bookingReference);
  const [ticketData, setTicketData] = useState({
    ticketNumber: '',
    dateIssued: '',
    passengerName: '',
    flightNumber: '',
    flightDate: '',
    flightClass: '',
    originCity: '',
    destinationCity: '',
    departureTime: '',
    arrivalTime: '',
    bookingReference: '',
  });

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        // Make an Axios POST request to your PHP endpoint
        const response = await axios.post('http://localhost/dbmsProjectDatabases/ticket.php', {
          bookingReference: bookingReference,
        });

        // Assuming your PHP response includes ticket data
        const data = response.data;

        setTicketData({
          ticketNumber: data.ticket_no,
          dateIssued: new Date().toISOString().split('T')[0], // Assign current date
          passengerName: `${data.first_name} ${data.last_name}`,
          flightNumber: data.flight_no,
          flightDate: data.flight_date,
          flightClass: data.fight_class,
          originCity: data.origin,
          destinationCity: data.destination,
          departureTime: data.departure_time,
          arrivalTime: data.arrival_time,
          bookingReference: data.booking_reference,
        });
      } catch (error) {
        console.error('Error fetching ticket data:', error);
      }
    };

    // Call the fetchTicketData function when the component mounts
    fetchTicketData();
  }, [bookingReference]);

  return (
    <div className="container col-md-10 bg-white p-5"  style={{ backgroundColor: 'white', minHeight: '600px', padding: '5%' }}>
      <div className="row">
        <div className="card" style={{ border: '1px solid #9f9f9f', width: '70%', margin: 'auto 0' }}>
          <div className="card-body">
            <h4 className="card-title">Ticket No: <span id="ticketNumber">{ticketData.ticketNumber}</span></h4>
            <p className="card-text"><h5><i>AAA Airlines</i>&emsp;&emsp;&emsp;&emsp;&emsp;Date issued:</h5><span id="dateIssued">{ticketData.dateIssued}</span></p>
            <br />
            <p className="card-text"><h6>Passenger:</h6><span id="passengerName">{ticketData.passengerName}</span></p>
            <hr className="darker-hr" style= {{ border: '1px solid', opacity: '0.2' }}/>
            <p className="card-text"><h6>Flight No:</h6><span id="flightNumber">{ticketData.flightNumber}</span></p>
            <p className="card-text"><h6>Flight Date:</h6><span id="flightDate">{ticketData.flightDate}</span></p>
            <p className="card-text"><h6>Flight class:</h6><span id="flightClass">{ticketData.flightClass}</span></p>
            <hr className="darker-hr" style= {{ border: '1px solid', opacity: '0.2' }}/>
            <p className="card-text"><h6>Origin:</h6><span id="originCity">{ticketData.originCity}</span> <span id="departureTime">{ticketData.departureTime}</span></p>
            <p className="card-text"><h6>Destination:</h6><span id="destinationCity">{ticketData.destinationCity}</span> <span id="arrivalTime">{ticketData.arrivalTime}</span></p>
            <hr className="darker-hr" style= {{ border: '1px solid', opacity: '0.2' }}/>
            <p className="card-text"><h6>Booking Reference:</h6><span id="bookingReference">{ticketData.bookingReference}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
