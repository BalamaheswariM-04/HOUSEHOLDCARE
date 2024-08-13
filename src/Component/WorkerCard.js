import React from 'react';
import './WorkerCard.css';
import { Link } from 'react-router-dom';
const WorkerCard = ({ name, title, status }) => {
  return (
    
    <div className="trainer-card">
      <img src="https://cdn.vectorstock.com/i/500p/01/64/property-logo-template-vector-11610164.avif" alt={name} className="trainer-img" />
      <h3>{name}</h3>
      <p>{title}</p>
      <Link to='/Feedback'>
      <button className={status === 'Submitted' ? 'feedback-button submitted' : 'feedback-button'}>
        {status}
      </button>
      </Link>
    </div>
    
  );
}

export default WorkerCard;
