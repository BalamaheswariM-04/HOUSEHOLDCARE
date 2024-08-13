import React, { useState } from 'react';
import './DishWashingForm.css';

const DishWashingForm = () => {
  const [peopleCount, setPeopleCount] = useState(1);

  const handlePeopleCountClick = (count) => {
    setPeopleCount(count);
  };

  const calculateMonthlySalary = () => {
    // You can modify this logic based on your requirements
    return 3000 + (peopleCount - 1) * 500;
  };

  return (
    <div className="form-container">
      <h3>Dish-washing</h3>
      <div className="form-group">
        <label>How many people are there at home?</label>
        <div className="options">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
            <button
              key={count}
              className={`option-button ${peopleCount === count ? 'selected' : ''}`}
              onClick={() => handlePeopleCountClick(count)}
            >
              {count} {count > 1 ? 'people' : 'person'}
            </button>
          ))}
        </div>
      </div>

      <div className="salary-info">
        <p>Monthly Salary ≈ ₹{calculateMonthlySalary()} approx.</p>
        <p>Daily Working Hours ≈ 1:00 approx.</p>
        <p className="estimate-note">*estimate varies with workload, shifts, timings and location</p>
        <button className="done-button">Done</button>
      </div>
    </div>
  );
};

export default DishWashingForm;
