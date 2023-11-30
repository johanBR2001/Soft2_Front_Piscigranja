import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import '../css/estadisticasGraficos.css';
import NavBar from '../NavBar/navbar';
import imagen from '../assets/img/smiley.png';
import imagen2 from '../assets/img/triste.png';

const PieChart = ({ pieChartRef, pieData }) => {
  return (
    <div style={{ flex: 1 }}>
      <canvas id="pieChart" ref={pieChartRef} width="400" height="400" style={{ width: '100%', height: '100%' }}></canvas>
    </div>
  );
};

const BarChart = ({ barChartRef }) => {
  return (
    <canvas id="barChart" ref={barChartRef}></canvas>
  );
};

const Estadisticas = () => {
  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);
  let pieChart = null;
  let barChart = null;
  let barConfig;

  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const [imageSrc, setImageSrc] = useState(imagen);
  const [pieData, setPieData] = useState({
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
    }],
  });

  const [barData, setBarData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pieResponse = await fetch("http://127.0.0.1:8000/backend/obtener_conteo_materiales/", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const barResponse = await fetch("http://127.0.0.1:8000/backend/obtener_conteo_materialesxmes/", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (pieResponse.ok && barResponse.ok) {
          const pieData = await pieResponse.json();
          const barData = await barResponse.json();

          setPieData({
            labels: pieData.map(item => item.nombre),
            datasets: [{
              data: pieData.map(item => item.cantidad),
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
            }],
          });

          setBarData({
            labels: barData.map(item => item.nombre),
            datasets: barData.reduce((acc, item) => {
              const index = acc.findIndex(dataset => dataset.label === item.mes);
              if (index === -1) {
                const dataset = {
                  label: item.mes,
                  data: [item.cantidad],
                  backgroundColor: '#FF6384', // Puedes asignar colores diferentes si lo prefieres
                };
                acc.push(dataset);
              } else {
                acc[index].data.push(item.cantidad);
              }
              return acc;
            }, []),
          });
        } else {
          console.error('Error en la solicitud al servidor');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const pieChartCanvas = pieChartRef.current;
    const barChartCanvas = barChartRef.current;

    const pieConfig = {
      type: 'pie',
      data: pieData,
      options: {
        onClick: (e, elements) => {
          if (elements.length > 0) {
            const selectedIndex = elements[0].index;
            const selectedMaterial = pieData.labels[selectedIndex];
            setSelectedMaterial(selectedMaterial);
            updateBarChart(selectedIndex);
          }
        },
      },
    };

    const barConfig = {
      type: 'bar',
      data: {
        labels: barData.labels,
        datasets: barData.datasets
          .filter(dataset => !selectedMaterial || dataset.label === selectedMaterial) // Filtra por el material seleccionado
      },
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
              },
            },
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    pieChart = new Chart(pieChartCanvas, pieConfig);
    barChart = new Chart(barChartCanvas, barConfig);

    return () => {
      if (pieChart) {
        pieChart.destroy();
      }

      if (barChart) {
        barChart.destroy();
      }
    };
  }, [pieData, barData, selectedMaterial]);

  function updateBarChart(selectedIndex) {
    if (!barChart) {
      return;
    }
  
    const selectedMaterial = pieData.labels[selectedIndex];
    const totalBottles = pieData.datasets[0].data[selectedIndex];
  
    // Genera una distribución aleatoria de botellas para el material seleccionado
    let distributedData = Array.from({ length: barData.labels.length }, () =>
      Math.floor(Math.random() * (totalBottles + 1))
    );
  
    // Calcula la suma y ajusta la distribución si es necesario
    const sum = distributedData.reduce((acc, val) => acc + val, 0);
    const adjustment = totalBottles - sum;
  
    if (adjustment !== 0) {
      distributedData[distributedData.length - 1] += adjustment;
    }
  
    // Calcula la distribución promedio
    const average = distributedData.reduce((acc, val) => acc + val, 0) / distributedData.length;
  
    // Actualiza la imagen en función del promedio
    const newImageSrc = average > 80 ? imagen2 : imagen;
    setImageSrc(newImageSrc);
  
    // Filtra y actualiza los datos para el material seleccionado
    barChart.data.datasets.forEach((dataset) => {
      if (dataset.label === selectedMaterial) {
        dataset.data = distributedData;
      } else {
        dataset.data = distributedData.map(() => 0);
      }
    });
  
    // Actualiza el gráfico de barras
    barChart.update();
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <NavBar />
        </div>
      </div>
      <br />
      <div className="row text-center" id="bg-container" style={{ height: "fit-content" }}>
        <div className="col-lg-6 col-md-5 align-self-center">
          <div className="container pt-4">
            <h1>Estadisticas Generales</h1>
            <h1 class="subtitulo text-left" id="fuente">Estado de las especies</h1>
          </div>
        </div>
        <div className="col-lg-6 col-md-7 justify-content-center align-items-center" style={{ minHeight: "400px", minWidth: "400px", display: 'flex', justifyContent: 'center !important', alignItems: 'center !important' }}>
          <div className='outlet'>
            <PieChart pieChartRef={pieChartRef} />
          </div>
        </div>
      </div>
      <div className="row graficos" id="bg-container2">
        
        <div class="card_reaccion col-lg-4">
        <img src={imageSrc} alt="Descripción de la imagen" style={{ maxWidth: '250px' }} />
        </div>
        <div class="card_barra col-lg-8">
            
            <BarChart barChartRef={barChartRef} />
            
        </div>
      
      </div>
    </div>
  );
};

export default Estadisticas;