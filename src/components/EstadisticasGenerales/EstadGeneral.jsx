import React, { useState } from 'react';
import { ChartPolar } from '../Charts/ChartPolar';
import LinesChart from '../Charts/LinesChart';
import '../css/estiloChartPolar.css';
import NavBar from '../NavBar/navbar';

function EstadGeneral (){
    const [activeTab, setActiveTab] = useState("tab1");
    //  Funciones para realizar el cambio de tabs
    const handleTab1 = () => {
        // actualizar el estado a tab1
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        // actualizar el estado a tab2
        setActiveTab("tab2");
    };

    // Controla el estado del interruptor
    const [switchState, setSwitchState] = useState(false);

    const handleSwitchChange = () => {
        // Invierte el estado del interruptor cuando cambia
        setSwitchState(!switchState);

        // Aquí puedes definir la acción que deseas realizar cuando el interruptor cambia de estado
        if (switchState) {
            // Acción cuando el interruptor está en estado ON
            setActiveTab("tab1");
        } else {
            // Acción cuando el interruptor está en estado OFF
            setActiveTab("tab2");
        }
    };

    return(
        <div class="container">
            <div class="row">
                <div class="col">
                    <NavBar />
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col align-self-center" style={{border: '2px solid #ccc',}}>
                    <h1>Estadisticas Generales</h1>
                    <h1 id="fuente">Estado de las especies</h1>
                </div>
                <div class="col-1 align-self-center">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                        // Controlador de eventos para el cambio de estado del interruptor
                        onChange={handleSwitchChange}
                        ></input>
                        {/* <label class="form-check-label" for="flexSwitchCheckDefault">prueba</label> */}
                    </div>
                </div>
                <div class="col-6" style={{border: '2px solid #ccc',maxWidth: '400px', minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='outlet'>
                        {activeTab === "tab1" ?  <ChartPolar /> : <LinesChart />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EstadGeneral;