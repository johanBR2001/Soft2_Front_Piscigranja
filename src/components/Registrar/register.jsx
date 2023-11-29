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

    
        sessionStorage.setItem('nombre', nombre);
        sessionStorage.setItem('apellido', apellido);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        // Redirigir al usuario a la página de inicio
        navigate('/register_ruc');
     
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