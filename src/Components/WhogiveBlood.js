import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WhogiveBlood.css';
import frequecy from '../img/time-frequency.avif';
import tattoo from '../img/tattoo.png';
import question from '../img/blood-question.jpeg';
import endoscopy from '../img/endoscopy.png';
import transfusion from '../img/blood-transfusion.png';
import health from '../img/health-problems.jpeg';
import pregnancy from '../img/pregnancy-icon.jpeg';
import travel from '../img/travel-icon.png';
import age from '../img/age-group.png';
import weight from '../img/weight-scale.jpeg';
import srelations from '../img/sexual-relation.png';


function WhogiveBlood() {
  const navigate = useNavigate();
  return (
    <div className='whogiveblood'>

      <div className='head'>
        <div className='head-image'>
          <img src = {question} alt='logo'></img>
        </div>
        <div className='head-content'>
          <h1>Can you Donate Blood </h1>
           <div>
            <button onClick={()=>navigate('/eligibility')}>Take Eligibilty quiz</button>
          </div>
          <p>We are truly hoping that you can donate blood. To see whether you might be deemed eligible, see the details below.</p>
         
        </div>
      </div>
{/* 1. time between donations */}
      <div className='criteria1'>
        <div className='criteria'>
          <img src = {frequecy}   height='50%' width='100px'></img>
          <h2>Frequency</h2>
        <div className='criteria-content'>
          <ul>
            <li>If you're a man, you have to wait at least 12 weeks between donations</li>
            <li>For women it is 16 weeks.</li>
          </ul>
        </div>
        </div>
        
      </div>

{/* 2. Age */}
      <div className='criteria2'>
        <div className='criteria'>
            <img src = {age} height='50%' width='100px'></img>
            <h2>Age</h2>
          <div className='criteria-content'>
            <ul>
              <li>Once you turn 17 years old, you can sign up to donate blood.</li>
              <li>You can begin donating blood if you're a new donor at any moment up until your 66th birthday. </li>
              <li>If you have already donated blood, even if it was a while ago, you can continue to do so until you turn 70.</li>
              <li>If you are healthy and over 70, you may continue to donate blood.</li> 
            </ul>
          </div>
        </div>
      </div>
{/* 3. weight */}
       <div className='criteria3'>
        <div className='criteria'>
            <img src = {weight} height='50%' width='100px'></img>
            <h2>Weight</h2>
          <div className='criteria-content'>
            <ul>
              <li>You must be over 7st 12lb (50 kg) in order to donate blood.</li>
              <li>These rules are in place to prevent you from feeling lightheaded or ill after giving blood.</li>
            </ul>
          </div>
        </div>
      </div>

{/* 4.tatoos and piercing */}
       <div className='criteria4'>
        <div className='criteria'>
            <img src = {tattoo} height='50%' width='100px'></img>
            <h2>Tattoos & Piercings</h2>
          <div className='criteria-content'>
            <ul>
              <li>You need to wait four months from the date of your tattoo or piercing before giving blood.</li>

              <li>This is due to the possibility of some blood-borne viruses, such Hepatitis B, being spread by contaminated needles</li>
            </ul>
            
          </div>
        </div>
      </div>
  {/* 5.Sexual Relations*/}
       <div className='criteria5'>
        <div className='criteria'>
            <img src = {srelations} height='50%' width='100px'></img>
             <h2>Sexual Relations</h2>
          <div className='criteria-content'>
            <ul>
              <li>If you believe you should be tested for HIV/AIDS, HTLV, or hepatitis, you must not donate blood.</li> 
              <li>After having a sexual encounter with a partner who is, or you suspect may be, HIV positive, Hepatitis B or C carrier, you must wait at least three months before donating.</li>
              <li> If you are HIV positive, on HIV medication, Hepatitis B or C carrier, Hepatitis C carrier, or have ever had Syphilis treated, you can never donate blood.</li>
            </ul>
          </div>
        </div>
      </div>

  {/* 6.pregnancy*/}
       <div className='criteria6'>
        <div className='criteria'>
            <img src = {pregnancy} height='50%' width='100px'></img>
            <h2>Pregnacy</h2>
          <div className='criteria-content'>
            <ul>
              <li>If you are expecting, you cannot donate blood. Six months after giving birth, you can donate blood.</li>
              <li>This allows you time to replenish the iron you would often lose when pregnant.</li> 
            </ul>
          </div>
        </div>
      </div>

{/* 7.Medical Procedures */}
       <div className='criteria7'>
        <div className='criteria'>
            <img src = {endoscopy} height='50%' width='100px'></img>
            <h2>Medical Procedures</h2>
          <div className='criteria-content'>
            <ul>
              <li>You can donate blood after the majority of operations once you've fully recovered and all of your wounds have healed.</li>
               <li>You must wait four months before giving blood if you've had an operation or procedure involving a flexible scope e.g endoscopy, and colonoscopy.</li> </ul>
          </div>
        </div>
      </div>
   {/* 8. Blood Transfusion*/}
       <div className='criteria8'>
        <div className='criteria'>
            <img src = {transfusion} height='50%' width='100px'></img>
            <h2>Blood Transfusion</h2>
          <div className='criteria-content'>
            
            <ul>
              <li>Anyone who has had a blood transfusion since 1980 is not eligible to donate blood. </li>
              <li>This isn't the case if you receive your own blood.</li></ul>
          </div>
        </div>
      </div>

  {/* 9.Health Problems*/}
       <div className='criteria9'>
        <div className='criteria'>
            <img src = {health} height='50%' width='100px'></img>
            <h2>Pregnacy</h2>
          <div className='criteria-content'>
            
            <ul>
              <li>You cannot be a donor if you have certain chronic illnesses or long-term health issues.</li>
              <li>Heart disease, cancer, stroke, inflammatory bowel disease, chronic lung disease: apart from asthma, and chronic renal failure are among the illnesses that prevent you from donating blood.</li>
            </ul>

          </div>
        </div>
      </div>

  {/* 10.Travel*/}
       <div className='criteria10'>
        <div className='criteria'>
            <img src = {travel} height='50%' width='100px'></img>
            <h2>Travel</h2>
          <div className='criteria-content'>
            
            <ul>
              <li>Donating blood may be impacted by traveling outside of the UK.</li>
              <li>This is due to the fact that certain infections can be acquired overseas, typically by mosquito or other insect bites.</li>  
              <li>2 months after visiting a malarial area, you can usually give blood.</li>1</ul>

          </div>
        </div>
      </div>

    </div>
  )
}

export default WhogiveBlood