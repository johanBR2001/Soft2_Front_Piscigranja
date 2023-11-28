  import React, { useState, useEffect } from 'react';
  import { PolarArea } from 'react-chartjs-2';
  import Chart from 'chart.js/auto'; // Importa Chart desde 'chart.js/auto'

  // export function ChartPolar() {
  //   const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  //   useEffect(() => {
  //     // Aquí hacemos una solicitud al endpoint de Django para obtener los datos
  //     fetch("http://localhost:8000/backend/obtener_conteo_materiales/") // Asegúrate de usar la URL correcta
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // Procesamos los datos recibidos para el gráfico
  //         const labels = data.map((item) => item.nombre);
  //         const values = data.map((item) => item.cantidad);

  //         const newChartData = {
  //           labels: labels,
  //           datasets: [
  //             {
  //               label: '# elementos',
  //               data: values,
  //               backgroundColor: [
  //                 'rgba(255, 99, 132, 0.5)',
  //                 'rgba(54, 162, 235, 0.5)',
  //                 'rgba(255, 206, 86, 0.5)',
  //                 'rgba(75, 192, 192, 0.5)',
  //                 'rgba(153, 102, 255, 0.5)',
  //               ],
  //               borderWidth: 1,
  //             },
  //           ],
  //         };

  //         setChartData(newChartData);
  //       });
  //   }, []);

  //   return <PolarArea data={chartData} />;
  // }

  export function ChartPolar() {
    // Datos en duro
    const dataEnDuro = {
      labels: ['Material 1', 'Material 2', 'Material 3', 'Material 4', 'Material 5'],
      datasets: [
        {
          label: '# elementos',
          data: [10, 20, 15, 25, 30],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
          ],
          borderWidth: 1,
        },
      ],
    };
  
    return <PolarArea data={dataEnDuro} />;
  }
