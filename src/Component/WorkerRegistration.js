import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone, FaTools } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './WorkerRegistration.css';
import Navbar from './Navbar';
import Footer from './Footer';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    location: '',
    mobile: ''
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/workers/register', formData);
      console.log('Registration successful:', response.data);
      navigate('/CustomerHome'); 
    } catch (error) {
      console.error('There was an error registering the worker!', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="form-container">
          <h2 className="title">Register for HOUSEHoldCare</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser className="icon" />
              <input type="text" name="name" className="input" placeholder="Name" required onChange={handleChange} />
            </div>
            <div className="input-group">
              <FaEnvelope className="icon" />
              <input type="email" name="email" className="input" placeholder="Email" required onChange={handleChange} />
            </div>
            <div className="input-group">
              <FaTools className="icon" />
              <select name="service" className="select" required onChange={handleChange}>
                <option value="">Service Provider</option>
                <option value="cooking">Cooking</option>
                <option value="cleaning">Cleaning</option>
                <option value="allrounder">Allrounder</option>
                <option value="babysitter">BabySitter</option>
              </select>
            </div>
            <div className="input-group">
              <FaMapMarkerAlt className="icon" />
              <input type="text" name="location" className="input" placeholder="Location" required onChange={handleChange} />
            </div>
            <div className="input-group">
              <FaPhone className="icon" />
              <input type="tel" name="mobile" className="input" placeholder="Mobile No" required onChange={handleChange} />
            </div>
            <button type="submit" className="button">Register</button>
          </form>
        </div>
        <div className="image-container" />
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
