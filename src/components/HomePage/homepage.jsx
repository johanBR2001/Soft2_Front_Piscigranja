import React from 'react';
import NavBar from "./navbar";
import Fechas from './fechas';
import '../css/estiloHomepage.css'
import imagen from '../assets/img/IMG ESTADISTICAS.jpeg'
import LinesChart from './LinesChart';
function HomePage() {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center', // Alinea verticalmente al centro
        justifyContent: 'space-between', // Espacio entre los elementos
        padding: '50px', // Espaciado alrededor del contenido
    };

    const titleStyle = {
        paddingLeft: '50px',
        paddingRight: '50px',
    };

    const textoUser = {
        color: 'turquoise'
    }
    const lineaDivisoria = {
        borderBottom: '5px solid turquoise', // Establece el estilo de la línea divisoria
        width: '100%', // Ancho al 100% de la página
        marginTop: '20px', // Espacio superior entre la línea y el contenido anterior
    };

    return (
        <div className="contenedor">
            <NavBar />
            <br />
            <br />
            <div style={containerStyle}>
                <div>
                    <h1 style={titleStyle}>GoodMorning</h1>
                    <h1 style={{ ...titleStyle, ...textoUser }}>User</h1>
                </div>
                <Fechas />
            </div>
            <div style={containerStyle}>
                <div>

                    <h1 style={titleStyle}>Estado de las especies </h1>
                </div>
                <div style={lineaDivisoria}></div>

            </div>
            <div style={ {...containerStyle,maxWidth: '700px' }}>
                <img src={imagen} alt="Descripción de la imagen" style={{ maxWidth: '300px' }} />
           
                <LinesChart />
            </div>

        </div>
    );
}

export default HomePage;
