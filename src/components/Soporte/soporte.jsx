import React from 'react';
import NavBar from '../NavBar/navbar';
import Card from './card.jsx';
import '../css/soporte.css'

import imagen from "../assets/img/pez-payaso.png"

function Soporte() {

    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <NavBar />
                </div>
            </div>
            <br />
            <div class="row align-items-center">
                <div class="col-2"><h1>Estanques</h1></div>
                <div class="col-10">
                    <div id="linea"></div>
                </div>
            </div>
            <br />
            <div class="row" id="scroll">
                <div class="col">
                    <Card
                        titulo="Titulo 1"
                        imagenSrc={imagen}
                        cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
                <div class="col">
                    <Card
                        titulo="Titulo 1"
                        imagenSrc={imagen}
                        cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
                <div class="col">
                    <Card
                        titulo="Titulo 1"
                        imagenSrc={imagen}
                        cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>

            </div>
            <br />
            <div class="row">
                <div class="col-6">
                    <h1>Soporte</h1>


                </div>
                <div class="col-1">
                <div class="vl"></div>
                </div>
                

                <div class="col-5">
                    <h1>Alertar Entidad Reguladora</h1>
                </div>


            </div>

        </div>

    );
}

export default Soporte;