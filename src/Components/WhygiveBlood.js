import React, { useState, useEffect } from 'react';
import ChartComponent from "./Chart.js";
import '../styles/Statistic.css';

 export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

const WhygiveBlood = () => {
  const [data, setData] = useState([]);
  const [series] = useState(['North', 'South', 'Midlands', 'Eastern', 'Western']);
  const [labels] = useState(['2023', '2022', '2021', '2020', '2019']);
  const [colors] = useState(['#F94A29', '#FFFDEF', '#FCD900', '#F1F1F1', '#e70a0a']);
  const [animationDisplayed, setAnimationDisplayed] = useState(false);

  useEffect(() => {
    populateArray();
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
      setAnimationDisplayed(true);
      // Code to trigger the animation
    }
  };

  return (
    <>
      <section className='statistic'>
        <p className="text-statistic">Blood Donation In UK</p>
        <div>
          <Charts data={data} labels={series} colors={colors} height={250} onAnimationStart={displayAnimationOnce} />
          <Legend labels={labels} colors={colors} />
        </div>
        <div data-testid="slideshow-placeholder"></div>

      </section>
      <div className='info'>
        <div className='infor-content'>
          <h4 className='whys'>The Rh system</h4>
          <p>Red blood cells sometimes have another antigen, a protein known as the RhD antigen. If this is present, your blood group is RhD positive. If it's absent, your blood group is RhD negative. This means you can be 1 of 8 blood groups:</p>
          <ChartComponent className="more" />
          <p>About 85% of the UK population is RhD positive (35% of the population has O+, the most common type). In most cases, O RhD negative blood (O-) can safely be given to anyone. It's often used in medical emergencies when the blood type is not immediately known. It's safe for most recipients because it does not have any A, B or RhD antigens on the surface of the cells and is compatible with every other ABO and RhD blood group.</p>
        </div>
        <div className='info1'>
          <h4 className='whys'>In Case Of Operation</h4>
          <p>If you lose a large amount of blood before or during an operation, a red cell transfusion may be needed. A transfusion of platelets, plasma or clotting factors may also be required if any of these components are low or not working properly.</p>
        </div>
        <div className='infor1'>
          <h4 className='whys'>Anaemia</h4>
          <p>Anaemia is a medical term for low red blood cell count or low haemoglobin. It can be caused by many medical conditions, and it may result in a lack of oxygen to the cells. A red cell transfusion may be required if anaemia becomes severe.</p>
        </div>
        <div className='infor1'>
          <h4 className='whys'>Iron deficiency</h4>
          <p>Iron is a mineral nutrient that’s essential for your body to function normally and to make haemoglobin (Hb). If you have iron deficiency, it’s treated by iron replacement therapy and the need for a transfusion is rare.</p>
        </div>
        <div className='infor1'>
          <h4 className='whys'>Bleeding disorders</h4>
          <p>Bleeding disorders are a group of conditions where blood can’t clot properly. You may need a transfusion of platelets or plasma products to assist with clotting, or even red cells if the blood loss is severe.</p>
        </div>
        <div className='info1'>
          <h4 className='whys'>Which blood types are in demand?</h4>
          <p>Some blood types are in higher demand from hospitals than others. For example, it's estimated that around 8% of people have O negative blood, but O negative makes up 13% of requests from hospitals. This is because anyone can receive the red cells from O negative donors. So O negative red cells can be used in emergencies or when a person's blood type is unknown. Sometimes we need to target specific blood types to increase stock levels. That's why we sometimes contact regular donors with the particular blood type we need and ask them to give blood.</p>
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
          <span className="Legend--color" style={{ backgroundColor: colors[labelIndex % colors.length] }} />
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
    return max !== 0 ? max : 1;
  };

  

  return (
    <div className={`Charts${horizontal ? ' horizontal' : ''}`} onAnimationStart={onAnimationStart}>
      {data.map((serie, serieIndex) => {
        const sortedSerie = serie.slice(0);
        const sum = serie.reduce((carry, current) => carry + current, 0);
        sortedSerie.sort(compareNumbers);

        return (
          <div className={`Charts--serie ${grouping}`} key={serieIndex} style={{ height: height ? height : 'auto' }}>
            <label>{labels[serieIndex]}</label>
            {serie.map((item, itemIndex) => {
              const color = colors[itemIndex];
              let style;
              const size = (item / (grouping === 'stacked' ? sum : getMaxValue())) * 100;

              if (isNaN(item)) {
                item = ''; // Convert NaN to empty string
              }

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

export default WhygiveBlood;
