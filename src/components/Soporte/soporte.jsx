import React from 'react';
import NavBar from '../NavBar/navbar';
import Card from './card.jsx';
import '../css/soporte.css'

import imagen from "../assets/img/pez-payaso.png"

function Soporte() {

    return (
        <div class="container">
            <div class="row" id="navbar">
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
            <div class="row" id="fila_inferior">
                <div class="col-6">
                    <div class="row">
                        <h1>Soporte</h1>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label>Categoría</label><br />
                            <input type="text" id="categoria" />
                        </div>
                        <div class="col">
                            <label>Urgencia</label><br />
                            <input type="text" id="urgencia" />
                        </div>
                    </div>
                    <div class="row">
                        <label>Descripción</label>
                        <textarea name="" class="comentario" id="descripcion_soporte" cols="5" rows="5"></textarea>
                        <a id="soporte" href="#" class="btn btn-primary">Generar ticket</a>
                    </div>



                </div>
                <div class="col-1">
                    <div class="vl"></div>
                </div>


                <div class="col-5">
                    <div class="row">
                        <h1>Alertar Entidad Reguladora</h1>
                    </div>
                    <div class="row">
                        <label>Estado de la piscigranja</label><br />
                        <input type="text" class="comentario" id="estado" />
                    </div>
                    <div class="row">
                        <label>Comentario</label><br />
                        <textarea name="" class="comentario" id="comentario_entidad" cols="5" rows="5"></textarea>
                        <a id="soporte" href="#" class="btn btn-primary">Enviar estado</a>
                       
                    </div>

                </div>


            </div>

        </div>

    );
}

export default Soporte;