import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Home } from './Componentes/Home/Home';
import {NavBar} from 'c:/Users/luisd/Desktop/tiendaCool/frontend/src/Componentes/NavBar/NavBar.jsx';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>      
    </>
  )
}

export default App;
