import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './PeriodTracker.css';

const PeriodTracker = () => {
  const [date, setDate] = useState(new Date());
  const [periodDates, setPeriodDates] = useState([]);
  const [symptoms, setSymptoms] = useState('');
  const [mood, setMood] = useState('');

  const handlePeriodLog = () => {
    setPeriodDates([...periodDates, {
      date: date,
      symptoms: symptoms,
      mood: mood
    }]);
    setSymptoms('');
    setMood('');
  };

  return (
    <div className="period-tracker">
      <h2>Period Tracker</h2>
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          className="custom-calendar"
        />
      </div>
      <div className="period-log">
        <div className="input-group">
          <label>How are you feeling today?</label>
          <select value={mood} onChange={(e) => setMood(e.target.value)}>
            <option value="">Select mood</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="irritable">Irritable</option>
            <option value="tired">Tired</option>
            <option value="energetic">Energetic</option>
          </select>
        </div>
        <div className="input-group">
          <label>Any symptoms?</label>
          <textarea
            placeholder="Log your symptoms..."
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
        <button onClick={handlePeriodLog} className="log-button">Log Period</button>
      </div>
      <div className="period-history">
        <h3>Period History</h3>
        <div className="history-list">
          {periodDates.map((entry, index) => (
            <div key={index} className="history-item">
              <p className="date">{entry.date.toLocaleDateString()}</p>
              <p className="mood">Mood: {entry.mood}</p>
              <p className="symptoms">Symptoms: {entry.symptoms}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeriodTracker; 