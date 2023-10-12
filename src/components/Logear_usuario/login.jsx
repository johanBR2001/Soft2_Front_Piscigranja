import '../css/estiloLogin.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function MainPage() {
  const navigate = useNavigate()
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

export default MainPage