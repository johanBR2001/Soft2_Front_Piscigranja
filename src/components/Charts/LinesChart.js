import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var beneficios = [0, 56, 20, 36, 80];
var meses = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

var midata = {
    labels: meses,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Semana',
            data: beneficios,
            tension: 0.5,
            fill : true,
            borderColor: 'rgba(55, 155, 177, 0.53)',
            backgroundColor: 'rgba(122, 204, 222, 0.53)',
            pointRadius: 5,
            pointBorderColor: 'rgba(122, 204, 222, 0.53)',
            pointBackgroundColor: 'rgba(55, 155, 177, 0.53)',
        },
        {
            label: 'Otra línea',
            data: [20, 25, 60, 65, 45]
        },
    ],
};

var misoptions = {
    scales : {
        y : {
            min : 0
        },
        x: {
            ticks: { color: 'rgba(55, 155, 177, 0.53)'}
        }
    }
};

export default function LinesChart() {
    return <Line data={midata} options={misoptions}/>
}