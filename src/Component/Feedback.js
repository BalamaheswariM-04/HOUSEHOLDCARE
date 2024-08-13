import React from 'react';
import CustomerReview from './CustomerReview';
import './Feedback.css';
import Footer from './Footer';
import Navbar from './CustomerNavbar';

const Feedback = () => {
  return (
    <div>
        <Navbar/>
    <div className="feedback-page">
      <CustomerReview />
      <div className="feedback-form-container">
        <h2>Submit Your Feedback</h2>
        <form className="feedback-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="review">Review</label>
            <textarea id="review" name="review" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <select id="rating" name="rating" required>
              <option value="5">★★★★★</option>
              <option value="4">★★★★</option>
              <option value="3">★★★</option>
              <option value="2">★★</option>
              <option value="1">★</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    <Footer/>
  </div>
  );
}

export default Feedback;