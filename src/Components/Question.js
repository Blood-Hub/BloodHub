import React, { useState } from 'react';

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
      <form onSubmit={handleSubmit}>
        <label>
          <input type="radio" value="Yes" checked={selectedAnswer === 'Yes'} onChange={handleChange}/>
          Yes
        </label>
        <label>
          <input type="radio" value="No" checked={selectedAnswer === 'No'} onChange={handleChange}/>
          No
        </label>
        <button type="submit" disabled={!isAnswerSelected}>Submit</button>
      </form>
    </div>
  );
};

export default Question;