import React from 'react';
import './FeedbackPortal.css';

const FeedbackPortal = () => {
  return (
    <div className="feedback-portal">
      <h2>Your Voice, Our Future: Website Feedback Initiative</h2>
      <div className="feedback-content">
        <img src="https://cdn.dribbble.com/users/7847285/screenshots/18242516/media/c9c0cd8fa45a18f09252e25977b806a9.png?resize=400x300&vertical=center" alt="Feedback Initiative" />
        <p>
          Your feedback is vital at <span className="highlight">HOUSEHoldCare</span>.
        </p>
        <button className="feedback-button">Website Feedback</button>
      </div>
    </div>
  );
}

export default FeedbackPortal;