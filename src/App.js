import React from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Login from './components/Logear_usuario/login'
import Register from './components/Registrar/register'
import Pastel from './components/pruebapaste/integracionpastel'
import OlvidasteContraseña from './components/OlvidasteContraseña/OlvidasteContraseña'
import HomePage from './components/HomePage/homepage';
import CodOlviContra from './components/OlvidasteContraseña/CodOlviContra';
import EstadGeneral from './components/EstadisticasGenerales/EstadGeneral';
import ResetContra from './components/OlvidasteContraseña/ResetContra';
import Soporte from './components/Soporte/soporte';
import ControlSensor from './components/Monitoreo/ControlSensores';
import LinkedCharts from './components/Charts/GraficosDobles';
<<<<<<< HEAD
import Configperfil, { Perfil } from './components/Perfil/ConfigPerfil';
=======
// import Probando from './components/probando/probando';
import Estadisticas from './components/probando/probando';


import Register_ruc from './components/Registrar/register_ruc';
import Configperfil from './components/Perfil/ConfigPerfil';
>>>>>>> 5992fd7da2f7f9dbfb4b5722ff42e6deb73d110d
const App = () => {
  return(
    <Router>
    <Routes>
    <Route path='/login/' element={<Login/>}/>
    <Route path='/register/' element={<Register/>}/>
    <Route path='/pastel' element={<Pastel/>}/>
    <Route path='/olvidasteContraseña/' element={<OlvidasteContraseña/>}/>
    <Route path='/CodOlviContra' element={<CodOlviContra/>}/>
    <Route path='/ResetContra' element={<ResetContra/>}/>
    <Route path='/homepage/' element={<HomePage/>}/>
    {/* <Route path='/estadisticas/' element={<EstadGeneral/>}/> */}
    <Route path='/soporte/' element={<Soporte/>}/>
    <Route path='/Monitoreo/' element={<ControlSensor/>}/>
    <Route path='/grafico/' element={<LinkedCharts/>}/>
<<<<<<< HEAD
    <Route path='/Perfil/' element={<Configperfil/>}/>

=======
    {/* <Route path='/probandoGrafico/' element={<Probando/>}/> */}
    <Route path='/configperfil/' element={<Configperfil/>}/>
    <Route path='/estadisticas/' element={<Estadisticas/>}/>
>>>>>>> 5992fd7da2f7f9dbfb4b5722ff42e6deb73d110d
  </Routes>
  </Router>
  )
}

export default App
