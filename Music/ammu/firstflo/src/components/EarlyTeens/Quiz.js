import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: "What is a period?",
      options: [
        "A natural process where the body sheds the lining of the uterus",
        "A type of sickness",
        "Something only adults get",
        "A type of exercise"
      ],
      correctAnswer: 0,
      explanation: "A period is a natural process that happens to girls and women. It's when the body sheds the lining of the uterus, which happens about once a month."
    },
    {
      question: "How often do periods usually occur?",
      options: [
        "Every day",
        "Every week",
        "Every month (about 28 days)",
        "Every year"
      ],
      correctAnswer: 2,
      explanation: "Periods usually occur every month, with a cycle of about 28 days. However, this can vary from person to person."
    },
    {
      question: "What are some common period symptoms?",
      options: [
        "Only stomach pain",
        "Cramps, mood changes, and fatigue",
        "Only headaches",
        "No symptoms at all"
      ],
      correctAnswer: 1,
      explanation: "Common period symptoms include cramps, mood changes, fatigue, and sometimes headaches. Everyone experiences different symptoms."
    },
    {
      question: "Is it normal to feel emotional during your period?",
      options: [
        "No, it's not normal",
        "Yes, it's completely normal",
        "Only if you're sick",
        "Only adults feel emotional"
      ],
      correctAnswer: 1,
      explanation: "Yes, it's completely normal to feel emotional during your period. Hormone changes can affect your mood."
    },
    {
      question: "What should you do if you get your first period at school?",
      options: [
        "Panic and go home",
        "Tell a teacher or school nurse",
        "Ignore it",
        "Skip school"
      ],
      correctAnswer: 1,
      explanation: "If you get your first period at school, tell a teacher or school nurse. They can help you and provide necessary supplies."
    },
    {
      question: "What is the average age for getting your first period?",
      options: [
        "8-10 years old",
        "12-14 years old",
        "16-18 years old",
        "20-22 years old"
      ],
      correctAnswer: 1,
      explanation: "Most girls get their first period between ages 12-14, but it can happen anywhere between 8-16 years old, which is completely normal."
    },
    {
      question: "How long does a typical period last?",
      options: [
        "1-2 days",
        "3-7 days",
        "10-14 days",
        "A whole month"
      ],
      correctAnswer: 1,
      explanation: "A typical period lasts 3-7 days, but this can vary from person to person. It's normal to have shorter or longer periods."
    },
    {
      question: "What are sanitary pads used for?",
      options: [
        "To clean your face",
        "To absorb period blood",
        "To treat acne",
        "To prevent colds"
      ],
      correctAnswer: 1,
      explanation: "Sanitary pads are used to absorb period blood. They are placed in your underwear to keep you clean and comfortable during your period."
    },
    {
      question: "Is it safe to exercise during your period?",
      options: [
        "No, you should never exercise",
        "Yes, if you feel up to it",
        "Only if you're an athlete",
        "Only on the first day"
      ],
      correctAnswer: 1,
      explanation: "Yes, it's safe to exercise during your period if you feel up to it. Exercise can actually help reduce cramps and improve your mood."
    },
    {
      question: "What should you do if your period is very painful?",
      options: [
        "Ignore the pain",
        "Talk to a parent or doctor",
        "Stop eating",
        "Exercise more"
      ],
      correctAnswer: 1,
      explanation: "If your period is very painful, talk to a parent or doctor. They can help you find ways to manage the pain and make sure everything is okay."
    }
  ];

  const handleAnswerClick = (selectedIndex) => {
    setSelectedAnswer(selectedIndex);
    
    if (selectedIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  if (showScore) {
    return (
      <div className="quiz-container">
        <div className="score-section">
          <h2>Quiz Complete!</h2>
          <p>You scored {score} out of {questions.length}</p>
          <div className="score-message">
            {score === questions.length ? (
              <p>Perfect! You're a period expert! 🌟</p>
            ) : score >= questions.length * 0.7 ? (
              <p>Great job! You know a lot about periods! 🌸</p>
            ) : (
              <p>Keep learning! You're on the right track! 💪</p>
            )}
          </div>
          <button onClick={restartQuiz} className="restart-button">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].question}
        </div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`answer-button ${
              selectedAnswer === index
                ? index === questions[currentQuestion].correctAnswer
                  ? 'correct'
                  : 'incorrect'
                : ''
            }`}
            onClick={() => handleAnswerClick(index)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>
      {selectedAnswer !== null && (
        <div className="explanation">
          {questions[currentQuestion].explanation}
        </div>
      )}
    </div>
  );
};

export default Quiz; 