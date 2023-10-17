import React, { useEffect, useState } from 'react';
import { PolarArea } from 'react-chartjs-2';

export function ChartPolar() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '# elementos',
        data: [],
        backgroundColor: [],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://127.0.0.1:8000/backend/obtener_conteo_materiales/");
        if (response.ok) {
          const data = await response.json();
          const labels = data.map((item) => item.nombre);
          const datasetData = data.map((item) => item.cantidad);
          const backgroundColors = data.map((item, index) => `rgba(${index * 20}, 99, 132, 0.5)`);
          
          setChartData({
            labels,
            datasets: [
              {
                label: '# elementos',
                data: datasetData,
                backgroundColor: backgroundColors,
                borderWidth: 1,
              },
            ],
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return <PolarArea data={chartData} />;
}