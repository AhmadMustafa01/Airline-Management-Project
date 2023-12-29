import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Passdetails({ bookingReference }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'Male', // Default gender
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add booking reference to the form data
      const dataToSend = {
        bookingReference,
        ...formData,
      };

      // Make a POST request to passdetails.php using Axios
      const response = await axios.post('http://localhost/dbmsProjectDatabases/passdetails.php', dataToSend);

      if (response.data.message === 'Data stored successfully') {
        // Handle success, e.g., redirect or show a success message
        alert('Data stored successfully!');
      } else {
        // Handle failure
        alert('Failed to store data. Please try again.');
      }
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

  return (
    <div>
      <p className="fw-bold fs-5 ms-2 mt-2">Enter your Details</p>

      <div className="container customContainer p-3 mt-4">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-12">
            <label htmlFor="validationDefault01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="validationDefault02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-check col-md-4 ms-2">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault1"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check col-md-4">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault2"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Female
            </label>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationDefaultUsername" className="form-label">
              Phone Number
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
