import Prueba1 from '../../../../assets/Prueba1.jpg';
import './Carrusel.css';


export const Carrusel = () => {
    return (
      <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={Prueba1} className="d-block w-100 imagenSlide" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={Prueba1} className="d-block w-100 imagenSlide" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={Prueba1} className="d-block w-100 imagenSlide" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
      </>
    );
  };
  