import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone, FaTools, FaCalendarAlt, FaClock } from 'react-icons/fa';
import './BookingPage.css';
import Navbar from './Navbar';
import Footer from './Footer';


const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    location: '',
    mobile: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can handle form submission here, like sending it to an API or displaying a success message
  };

  return (
    <div>
      <Navbar />
      <div className="registration-wrapper">
        <div className="form-section">
          <h2 className="title">Register for HOUSEHoldCare</h2>
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="input-block">
              <FaUser className="icon" />
              <input type="text" name="name" className="input" placeholder="Name" required onChange={handleChange} />
            </div>
            <div className="input-block">
              <FaEnvelope className="icon" />
              <input type="email" name="email" className="input" placeholder="Email" required onChange={handleChange} />
            </div>
            <div className="input-block">
              <FaTools className="icon" />
              <select name="service" className="select" required onChange={handleChange}>
                <option value="">Service Provider</option>
                <option value="cooking">Cooking</option>
                <option value="cleaning">Cleaning</option>
                <option value="allrounder">Allrounder</option>
                <option value="babysitter">BabySitter</option>
              </select>
            </div>
            <div className="input-block">
              <FaMapMarkerAlt className="icon" />
              <input type="text" name="location" className="input" placeholder="Location" required onChange={handleChange} />
            </div>
            <div className="input-block">
              <FaPhone className="icon" />
              <input type="tel" name="mobile" className="input" placeholder="Mobile No" required onChange={handleChange} />
            </div>
            <div className="input-block">
              <FaCalendarAlt className="icon" />
              <input type="date" name="date" className="input" required onChange={handleChange} />
            </div>
            <div className="input-block">
              <FaClock className="icon" />
              <input type="time" name="time" className="input" required onChange={handleChange} />
            </div>
            <button type="submit" className="submit-button">Register</button>
          </form>
        </div>
        <div className="image-section">
          <img src="https://app.allfixhome.com/subservice/1690640937.jpg" alt="Registration" className="registration-image" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
