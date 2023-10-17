import '../css/estiloCodOlviContra.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Codigo() {

    const [num1, setnum1] = useState('');
    const [num2, setnum2] = useState('');
    const [num3, setnum3] = useState('');
    const [num4, setnum4] = useState('');
    let resultado = ''

    const navigate = useNavigate()
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('numero1', num1);
            console.log('numero2', num2);
            console.log('numero3', num3);
            console.log('numero4', num4);
            resultado = num1 + num2 + num3 + num4;
            console.log('la concatenación es: ', resultado)
            alert(resultado)

            const response = await fetch("http://127.0.0.1:8000/backend/verificar_codigo/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    resultado: resultado
                })
            });
            const data = await response.json();
            console.log(data)
            if (data.error === "") {
                const jsonData = JSON.stringify(data.restaurante);
                sessionStorage.setItem('data', jsonData);
                navigate('/ResetContra');
            }
            else {
                setError("Sus credednciales son incorrectas")
            }

            // redirigir al usuario a la página principal
        } catch (err) {
            console.log("no ingreso")
            setError(err.message);
        }
    }


    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <h2>Olvidaste Contraseñaa</h2>
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
                                        onChange={(e) => setnum2(e.target.value)} />
                                </div>
                                <div>
                                    <input type="text" class="form-control"
                                        value={num3}
                                        onChange={(e) => setnum3(e.target.value)} />
                                </div>
                                <div>
                                    <input type="text" class="form-control"
                                        value={num4}
                                        onChange={(e) => setnum4(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <button className='btn_CodOlviContra' onClick={handleSubmit}>Siguiente</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Codigo;