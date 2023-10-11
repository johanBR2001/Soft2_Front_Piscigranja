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
    <Route path='/estadisticas/' element={<EstadGeneral/>}/>
  </Routes>
  </Router>
  )
}

export default App
