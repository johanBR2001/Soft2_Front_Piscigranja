import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client';
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/homepage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route path='/homepage/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



