import './home.css';
import imagen1 from '../../assets/niña1.png';
import {Carrusel} from './ComponentesHome/Carrusel/Carrusel.jsx';

export const Home = () => {
    return (
      <>
      <div className='container'>
        <section className='row'>
          <header className='col-md-12'>
            <h2 className='tituloImagenUno'> ¡Ve la próxima vestimenta de tu <span className='coolKids'>Coolkids</span>! </h2>
          </header>
        </section>
        <section className='row'>
          <div className='col-md-4'>
            <img src={imagen1} alt='CoolKids' className='imagen1' />
          </div>
          <div className='col-md-8'>
            <div className='row'>
              <h2>Prueba</h2>
            </div>
            <div className='row'>
              <h2>Prueba</h2>
            </div>
          </div>
        </section>
      </div>
      <Carrusel />
      </>

    );
  };
  