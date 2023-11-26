import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
        {/* Agregamos padding a los lados del contenedor */}
        <a className="navbar-brand" href="#">IA CARE</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/homepage">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/estadisticas">Estadisticas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Control</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/soporte">Soporte</a>
            </li>
          </ul>
        </div>
        <div className="container ml-auto nav justify-content-end">
          <form className="form-inline">
            <div className="row">
              <div className="col">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              </div>
              <div className="col">
                <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
