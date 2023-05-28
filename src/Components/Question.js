import React, { useState } from 'react';
import '../styles/Question.css';


const Question = ({ question, handleAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAnswer(selectedAnswer);
    setSelectedAnswer('');
  };

 const isAnswerSelected = selectedAnswer !== '';

  return (
    <div>
      <h3>{question}</h3>
      <form onSubmit={handleSubmit} style={{borderBottom: 'none'}}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            border: 'none',

          }}>
          <label>
            <input
              type='radio'
              value='Yes'
              checked={selectedAnswer === 'Yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type='radio'
              value='No'
              checked={selectedAnswer === 'No'}
              onChange={handleChange}
            />
            No
          </label>
          <button
            type='submit'
            style={{ marginTop: '10px', padding: '20px', marginBottom: '20px', width: '250px' }}
            disabled={!isAnswerSelected}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Question;