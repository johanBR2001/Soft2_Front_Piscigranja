/*import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ barData }) => {
  const barChartRef = useRef(null);
  let barChart = null;

  useEffect(() => {
    const barConfig = {
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

    const barChartCanvas = barChartRef.current;
    barChart = new Chart(barChartCanvas, barConfig);

    return () => {
      if (barChart) {
        barChart.destroy();
      }
    };
  }, [barData]);

  const updateBarChart = (selectedIndex) => {
    if (!barChart) {
      return;
    }

    const selectedMaterial = barData.labels[selectedIndex];
    const totalBottles = barData.datasets[0].data[selectedIndex];

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
        dataset.data = [0, 0, 0, 0, 0]; // Actualiza con la cantidad correcta de datos según tu estructura de datos
      }
    });

    barChart.update();
  };

  return (
    <div>
      <h2>Gráfico de Barras</h2>
      <canvas id="barChart" ref={barChartRef} width="400" height="400" style={{ width: '100%', height: '100%' }}></canvas>
    </div>
  );
};

export default BarChart;

*/