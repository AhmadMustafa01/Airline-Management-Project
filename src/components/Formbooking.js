import React, { useState } from 'react';

export default function Formbooking() {
  const [passengerCount, setPassengerCount] = useState(1);

  const handlePassengerChange = (e) => {
    setPassengerCount(e.target.value);
  };

  return (
    <div className="container customContainer mt-2 p-5 customContainer h-75">
      <form className="row g-3" method="post" action="">
        <div className="col-md-12">
          <label htmlFor="inputState" className="form-label fs-4">
            From
          </label>
        </div>
        <div className="col-md-12">
          <select id="inputState" className="form-select">
            {/* <option selected>City</option> */}
            <option>Lahore</option>
            <option>Islamabad</option>
          </select>
        </div>

        <div className="col-md-12">
          <label htmlFor="inputState" className="form-label fs-4">
            TO
          </label>
          <select id="inputState" className="form-select">
            {/* <option selected>City</option> */}
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
            <label className="form-check-label fs-5" htmlFor=" flexRadioDefault1">
              One way
            </label>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control datepicker"
              id="departDate"
              placeholder="Depart Date"
            />
          </div>
        </div>

        <div className="row mt-2 ">
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label fs-4">
              Travel class
            </label>
            <select id="inputState" className="form-select">
              <option selected>Economy</option>
              <option>...</option>
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
          <button type="submit" className="btn btn-primary">
            <a className="nav-link " aria-current="page" href="findflights.html">
              Find Flights
            </a>
          </button>
        </div>
      </form>
    </div>
  );
}
