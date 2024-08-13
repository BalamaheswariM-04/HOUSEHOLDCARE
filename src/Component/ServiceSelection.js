// import React from 'react';
// import './ServiceSelection.css';
// import Footer from './Footer';
// import Navbar from './CustomerNavbar';

// const services = [
//   { name: 'Domestic Help', imgSrc: 'https://5.imimg.com/data5/SELLER/Default/2023/11/360796286/KD/NV/AQ/202251307/housemaid-services-1-500x500.jpg', link: '/City' },
//   { name: 'Babysitter', imgSrc: 'https://choicesiki.com/assets/images/services/maid-service/baby-sitter-services.webp', link: '/City' },
//   { name: 'Cooks', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BwVGlZOdoC-j9CydbgskGtRF4VPXvA9Caw&s', link: '/City' },
//   { name: 'All-Rounder', imgSrc: 'https://broomees.com/attachments/services/24hrs.png', link: '/City' },
//   { name: '24 Hrs - Live In', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9m2b5EqD-ExXawmu6JqYP1DLgPPuKl4Laug&s', link: '/City' },
//   { name: 'Repair', imgSrc: 'https://www.bobvila.com/wp-content/uploads/2021/11/The-Best-Home-Repair-Service-Options.jpg', link: '/City' },
// ];

// const Services = () => {
//   return (
//     <div>
//     <Navbar/>
//     <div className="services-container">
//       <div className="services-grid">
//         {services.map((service, index) => (
//           <div key={index} className="service-card">
//             <img src={service.imgSrc} alt={service.name} className="service-image" />
//             <div className="service-info">
//               <h3>{service.name}</h3>
//               <a href={service.link} className="view-pricing">View Pricing</a>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="membership-info">
//         <img src="https://punjabichamber.com/wp-content/uploads/2022/12/Charter-members-Images.jpg" alt="Shark Tank India" className="membership-image" />
//         <div className="membership-details">
//           <h3>Membership includes</h3>
//           <ul>
//             <li>You are eligible for worker replacements</li>
//             <li>Uniform and Welfare costs are included</li>
//             <li>All the workers are experienced and verified</li>
//             <li>Workers salary is separate from the package</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// };

// export default Services;
import React, { useState } from 'react';
import './ServiceSelection.css';
import Footer from './Footer';
import Navbar from './CustomerNavbar';
import CitySelector from './CitySelection';

const services = [
  { name: 'Domestic Help', imgSrc: 'https://5.imimg.com/data5/SELLER/Default/2023/11/360796286/KD/NV/AQ/202251307/housemaid-services-1-500x500.jpg', link: '/City' },
  { name: 'Babysitter', imgSrc: 'https://choicesiki.com/assets/images/services/maid-service/baby-sitter-services.webp', link: '/City' },
  { name: 'Cooks', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BwVGlZOdoC-j9CydbgskGtRF4VPXvA9Caw&s', link: '/City' },
  { name: 'All-Rounder', imgSrc: 'https://broomees.com/attachments/services/24hrs.png', link: '/City' },
  { name: '24 Hrs - Live In', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9m2b5EqD-ExXawmu6JqYP1DLgPPuKl4Laug&s', link: '/City' },
  { name: 'Repair', imgSrc: 'https://www.bobvila.com/wp-content/uploads/2021/11/The-Best-Home-Repair-Service-Options.jpg', link: '/City' },
];

const Services = () => {
  const [showCitySelector, setShowCitySelector] = useState(false);

  const handleViewPricingClick = () => {
    setShowCitySelector(true);
  };

  const closeCitySelector = () => {
    setShowCitySelector(false);
  };

  return (
    <div>
      <Navbar />
      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.imgSrc} alt={service.name} className="service-image" />
              <div className="service-info">
                <h3>{service.name}</h3>
                <button className="view-pricing" onClick={handleViewPricingClick}>View Pricing</button>
              </div>
            </div>
          ))}
        </div>
        <div className="membership-info">
          <img src="https://punjabichamber.com/wp-content/uploads/2022/12/Charter-members-Images.jpg" alt="Shark Tank India" className="membership-image" />
          <div className="membership-details">
            <h3>Membership includes</h3>
            <ul>
              <li>You are eligible for worker replacements</li>
              <li>Uniform and Welfare costs are included</li>
              <li>All the workers are experienced and verified</li>
              <li>Workers salary is separate from the package</li>
            </ul>
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
      <Footer />
    </div>
  );
};

export default Services;
