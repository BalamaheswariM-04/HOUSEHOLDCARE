import React from 'react';
import './ShowcasePage.css';

const ShowcasePage = () => {
  return (
    <div className="container">
      <div className="left-container">
        <h1 className="title">The best way to showcase your project.</h1>
        <p className="subtitle">Here you can put a short description about your project.</p>
        <div className="button-group">
          <a href="/UserManagement" className="button button-primary">Add Wroker</a>
          <a href="/ServicesManagement" className="button button-secondary">Add Services  </a>
        </div>
      </div>
      <div className="image-container">
        {/* <img src="https://img.freepik.com/free-vector/office-management-concept-illustration_114360-8821.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707264000&semt=ais" alt="Showcase" className="image" /> */}
      </div>
    </div>
  );
};

export default ShowcasePage;
