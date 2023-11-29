import { Link } from "react-router-dom"
<<<<<<< HEAD
import '../css/ConfigPerfil.css'
=======
import '../css/configperfil.css'
>>>>>>> 5992fd7da2f7f9dbfb4b5722ff42e6deb73d110d
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/navbar';
function Configperfil() {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("tab1");
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
    const [pais_personal, setPaispersonal] = useState('');
    const [telefono_personal, setTelefonopersonal] = useState('');
    const [ciudad_personal, setCiudadpersonal] = useState('');
    const [pantalla, setPantalla] = useState('');
    const [error, setError] = useState(null);
    useEffect(() => {
        // Función para hacer la solicitud a la API usando fetch

        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/backend/obtener_usuario/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({

                        email: sessionStorage.getItem("email"),

                    })
                }); // Reemplaza con la URL de tu API
                if (!response.ok) {
                    throw new Error('La solicitud no fue exitosa');
                }
                const responseData = await response.json();
                console.log(responseData);
                setNombre(responseData.nombre)
                setApellido(responseData.apellido)
                setTelefonopersonal(responseData.telefono_personal)

                setCiudadpersonal(responseData.ciudad_personal)
                setPaispersonal(responseData.pais_personal)
                setCompañia(responseData.compañia)
                setRuc(responseData.nruc)
                setSede(responseData.sede)
                setTelefono(responseData.telefono_empresa)
                setCiudad(responseData.ciudad)
                setPais(responseData.pais)
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        // Llamar a la función para hacer la solicitud cuando el componente se monta
        fetchData();
    }, []); // El segundo argumento [] indica que este efecto se ejecuta solo una vez (equivalente a componentDidMount)
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch("http://127.0.0.1:8000/backend/configurar_perfil/", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: sessionStorage.getItem("email"),
              nombre :nombre,
              apellido:apellido,
              telefono:telefono_personal,
              ciudad:ciudad_personal,
              pais:pais_personal
            })
          });
    
          if (response.error=="") {
            // Registro exitoso, almacenar el correo en sessionStorage
            
            // Redirigir al usuario a la página de inicio
            
          } else {
            const data = await response.json();
            console.log(data);
            window.location.reload(false);
            setError("Sus credenciales son incorrectas");
          }
         
        } catch (err) {
          console.log("Error en la solicitud:", err);
          setError("Error en la solicitud al servidor");
        }
      };
    const datos = () => {
        // actualizar el estado a tab1
        setActiveTab("tab1");
    };
    const compañia_datos = () => {
        // actualizar el estado a tab1
        setActiveTab("tab2");
    };
    return <div>
        <NavBar />
        <br />
        <div class="container">
            <div class="row">
                <div class="card col-lg-4 usuario">
                    <div className="user-picture"></div>

                </div>

                <div class="card col-lg-8 formulario">
                    <button onClick={datos}>
                        perfil
                    </button>
                    <button onClick={compañia_datos}>
                        compañia
                    </button>

                    <div>
                        {activeTab === "tab1" ? <div>
                            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                            <input type="text" value={telefono_personal} onChange={(e) => setTelefonopersonal(e.target.value)}/>
                            <input type="text" disabled value={sessionStorage.getItem("email")} />
                            <input type="text" value={ciudad_personal} onChange={(e) => setCiudadpersonal(e.target.value)}/>
                            <input type="text" value={pais_personal}onChange={(e) => setPaispersonal(e.target.value)} />
                            <button onClick={handleSubmit}>Actualizar</button>
                        </div> : <><input type="text" disabled value={compañia} />
                        <input type="text" disabled value={nruc} />
                        <input type="text" disabled value={sede} />
                        <input type="text" disabled value={telefono} />
                        <input type="text" disabled value={ciudad} />
                        <input type="text" disabled value={pais} /></>}
                    </div>
                </div>
            </div>
        </div>
    </div>


}

export default Configperfil