import React, { useState, useEffect } from 'react';
//import MyChart from './Chart';
import '../pages/styles/Statistic.css';
import ChartComponent from "./Chart.js";


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

const Statistic = () => {
  const [data, setData] = useState([]);
  const [series] = useState(['North', 'South', 'Midlands', 'Eastern', 'Western']);
  const [labels] = useState(['2023', '2022', '2021', '2020', '2019']);
  const [colors] = useState(['#F94A29', '#FFFDEF', '#FCD900', '#F1F1F1', '#e70a0a']);
  const [animationDisplayed, setAnimationDisplayed] = useState(false);

  useEffect(() => {
    populateArray();
    // const interval = setInterval(populateArray, 8000);
    // return () => clearInterval(interval);
  }, []);

  const populateArray = () => {
    const newData = [];
    const seriesCount = 5;
    const serieLength = 5;

    for (let i = seriesCount; i--; ) {
      const tmp = [];

      for (let j = serieLength; j--; ) {
        tmp.push(getRandomInt(18, 70));
      }

      newData.push(tmp);
    }

    setData(newData);
  };

  const displayAnimationOnce = () => {
    if (!animationDisplayed) {
      setAnimationDisplayed(false);
      // Code to trigger the animation
    }
  };

  return (
    <>
        <div className='parallax-empty'>
        <h2 className='bank '> Statistic</h2>
        <section className='statistic '>
        <p className="text-statistic">Blood Donation In UK</p>
        <Charts data={data} labels={series} colors={colors} height={250} onAnimationStart={displayAnimationOnce} />
       
        <Legend labels={labels} colors={colors} />
        
        </section>
        </div>
        <div>
           
        </div>

        <div className='info'>
            <div className='infor-content'>
           
              <h4>The Rh system</h4>
                <p> Red blood cells sometimes have another antigen, a protein known as the RhD antigen. If this is present, your blood group is RhD positive. If it's absent, your blood group is RhD negative. This means you can be 1 of 8 blood groups: </p>
                <lu>
                  <li>A RhD positive (A+)</li>
                  <li>A RhD positive (A-)</li>
                  <li>A RhD positive (B+)</li>
                  <li>A RhD positive (B-)</li>
                  <li>A RhD positive (0+)</li>
                  <li>A RhD positive (0-)</li>
                  <li>A RhD positive (AB+)</li>
                  <li>A RhD positive (AB-)</li>
                </lu>
              <p>About 85% of the UK population is RhD positive (35% of the population has O+, the most common type). In most cases, O RhD negative blood (O-) can safely be given to anyone. It's often used in medical emergencies when the blood type is not immediately known. It's safe for most recipients because it does not have any A, B or RhD antigens on the surface of the cells, and is compatible with every other ABO and RhD blood group.</p>
              <ChartComponent className="more"/>
            </div>
            <div className='info1'>
              <h4>Key Facts</h4>
                <p>
                  <lu>
                    <li>Of the 118.5 million blood donations collected globally, 40% of these are collected in high-income countries, home to 16% of the world’s population.</li>
                    <li>In low-income countries, up to 54 % of blood transfusions are given to children under 5 years of age; whereas in high-income countries, the most frequently transfused patient group is over 60 years of age, accounting for up to 76% of all transfusions.</li>
                    <li>Based on samples of 1000 people, the blood donation rate is 31.5 donations in high-income countries, 16.4 donations in upper-middle-income countries, 6.6 donations in lower-middle-income countries and 5.0 donations in low-income countries.</li>
                    <li>The volume of plasma for fractionation per 1000 population varied considerably between the 45 reporting countries, ranging from 0.1 to 52.6 litres, with a median of 5.2 litres.</li>
                  </lu>
                </p>
        </div>
        <div className='info1'>
              <h4>Blood Donors</h4>
              <h5>Age and Gender of Blood Donors</h5>
                <p>Data about the gender profile of blood donors show that globally 33% of blood donations are given by women, although this ranges widely. In 15 of the 113 reporting countries, less than 10% of donations are given by female donors.</p>
                <p>The age profile of blood donors shows that, proportionally, more young people donate blood in low- and middle-income countries than in high-income countries. Demographic information of blood donors is important for formulating and monitoring recruitment strategies.</p>
              <h4>Which blood types are in demand?</h4>
                <p>Some blood types are in higher demand from hospitals than others. For example, it's estimated that around 8% of people have O negative blood, but O negative makes up 13% of requests from hospitals. This is because anyone can receive the red cells from O negative donors. So O negative red cells can be used in emergencies or when a person's blood type in unknown. Sometimes we need to target specific blood types to increase stock levels. That's why we sometimes contact regular donors with the particular blood type we need, and ask them to give blood.</p>
        </div>
      </div>
    </>
  );
};

const Legend = ({ labels, colors }) => {
  return (
    <div className="Legend">
    
      {labels.map((label, labelIndex) => (
        <div key={labelIndex}>
          <span
            className="Legend--color"
            style={{ backgroundColor: colors[labelIndex % colors.length] }}
          />
          <span className="Legend--label">{label}</span>
        </div>
      ))}
    </div>
  );
};

const Charts = ({ data, labels, colors, height, opaque, grouping, horizontal, onAnimationStart }) => {
  const getMaxValue = () => {
    let max = 0;
    for (let i = data.length; i--; ) {
      for (let j = data[i].length; j--; ) {
        if (data[i][j] > max) {
          max = data[i][j];
        }
      }
    }
    return max;
  };

  return (
      
    <div className={`Charts${horizontal ? ' horizontal' : ''}`} onAnimationStart={onAnimationStart}>
      {data.map((serie, serieIndex) => {
        const sortedSerie = serie.slice(0);
        const sum = serie.reduce((carry, current) => carry + current, 0);
        sortedSerie.sort(compareNumbers);

        return (
          <div
            className={`Charts--serie ${grouping}`}
            key={serieIndex}
            style={{ height: height ? height : 'auto' }}
          >
          
            <label>{labels[serieIndex]}</label>
            {serie.map((item, itemIndex) => {
              const color = colors[itemIndex];
              let style;
              const size = (item / (grouping === 'stacked' ? sum : getMaxValue())) * 100;

              style = {
                backgroundColor: color,
                opacity: opaque ? 1 : item / getMaxValue() + 1.19,
                zIndex: item,
                
              };

              if (horizontal) {
                style.width = size + '%';
              } else {
                style.height = size + '%';
              }

              if (grouping === 'layered' && !horizontal) {
                style.right = ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%';
              }

              return (
                 <div className={`Charts--item ${grouping}`} style={style} key={itemIndex}>
                 <div className="Charts--label-top">
                    <span className="Charts--label-text">%</span>
                    <span className="Charts--label-value">{item}</span>
                </div>
                  <b style={{ color: color }}>{item}</b>
                </div> 
                
              );
            })}
            
          </div>
        );
      })}
      
    </div>
  );
};

export default Statistic;
