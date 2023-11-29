import { Link } from "react-router-dom"
import '../css/configperfil.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/navbar';
import "../css/Perfil.css";
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
    return <div className="perfil">
         <div className="div">
        <NavBar />
        <br />
        
        
        <div className="overlap">
          <img className="image" alt="Image" src="https://c.animaapp.com/svXnV8xI/img/image-69.png" />
          <div className="rectangle"> 
                   <div className="ellipse"> </div>
                 
                  <div className="ellipse-3"> </div>



          <div className="text-wrapper-2">Alertas</div>
          <div className="text-wrapper-3">Configuraciòn</div>
          <div className="text-wrapper-4">Usuario 1</div>
          <div className="text-wrapper-5">Administrador</div>
          

                {/* <div class="card col-lg-8 formulario">
                    <button onClick={datos}>
                        perfil
                    </button>
                    <button onClick={compañia_datos}>
                        compañia
                    </button> */}
        </div>
                    <div  className="rectangle-2">
                     </div>
                     <div className="text-wrapper-6">Datos Personales</div>
          <div className="text-wrapper-7">Nombre</div>
          <div className="text-wrapper-8">Usuario</div>
          <div className="text-wrapper-9">Numero de telefono</div>
          <div className="text-wrapper-10">Ciudad</div>
          <div className="text-wrapper-11">Pais</div>
          <div className="text-wrapper-12">Correo</div>
          <div className="text-wrapper-13">Apellido</div>
          <div className="text-wrapper-14">Compañia</div>
          <div className="text-wrapper-15">Accesos</div>


          <img className="line" alt="Line" src="https://c.animaapp.com/svXnV8xI/img/line-33.svg" />
          <input className="rectangle-3" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
          <input className="rectangle-4"  type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
          <input className="rectangle-5" type="text" value={telefono_personal} onChange={(e) => setTelefonopersonal(e.target.value)} />
          <input className="rectangle-6"  type="text" disabled value={sessionStorage.getItem("email")}/>
          <input className="rectangle-7" type="text" value={ciudad_personal} onChange={(e) => setCiudadpersonal(e.target.value)}/>
          <input className="rectangle-8" type="text" value={pais_personal}onChange={(e) => setPaispersonal(e.target.value)}/>
          <input className="rectangle-9" />
          <input className="rectangle-10" />
          <button onClick={handleSubmit} className="text-wrapper-16">Actualizar</button>
          <img className="img" alt="Line" src="https://c.animaapp.com/svXnV8xI/img/line-34.svg" />
          <img className="line-2" alt="Line" src="https://c.animaapp.com/svXnV8xI/img/line-35.svg" />
          <div className="text-wrapper-17">2</div>
                    {/* <div>
                        {activeTab === "tab1" ? <div>
                            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                            <input type="text" value={telefono_personal} onChange={(e) => setTelefonopersonal(e.target.value)}/> 
                            <input type="text" disabled value={sessionStorage.getItem("email")} />
                            <input type="text" value={ciudad_personal} onChange={(e) => setCiudadpersonal(e.target.value)}/>
                            <input type="text" value={pais_personal}onChange={(e) => setPaispersonal(e.target.value)} />
                            /* <button onClick={handleSubmit}>Actualizar</button>
                        </div> : <><input type="text" disabled value={compañia} />
                        <input type="text" disabled value={nruc} />
                        <input type="text" disabled value={sede} />
                        <input type="text" disabled value={telefono} />
                        <input type="text" disabled value={ciudad} />
                        <input type="text" disabled value={pais} /></>}
                    </div> */}
                </div>
            
        
    </div>
    </div>
    // </div>
}

export default Configperfil