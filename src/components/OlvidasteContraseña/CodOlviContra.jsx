import '../css/estiloCodOlviContra.css'

function CodOlviContra(){
    return <div>
        
  <link rel="stylesheet" href="index.css" />
  <section className='section_CodOlviContra'> 
    <div className='container'>
      <div className='row justify-content-center'>
        <h2>Olvidaste Contraseña</h2> 
        <div className="form-box2 ">
      <div className="form-value">
        <form className='passwordForm' action="">
          <div className='nav justify-content-center'>
            <b>Ingresa la clave de 4 digitos</b>
          </div>
          <div>Ingresa la clave enviada a tu correo</div>
          <div className='cubitos'>
          <div>
            <input type="text" class="form-control" />
          </div>
          <div>
            <input type="text" class="form-control" />
          </div>
          <div>
            <input type="text" class="form-control" />
          </div>
          <div>
            <input type="text" class="form-control" />
          </div>
          </div>
          <div>
          <button className='btn_CodOlviContra'>Log in</button>
          </div>
        </form>
      </div>
      </div>
      </div>
    </div>
  </section>
    </div>
}

export default CodOlviContra