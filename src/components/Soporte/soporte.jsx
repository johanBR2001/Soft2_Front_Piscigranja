import React from 'react';
import NavBar from '../NavBar/navbar';
import Card from './card.jsx';
import '../css/soporte.css'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imagen from "../assets/img/pez-payaso.png"

function Soporte() {
    const [dataEstanques, setDataEstanques] = useState([]);
    const [error, setError] = useState(null);
    const obtenerEstanquesPorUsuario = async () => {
        try {
          const response = await fetch("http://127.0.0.1:8000/backend/obtener_estanques/", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: 2,
            })
          });
      
          if (response.status === 404) {
            setError("El correo no existe");
          } else if (response.ok) {
            const data = await response.json();
            console.log(data);
            setDataEstanques(data)
            if (data.error === "") {
              const jsonData = JSON.stringify(data.restaurante);
              sessionStorage.setItem('data', jsonData);
              setDataEstanques(jsonData)
              console.log(dataEstanques)
            } else {
              
            }
          } else {
            
          }
        } catch (err) {
          console.log("Error en la solicitud:", err);
          setError("Error en la solicitud al servidor");
        }
      };
      useEffect(() => {
        obtenerEstanquesPorUsuario(); // Llama a la función para obtener los estanques al cargar la página
      }, []);      
    return (
        <div class="container">
            <div class="row" id="navbar">
                <div class="col">
                    <NavBar />
                </div>
            </div>
            <br />
            <div class="row align-items-center">
                <div class="col-2"><h1>Estanques</h1></div>
                <div class="col-10">
                    <div id="linea"></div>
                </div>
            </div>
            <br />
            <div className="row" id="scroll">
            {dataEstanques.map((estanque, index) => (
  index <= 3 ? (
    <div className="col" key={index}>
      <Card
        titulo={`Estanque ${index+1}`} 
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
            <div class="row" id="fila_inferior">
                <div class="col-6">
                    <div class="row">
                        <h1>Soporte</h1>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label>Categoría</label><br />
                            <input type="text" id="categoria" />
                        </div>
                        <div class="col">
                            <label>Urgencia</label><br />
                            <input type="text" id="urgencia" />
                        </div>
                    </div>
                    <div class="row">
                        <label>Descripción</label>
                        <textarea name="" class="comentario" id="descripcion_soporte" cols="5" rows="5"></textarea>
                        <a id="soporte" href="#" class="btn btn-primary">Generar ticket</a>
                    </div>



                </div>
                <div class="col-1">
                    <div class="vl"></div>
                </div>


                <div class="col-5">
                    <div class="row">
                        <h1>Alertar Entidad Reguladora</h1>
                    </div>
                    <div class="row">
                        <label>Estado de la piscigranja</label><br />
                        <input type="text" class="comentario" id="estado" />
                    </div>
                    <div class="row">
                        <label>Comentario</label><br />
                        <textarea name="" class="comentario" id="comentario_entidad" cols="5" rows="5"></textarea>
                        <a id="soporte" href="#" class="btn btn-primary">Enviar estado</a>
                       
                    </div>

                </div>


            </div>

        </div>

    );
}

export default Soporte;