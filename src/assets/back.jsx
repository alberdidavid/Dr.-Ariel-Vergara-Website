import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Back = () => {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="w-screen flex flex-row items-center justify-between p-4">
        <img src="https://i.postimg.cc/gcVzbqbv/back.png" alt="" 
        className="max-w-[80px]"/>
        <Button variant="primary" onClick={handleShow} className='bg-transparent shadow-sm p-2'>
          <img src="https://i.postimg.cc/BQsf222Q/menu-4.png" alt="" />
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose} className="p-3 canvas-bg">
        <Offcanvas.Header closeButton className='flex-row-reverse'>
        </Offcanvas.Header>
        <Offcanvas.Body className='flex flex-col items-center justify-center gap-3 mb-5 font-bold'>
          <Link to="/rehabilitacion" className='text-[#585858] text-2xl'> Rehabilitacion Oral</Link>
          <Link to="/estetica" className='text-[#585858] text-2xl'> Estetica Dental</Link>
          <Link to="/implantes" className='text-[#585858] text-2xl'> Implantes</Link>
          <Link to="/nosotros" className='text-[#585858] text-2xl'> ¿Quien Soy?</Link>
          <Link to="/contacto" className='text-[#585858] text-2xl'> Contactanos</Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Back;