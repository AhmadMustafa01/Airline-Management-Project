import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Managebooking = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    bookingReference: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost/dbmsProjectDatabases/manageBooking.php', {
        lastName: formData.lastName,
        bookingReference: formData.bookingReference,
      });

      if (response.data.results.length === 0) {
        navigate('/noresults',);
      } else {
        console.log(response.data.results);
        navigate('/changebooking', { state: { results: response.data.results } });
      }
    } catch (error) {
      console.error('Error searching for booking:', error);
    }
  };

  return (
    <div className="w-75 mx-auto mt-5 border p-3">
      <form onSubmit={handleSearch}>
        <div className="input-group">
          <span className="input-group-text">Last name</span>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <span className="input-group-text">Booking reference</span>
          <input
            type="text"
            name="bookingReference"
            className="form-control"
            value={formData.bookingReference}
            onChange={handleInputChange}
          />
        </div>

        <div className="text-center mt-3">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Managebooking;
