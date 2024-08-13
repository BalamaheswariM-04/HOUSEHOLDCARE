// src/WhyChooseUs.js
import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      <h1 className="title">Why Choose Us</h1>
      <div className="features-container">
        <div className="feature">
          <img src="https://www.shutterstock.com/image-vector/businessman-executive-profile-icon-vector-260nw-544647394.jpg" alt="Verification & Assessment" className="feature-icon" />
          <h2 className="feature-title">Verification & Assessment</h2>
          <p className="feature-description">
            Employing AI, we enhance our rigorous physical and telephonic verification processes to ensure the highest quality assessments of our workers.
          </p>
        </div>
        <div className="feature">
          <img src="https://www.shutterstock.com/image-vector/businessman-executive-profile-icon-vector-260nw-544647394.jpg" alt="Transparent Pricing" className="feature-icon" />
          <h2 className="feature-title">Transparent Pricing</h2>
          <p className="feature-description">
            You get what you pay for. Additionally, you get replacement guarantee, Covid-19 test reports, verification documents and more!
          </p>
        </div>
        <div className="feature">
          <img src="https://www.shutterstock.com/image-vector/businessman-executive-profile-icon-vector-260nw-544647394.jpg" alt="Customer Support" className="feature-icon" />
          <h2 className="feature-title">Customer Support</h2>
          <p className="feature-description">
            Our executives will always be there to hear you out and solve your issues.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
