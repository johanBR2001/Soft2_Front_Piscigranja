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
// import { Perfil } from './components/Perfil/ConfigCompañia';
import Estadisticas from './components/probando/probando';
import Registerruc from './components/Registrar/register_ruc';
import Perfil from './components/Perfil/ConfigCompañia';
import Configperfil from './components/Perfil/ConfigPerfil';

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
    <Route path='/soporte/' element={<Soporte/>}/>
    <Route path='/Monitoreo/' element={<ControlSensor/>}/>
    <Route path='/grafico/' element={<LinkedCharts/>}/>
    <Route path='/Perfil/' element={<Configperfil/>}/>
    <Route path='/estadisticas/' element={<Estadisticas/>}/>
    <Route path='/register_ruc/' element={<Registerruc/>}/>
    <Route path='/Perfil/' element={<Perfil/>}/>
  </Routes>
  </Router>
  )
}

export default App
