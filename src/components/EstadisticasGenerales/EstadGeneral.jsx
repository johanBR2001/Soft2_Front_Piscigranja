import React from 'react';
import { ChartPolar } from './ChartPolar';
import '../css/estiloChartPolar.css';
import NavBar from '../HomePage/navbar.jsx';
// import Toggle from './ToggleSwitch';
// import ToggleSwitch from './ToggleSwitch';
function EstadGeneral (){
    const containerStyle2 = {
        display: 'flex',
        alignItems: 'center', // Alinea verticalmente al centro
        padding: '10px', // Espaciado alrededor del contenido
    };
    const titleStyle = {
        paddingLeft: '70px',
        paddingRight: '50px',
    };
    return(
        <div >
        <div className="contenedor">
            <NavBar />
            <div className="label"style={containerStyle2}>
                <div>
                    <h1 style={titleStyle}>Estadisticas Generales </h1>
                <br/>
                    <h1 style={titleStyle}>Estado de las especies </h1>
                </div>
                <div id='graphPolar' >
                    <ChartPolar />
                </div>
                <div class="box">
                    <div class="rectangle" />
                </div>
            </div>
           
        
        </div>
        
    </div> 
    );
}

export default EstadGeneral;