import React, {useState} from 'react'
import {Quizquestions} from './Quizquestions';


function Eligibility() {
  const [currentQ,setCurrentQ]= useState(0);
  const [selectedA, setSelectedA]= useState('');
 

  return (
    <div>
     <h1>Quiz</h1>
     <p>{Quizquestions[currentQ].question}</p> 
    </div>
  )
}

export default  Eligibility