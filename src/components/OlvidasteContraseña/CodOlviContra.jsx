import '../css/estiloCodOlviContra.css'
import React, { useState } from 'react';
function CodOlviContra() {

    const [num1, setnum1] = useState('');
    const [num2,setnum2] = useState('');
    const [num3,setnum3] = useState('');
    const [num4,setnum4]= useState('');
    const handleButtonClick = () => {
        console.log('numero1', num1);
        console.log('numero2', num2);
        console.log('numero3', num3);
        console.log('numero4', num4);
        const resultado=num1+num2+num3+num4;
        console.log('la concatenación es: ',resultado)
        alert(resultado)


      };
    return <div>

        <link rel="stylesheet" href="index.css" />
        <section className='section_CodOlviContra'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <h2>Olvidaste Contraseña</h2>
                    <div className="form-box2 ">
                        <div className="form-value">
                            <form className='passwordForm' action="">
                                <div className='nav justify-content-center'>
                                    <b>Ingresa la clave de 4 digitos</b>
                                </div>
                                <div>Ingresa la clave enviada a tu correo</div>
                                <div className='cubitos'>
                                    <div>
                                        <input type="text" class="form-control"
                                        value={num1}
                                        onChange={(e) => setnum1(e.target.value)} />
                                    </div>
                                    <div>
                                        <input type="text" class="form-control" 
                                        value={num2}
                                        onChange={(e) => setnum2(e.target.value)}/>
                                    </div>
                                    <div>
                                        <input type="text" class="form-control" 
                                        value={num3}
                                        onChange={(e) => setnum3(e.target.value)}/>
                                    </div>
                                    <div>
                                        <input type="text" class="form-control" 
                                        value={num4}
                                        onChange={(e) => setnum4(e.target.value)}/>
                                    </div>
                                </div>
                                <div>
                                    <button className='btn_CodOlviContra' onClick={handleButtonClick}>Siguiente</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default CodOlviContra