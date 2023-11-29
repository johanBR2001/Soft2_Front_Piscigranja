import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import NavBar from '../NavBar/navbar';
import LinesChart from '../Charts/LinesChart';

const PieChart = ({ pieChartRef }) => {
  return (
    <div style={{ flex: 1 }}>
      <canvas id="pieChart" ref={pieChartRef} width="400" height="400" style={{ width: '100%', height: '100%' }}></canvas>
    </div>
  );
};

const BarChart = ({ barChartRef }) => {
  return (
    <div style={{ flex: 1 }}>
      <canvas id="barChart" ref={barChartRef} width="600" height="400" style={{ width: '100%', height: '100%' }}></canvas>
    </div>
  );
};

const Probando = () => {
  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);
  let pieChart = null;
  let barChart = null;
  let pieConfig;
  let barConfig;

  useEffect(() => {
    const pieData = {
      labels: ['Material 1', 'Material 2', 'Material 3', 'Material 4', 'Material 5'],
      datasets: [{
        data: [200, 15, 25, 10, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0']
      }]
    };

    const barData = {
      labels: ['January', 'February', 'March', 'April'],
      datasets: pieData.labels.map((material, index) => ({
        label: material,
        data: [0, 0, 0, 0],
        backgroundColor: pieData.datasets[0].backgroundColor[index],
        stack: 'stack',
      })),
    };

    pieConfig = {
      type: 'pie',
      data: pieData,
      options: {
        onClick: (e, elements) => {
          if (elements.length > 0) {
            const selectedIndex = elements[0].index;
            updateBarChart(selectedIndex);
          }
        }
      }
    };

    barConfig = {
      type: 'bar',
      data: barData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = barData.labels[context.dataIndex];
                const value = context.parsed.y;
                return `${label}: ${value}`;
              }
            }
          }
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      }
    };



    const pieChartCanvas = pieChartRef.current;
    const barChartCanvas = barChartRef.current;

    pieChart = new Chart(pieChartCanvas, pieConfig);
    barChart = new Chart(barChartCanvas, barConfig);

    function updateBarChart(selectedIndex) {
      if (!pieChart || !barChart) {
        return;
      }

      const selectedMaterial = pieData.labels[selectedIndex];
      const totalBottles = pieData.datasets[0].data[selectedIndex];

      let distributedData;

      do {
        distributedData = Array.from({ length: barData.labels.length }, () =>
          Math.floor(Math.random() * (totalBottles + 1))
        );

        const sum = distributedData.reduce((acc, val) => acc + val, 0);
        const adjustment = totalBottles - sum;

        if (adjustment !== 0) {
          distributedData[distributedData.length - 1] += adjustment;
        }
      } while (distributedData.some(value => value <= 0));

      barData.datasets.forEach((dataset, index) => {
        if (dataset.label === selectedMaterial) {
          dataset.data = distributedData;
        } else {
          dataset.data = [0, 0, 0, 0];
        }
      });

      barChart.update();
    }

    return () => {
      if (pieChart) {
        pieChart.destroy();
      }

      if (barChart) {
        barChart.destroy();
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <NavBar />
        </div>
      </div>
      <br />
      <div className="row" id="bg-container" style={{ height: "fit-content" }}>
        <div className="col-lg-6 col-md-5 align-self-center">
          <div className="container pt-4">
            <h1>Estadisticas Generales</h1>
            <h1 id="fuente">Estado de las especies</h1>
          </div>
        </div>
        <div className="col-lg-6 col-md-7 justify-content-center align-items-center" style={{ minHeight: "400px", minWidth: "400px", display: 'flex', justifyContent: 'center !important', alignItems: 'center !important' }}>
          <div className='outlet'>
            <PieChart pieChartRef={pieChartRef} />
          </div>
        </div>
      </div>
      <div className="row" id="bg-container2" style={{ height: "fit-content" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', height: '800px', width: '400px' }}>
        <BarChart barChartRef={barChartRef} />
      </div>
      </div>
    </div>
  );
};

export default Probando;
