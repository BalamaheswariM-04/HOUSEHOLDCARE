import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Clear previous error
    setError('');

    // Simple validation
    if (email === '' || password === '') {
      setError('Please fill in both fields');
      return;
    }

    // Mock login logic
    if (email === 'household@admin.in') {
      navigate('/Admin');
    } else {
      navigate('/CustomerHome');
    }
  };

  return (
    <div className="login-container">
      <div className="loginform-container">
        <h2 className="title">Login for HOUSEHoldCare</h2>
        <p className="description">Get access to the best home service providers in your area.</p>
        <form className="loginform" onSubmit={handleLogin}>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <div className="error">{error}</div>}
          <button type="submit" className="button1">Login</button>
        </form>
      </div>
      <div className="image-container" />
    </div>
  );
};

export default LoginPage;
