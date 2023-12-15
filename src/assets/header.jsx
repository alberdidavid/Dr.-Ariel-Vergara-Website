import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="w-screen flex flex-row items-center justify-between p-4 lg:justify-center lg:gap-16">
        <img src="https://i.postimg.cc/m2GBVvW4/Logo-minimalista.png" alt="" 
        className="max-w-[80px]"/>
        <div className="hidden flex-row font-sans text-md lg:flex lg:gap-7">
          <Link to="/rehabilitacion" className='text-[#585858]  duration-300'> Rehabilitacion</Link>
          <Link to="/estetica" className='text-[#585858]  duration-300'> Estetica</Link>
          <Link to="/implantes" className='text-[#585858] duration-300'> Implantes</Link>
          <Link to="/nosotros" className='text-[#585858]  duration-300'> ¿Quien Soy?</Link>
          <Link to="/contacto" className='text-[#585858]  duration-300'> Contactanos</Link>
        </div>
        <Button variant="primary" onClick={handleShow} className='bg-transparent shadow-sm p-2 lg:hidden'>
          <img src="https://i.postimg.cc/BQsf222Q/menu-4.png" alt="" className='lg:hidden' />
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose} className="p-3 canvas-bg">
        <Offcanvas.Header closeButton className='flex-row-reverse'>
        </Offcanvas.Header>
        <Offcanvas.Body className='flex flex-col items-center justify-center gap-3 mb-5 font-bold'>
          <Link to="/rehabilitacion" className='text-[#585858] text-2xl duration-300'> Rehabilitacion Oral</Link>
          <Link to="/estetica" className='text-[#585858] text-2xl duration-300'> Estetica Dental</Link>
          <Link to="/implantes" className='text-[#585858] text-2xl duration-300'> Implantes</Link>
          <Link to="/nosotros" className='text-[#585858] text-2xl duration-300'> ¿Quien Soy?</Link>
          <Link to="/contacto" className='text-[#585858] text-2xl duration-300'> Contactanos</Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;