import React from 'react';
import './DataService.css';

const servicesData = [
  { title: 'House Cleaning', description: 'Our house cleaning service ensures your home is spotless and hygienic.', icon: 'https://cdn-icons-png.freepik.com/256/1495/1495147.png?semt=ais_hybrid' },
  { title: 'Gardening', description: 'Professional gardening services to keep your outdoor space beautiful.', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Z96CDWdGJHeNkJedk5lMYwTG2X83Mhp3GQ&s' },
  { title: 'Plumbing', description: 'Expert plumbing services to fix leaks and other plumbing issues.', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXblAUkZipyA_rC1q_Ic0IxFzG1CMCg-bLQ&s' },
  { title: 'Electrical', description: 'Reliable electrical services for all your home electrical needs.', icon: 'https://cdn-icons-png.flaticon.com/512/8596/8596449.png' },
  { title: 'Pest Control', description: 'Effective pest control solutions to keep your home pest-free.', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyljsEo-ASUuuhCAmVZ13MYiZDX5lpXXH1QA&s' },
  { title: 'Painting', description: 'High-quality painting services to give your home a fresh look.', icon: 'https://static.vecteezy.com/system/resources/previews/018/758/161/original/roller-painting-icon-on-white-background-paint-roller-and-wall-outline-icon-free-vector.jpg' },
];

const Services = () => {
  return (
    <div className="services-section">
      <div className="services-intro">
        <h2>OUR SERVICES</h2>
        <h3>We Provide A Lot of Cool Services</h3>
        <p>At HOUSEHoldCare, we offer a variety of home services to make your life easier. From cleaning and gardening to plumbing and electrical work, our experienced professionals are here to help you with all your home care needs.</p>
        <button>Our Services</button>
      </div>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div className="service-card1" key={index}>
            <img src={service.icon} alt={service.title} />
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
