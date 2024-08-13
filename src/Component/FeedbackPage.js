import React from 'react';
import FeedbackPortal from './FeedbackPortal';
import WorkerCard from './WorkerCard';
import './FeebackPage.css';
// import Navbar from './Navbar';
// import Footer from './Footer';
const trainers = [
  { name: 'Mani', title: 'Cooking', status: 'Feedback' },
  { name: 'Riya', title: 'Cleaning', status: 'Feedback' },
  { name: 'Jeeva', title: 'Repair', status: 'Feedback' },
  { name: 'Lakshmi', title: 'Cooking', status: 'Feedback'},
  { name: 'Ravi', title: 'Cleaning', status: 'Submitted'},
  { name: 'Jagan', title: 'Petcare', status: 'Feedback' },
  { name: 'Devi', title: 'Cooking', status: 'Feedback'},
  { name: 'Priya', title: 'Cleaning', status: 'Feedback'},
];
const FeedbackPage = () => {
  return (
    <div className="feedback-page">
      <FeedbackPortal />
      <div className="trainer-cards">
        <h2>Your Voice, Our Future: Customer Feedback Initiative</h2>
        <div className="cards-container">
          {trainers.map((trainer, index) => (
            <WorkerCard key={index} {...trainer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
