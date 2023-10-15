import React, { useState } from 'react';
import { ChartPolar } from '../Charts/ChartPolar';
import LinesChart from '../Charts/LinesChart';
import '../css/estiloChartPolar.css';
import NavBar from '../NavBar/navbar';

function EstadGeneral() {
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

    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <NavBar />
                </div>
            </div>
            <br />
            <div class="row" style={{ height: "fit-content", border: '2px solid #ccc' }}>
                <div class="col-lg-6 col-md-5 align-self-center">
                    <div class="container pt-4" >
                        <h1>Estadisticas Generales</h1>
                        <h1 id="fuente">Estado de las especies</h1>
                    </div>
                    <div class="container pt-3">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                                // Controlador de eventos para el cambio de estado del interruptor
                                onChange={handleSwitchChange}
                            ></input>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-7 justify-content-center align-items-center" style={{ border: '2px solid #ccc', minHeight:"400px", minWidth:"400px", display: 'flex', justifyContent: 'center !important', alignItems: 'center !important' }}>
                    <div className='outlet'>
                        {activeTab === "tab1" ? <ChartPolar /> : <LinesChart />}
                    </div>
                </div>
            </div>
            <div class="row" style={{ border: '2px solid #ccc' }}>
                <div class="">
                    HOLA
                </div>
            </div>
        </div>
    );
}

export default EstadGeneral;