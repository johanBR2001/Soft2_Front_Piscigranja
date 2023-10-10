import '../css/estiloOlvidarContraseña.css'
function OlvidasteContraseña(){
    return <div>
        
  <link rel="stylesheet" href="index.css" />
  <section className='section_OlvidarContraseña'> 
    <div className='container'>
      <div className='row justify-content-center'>
        <h2>Olvidaste Contraseña</h2> 
        <div className="form-box2 ">
      <div className="form-value">
        <form className='passwordForm' action="">
          <div className='nav justify-content-center'>
            Ingresa tu correo para verificar tu cuenta
              Enviaremos una clave de 4 digitos a tu correo
            
          </div>
          <div className="input_contraseña">
            {/* <ion-icon name="mail-outline" /> */}
            <label htmlFor="">Email</label>
            <input type="email" required="" />
            
          </div>
          <div>
          <button className='btn_OlvidasteContraseña'>Log in</button>
          </div>
          
          
        </form>
      </div>
      </div>
      </div>
    </div>
  </section>
    </div>
}

export default OlvidasteContraseña