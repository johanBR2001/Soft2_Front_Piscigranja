import '../css/resetContra.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetContra() {
  const navigate = useNavigate()
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newPassword !== confirmPassword) {
        setError("Las contraseñas no coinciden");
        return;
      }

      const response = await fetch("http://127.0.0.1:8000/backend/cambiar_contrasena/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: 1,
          password: newPassword
        })
      });
      const data = await response.json();
      console.log(data)
      if (data.error === "") {
        const jsonData = JSON.stringify(data.restaurante);
        sessionStorage.setItem('data', jsonData);
        navigate('/homepage');
      } else {
        setError("Tus credenciales son incorrectas");
      }
    } catch (err) {
      console.log("no ingreso")
      setError(err.message);
    }
  };
    return <div>
        
  <link rel="stylesheet" href="index.css" />
  <section className='section_resetContra'> 
    <div className='container'>
      <div className='row justify-content-center'>
        <h2>Olvidaste Contraseña</h2> 
        <div className="form-box2-reset">
      <div className="form-value">
        <form className='passwordForm' action="">
          <div className='contenido_resetContra'>
           <div id='texto_ResetContra'><b>Resetear Contraseña</b></div>
           <div id='texto_ResetContra'>
           <p>Establece tu nueva contraseña para que puedas
            iniciar sesion y gozar de todos nuestros beneficios
           </p></div>
           <div id='input_resetContra'>
            <label htmlFor=""><b>Nueva contraseña</b></label>
            <input value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)} required="" />
          </div>
          <div id='input_resetContra'>
            <label htmlFor=""><b>Ingresa nueva contraseña</b></label>
            <input  value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} required="" />
            
          </div>
          <div className='btn_position'>
          <button className='btn_ResetContra' onClick={handleSubmit}>Actualizar</button>
          </div>
          {error && <div>{error}</div>}
          </div>
          
          
          
          
        </form>
      </div>
      </div>
      </div>
    </div>
  </section>
    </div>
}

export default ResetContra

