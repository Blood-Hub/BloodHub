import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';


const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const xValues = ["A+", "B+", "AB", "0", "0-","A-","B-","AB-"];
    const yValues = [31, 9, 3, 39, 9, 6, 2,3];
    const barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9","#1B9C85", "#035397","#E8630A"];

    const myChartRef = chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: xValues, color:'white',
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
          text: "Blood Type",
          fontColor:"white",
          font: {
            fontSize: 26,
            weight: 'bold',
            family: "'Arial', sans-serif",
            
          },
        },
        legend: {
          labels: {
            fontColor: "white",
            fontSize: 12,
            fontFamily: "'Arial', sans-serif",
          },
        },
        scales: {
          x: {
            ticks: {
              color: "white",
              font: {
                size: 19,
                fontWeight:'bolder',
                family: "'Arial', sans-serif",
                
              },
            },
          },
        },
      }
    });
  }, []);

  return <canvas id="myChart" style={{ width: "100%", maxWidth: "600px"}} ref={chartRef}></canvas>;
};

export default ChartComponent;
//19:45-20:00