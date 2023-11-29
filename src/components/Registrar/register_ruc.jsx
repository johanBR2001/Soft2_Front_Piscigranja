import { Link } from "react-router-dom"
import '../css/estiloRegister.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Register_ruc() {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nruc, setRuc] = useState('');
  const [compañia, setCompañia] = useState('');
  const [sede, setSede] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [pais, setPais] = useState('');
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/backend/validarruc/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ruc: nruc,
        })
      });

      if (response.status === 401) {
        // Registro exitoso, almacenar el correo en sessionStorage
        alert("el ruc no existe compadre")
        // Redirigir al usuario a la página de inicio
        
      } else {
        const data = await response.json();
        console.log(data.ruc);
        
        setCompañia(data.compañia)
        console.log(compañia)
        setSede(data.sede)
        setTelefono(data.telefono)
        setCiudad(data.ciudad)
        setPais(data.pais)
        setError("Sus credenciales son incorrectas");
        
      }
    } catch (err) {
      console.log("Error en la solicitud:", err);
      setError(err.message);
    }
  }
  const handleSubmit2 = async (e) => {
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
          password: password,
          telefono:telefono,
          ciudad:ciudad,
          pais:pais,
            empresa:compañia,
        nruc:nruc,
        direccion:sede,
        })
      });

      if (response.status === 201) {
        // Registro exitoso, almacenar el correo en sessionStorage
        
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
  useEffect(() => {
    // Access count value from session storage
    setEmail(sessionStorage.getItem("email"))
    setNombre(sessionStorage.getItem("nombre"));
    setApellido(sessionStorage.getItem("apellido"));
    setPassword(sessionStorage.getItem("password"))
  }, []); //No dependency to trigger in each page load

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
              <input  required="" value={nruc}
        onChange={(e) => setRuc(e.target.value)}/>
              <label htmlFor="">Ruc</label>
            </div>
            <button className="btn_register" onClick={handleSubmit}>Validar Ruc</button>
            <div className="inputbox">
              <ion-icon name="mail-outline" />
              <input  required="" value={compañia}
        onChange={(e) => setCompañia(e.target.value)}/>
              <label htmlFor="">Nombre de compañia</label>
            </div>
            <div className="inputbox">
              <ion-icon name="mail-outline" />
              <input required="" value={sede}
        onChange={(e) => setSede(e.target.value)}/>
              <label htmlFor="">Direccion de la sede</label>
            </div>
            <div className="inputbox">  
              <ion-icon name="lock-closed-outline" />
              <input  required="" value={telefono}
        onChange={(e) => setTelefono(e.target.value)} />
              <label htmlFor="">Número de telefono</label>
            </div>
            <div className="inputbox">  
              <ion-icon name="lock-closed-outline" />
              <input  required="" value={ciudad}
        onChange={(e) => setCiudad(e.target.value)} />
              <label htmlFor="">Ciudad</label>
            </div>
            <div className="inputbox">  
              <ion-icon name="lock-closed-outline" />
              <input required="" value={pais}
        onChange={(e) => setPais(e.target.value)} />
              <label htmlFor="">País</label>
            </div>
            <div className="forget">
              <label htmlFor="">
                <input type="checkbox" />
                Remember Me <a href="#">Forget Password</a>
              </label>
            </div>
            <button className="btn_register" onClick={handleSubmit2}>Register</button>
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