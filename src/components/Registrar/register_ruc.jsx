import { Link } from "react-router-dom"
import '../css/estiloRegister.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Register_ruc() {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/backend/register/", {
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

      if (response.status === 201) {
        // Registro exitoso, almacenar el correo en sessionStorage
        sessionStorage.setItem('email', email);

        // Redirigir al usuario a la página de inicio
        navigate('/homepage');
      } else {
        const data = await response.json();
        console.log(data);
        setError("Sus credenciales son incorrectas");
      }
    } catch (err) {
      console.log("Error en la solicitud:", err);
      setError(err.message);
    }
  }

  return <div>

    <link rel="stylesheet" href="index.css" />
    <title>AAA</title>
    <section className="section_register">
      <div className="form-box-register_ruc">
        <div className="form-value">
          <form action="">
            <h2>Register</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline" />
              <input  required="" value={nombre}
        onChange={(e) => setNombre(e.target.value)}/>
              <label htmlFor="">Ruc</label>
            </div>
            <button className="btn_register" onClick={handleSubmit}>Validar Ruc</button>
            <div className="inputbox">
              <ion-icon name="mail-outline" />
              <input  required="" value={apellido}
        onChange={(e) => setApellido(e.target.value)}/>
              <label htmlFor="">Nombre de compañia</label>
            </div>
            <div className="inputbox">
              <ion-icon name="mail-outline" />
              <input type="email" required="" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
              <label htmlFor="">Direccion de la sede</label>
            </div>
            <div className="inputbox">  
              <ion-icon name="lock-closed-outline" />
              <input type="password" required="" value={password}
        onChange={(e) => setPassword(e.target.value)} />
              <label htmlFor="">Número de telefono</label>
            </div>
            <div className="inputbox">  
              <ion-icon name="lock-closed-outline" />
              <input type="password" required="" value={password}
        onChange={(e) => setPassword(e.target.value)} />
              <label htmlFor="">Ciudad</label>
            </div>
            <div className="inputbox">  
              <ion-icon name="lock-closed-outline" />
              <input type="password" required="" value={password}
        onChange={(e) => setPassword(e.target.value)} />
              <label htmlFor="">País</label>
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

export default Register_ruc