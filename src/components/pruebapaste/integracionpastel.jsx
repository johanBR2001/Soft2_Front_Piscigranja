import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut  } from 'react-chartjs-2';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
ChartJS.register(ArcElement, Tooltip, Legend);

const containerStyle = {
    width: '300px', // Establece el ancho deseado
    height: '300px', // Establece la altura deseada
  };
export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      tooltips: {
        enabled: true, 
      },
    },
    animation: {
      animateRotate: true,
    },
  };
  
  export function App() {
    return <div style={containerStyle}>
        <Doughnut data={data}  options={options} width={5} height={5} />
        <Sidebar>
  <Menu>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>
    </div>
    ;
  }

export default App;

