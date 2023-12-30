import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreditCard({ bookingReference }) {
  console.log(bookingReference);
  const [cardNumber, setCardNumber] = useState('');
  const [message, setMessage] = useState('');
const navigate = useNavigate();
  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to credit.php
      const response = await axios.post('http://localhost/dbmsProjectDatabases/credit.php', {
        cardNumber: parseInt(cardNumber, 10)
      });

      // Check the response and show a message
      setMessage(response.data.message);
      if (response.data.message.includes('success')) {
        navigate('/ticket',{ state: { bookingReference } })}
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div>
      <div className="container customContainer mt-4 p-3">
        <label htmlFor="inputPassword5" className="form-label">
          Enter your Card Number
        </label>
        <input
          type="password"
          id="inputPassword5"
          className="form-control"
          aria-describedby="passwordHelpBlock"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
        <div id="passwordHelpBlock" className="form-text">
          Your Card Number must be 15 characters long, contain only numbers, and must not
          <br />contain special characters or emoji.
        </div>

        <div className="col-12 text-center mt-2">
          <button type="submit" className="btn btn-primary" onClick={handlePaymentSubmit}>
            Pay
          </button>
        </div>

        <div className="mt-3">
          {message && <p className={message.includes('success') ? 'text-success' : 'text-danger'}>{message}</p>}
        </div>
      </div>
    </div>
  );
}
