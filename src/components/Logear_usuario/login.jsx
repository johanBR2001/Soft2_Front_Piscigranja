import '../css/estiloLogin.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/backend/login/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      if (response.status === 404) {
        // El correo no existe, muestra un mensaje de error
        setError("El correo no existe");
      } else if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.error === "") {
          const jsonData = JSON.stringify(data.restaurante);
          sessionStorage.setItem('data', jsonData);
          navigate('/homepage');
        } else {
          setError("Sus credenciales son incorrectas");
        }
      } else {
        // Manejar otros errores de la petición, si es necesario
        setError("Error en la solicitud al servidor");
      }
    } catch (err) {
      console.log("Error en la solicitud:", err);
      setError("Error en la solicitud al servidor");
    }
  };

  return <div>
    <link rel="stylesheet" href="index.css" />
    <title>HASH TECHIE OFFICIAL</title>
    <section className="section_login">
      <div className="form-box">
        <div className="form-value">
          <form action="">
            <h2>Login</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline" />
              <input type="email" required=""  value={email}
        onChange={(e) => setEmail(e.target.value)}/>
              <label htmlFor="">Email</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline" />
              <input type="password" required="" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
              <label htmlFor="">Password</label>
            </div>
            <div className="forget">
              <label htmlFor="">
                <input type="checkbox" />
                Remember Me <a href="#">Forget Password</a>
              </label>
            </div>
            <button className='btn_login' onClick={handleSubmit}>Log in</button>
            <div className="register">
              <p>
                Don't have a account <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
}

export default Login