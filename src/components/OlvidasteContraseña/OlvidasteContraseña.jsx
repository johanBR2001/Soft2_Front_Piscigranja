import '../css/background.css'

function OlvidasteContraseña(){
    return <div>
        
        <link rel="stylesheet" href="index.css" />
  <title>HASH TECHIE OFFICIAL</title>
  <section> 
    <div className='container'>
      <div className='row'>
      <div classNameName="col-md-8">
        <h2>Olvidaste Contraseña</h2> 
        <div className="form-box2 ">
      <div className="form-value">
        <form action="">
          
          <div className="inputbox">
            <ion-icon name="mail-outline" />
            <input type="email" required="" />
            <label htmlFor="">Email</label>
          </div>
          <div className="inputbox">
            <ion-icon name="lock-closed-outline" />
            <input type="password" required="" />
            <label htmlFor="">Password</label>
          </div>
          <div className="forget">
            <label htmlFor="">
              <input type="checkbox" />
              Remember Me <a href="#">Forget Password</a>
            </label>
          </div>
          <button>Log in</button>
          <div className="register">
            <p>
              Don't have a account <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
      </div>
    </div>
        </div>
    
    </div>
  </section>
    </div>
}

export default OlvidasteContraseña