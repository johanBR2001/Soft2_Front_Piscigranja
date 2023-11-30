import React from 'react';
import NavBar from '../NavBar/navbar';
import Card from './card.jsx';
import '../css/soporte.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imagen from '../assets/img/pez-payaso.png';

function Soporte() {
  const [dataEstanques, setDataEstanques] = useState([]);
  const [error, setError] = useState(null);

  const obtenerEstanquesPorUsuario = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/backend/obtener_estanques/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 2,
        }),
      });

      if (response.status === 404) {
        setError('El correo no existe');
      } else if (response.ok) {
        const data = await response.json();
        console.log(data);
        setDataEstanques(data);
        if (data.error === '') {
          const jsonData = JSON.stringify(data.restaurante);
          sessionStorage.setItem('data', jsonData);
          setDataEstanques(jsonData);
          console.log(dataEstanques);
        } else {
          // Handle error
        }
      } else {
        // Handle error
      }
    } catch (err) {
      console.log('Error en la solicitud:', err);
      setError('Error en la solicitud al servidor');
    }
  };

  useEffect(() => {
    obtenerEstanquesPorUsuario(); // Llama a la función para obtener los estanques al cargar la página
  }, []);

  const enviarSoporte = () => {
    const categoria = document.getElementById('categoria').value;
    const urgencia = document.getElementById('urgencia').value;
    const descripcion = document.getElementById('descripcion_soporte').value;

    const data = {
      categoria,
      urgencia,
      descripcion,
    };

    fetch('http://127.0.0.1:8000/backend/enviar_correo_soporte/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert('El ticket se ha enviado correctamente');
        } else {
          alert('Ha ocurrido un error al enviar el ticket');
        }
      })
      .catch((error) => {
        console.log(error);
        alert('Ha ocurrido un error al enviar el ticket');
      });
  };

  return (
    <div className="container">
      <div className="row" id="navbar">
        <div className="col">
          <NavBar />
        </div>
      </div>
      <br />
      <div className="row align-items-center">
        <div className="col-2"><h1>Estanques</h1></div>
        <div className="col-10">
          <div id="linea"></div>
        </div>
      </div>
      <br />
      <div className="row" id="scroll">
        {dataEstanques.map((estanque, index) => (
          index <= 3 ? (
            <div className="col" key={index}>
              <Card
                titulo={`Estanque ${index + 1}`}
                imagenSrc={imagen}
                peces={`cantidad de peces ${estanque.cantPeces}`}
                capacidad={`Capacidad del estanque ${estanque.capacidad}`}
                salud={`Salud del estanque ${estanque.salud}`}
              />
            </div>
          ) : null
        ))}
      </div>
      <br />
      <div className="row" id="fila_inferior">
        <div className="col-6">
          <div className="row">
            <h1>Soporte</h1>
          </div>
          <div className="row">
            <div className="col">
              <label>Categoría</label><br />
              <input type="text" id="categoria" />
            </div>
            <div className="col">
              <label>Urgencia</label><br />
              <input type="text" id="urgencia" />
            </div>
          </div>
          <div className="row">
            <label>Descripción</label>
            <textarea name="" class="comentario" id="descripcion_soporte" cols="5" rows="5"></textarea>
            <a id="soporte" href="#" class="btn btn-primary" onClick={enviarSoporte}>Generar ticket</a>
          </div>
        </div>
        <div className="col-1">
          <div className="vl"></div>
        </div>
        <div className="col-5">
          <div className="row">
            <h1>Alertar Entidad Reguladora</h1>
          </div>
          <div className="row">
            <label>Estado de la piscigranja</label><br />
            <input type="text" class="comentario" id="estado" />
          </div>
          <div className="row">
            <label>Comentario</label><br />
            <textarea name="" class="comentario" id="comentario_entidad" cols="5" rows="5"></textarea>
            <a id="soporte" href="#" class="btn btn-primary" onClick={enviarSoporte}>Enviar estado</a>
          </div>
        </div>
      </div>
    </div>

    );
}

export default Soporte;