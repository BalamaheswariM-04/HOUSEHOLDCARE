import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';
import Navbar from './CustomerNavbar';
const Sign = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    // mobileNumber: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (formData.password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match';
    }
    // if (!/^\d{10}$/.test(formData.mobileNumber)) {
    //   tempErrors.mobileNumber = 'Mobile number must be 10 digits long';
    // }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const newUser = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        // pno: formData.mobileNumber,
        role: 'USER'
      };

      try {
        const response = await axios.post('http://localhost:8080/login', newUser);

        if (response.status === 200) {
          const result = response.data;
          if (result.success) {
            setSuccess('Sign-up successful');
            setErrors({});
            navigate('/CustomerHome');
          } else {
            setErrors({ ...errors, api: result.message });
          }
        } else {
          setErrors({ ...errors, api: 'Sign-up failed' });
        }
      } catch (error) {
        setErrors({ ...errors, api: 'An error occurred. Please try again later.' });
      }
    }
  };

  return (
    <div>
      <Navbar/>
    
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-image">
          <img src="https://st2.depositphotos.com/3487615/5984/v/450/depositphotos_59849337-stock-illustration-green-home-vector-logo-design.jpg" alt="Sign Up" />
        </div>
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            {/* <div>
              <label>Mobile Number:</label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div> */}
            {errors.password && <div className="error">{errors.password}</div>}
            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
            {/* {errors.mobileNumber && <div className="error">{errors.mobileNumber}</div>} */}
            {errors.api && <div className="error">{errors.api}</div>}
            {success && <div className="success">{success}</div>}
           
            <button type="submit">Sign Up</button>
            
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sign;
