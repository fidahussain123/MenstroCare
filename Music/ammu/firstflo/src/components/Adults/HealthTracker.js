import React, { useState, useEffect } from 'react';
import './HealthTracker.css';

const HealthTracker = () => {
  const [activeTab, setActiveTab] = useState('period');
  const [periodData, setPeriodData] = useState({
    startDate: '',
    endDate: '',
    symptoms: [],
    flow: 'medium',
    mood: 'neutral',
    notes: ''
  });
  const [logHistory, setLogHistory] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const symptoms = [
    'Cramps', 'Headache', 'Bloating', 'Fatigue', 
    'Mood Swings', 'Breast Tenderness', 'Acne'
  ];

  const flowLevels = ['light', 'medium', 'heavy'];
  const moods = ['happy', 'neutral', 'sad', 'irritable', 'anxious'];

  // Load log history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('healthLogHistory');
    if (savedHistory) {
      setLogHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Save log history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('healthLogHistory', JSON.stringify(logHistory));
  }, [logHistory]);

  const handlePeriodSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      ...periodData,
      date: selectedDate,
      id: Date.now()
    };
    setLogHistory(prev => [...prev, newEntry]);
    setPeriodData({
      startDate: '',
      endDate: '',
      symptoms: [],
      flow: 'medium',
      mood: 'neutral',
      notes: ''
    });
    alert('Daily log saved successfully!');
  };

  const renderLogHistory = () => (
    <div className="log-history">
      <h3>Daily Log History</h3>
      <div className="history-filters">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="date-filter"
        />
      </div>
      <div className="history-entries">
        {logHistory
          .filter(entry => entry.date === selectedDate)
          .map(entry => (
            <div key={entry.id} className="history-entry">
              <div className="entry-header">
                <span className="entry-date">{new Date(entry.date).toLocaleDateString()}</span>
                <span className={`entry-flow ${entry.flow}`}>{entry.flow}</span>
              </div>
              <div className="entry-details">
                <div className="entry-section">
                  <h4>Symptoms:</h4>
                  <div className="symptoms-list">
                    {entry.symptoms.map(symptom => (
                      <span key={symptom} className="symptom-tag">{symptom}</span>
                    ))}
                  </div>
                </div>
                <div className="entry-section">
                  <h4>Mood:</h4>
                  <span className={`mood-tag ${entry.mood}`}>{entry.mood}</span>
                </div>
                {entry.notes && (
                  <div className="entry-section">
                    <h4>Notes:</h4>
                    <p className="entry-notes">{entry.notes}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        {logHistory.filter(entry => entry.date === selectedDate).length === 0 && (
          <p className="no-entries">No entries for this date</p>
        )}
      </div>
    </div>
  );

  const renderPeriodTracker = () => (
    <div className="tracker-section">
      <h3>Daily Health Log</h3>
      <form onSubmit={handlePeriodSubmit}>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Symptoms:</label>
          <div className="symptoms-grid">
            {symptoms.map(symptom => (
              <label key={symptom} className="symptom-checkbox">
                <input
                  type="checkbox"
                  checked={periodData.symptoms.includes(symptom)}
                  onChange={(e) => {
                    const newSymptoms = e.target.checked
                      ? [...periodData.symptoms, symptom]
                      : periodData.symptoms.filter(s => s !== symptom);
                    setPeriodData({...periodData, symptoms: newSymptoms});
                  }}
                />
                {symptom}
              </label>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Flow:</label>
          <div className="flow-buttons">
            {flowLevels.map(level => (
              <button
                key={level}
                type="button"
                className={`flow-button ${periodData.flow === level ? 'active' : ''}`}
                onClick={() => setPeriodData({...periodData, flow: level})}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Mood:</label>
          <div className="mood-buttons">
            {moods.map(mood => (
              <button
                key={mood}
                type="button"
                className={`mood-button ${periodData.mood === mood ? 'active' : ''}`}
                onClick={() => setPeriodData({...periodData, mood: mood})}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Notes:</label>
          <textarea
            value={periodData.notes}
            onChange={(e) => setPeriodData({...periodData, notes: e.target.value})}
            placeholder="Add any additional notes..."
            className="notes-input"
          />
        </div>
        <button type="submit" className="submit-button">Save Daily Log</button>
      </form>
      {renderLogHistory()}
    </div>
  );

  const renderPCODInfo = () => (
    <div className="info-section">
      <h3>PCOD/PCOS Information</h3>
      <div className="info-card">
        <h4>What is PCOD/PCOS?</h4>
        <p>Polycystic Ovary Syndrome (PCOS) is a hormonal disorder that affects women of reproductive age. It's characterized by:</p>
        <ul>
          <li>Irregular periods</li>
          <li>Excess androgen levels</li>
          <li>Polycystic ovaries</li>
        </ul>
      </div>
      <div className="info-card">
        <h4>Common Symptoms</h4>
        <ul>
          <li>Irregular menstrual cycles</li>
          <li>Weight gain</li>
          <li>Excess hair growth</li>
          <li>Acne</li>
          <li>Hair loss</li>
          <li>Difficulty getting pregnant</li>
        </ul>
      </div>
      <div className="info-card">
        <h4>Management Tips</h4>
        <ul>
          <li>Maintain a healthy diet</li>
          <li>Regular exercise</li>
          <li>Stress management</li>
          <li>Regular check-ups</li>
          <li>Medication as prescribed</li>
        </ul>
      </div>
    </div>
  );

  const renderPregnancyInfo = () => (
    <div className="info-section">
      <h3>Pregnancy Information</h3>
      <div className="info-card">
        <h4>Preconception Care</h4>
        <ul>
          <li>Take folic acid supplements</li>
          <li>Maintain a healthy weight</li>
          <li>Stop smoking and alcohol</li>
          <li>Regular exercise</li>
          <li>Balanced diet</li>
        </ul>
      </div>
      <div className="info-card">
        <h4>Early Pregnancy Signs</h4>
        <ul>
          <li>Missed period</li>
          <li>Nausea and vomiting</li>
          <li>Breast tenderness</li>
          <li>Fatigue</li>
          <li>Frequent urination</li>
        </ul>
      </div>
      <div className="info-card">
        <h4>Important Tips</h4>
        <ul>
          <li>Regular prenatal care</li>
          <li>Healthy diet</li>
          <li>Adequate rest</li>
          <li>Stay hydrated</li>
          <li>Avoid harmful substances</li>
        </ul>
      </div>
    </div>
  );

  const renderHealthTips = () => (
    <div className="info-section">
      <h3>Health Tips</h3>
      <div className="info-card">
        <h4>Nutrition</h4>
        <ul>
          <li>Eat a balanced diet</li>
          <li>Stay hydrated</li>
          <li>Limit processed foods</li>
          <li>Include iron-rich foods</li>
          <li>Calcium-rich foods</li>
        </ul>
      </div>
      <div className="info-card">
        <h4>Exercise</h4>
        <ul>
          <li>30 minutes daily activity</li>
          <li>Mix of cardio and strength</li>
          <li>Yoga for flexibility</li>
          <li>Walking for beginners</li>
          <li>Listen to your body</li>
        </ul>
      </div>
      <div className="info-card">
        <h4>Mental Health</h4>
        <ul>
          <li>Practice mindfulness</li>
          <li>Get enough sleep</li>
          <li>Manage stress</li>
          <li>Stay connected</li>
          <li>Seek help when needed</li>
        </ul>
      </div>
    </div>
  );

  const renderMenopauseInfo = () => (
    <div className="info-section">
      <h3>Menopause Information</h3>
      <div className="info-card">
        <h4>What is Menopause?</h4>
        <p>Menopause is a natural biological process that marks the end of menstrual cycles. It typically occurs between ages 45-55.</p>
      </div>
      <div className="info-card">
        <h4>Common Symptoms</h4>
        <ul>
          <li>Hot flashes</li>
          <li>Night sweats</li>
          <li>Mood changes</li>
          <li>Sleep problems</li>
          <li>Vaginal dryness</li>
          <li>Weight gain</li>
        </ul>
      </div>
      <div className="info-card">
        <h4>Management Strategies</h4>
        <ul>
          <li>Hormone therapy</li>
          <li>Lifestyle changes</li>
          <li>Regular exercise</li>
          <li>Healthy diet</li>
          <li>Stress management</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="health-tracker">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'period' ? 'active' : ''}`}
          onClick={() => setActiveTab('period')}
        >
          Period Tracker
        </button>
        <button
          className={`tab ${activeTab === 'pcod' ? 'active' : ''}`}
          onClick={() => setActiveTab('pcod')}
        >
          PCOD/PCOS
        </button>
        <button
          className={`tab ${activeTab === 'pregnancy' ? 'active' : ''}`}
          onClick={() => setActiveTab('pregnancy')}
        >
          Pregnancy
        </button>
        <button
          className={`tab ${activeTab === 'health' ? 'active' : ''}`}
          onClick={() => setActiveTab('health')}
        >
          Health Tips
        </button>
        <button
          className={`tab ${activeTab === 'menopause' ? 'active' : ''}`}
          onClick={() => setActiveTab('menopause')}
        >
          Menopause
        </button>
      </div>
      <div className="content">
        {activeTab === 'period' && renderPeriodTracker()}
        {activeTab === 'pcod' && renderPCODInfo()}
        {activeTab === 'pregnancy' && renderPregnancyInfo()}
        {activeTab === 'health' && renderHealthTips()}
        {activeTab === 'menopause' && renderMenopauseInfo()}
      </div>
    </div>
  );
};

export default HealthTracker; 