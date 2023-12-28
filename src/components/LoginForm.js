import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost/dbmsProjectDatabases/userlogin.php', {
        name,
        password,
      });

      if (response.data.message === 'Login successful') {
        window.location.href = '/booking';
      } else {
        window.location.href = '/signup';
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <div className="container logincontainer p-5 mt-5">
        <div className="text-center">
          <img src="plane.png" className="rounded " width="100" height="100" alt="..." />
        </div>
        <p className="text-center fs-4 mb-4 fw-bold">Log in to your AAA account</p>

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
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;