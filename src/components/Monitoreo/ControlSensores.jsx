import React, { useState } from 'react';
import NavBar from '../NavBar/navbar';
import { AutoAdjust } from "../../components/AutoAdjust/AutoAdjust";
import imagen from '../assets/img/camara.png'
import imagen2 from '../assets/img/image 48.png'
import imagen3 from '../assets/img/image 49.png'
import imagen4 from '../assets/img/image 11.png'
import imagen5 from '../assets/img/image 12.png'
import imagen6 from '../assets/img/image 33.png'
import '../css/estiloMonitoreo.css';
import Botones from './botones';

function ControlSensor() {
    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <NavBar />
                </div>
            </div>
            <br />
            <div className="desktop">
                <div className="div">
                    <div className="overlap">
                    <div className="text-wrapper">Control</div>
                    <div className="rectangle" />
                    <div class='boton'>
                    <Botones/>
                    </div>
                    
                    <img src={imagen4} alt="Descripción de la imagen" class='B1' />
                    <img src={imagen5} alt="Descripción de la imagen" class ='B2' />
                    <img src={imagen6} alt="Descripción de la imagen"  class='B3'/>
                    </div>
                    <div className="overlap-group">
                    <div className="overlap-group-2">
                        <div className="rectangle-5" />
                        <AutoAdjust className="auto-adjust-instance" />
                        <AutoAdjust  className="auto-adjust-2"
                        divClassName="design-component-instance-node"
                        text="Captura de datos"
                        />
                     
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                                // Controlador de eventos para el cambio de estado del interruptor
                               
                            ></input>
                        </div>
                     
            
                        <div class="dropdown">
                            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            5 por zona / 30 min
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        
                        <div className="text-wrapper-2">2 h</div>
                        <div className="text-wrapper-3">3 h</div>
                        <div className="text-wrapper-4">4 h</div>
                        <div className="text-wrapper-5">5 h</div>
                        <img src={imagen} alt="Descripción de la imagen" style={{ maxWidth: '600px' ,position: 'absolute',left: '-100px' }} />
                    
                    </div>
                    <div className="text-wrapper-6">6 h</div>
                    <div className="text-wrapper-7">7 h</div>
                    <img src={imagen2} alt="Descripción de la imagen" style={{ maxWidth: '300px' , position: 'absolute', right: '10%'}} />
                    
                    </div>
                    <div className="text-wrapper-8">1 h</div>
                </div>
                </div>
        </div>
            
    );
}

export default ControlSensor;