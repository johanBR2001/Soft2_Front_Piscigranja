import React from 'react';

function Fechas(){
    const buttonsContainerStyle = {
        display: 'flex',
    };

    const buttonStyle = {
        marginRight: '20px',
        width: '100px',
        height: '100px',
    };

    const fourthButtonStyle = {
        position: 'relative', // Usar posición relativa en el cuarto botón
        top: '-40px', // Ajustar la posición vertical del cuarto botón
    };

    return (
        <div className="container nav justify-content-end">
            <div style={buttonsContainerStyle}>
                <button type="button" className="btn btn-outline-secondary" style={buttonStyle}>Lun</button>
                <button type="button" className="btn btn-outline-secondary" style={buttonStyle}>Mart</button>
                <button type="button" className="btn btn-outline-secondary" style={buttonStyle}>Mie</button>
                <button type="button" className="btn btn-outline-secondary" style={{...buttonStyle, ...fourthButtonStyle}}>Jue</button>
                <button type="button" className="btn btn-outline-secondary" style={buttonStyle}>Vie</button>
            </div>
        </div>
    );
}

export default Fechas;
