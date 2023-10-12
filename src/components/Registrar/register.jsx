import { Link } from "react-router-dom"
import '../css/estiloRegister.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Register() {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://restaurantes20194359.azurewebsites.net/backend/loginrestaurante", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: nombre,
          apellido: apellido,
          email: email,
          password: password
        })
      });
      const data = await response.json();
      console.log(data)
      if(data.error===""){
        const jsonData = JSON.stringify(data.restaurante);
        sessionStorage.setItem('data', jsonData);
        navigate('/2023-0-pw-entregable-2/bienvenida');
      }
      else{
        setError("Sus credednciales son incorrectas")
      }
     
      // redirigir al usuario a la página principal
    } catch (err) {
      console.log("no ingreso")
      setError(err.message);
    }
  }

  return <div>

    <link rel="stylesheet" href="index.css" />
    <title>AAA</title>
    <section className="section_register">
      <div className="form-box-register">
        <div className="form-value">
          <form action="">
            <h2>Register</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline" />
              <input  required="" value={nombre}
        onChange={(e) => setNombre(e.target.value)}/>
              <label htmlFor="">Nombre</label>
            </div>
            <div className="inputbox">
              <ion-icon name="mail-outline" />
              <input  required="" value={apellido}
        onChange={(e) => setApellido(e.target.value)}/>
              <label htmlFor="">Apellido</label>
            </div>
            <div className="inputbox">
              <ion-icon name="mail-outline" />
              <input type="email" required="" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
              <label htmlFor="">Email</label>
            </div>
            <div className="inputbox">  
              <ion-icon name="lock-closed-outline" />
              <input type="password" required="" value={password}
        onChange={(e) => setPassword(e.target.value)} />
              <label htmlFor="">Password</label>
            </div>
            <div className="forget">
              <label htmlFor="">
                <input type="checkbox" />
                Remember Me <a href="#">Forget Password</a>
              </label>
            </div>
            <button className="btn_register" onClick={handleSubmit}>Register</button>
            <div className="register">
              <p>
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
}

export default Register