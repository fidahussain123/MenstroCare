import React from "react";
import { useNavigate } from "react-router-dom";
import './AgeSelector.css';

const AgeSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="age-selector">
      <h1>Welcome to FirstFlo</h1>
      <p>Your friendly guide to understanding periods</p>
      <div className="age-buttons">
        <button onClick={() => navigate("/early-teens")} className="age-button">
          <h2>10-15</h2>
          <p>Early Teens</p>
        </button>
        <button onClick={() => navigate("/teens")} className="age-button">
          <h2>16-20</h2>
          <p>Teens</p>
        </button>
        <button onClick={() => navigate("/adults")} className="age-button">
          <h2>20+</h2>
          <p>Adults</p>
        </button>
      </div>
    </div>
  );
};

export default AgeSelector; 