import React, { useState, useEffect } from "react";
import axios from "axios";

const Changebookings = ({ location }) => {
  const [data, setData] = useState({
    ticket_no: "",
    booking_reference: "",
    first_name: "",
    last_name: "",
    gender: "",
    phone_number: "",
  });

  useEffect(() => {
    // Check if location state exists and has results
    if (location.state && location.state.results && location.state.results.length > 0) {
      // Assuming there's only one result for simplicity
      const result = location.state.results[0];
      setData({
        ticket_no: result.ticket_no,
        booking_reference: result.booking_reference,
        first_name: result.first_name,
        last_name: result.last_name,
        gender: result.gender,
        phone_number: result.phone_number,
      });
    }
  }, [location.state]);

  const handleChange = (field, value) => {
    setData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      // Make an Axios POST request to UpdateBooking.php
      const response = await axios.post('http://localhost/dbmsProjectDatabases/UpdateBooking.php', {
        ticket_no: data.ticket_no,
        booking_reference: data.booking_reference,
        first_name: data.first_name,
        last_name: data.last_name,
        gender: data.gender,
        phone_number: data.phone_number,
      });
  
      // Assuming your PHP response includes a success message
      if (response.data.success) {
        // Show a success message (you can use a popup or any other method)
        alert('Successfully updated data entry!');
      } else {
        // Handle error or show an appropriate message
        alert('Failed to update data entry.');
      }
    } catch (error) {
      console.error('Error updating data entry:', error);
      // Handle error or show an appropriate message
      alert('An error occurred while updating data entry.');
    }
  };
  

  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>Ticket No</th>
            <th>Booking Reference</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Submit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.ticket_no}</td>
            <td>{data.booking_reference}</td>
            <td>
              <input
                type="text"
                value={data.first_name}
                onChange={(e) => handleChange("first_name", e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={data.last_name}
                onChange={(e) => handleChange("last_name", e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={data.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={data.phone_number}
                onChange={(e) => handleChange("phone_number", e.target.value)}
              />
            </td>
            <td>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Changebookings;
