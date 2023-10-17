import '../css/estiloOlvidarContraseña.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Correo({ setSteps }) {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        //e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/backend/enviar_codigo/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            });
            const data = await response.json();
            console.log(data)
            if (data.error === "") {
                const jsonData = JSON.stringify(data.restaurante);
                sessionStorage.setItem('data', jsonData);
                navigate('/2023-0-pw-entregable-2/bienvenida');
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

    const handleStep = () =>{
        setSteps(2)
        handleSubmit()
    }
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <h2>Olvidaste Contraseñaa</h2>
                <div className="form-box2 ">
                    <div className="form-value">
                        <form className='passwordForm' action="">
                            <div className='nav justify-content-center'>
                                Ingresa tu correo para verificar tu cuenta
                                Enviaremos una clave de 4 digitos a tu correo

                            </div>
                            <div className="input_contraseña">
                                {/* <ion-icon name="mail-outline" /> */}
                                <label htmlFor=""><b>Correo</b></label>
                                <input type="email" required="" onChange={(e) => setEmail(e.target.value)} />

                            </div>
                            <div>
                                <button onClick={handleStep} className='btn_OlvidasteContraseña'>Siguiente</button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Correo;