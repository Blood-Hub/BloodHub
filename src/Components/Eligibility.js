import React, { useState } from 'react';
import Question from './Question';
import './Eligibility.css';

//quiz questions, answer, and explanations for when wrong answer is selected 
const questions = [
    {
      question: 'Are you between the ages of 17 and 65?',
      Answer: 'Yes',
      explanation: ' Apologies, you are presently not eligible to  give. To donate blood, you must be between the ages of 17 and 66 ( or 70 if you have previously donated).',
    },

    {
      question: 'Have you been to a malarial-endemic area recently?',
      Answer: 'No',
      explanation: 'Sadly, you will have to wait 12 months before you can donate blood.',
    },

    {
      question: 'Have you ever had a stroke, heart disease, or cancer?',
      Answer: 'No',
      explanation: 'Sorry, unfortunately you are not eligible to donate blood because of these medical conditions.',
    },

    {
      question: 'Are you currently pregnant, or have you had a baby, miscarriage or a termination in the last 6 months?',
      Answer: 'No',
      explanation: 'Pregnant women cannot donate blood. Please wait six months after the end of your pregnancy before giving blood if your pregnancy lasted longer than 12 weeks. You cannot donate blood if you received a blood transfusion during your pregnancy or delivery.',
    },

    {
      question: 'Have you given blood in the last 16 weeks?',
      Answer: 'No',
      explanation: 'If you are a Male donor you have to wait 12 weeks since your last whole blood donation, or 4 weeks since your last plasma or platelet donation.Female donors have to wait 12 weeks since your last whole blood donation, or 4 weeks since your last plasma or platelet donation.',
    },

    {
      question: 'Have you had your ears, nose, face or body pierced in the last 4 months?',
      Answer: 'No',
      explanation: 'Sorry! From the date of your procedure, you must wait at least four months',
    },

    {
      question: 'Have you had a tattoo, semi-permanent make up or any cosmetic treatments that involved piercing the skin In the last 4 months ?',
      Answer: 'No',
      explanation: 'Sorry! From the date of your procedure, you must wait at least four months.',
    },

    {
      question: 'Have you had a flexible endoscopy or colonoscopy in the last 4 months?',
      Answer: 'No',
      explanation: 'Sorry! From the date of your procedure, you must wait at least four months.',
    },
  
  ];


const Quiz = () => {
  const [activeQuestion, setactiveQuestion] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [showRestartButton, setShowRestartButton] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
 

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[activeQuestion].Answer) {
      setShowExplanation(false);

      if (activeQuestion === questions.length - 1) {
        setQuizCompleted(true);
      } else {
        setactiveQuestion(activeQuestion + 1);
      }
    } else {
      setExplanation(questions[activeQuestion].explanation);
      setShowExplanation(true);
      setShowRestartButton(true);
      setQuizCompleted(false);
    }
  };

 const handleRestartQuiz = () => {
    setactiveQuestion(0);
    setShowExplanation(false);
    setShowRestartButton(false);
    setQuizCompleted(false);
  };

  return (
    <div className='quizbody'>
      {!quizCompleted && (
        <>
      {!showExplanation && activeQuestion < questions.length && (
        <Question
          question={questions[activeQuestion].question}
          handleAnswer={handleAnswer}
        />
      )}

      {showExplanation && (
        <div>
          <p>{explanation}</p>
          {activeQuestion + 1 < questions.length ? (
            <button onClick={handleRestartQuiz}>Restart Quiz</button>
          ) : (
            <button onClick={handleRestartQuiz}>Restart Quiz</button>
          )}
        </div>
      )}
      </>

      )}
      {quizCompleted && (
        <div className='completed-quiz'>
          <p>You are Eligible!<br/><br/>
            Great! You appear to be eligible to donate blood, as you have passed our basic eligibility check. 
            <br/>
            <br/>
          Please keep in mind that other eligibility requirements may apply and that this checker only covered the most common reasons why people cannot donate blood.</p>
          <button  onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;