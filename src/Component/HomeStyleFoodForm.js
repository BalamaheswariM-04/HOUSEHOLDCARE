import React, { useState } from 'react';
import './HomeStyleFoodForm.css';
import { Link } from 'react-router-dom';
const HomeStyleFoodForm = () => {
  const [peopleCount, setPeopleCount] = useState(1);
  const [meals, setMeals] = useState('breakfast-lunch');
  const [vegNonVeg, setVegNonVeg] = useState('veg');

  const handlePeopleCountClick = (count) => {
    setPeopleCount(count);
  };

  const handleMealsClick = (meal) => {
    setMeals(meal);
  };

  const handleVegNonVegClick = (type) => {
    setVegNonVeg(type);
  };

  const calculateMonthlySalary = () => {
    // You can modify this logic based on your requirements
    return 4000 + (peopleCount - 1) * 1000;
  };

  return (
    <div className="form-container">
      <h3>Home-style food</h3>
      <div className="form-group">
        <label>How many people are there at home?</label>
        <div className="options">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
            <button
              key={count}
              className={`option1-button ${peopleCount === count ? 'selected' : ''}`}
              onClick={() => handlePeopleCountClick(count)}
            >
              {count} {count > 1 ? 'people' : 'person'}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>How many meals per day?</label>
        <div className="options1">
          {['Breakfast & Lunch', 'Dinner', 'All 3 meals (breakfast+lunch+dinner)'].map((meal) => (
            <button
              key={meal}
              className={`option-button ${meals === meal ? 'selected' : ''}`}
              onClick={() => handleMealsClick(meal)}
            >
              {meal}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Veg/Non Veg?</label>
        <div className="options1">
          {['Veg', 'Non Veg'].map((type) => (
            <button
              key={type}
              className={`option-button ${vegNonVeg === type ? 'selected' : ''}`}
              onClick={() => handleVegNonVegClick(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="salary-info">
        <p>Monthly Salary ≈ ₹{calculateMonthlySalary()} approx.</p>
        <p>Daily Working Hours ≈ 1:00 approx.</p>
        <p className="estimate-note">*estimate varies with workload, shifts, timings and location</p>
        <Link to='/ServiceSelector'>
        <button className="done-button">Done</button></Link>
      </div>
    </div>
  );
};

export default HomeStyleFoodForm;
