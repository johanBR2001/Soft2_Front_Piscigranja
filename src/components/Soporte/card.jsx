import React from 'react';

function Card({titulo, imagenSrc, cardText}) {
    return (
        <div class="card">
            <div class="row" id="titulo">
                <h1>{titulo}</h1>
            </div>
            <div class="row">
                <div class="col  d-flex align-items-center justify-content-center">
                    <img id="logo" src={imagenSrc} alt="logo estanque" />
                </div>
                <div class="col">
                    <div class="row" id="content">
                        <p class="card-text">{cardText}</p>
                        <div className='d-flex justify-content-center'>
                        <a href="#" class="btn btn-primary">Solicitar limpieza</a>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Card;