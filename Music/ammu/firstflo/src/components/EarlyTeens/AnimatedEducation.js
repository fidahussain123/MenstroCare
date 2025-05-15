import React from 'react';
import Lottie from 'react-lottie';
import './AnimatedEducation.css';

const AnimatedEducation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require('../../assets/animations/period-animation.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="animated-education">
      <h2>Understanding Your Period</h2>
      <div className="animation-container">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <div className="education-content">
        <div className="fun-facts">
          <h3>Fun Facts</h3>
          <ul>
            <li>Most girls get their first period between ages 10-15</li>
            <li>Periods usually last 3-7 days</li>
            <li>It's completely normal to feel different emotions during your period</li>
            <li>Your body is growing and changing - that's perfectly normal!</li>
          </ul>
        </div>
        <div className="myth-busters">
          <h3>Myth Busters</h3>
          <div className="myth-item">
            <h4>Myth: You can't exercise during your period</h4>
            <p>Fact: Light exercise can actually help reduce cramps and improve your mood!</p>
          </div>
          <div className="myth-item">
            <h4>Myth: Periods are dirty or shameful</h4>
            <p>Fact: Periods are a natural and healthy part of growing up!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedEducation; 