import React from 'react';
import AdultChatbot from './AdultChatbot';
import HealthTracker from './HealthTracker';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="adults-dashboard">
      <h1>Welcome to FirstFlo Adults</h1>
      <div className="dashboard-content">
        <div className="info-section">
          <h2>Your Health Companion</h2>
          <p>Get personalized support and information about:</p>
          <ul>
            <li>PCOD/PCOS Management</li>
            <li>Reproductive Health</li>
            <li>Lifestyle & Wellness</li>
            <li>Nutrition & Exercise</li>
            <li>Mental Health Support</li>
          </ul>
        </div>
        <AdultChatbot />
      </div>
      <HealthTracker />
    </div>
  );
};

export default Dashboard; 