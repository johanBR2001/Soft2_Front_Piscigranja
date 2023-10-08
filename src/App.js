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

const App = () => {
  return(
    <Router>
    <Routes>
    <Route path='/login/' element={<Login/>}/>
    <Route path='/register/' element={<Register/>}/>
    <Route path='/pastel' element={<Pastel/>}/>
    <Route path='/olvidasteContraseña/' element={<OlvidasteContraseña/>}/>
  </Routes>
  </Router>
  )
}

export default App
