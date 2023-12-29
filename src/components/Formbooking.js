import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FindflightsTable from './findflightstable';

const Formbooking = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [passengerCount, setPassengerCount] = useState(1);
  const [from, setFrom] = useState('Lahore');
  const [to, setTo] = useState('Islamabad');
  const [dayOfWeek, setDayOfWeek] = useState('Wednesday');
  const [flightClass, setFlightClass] = useState('Economy');

  const [foundFlights, setFoundFlights] = useState([]);
  const navigate = useNavigate();

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handlePassengerChange = (e) => {
    setPassengerCount(e.target.value);
  };
   const handleFlightClassChange = (e) => {
    setFlightClass(e.target.value);
  };

  const handleFindFlights = async () => {
    const formData = {
      from: from,
      to: to,
      dayOfWeek: dayOfWeek,
    };

    try {
      const response = await axios.post(
        'http://localhost/dbmsProjectDatabases/findflights.php',
        formData
      );

      if (response.data.length > 0) {
        navigate('/findflights', { state: {
           formData, flights: response.data ,
            selectedDate: startDate,
            selectedFlightClass: flightClass,   
          } });
      
      } else {
        navigate('/noresults');
      }
    } catch (error) {
      console.error('Error finding flights:', error);
    }
  };
  return (
    <div className="container customContainer mt-2 p-5 customContainer h-75">
      <form className="row g-3" method="post" action="">
        <div className="col-md-12">
          <label htmlFor="from" className="form-label fs-4">
            From
          </label>
        </div>
        <div className="col-md-12">
          <select
            id="from"
            className="form-select"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            <option>Lahore</option>
            <option>Islamabad</option>
          </select>
        </div>

        <div className="col-md-12">
          <label htmlFor="to" className="form-label fs-4">
            TO
          </label>
          <select
            id="to"
            className="form-select"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            <option>Lahore</option>
            <option>Islamabad</option>
          </select>
        </div>

        <div className="d-flex mt-4">
          <div className="form-check me-5">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label className="form-check-label fs-5" htmlFor="flexRadioDefault1">
              One way
            </label>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-6">
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              placeholderText="Select Date"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <select
              id="dayOfWeek"
              name="dayOfWeek"
              className="form-select"
              value={dayOfWeek}
              onChange={(e) => setDayOfWeek(e.target.value)}
            >
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
            </select>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-6">
  <label htmlFor="inputState" className="form-label fs-4">
    Travel class
  </label>
  <select
    id="inputState"
    className="form-select"
    value={flightClass} // Set the value to the current flight class
    onChange={handleFlightClassChange} // Call the handleFlightClassChange function on change
  >
    <option value="Economy">Economy</option>
    <option value="Business">Business</option>
    {/* Add more options if needed */}
  </select>
</div>

        </div>

        <label htmlFor="" className="form-label fs-4">
          Passengers :
        </label>
        <div className="container">
          <div className="row g-2">
            <div className="col-12">
              <div className="p-3">
                <label htmlFor="passengerCount" className="form-label">
                  Total Passengers
                </label>
                <select
                  id="passengerCount"
                  className="form-select"
                  value={passengerCount}
                  onChange={handlePassengerChange}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  {/* Add more options if needed */}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 text-end">
        <button
            type="button"
            className="btn btn-primary"
            onClick={handleFindFlights}
          >
            Find Flights
          </button>
        </div>
        {/* {foundFlights.length > 0 && <FindflightsTable flights={foundFlights} />} */}
      </form>

    </div>
  );
};

export default Formbooking;
