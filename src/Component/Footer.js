// src/Footer.js
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Phone: +91 8401-8401-42</p>
          <p>Email: support@householdcare.com</p>
          <p>Address: B-586/6, Govindpuri, New Delhi, 110020</p>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <Link to="#"><LinkedInIcon /></Link>
            <Link to="#"><InstagramIcon /></Link>
            <Link to="#"><FacebookIcon /></Link>
            <Link to="#"><YouTubeIcon /></Link>
            <Link to="#"><TwitterIcon /></Link>
          </div>
        </div>
        <div className="footer-column">
          <h4>Links</h4>
          <Link to="/">Home</Link>
          <Link to="/Aboutus">About Us</Link>
          <Link to="/PopularServices">Services</Link>
          <Link to="/Contactus">Contact Us</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p> HOUSEHoldCare. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
