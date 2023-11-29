import React from 'react';

function Card({titulo, imagenSrc, peces,capacidad,salud}) {
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
                        <p class="card-text">{peces}</p>
                        <p class="card-text">{capacidad}</p>
                        <p class="card-text">{salud}</p>
                        <div className='d-flex justify-content-center'>
                        {salud=="Salud del estanque Malo"? (
      <a href="#" className="btn btn-primary">Solicitar limpieza</a>
    ) : (
        <button href="#" className="btn btn-primary" disabled>Solicitar limpieza</button>
    )}
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Card;