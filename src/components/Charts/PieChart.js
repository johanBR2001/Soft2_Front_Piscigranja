import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ updateBarChart }) => {
  const pieChartRef = useRef(null);
  let pieChart = null;

  useEffect(() => {
    const pieData = {
      labels: ['Material 1', 'Material 2', 'Material 3', 'Material 4', 'Material 5'],
      datasets: [{
        data: [200, 15, 25, 10, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0']
      }]
    };

    const pieConfig = {
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

    const pieChartCanvas = pieChartRef.current;
    pieChart = new Chart(pieChartCanvas, pieConfig);

    return () => {
      if (pieChart) {
        pieChart.destroy();
      }
    };
  }, [updateBarChart]);

  return (
    <div>
      <h2>Gráfico de Torta</h2>
      <canvas id="pieChart" ref={pieChartRef} width="400" height="400" style={{ width: '100%', height: '100%' }}></canvas>
    </div>
  );
};

export default PieChart;
