import { Link } from "react-router-dom"
import '../css/configperfil.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/navbar';
function configperfil(){


    return <div>
       <NavBar />
       <br />
        <div class="container"> 
        <div class="row">
            <div class="card col-lg-4 usuario">
                prueba
            </div>
            <div class="card col-lg-8 formulario">
                prueba2
            </div>
        </div>
    </div>
    </div>
    

}

export default configperfil