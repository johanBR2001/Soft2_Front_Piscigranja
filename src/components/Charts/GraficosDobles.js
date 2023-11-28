
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import PieChart from './PieChart'; // Importa el componente de Gráfico de Torta
import BarChart from './BarChart'; // Importa el componente de Gráfico de Barras

const LinkedCharts = () => {
  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);

  useEffect(() => {
    // Configuración inicial de los gráficos
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

    // Configuración de los gráficos iniciales
    const pieChartCanvas = pieChartRef.current;
    const barChartCanvas = barChartRef.current;

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

    const barConfig = {
      type: 'bar',
      data: barData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        // Resto de la configuración
      }
    };

    // Creación de los gráficos
    const pieChart = new Chart(pieChartCanvas, pieConfig);
    const barChart = new Chart(barChartCanvas, barConfig);

    // Función para actualizar el gráfico de barras
    function updateBarChart(selectedIndex) {
      // Lógica para actualizar el gráfico de barras según el gráfico de torta seleccionado
      // ...
    }

    return () => {
      // Limpiar los gráficos al desmontar el componente
      pieChart.destroy();
      barChart.destroy();
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <PieChart pieChartRef={pieChartRef} />
      <BarChart barChartRef={barChartRef} />
    </div>
  );
};

export default LinkedCharts;
