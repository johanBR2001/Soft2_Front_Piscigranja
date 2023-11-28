import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Importa Chart desde 'chart.js/auto'
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
  datasets: [
    {
      label: 'Material 1',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 2,
      data: [10, 20, 15, 25, 30]
    }
  ],
  borderWidth: 1,
}
export function BarChart() {
  
    return (
        <div>
          <Bar
            data={state}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
      );
    }
