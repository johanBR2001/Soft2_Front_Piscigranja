import { Link } from "react-router-dom"
function MainPage(){
    return <div>
        
        <link rel="stylesheet" href="index.css" />
  <title>AAA</title>
  <section>
    <div className="form-box">
      <div className="form-value">
        <form action="">
          <h2>Register</h2>
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
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
    </div>
}

export default MainPage