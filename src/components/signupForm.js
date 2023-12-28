import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState(''); // Add this line

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an Axios post request to your user registration PHP file
      const response = await axios.post('http://localhost/dbmsProjectDatabases/userregister.php', {
        name,
        password,
      });

      if (response.data.message === 'Registration successful') {
        // Redirect to the booking component (replace '/booking' with your actual route)
        window.location.href = '/booking';
      } else if (response.data.message === 'User already exists') {
        // Display a message and redirect to the login component
        setRegistrationMessage('User already exists. Please log in.');
        window.location.href = '/login';
      }
      else {
        // Handle registration failure (you can display an error message)
        console.error('Registration failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <div className="container logincontainer p-5 mt-5">
        <div className="text-center">
          <img src="plane.png" className="rounded" width="100" height="100" alt="..." />
        </div>
        <p className="text-center fs-4 mb-4 fw-bold">Create your AAA account</p>

        {/* Signup form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3 col-12">
            <label htmlFor="exampleInputName" className="form-label fs-5">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label fs-5">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary mx-auto">
              Create an account
            </button>
          </div>
        </form>
        {/* End of Signup form */}
      </div>
    </div>
  );
};

export default SignupForm;
