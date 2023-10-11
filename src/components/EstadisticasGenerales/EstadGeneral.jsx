import React from 'react';
import { ChartPolar } from './ChartPolar';
import '../css/estiloChartPolar.css';
import NavBar from '../HomePage/navbar.jsx';


function EstadGeneral (){
    const containerStyle2 = {
        display: 'flex',
        alignItems: 'center', // Alinea verticalmente al centro
        padding: '250px', // Espaciado alrededor del contenido
    };
    const titleStyle = {
        paddingLeft: '10px',
        paddingRight: '100px',
    };
    return(
        <div >
        <div className="contenedor">
            <NavBar />
            <div className="label"style={{...containerStyle2,titleStyle}}>
                <div>
                    <h1 >Estadisticas Generales </h1>
                <div >
                    <h1 id='fuente'>Estado de las especies </h1>
                </div>
                </div>
                <div id='graphPolar' style={{maxWidth: '300px'}}>
                    <ChartPolar />
                </div>
                {/* <div class="box">
                    <div class="rectangle" />
                </div> */}
            </div>

        
        </div>
        
    </div> 
    );
}

export default EstadGeneral;