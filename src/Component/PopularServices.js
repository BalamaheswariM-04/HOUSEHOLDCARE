import React, { useState } from 'react';
import './PopularServices.css';
import { FaBars } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import Navbar from './CustomerNavbar';
import Footer from './Footer';
import CitySelector from './CitySelection';
import Profile from './Profile'; 

const services = [
  {
    name: "Cooking",
    rating: 4.5,
    location: "Coimbatore",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDNm7V5ViXKm9r8ZXtNVy6P1zXILawT2JNA&s"
  },
  {
    name: "House Cleaning",
    rating: 4.7,
    location: "Virudhunagar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvWOz_tx2Bunt6085mGwSRXLjaN1PWpvNSg&s"
  },
  {
    name: "PetCare",
    rating: 4.2,
    location: "Thirunelveli",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTriVvMZrkNXUvJ5XviLOyRvwKgbe7cci0VGw&s"
  },
  {
    name: "Gardening Service",
    rating: 4.8,
    location: "Chennai",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbHcmP59tAtQyG9vc5R9Rl9nPH5xXUaLI6WkTr6QiRYA_J9yij1CzyluxxUcgVx12rDn4&usqp=CAU"
  },
  {
    name: "Repair Service",
    rating: 4.8,
    location: "Salem",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghATAREgnN1oWcycTisFbD-G95RDvByCdOQ&s"
  },
  {
    name: "Baby sitter Service",
    rating: 4.5,
    location: "Coimbatore",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXhF6AtW8FXVsfDVzTJ0mzvkk9MTf1gpwlQ&s"
  },
];

const PopularServices = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [showCitySelector, setShowCitySelector] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleBookClick = () => {
    setShowCitySelector(true);
  };

  const closeCitySelector = () => {
    setShowCitySelector(false);
  };

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const closeProfile = () => {
    setShowProfile(false);
  };

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className={`sidebar1 ${sidebarVisible ? 'visible' : ''}`}>
          <h2>Dashboard</h2>
          <ul>
            <li><Link to="/CustomerHome">Home</Link></li>
            <li><Link to="/PopularServices">Services</Link></li>
            <li><Link to="/Aboutus">About Us</Link></li>
            <li><Link to="/Contactus">Blog</Link></li>
            <li><Link to="/RegisterWorker">Subscription</Link></li>
            <li><Link to="/RegisterWorker">Membership</Link></li>
          </ul>
        </div>
        <div className="content">
          <header>
            <FaBars className="hamburger-menu" onClick={toggleSidebar} />
          </header>
          <h1>Popular Services</h1>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <img src={service.image} alt={service.name} className="service-image" />
                <h2 className="service-name">{service.name}</h2>
                <p className="service-rating">Rating: {service.rating}</p>
                <p className="service-location">{service.location}</p>
                <div className="service-buttons">
                  <button className="view-profile-btn" onClick={handleProfileClick}>View Profile</button>
                  <button className="hire-btn" onClick={handleBookClick}>Book</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showCitySelector && (
        <div className="overlay">
          <div className="overlay-content">
            <CitySelector />
            <button className="close-btn" onClick={closeCitySelector}>Close</button>
          </div>
        </div>
      )}
      {showProfile && (
        <div className="overlay">
          <div className="overlay-content">
            <Profile />
            <button className="close-btn" onClick={closeProfile}>Close</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PopularServices;
