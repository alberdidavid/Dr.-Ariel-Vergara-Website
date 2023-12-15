import Home from "./templates/home"
import Nosotros from "./templates/nosotros"
import Rehabilitacion from "./templates/rehabilitacion"
import Implantes from "./templates/implantes"
import Estetica from "./templates/estetica"
import Contacto from "./templates/contacto"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/nosotros" element={<Nosotros/>}></Route>
          <Route path="/rehabilitacion" element={<Rehabilitacion/>}></Route>
          <Route path="/estetica" element={<Estetica/>}></Route>
          <Route path="/implantes" element={<Implantes/>}></Route>
          <Route path="/contacto"element={<Contacto/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
