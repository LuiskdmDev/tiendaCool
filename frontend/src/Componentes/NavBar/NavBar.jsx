import logo from '../../assets/logoCool.png';
import './navbar.css';

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid"> 
          <section className="logo-container">
            <img className="logoNavBar" src={logo} alt="Logo" />
          </section>         
          
          <button className="navbar-toggler c botonEspacio" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse parteBotones" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle titNav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menú
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item miniTitNav" href="#">Primavera/Verano</a></li>
                  <li><a className="dropdown-item miniTitNav" href="#">Otoño/Invierno</a></li>
                  <li><a className="dropdown-item miniTitNav" href="#">Accesorios</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item miniTitNav" href="#">Avance de temporada</a></li>
                  <li><a className="dropdown-item miniTitNav" href="#">¡Descuentos Cool!</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle titNav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sesión
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item miniTitNav" href="#">Iniciar Sesión</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item miniTitNav" href="#">Registrarse</a></li>                 
                  
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link titNav" href="#">Quienes somos</a>
              </li>              
              <li className="nav-item">
                <a className="nav-link disabled miniTitNav" aria-disabled="true">Se Cool y vistete Cool!</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 inputNav" type="search" placeholder="Buscar" aria-label="Search" />
              <button className="btn btn-outline-success titNav" type="submit">Cool!</button>
            </form>
          </div>
        </div>
      </nav>
      <div className='colorAbajo'>
        
      </div>
    </>
  );
}
