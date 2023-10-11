import React from 'react';
import { ChartPolar } from './ChartPolar';
import '../css/estiloChartPolar.css';
import NavBar from '../HomePage/navbar.jsx';
import LinesChart from './LinesChart';

function EstadGeneral (){
    const containerStyle2 = {
        display: 'flex',
        alignItems: 'center', // Alinea verticalmente al centro
        padding: '50px', // Espaciado alrededor del contenido
        // justifyContent: 'space-between',
    };
    const titleStyle = {
        paddingLeft: '10px',
        paddingRight: '100px',
    };
    return(
       
        <div className="contenedor">
            <NavBar />
            <div className="label"style={{...containerStyle2,titleStyle}}>
                <div>
                    <h1 >Estadisticas Generales </h1>
                    <h1 id='fuente'>Estado de las especies </h1>
                </div>
                <div  style={{maxWidth: '300px'}}>
                    <ChartPolar />
                </div>
                {/* <div class="box">
                    <div class="rectangle" />
                </div> */}
            </div>
            <div  style={containerStyle2}>
                <LinesChart/>
            </div>
        </div>

    );
}

export default EstadGeneral;