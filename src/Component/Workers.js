import React from 'react';
import './Workers.css';
import Footer from './Footer';
import Navbar from './AdminNavbar';
import { Link } from 'react-router-dom';
const testimonials = [
  {
    name: 'STELLA LARSON',
    text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/3581/3581128.png', 
    bgColor: '#6aa4fc'
    
  },
  {
    name: 'NICK JHONSON',
    text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3KlbkDX7OyMq2y2vTeSchoQahq1fZKT-M6DovafYj7jxe53Pqk7kLhMY7wZIa2mC2IQ&usqp=CAU',
    bgColor: '#5bd5b5'
  },
  {
    name: 'GLEN DAVIES',
    text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/3581/3581128.png', 
    bgColor: '#ff6584'
  },
  {
    name: 'STELLA LARSON',
    text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    imgSrc: 'https://www.pngitem.com/pimgs/m/255-2558030_icon-customers-drawing-customer-icon-png-transparent-png.png', 
    bgColor: '#6aa4fc'
  },
  {
    name: 'NICK JHONSON',
    text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/3581/3581128.png',
    bgColor: '#5bd5b5'
  },
  {
    name: 'GLEN DAVIES',
    text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    imgSrc: 'https://via.placeholder.com/150', 
    bgColor: '#ff6584'
  },
  {
    name: 'NICK JHONSON',
    text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    imgSrc: 'https://via.placeholder.com/150',
    bgColor: '#5bd5b5'
  },
  {
    name: 'Add Worker', 
    imgSrc: 'https://img.myloview.com/stickers/add-button-icon-isolated-on-background-plus-symbol-modern-simple-vector-icon-for-website-design-mobile-app-ui-vector-illustration-700-251169670.jpg' 
  },
];

const ClientTestimonials = () => {
  return (
    <div>
        <Navbar/>
    <div className="testimonials-container">
      <h1>Hire Workers</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card" style={{ backgroundColor: testimonial.bgColor }}>
          <Link to='/HireWorker'>
            <button className="testimonial-button">
              <img src={testimonial.imgSrc} alt={testimonial.name} className="testimonial-image" />
            </button>
            </Link>
            <h2>{testimonial.name}</h2>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
       <Footer/>
    </div>
  );
};

export default ClientTestimonials;
