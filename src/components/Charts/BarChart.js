import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
const barData = {
  labels: ['January', 'February', 'March', 'April'], // Cambié las categorías a meses
  datasets: pieData.labels.map((material, index) => ({
    label: material,
    data: [0, 0, 0, 0],
    backgroundColor: pieData.datasets[0].backgroundColor[index],
    stack: 'stack',
  })),
};

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
  const barChartCanvas = barChartRef.current;
  barChart = new Chart(barChartCanvas, barConfig);
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

    function updateBarChart(selectedIndex) {
      if (!pieChart || !barChart) {
        return;
      }
    
      const selectedMaterial = pieData.labels[selectedIndex];
      const totalBottles = pieData.datasets[0].data[selectedIndex];
    
      let distributedData;
    
      do {
        // Distribuir de manera aleatoria la cantidad total entre los meses
        distributedData = Array.from({ length: barData.labels.length }, () =>
          Math.floor(Math.random() * (totalBottles + 1)) // Evitar valores mayores que la cantidad total
        );
    
        // Ajustar los valores para garantizar que la suma sea igual a la cantidad total
        const sum = distributedData.reduce((acc, val) => acc + val, 0);
        const adjustment = totalBottles - sum;
    
        if (adjustment !== 0) {
          // Ajustar el último valor
          distributedData[distributedData.length - 1] += adjustment;
        }
      } while (distributedData.some(value => value <= 0));
    
      // Asignar valores a los datasets del gráfico de barras
      barData.datasets.forEach((dataset, index) => {
        if (dataset.label === selectedMaterial) {
          dataset.data = distributedData;
        } else {
          dataset.data = [0, 0, 0, 0];
        }
      });
    
      barChart.update();
    }


    barChart.data = updatedBarData;
    barChart.update();
  };

  return (
    <div>
      <h2>Gráfico de Barras</h2>
      <canvas id="barChart" ref={barChartRef} width="400" height="400" maxHeight='400' style={{ width: '100%', height: '100%'}}></canvas>
    </div>
  );
};

export default BarChart;

