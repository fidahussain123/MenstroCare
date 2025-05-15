import React from 'react';
import AnimatedEducation from './AnimatedEducation';
import Quiz from './Quiz';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="early-teens-dashboard">
      <h1>Welcome to FirstFlo Early Teens</h1>
      <div className="dashboard-content">
        <AnimatedEducation />
        <Quiz />
      </div>
    </div>
  );
};

export default Dashboard; 