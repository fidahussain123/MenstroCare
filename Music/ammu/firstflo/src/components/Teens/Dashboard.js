import React from 'react';
import PeriodTracker from '../Common/PeriodTracker';
import Chatbot from '../Common/Chatbot';

const TeensDashboard = () => {
  return (
    <div className="teens-dashboard">
      <h1>Welcome to FirstFlo Teens!</h1>
      <div className="dashboard-content">
        <PeriodTracker />
        <Chatbot />
      </div>
    </div>
  );
};

export default TeensDashboard; 