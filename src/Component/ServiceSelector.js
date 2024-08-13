// import React, { useState } from 'react';
// import './ServiceSelector.css';
// import { Link } from 'react-router-dom';
// const ServiceSelector = () => {
//     const [selectedGender, setSelectedGender] = useState('Female');
//     const services = [
//         { name: 'Home-style food', price: '₹3000', description: 'Authentic Indian home-style cooking service for delicious meals', rating: 4.9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BwVGlZOdoC-j9CydbgskGtRF4VPXvA9Caw&s' },
//         { name: 'Dish-washing', price: '₹550', description: 'Expert dishwashing service ensuring spotless and sanitized dishes', rating: 4.9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiQUHUkLMN3VvlEKmpm8HURNKO8B4Ic0InvA&s' }
//     ];

//     return (
//         <div className="service-selection">
//             <header className="service-selection-header">
//                 <Link to='/Selection'>
//                 <button className="service-selection-back-button">&larr;</button></Link>
//                 <h2>Select a Service</h2>
//             </header>
//             <div className="service-selection-gender">
//                 <span>Gender</span>
//                 <button 
//                     className={`service-selection-gender-button ${selectedGender === 'Female' ? 'active' : ''}`} 
//                     onClick={() => setSelectedGender('Female')}
//                 >
//                     Female
//                 </button>
//                 {/* Add more gender options if needed */}
//             </div>
//             <div className="service-selection-category">
//                 <h3>Cooking</h3>
//                 <p className="service-selection-mandatory-note">Home-style food service is mandatory</p>
//                 {services.map((service, index) => (
//                     <div key={index} className="service-selection-card">
//                         <img src={service.image} alt={service.name} className="service-selection-image" />
//                         <div className="service-selection-details">
//                             <h4>{service.name}</h4>
//                             <p className="service-selection-price">{service.price} starting.</p>
//                             <p className="service-selection-description">{service.description}</p>
//                             <p className="service-selection-inclusive">+All services inclusive</p>
//                         </div>
//                         <div className="service-selection-meta">
//                             <span className="service-selection-rating">{service.rating}</span>
//                             <Link to='/HomeStyle'>
//                             <button className="service-selection-add-button">+</button></Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="service-selection-summary">
//                 <p>Monthly Salary ~<span className="service-selection-highlight">₹3000.00</span> approx.</p>
//                 <p>Daily Working Hours ~<span className="service-selection-highlight">1:00</span> approx.</p>
//                 <p className="service-selection-disclaimer">*estimate varies with workload, shifts, timings and location</p>
//             </div>
//             <button className="service-selection-next-button">Next</button>
//         </div>
//     );
// };

// export default ServiceSelector;
import React, { useState } from 'react';
import './ServiceSelector.css';
import { Link } from 'react-router-dom';
import HomeStyleFoodForm from './HomeStyleFoodForm';
import Footer from './Footer';
import Navbar from './CustomerNavbar';

const ServiceSelector = () => {
    const [selectedGender, setSelectedGender] = useState('Female');
    const [showHomeStyleFoodForm, setShowHomeStyleFoodForm] = useState(false);

    const services = [
        { name: 'Home-style food', price: '₹3000', description: 'Authentic Indian home-style cooking service for delicious meals', rating: 4.9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BwVGlZOdoC-j9CydbgskGtRF4VPXvA9Caw&s' },
        { name: 'Dish-washing', price: '₹550', description: 'Expert dishwashing service ensuring spotless and sanitized dishes', rating: 4.9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiQUHUkLMN3VvlEKmpm8HURNKO8B4Ic0InvA&s' }
    ];

    const handleAddButtonClick = () => {
        setShowHomeStyleFoodForm(true);
    };

    const closeHomeStyleFoodForm = () => {
        setShowHomeStyleFoodForm(false);
    };

    return (
    <div>
        <Navbar/>
        <div className="service-selection">
            <header className="service-selection-header">
                <Link to='/Selection'>
                <button className="service-selection-back-button">&larr;</button></Link>
                <h2>Select a Service</h2>
            </header>
            <div className="service-selection-gender">
                <span>Gender</span>
                <button 
                    className={`service-selection-gender-button ${selectedGender === 'Female' ? 'active' : ''}`} 
                    onClick={() => setSelectedGender('Female')}
                >
                    Female
                </button>
                {/* Add more gender options if needed */}
            </div>
            <div className="service-selection-category">
                <h3>Cooking</h3>
                <p className="service-selection-mandatory-note">Home-style food service is mandatory</p>
                {services.map((service, index) => (
                    <div key={index} className="service-selection-card">
                        <img src={service.image} alt={service.name} className="service-selection-image" />
                        <div className="service-selection-details">
                            <h4>{service.name}</h4>
                            <p className="service-selection-price">{service.price} starting.</p>
                            <p className="service-selection-description">{service.description}</p>
                            <p className="service-selection-inclusive">+All services inclusive</p>
                        </div>
                        <div className="service-selection-meta">
                            <span className="service-selection-rating">{service.rating}</span>
                            <button className="service-selection-add-button" onClick={handleAddButtonClick}>+</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="service-selection-summary">
                <p>Monthly Salary ~<span className="service-selection-highlight">₹3000.00</span> approx.</p>
                <p>Daily Working Hours ~<span className="service-selection-highlight">1:00</span> approx.</p>
                <p className="service-selection-disclaimer">*estimate varies with workload, shifts, timings and location</p>
            </div>
            <Link to='/CustomerHome'>
            <button className="service-selection-next-button">Book</button></Link>
            {showHomeStyleFoodForm && (
                <div className="overlay">
                    <div className="overlay-content">
                        <HomeStyleFoodForm />
                        <button className="close-btn" onClick={closeHomeStyleFoodForm}>Close</button>
                    </div>
                </div>
            )}
        </div>
        <Footer/>
        </div>
    );
};

export default ServiceSelector;
