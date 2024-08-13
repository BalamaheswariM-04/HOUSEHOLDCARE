import Footer from "./Footer";
import HomePage from "./carosal";
import ContactUs from"./Contactus";
import React from 'react';
import './Home.css';
import WhyChooseUs from './WhyChooseUs';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
     <div>
          <HomePage/>
          
    <div className="container">
      {/* <h1 className="header">Welcome to HOUSEHoldCare</h1> */}
      <div className="sections">
        <div className="section">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJf7jvWMhxBkZKLgb_lFRuCk26bjm9hBd7Mw&s" alt="Get Health Insurance" />
          <div className="section-content">
            <h2 className="section-title">Get Health Insurance</h2>
            <p className="section-description">
              Get your worker the cheapest health insurance in partnership with us & secure their health & future.
            </p>
            <button className="section-button">Fill your details</button>
          </div>
        </div>
        
        <div className="section">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkzs3xXS8FgFNFQGxx1UCv7aza346wxZnRzg&s" alt="Register as a worker" />
          <div className="section-content">
            <h2 className="section-title">Register as a worker</h2>
            <p className="section-description">
              Register to work with us! Just fill this form, and we will get back to you.
            </p>
            <Link to='/WorkerRegistration'>
            <button className="section-button">Fill your details</button></Link>
          </div>
        </div>
      </div>
    </div>
    <WhyChooseUs/>
    <ContactUs/>
    <Footer/>
    </div>
  );
};

export default Home;
